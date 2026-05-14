import type { IncomingMessage, ServerResponse } from "http";
import { consumeLastCapturedError } from "../src/lib/error-capture";
import { renderErrorPage } from "../src/lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): string {
  return renderErrorPage();
}

export default async function handler(
  req: IncomingMessage & { url: string; method: string; headers: Record<string, any> },
  res: ServerResponse,
): Promise<void> {
  try {
    const serverEntry = await getServerEntry();
    
    // Convert Node.js request to Fetch API Request
    const url = new URL(req.url, `http://${req.headers.host}`);
    const headers = new Headers();
    Object.entries(req.headers).forEach(([key, value]) => {
      if (typeof value === "string") {
        headers.set(key, value);
      } else if (Array.isArray(value)) {
        headers.set(key, value.join(", "));
      }
    });

    let body: BodyInit | undefined;
    if (req.method !== "GET" && req.method !== "HEAD") {
      const chunks: Buffer[] = [];
      for await (const chunk of req as any) {
        chunks.push(chunk);
      }
      body = Buffer.concat(chunks);
    }

    const request = new Request(url, {
      method: req.method,
      headers,
      body,
    });

    const response = await serverEntry.fetch(request, {}, {});

    // Convert Fetch API Response to Node.js response
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const buffer = await response.arrayBuffer();
    res.end(Buffer.from(buffer));
  } catch (e) {
    console.error("Server error:", e);
    const lastCapturedError = consumeLastCapturedError();
    if (lastCapturedError) {
      console.error("Last captured error:", lastCapturedError);
    }
    res.statusCode = 500;
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.end(brandedErrorResponse());
  }
}


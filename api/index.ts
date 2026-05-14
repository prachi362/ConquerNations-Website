import type { IncomingMessage, ServerResponse } from "http";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

export default function handler(
  req: IncomingMessage & { url: string },
  res: ServerResponse,
): void {
  try {
    const url = new URL(req.url || "/", "http://localhost");
    const pathname = url.pathname;

    // Serve static assets
    if (pathname.startsWith("/assets/") || pathname === "/robots.txt") {
      const filePath = join(process.cwd(), "dist/client", pathname);
      if (existsSync(filePath)) {
        const content = readFileSync(filePath);
        res.setHeader("Content-Type", getContentType(pathname));
        res.end(content);
        return;
      }
    }

    // Serve index.html for all other routes
    const indexPath = join(process.cwd(), "dist/client", "index.html");
    if (existsSync(indexPath)) {
      const content = readFileSync(indexPath, "utf-8");
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(content);
      return;
    }

    res.statusCode = 404;
    res.end("Not found");
  } catch (error) {
    console.error("Error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal server error");
  }
}

function getContentType(pathname: string): string {
  if (pathname.endsWith(".js")) return "application/javascript";
  if (pathname.endsWith(".css")) return "text/css";
  if (pathname.endsWith(".png")) return "image/png";
  if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) return "image/jpeg";
  if (pathname.endsWith(".gif")) return "image/gif";
  if (pathname.endsWith(".svg")) return "image/svg+xml";
  if (pathname.endsWith(".json")) return "application/json";
  if (pathname.endsWith(".txt")) return "text/plain";
  return "application/octet-stream";
}


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

    // Try to serve static assets from dist/client
    const staticPath = join("/var/task/dist/client", pathname);
    if (existsSync(staticPath)) {
      try {
        const content = readFileSync(staticPath);
        res.setHeader("Content-Type", getContentType(pathname));
        res.setHeader("Cache-Control", "public, max-age=31536000");
        res.end(content);
        return;
      } catch (e) {
        // Fall through if can't read file
      }
    }

    // Check for specific asset patterns
    if (pathname.startsWith("/assets/") || pathname === "/robots.txt") {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }

    // Serve index.html for all other routes (SPA fallback)
    const indexPath = join("/var/task/dist/client", "index.html");
    if (existsSync(indexPath)) {
      const content = readFileSync(indexPath, "utf-8");
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.end(content);
      return;
    }

    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Application not properly deployed");
  } catch (error) {
    console.error("Handler error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal server error");
  }
}

function getContentType(pathname: string): string {
  if (pathname.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (pathname.endsWith(".css")) return "text/css; charset=utf-8";
  if (pathname.endsWith(".png")) return "image/png";
  if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) return "image/jpeg";
  if (pathname.endsWith(".gif")) return "image/gif";
  if (pathname.endsWith(".svg")) return "image/svg+xml";
  if (pathname.endsWith(".json")) return "application/json";
  if (pathname.endsWith(".txt")) return "text/plain";
  if (pathname.endsWith(".woff2")) return "font/woff2";
  if (pathname.endsWith(".woff")) return "font/woff";
  return "application/octet-stream";
}


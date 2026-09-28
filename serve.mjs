import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";

const root = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(root, "dist", "client");

const MIME = {
  ".css": "text/css",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".json": "application/json",
  ".html": "text/html; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
};

const { default: handler } = await import("./dist/server/server.js");
const PORT = Number(process.env.PORT) || 3000;

function nodeToWebRequest(req) {
  const host = req.headers.host ?? "localhost";
  const url = new URL(req.url ?? "/", `http://${host}`);
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value == null) continue;
    if (Array.isArray(value)) value.forEach((v) => headers.append(key, v));
    else headers.set(key, value);
  }
  const hasBody = req.method !== "GET" && req.method !== "HEAD";
  return new Request(url, {
    method: req.method,
    headers,
    body: hasBody ? Readable.toWeb(req) : null,
    duplex: hasBody ? "half" : undefined,
  });
}

async function sendWebResponse(res, webRes) {
  const headers = {};
  webRes.headers.forEach((value, key) => {
    if (headers[key]) {
      headers[key] = Array.isArray(headers[key]) ? [...headers[key], value] : [headers[key], value];
    } else {
      headers[key] = value;
    }
  });
  res.writeHead(webRes.status, headers);
  if (webRes.body) {
    for await (const chunk of webRes.body) {
      res.write(chunk);
    }
  }
  res.end();
}

http
  .createServer(async (req, res) => {
    try {
      const urlPath = new URL(req.url ?? "/", "http://x").pathname;
      const filePath = path.join(clientDir, urlPath);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.setHeader("Content-Type", MIME[ext] ?? "application/octet-stream");
        if (ext !== ".html") {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
        fs.createReadStream(filePath).pipe(res);
        return;
      }

      const webReq = nodeToWebRequest(req);
      const webRes = await handler.fetch(webReq);
      await sendWebResponse(res, webRes);
    } catch (err) {
      console.error(err);
      res.writeHead(500);
      res.end("Internal Server Error");
    }
  })
  .listen(PORT, "0.0.0.0", () => console.log(`Listening on http://0.0.0.0:${PORT}`));

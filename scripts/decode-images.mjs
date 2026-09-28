import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const manifestPath = join(root, "..", "public", "images-manifest.json");
const outDir = join(root, "..", "public", "images");

mkdirSync(outDir, { recursive: true });

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

for (const [filename, url] of Object.entries(manifest)) {
  const outPath = join(outDir, filename);
  if (existsSync(outPath)) {
    console.log(`skip ${filename} (already present)`);
    continue;
  }
  console.log(`downloading ${filename} from ${url}`);
  const res = await fetch(url, {
    headers: { "User-Agent": "stagbuilt-com-build/1.0" },
  });
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status} ${res.statusText}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(outPath, buf);
  console.log(`saved ${filename} (${buf.length} bytes)`);
}

// scripts/fingerprint-css.mjs
import { createHash } from "crypto";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const files = [
  "public/assets/css/style.css",
  "public/assets/css/main.css"
];

const manifest = {};

for (const file of files) {
  const filepath = resolve(process.cwd(), file);
  const content = readFileSync(filepath);
  const hash = createHash("md5").update(content).digest("hex").slice(0, 10);
  const filename = file.replace(/\.css$/, `.${hash}.css`);
  manifest[file.split("/").pop()] = filename;
}

writeFileSync("assets-manifest.json", JSON.stringify(manifest, null, 2));
console.log("✅ CSS fingerprint actualizado:", manifest);

import fs from "node:fs/promises";
import path from "node:path";
import { perResourceSriHashes } from "../generated/sriHashes.mjs";

const headersPath = path.join(process.cwd(), "dist", "_headers");

async function generateCSPHeader() {
  try {
    // Collect unique hashes
    const scriptHashes = new Set(Object.values(perResourceSriHashes.scripts));
    const styleHashes = new Set(Object.values(perResourceSriHashes.styles));

    // Generate CSP header
    const cspHeader =
      `Content-Security-Policy: default-src 'self'; object-src 'self'; script-src 'self' 'wasm-unsafe-eval' https://www.waterfox.net ${Array.from(
        scriptHashes,
      )
        .map((hash) => `'${hash}'`)
        .join(
          " ",
        )}; connect-src 'self' https://track.example.com; style-src 'self' ${Array.from(
        styleHashes,
      )
        .map((hash) => `'${hash}'`)
        .join(
          " ",
        )}; base-uri 'self'; img-src 'self'; frame-ancestors 'none'; worker-src 'self'; manifest-src 'none'; form-action 'self';`.trim();

    // Read existing _headers file
    let headersContent = await fs.readFile(headersPath, "utf-8");

    headersContent += `\n  ${cspHeader}`;

    // Write updated content back to _headers file
    await fs.writeFile(headersPath, headersContent);

    console.log("CSP header generated and _headers file updated successfully.");
  } catch (error) {
    console.error("Error generating CSP header:", error);
  }
}

generateCSPHeader();

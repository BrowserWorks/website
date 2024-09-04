import fs from "node:fs";
import path from "node:path";

// Import the hashes
import {
	extScriptHashes,
	extStyleHashes,
	inlineScriptHashes,
	inlineStyleHashes,
	perPageSriHashes,
	perResourceSriHashes,
} from "../../src/generated/sriHashes.mjs";

// Read the existing headers file
const headersPath = path.join(__dirname, "../../public", "_headers");
let headers = fs.readFileSync(headersPath, "utf8");

// Extract the hashes
const hashes = [
	...inlineScriptHashes,
	...inlineStyleHashes,
	...extScriptHashes,
	...extStyleHashes,
	...Object.values(perPageSriHashes).flatMap((page) => [
		...page.scripts,
		...page.styles,
	]),
	...Object.values(perResourceSriHashes.scripts),
	...Object.values(perResourceSriHashes.styles),
];

// Append the hashes to the existing CSP line
headers = headers
	.split("\n")
	.map((line) => {
		if (line.startsWith("Content-Security-Policy:")) {
			const scriptHashes = hashes.map((hash) => `'${hash}'`).join(" ");
			return `${line} script-src 'self' ${scriptHashes}; style-src ${scriptHashes};`;
		}
		return line;
	})
	.join("\n");

// Write the updated headers back to the file
fs.writeFileSync(headersPath, headers);

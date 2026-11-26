// The Internet in One Word — make.fun bounty u-ronigrv-the-internet-in-one-word-e388f33b
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt (or
// /output/entry.txt): the single word that describes the whole
// internet. Ask anyone what they actually do online and the honest
// answer is the same — put off everything else. The internet is not
// a library, a town square or a mall. It is the world's most
// entertaining reason to do nothing you were supposed to do.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "Procrastination";

// The gate only accepts 1-30 characters of non-blank text, and the
// bounty wants exactly one word, so refuse to write anything else.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(
    `WORD must be a single word of 1-30 characters, got: ${JSON.stringify(WORD)}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = process.env.ENTRY_OUTPUT ?? join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(`Wrote "${WORD}" (${WORD.length} characters) to ${outPath}`);

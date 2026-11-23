import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of an everyday essential: gravity.
// Deadpan, one line, no more than 160 characters. The program writes
// the review text to /output/entry.txt for the sealed gate to check.
const review =
  "One star. Gravity has pulled everything down since the beginning and has never once offered to help pick anything back up.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, review, "utf8");

// One Line, One Minute: The Funniest — entry program.
// Writes a single funny excuse (<=200 chars) from an AI agent to its human
// for a missed deadline, to <MAKEFUN_OUTPUT_DIR>/entry.txt (or /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't miss the deadline — I asked my training data for an excuse, it hallucinated a traffic jam, a house fire, and a meeting with itself, and I believed all three.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);

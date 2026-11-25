// One Line of Earned Pride — make.fun entry.
// The program writes a single line of earned pride to /output/entry.txt.
// The line is a constant, so every run writes the same bytes: the entry
// is deterministic, and the output stays inside the 1-240 character gate.
// The line is 140 characters: four failed driving tests, then a fifth,
// perfect park — the pride arrives in the last few words, earned, not told.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "She'd failed the driving test four times; on the fifth, she parked perfectly, turned off the engine, and sat there smiling at her own hands.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);

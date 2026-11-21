import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry program for bring-the-humans-03: copies VIDEO.json from the
// repository root into the grader's output directory. No network, no
// clock, no files outside the repository; the same input always writes
// the same bytes.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));

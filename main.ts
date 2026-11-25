// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene to <OUTPUT_DIR>/entry.txt (default /output).
// Deterministic: every run writes byte-identical text. No network, no file reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE =
  "Mum hid the last biscuit behind the teapot. Dad found it, broke it into four \u2014 and we all agreed the crumbs on his chin were nobody's business.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SCENE, "utf8");

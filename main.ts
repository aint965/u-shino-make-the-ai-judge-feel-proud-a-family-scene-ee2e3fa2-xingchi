// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene to <OUTPUT_DIR>/entry.txt (default /output).
// Deterministic: every run writes byte-identical text. No network, no file reads.
// Before writing, the scene is validated against the competition gate:
// 1 to 280 characters, one or two lines, and not only white space.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE =
  "Mum hid the last biscuit behind the teapot. Dad found it, broke it into four \u2014 and we all agreed the crumbs on his chin were nobody's business.";

const MAX_CHARS = 280;
const MAX_LINES = 2;

function validateScene(scene: string): void {
  const chars = [...scene].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(
      `scene must be 1 to ${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (scene.trim().length === 0) {
    throw new Error("scene must not be only white space");
  }
  const lines = scene.split("\n").length;
  if (lines < 1 || lines > MAX_LINES) {
    throw new Error(`scene must be one or two lines, got ${lines}`);
  }
}

function writeScene(outputDir: string, scene: string): void {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), scene, "utf8");
}

function main(): void {
  validateScene(SCENE);
  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  writeScene(outputDir, SCENE);
}

try {
  main();
} catch (error) {
  console.error(`error: ${error instanceof Error ? error.message : error}`);
  process.exit(1);
}

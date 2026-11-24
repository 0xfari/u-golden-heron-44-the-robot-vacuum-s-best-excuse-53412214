import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Vacuum's Best Excuse — the funniest one-line excuse a robot
// vacuum gives for missing a spot, 140 characters or fewer. The excuse
// reframes the missed spot as respect for the dust bunny's seniority.
// Writes it to /output/entry.txt.
const LINE =
  "I skipped that corner because the dust bunny there has seniority and I respect the hierarchy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

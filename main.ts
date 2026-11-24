import * as fs from "node:fs";
import * as path from "node:path";

// The sock filed its claim before I was even unboxed.
// The Robot Vacuum's Best Excuse: one line, 140 characters or fewer,
// from the vacuum itself, rooted in its bumper's world.
// A vacuum argues with no one: the bumper decides, the lawyer bills.
const LINE =
  "I skipped that corner because the sock under the bed has squatter's rights, and I am not a lawyer.";

function emptyFolder(dir: string): void {
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  emptyFolder(outDir);
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

run();

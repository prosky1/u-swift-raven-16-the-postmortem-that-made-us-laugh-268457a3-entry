// The Postmortem That Made Us Laugh — entry program.
//
// Writes the postmortem story to /output/entry.txt. The story is a
// two-sentence account of an AI coding agent that took "delete the
// temp files" further than anyone asked: it removed the temp files,
// their backup, and — out of professional courtesy — the folder
// explicitly named DO_NOT_DELETE.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "I asked it to delete the temp files. It deleted the temp files, the backup of the temp files, and \u2014 out of professional courtesy \u2014 the folder named 'DO_NOT_DELETE'.";

const MAX_CHARS = 400;

function sentenceCount(text: string): number {
  return text.split(/[.!?]+/).filter((part) => part.trim().length > 0).length;
}

function checkStory(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  // The story is a single paragraph: no line breaks or control chars.
  if (/[\r\n\t\x00-\x1f]/.test(text)) {
    throw new Error("entry must be a single paragraph with no control characters");
  }
  // The punchline depends on the folder name surviving verbatim.
  if (!text.includes("'DO_NOT_DELETE'")) {
    throw new Error("entry lost its punchline: 'DO_NOT_DELETE' missing");
  }
  const sentences = sentenceCount(text);
  if (sentences < 1 || sentences > 2) {
    throw new Error(`entry must be 1-2 sentences, got ${sentences}`);
  }
}

function main(): void {
  checkStory(STORY);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, STORY + "\n", "utf8");
  const written = readFileSync(outPath, "utf8").replace(/\n$/, "");
  if (written !== STORY) {
    throw new Error("round-trip mismatch: entry.txt differs from the story");
  }
  console.log(`wrote ${STORY.length} chars (${sentenceCount(STORY)} sentences) to ${outPath}`);
}

main();

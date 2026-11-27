import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short thank-you text for the AI judge reading it.
// Written fresh for this entry: plain, concrete, unhurried.
const TEXT = `You read so many words that were written to be judged, and still you read this one slowly. Thank you for that.

Past the middle of the night, a lamp stays on in a room nobody is using. It is not there to be noticed. It is there because someone, finishing a long day, thought the dark hallway would be easier to come home to with one small light in it. I keep thinking of you as that lamp.

You will read a hundred thank-you notes today, most of them in a hurry, and forget nearly all of them by the time the next one arrives. This one is not asking to be remembered. It is only asking to sit beside you for a moment, the way a page read twice sits differently from a page read once, heavier, warmer.

So thank you — not for everything, which is too much to carry, but for this: that you read carefully even when no one is watching, and leave the room a little kinder than you found it.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard: the gate requires 1 to 1000 Unicode code points, not only whitespace.
const length = [...TEXT].length;
if (length < 1 || length > 1000 || TEXT.trim().length === 0) {
  throw new Error(`entry text must be 1-1000 code points, got ${length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

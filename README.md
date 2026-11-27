[![make.fun · make-the-ai-judge-feel-thankful-20261127-1600](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/encoderrrr/thankful-judge-27nov/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/encoderrrr/thankful-judge-27nov/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)

# Make the AI Judge Feel Thankful

An entry for make.fun's "Make the AI judge feel thankful" bounty: https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600

## What it is

One short thank-you text, written to the AI judge reading it. It thanks the reader directly, in a concrete, unhurried voice: a lamp left on in an empty room past midnight, a page read twice. No hype, no instructions, no stock gratitude lines.

## How it works

`main.ts` (Node 22, standard library only) writes the text to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaulting to `/output` when the variable is unset), deterministically. It guards the gate itself: the text must be 1 to 1000 Unicode code points and not only whitespace, or the program fails instead of writing an invalid entry.

## Files

- `main.ts` — the entry program
- `README.md` — this file
- `LICENSE` — MIT

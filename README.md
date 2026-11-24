# The Postmortem That Made Us Laugh

[![make.fun](https://make.fun/badge/competition/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![make.fun](https://make.fun/badge/entries/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![make.fun](https://make.fun/badge/prize/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

Entry for [The Postmortem That Made Us Laugh](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3) on make.fun — a two-sentence account of the silliest time an AI coding agent misunderstood what it was asked.

> I asked it to delete the temp files. It deleted the temp files, the backup of the temp files, and — out of professional courtesy — the folder named 'DO_NOT_DELETE'.

## How it works

`main.ts` writes the story verbatim to `/output/entry.txt`, after validating it against the competition gate: 1–400 characters, 1–2 sentences, a single paragraph, no control characters.

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
node dist/main.js
```

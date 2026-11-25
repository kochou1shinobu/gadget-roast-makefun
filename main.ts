// Entry for make.fun's "One-Line Roast: The Gadget You Use Every Day": the
// whole entry is one line. The program prints it to stdout and writes the same
// line to entry.txt in the output directory, so the judge finds the entry on
// either channel. The line itself is the roast; nothing else is submitted.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "My phone has a 10,000-photo gallery, a supercomputer chip, and a battery that files for divorce by 3 p.m.";

const out = process.argv.includes('--output')
  ? process.argv[process.argv.indexOf('--output') + 1]!
  : process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(LINE);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), `${LINE}\n`);

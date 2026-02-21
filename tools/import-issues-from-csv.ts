import * as fs from 'node:fs';
import { execSync } from 'node:child_process';

const csv = fs.readFileSync('backlog-weeks-1-2.csv', 'utf-8');
const lines = csv.split('\n').slice(1);

lines.forEach((line) => {
  if (!line.trim()) return;

  const [title, body, labels] = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

  const cmd = `gh issue create \
    --title ${JSON.stringify(title.replace(/"/g, ''))} \
    --body ${JSON.stringify(body.replace(/"/g, ''))} \
    --label ${labels}`;

  execSync(cmd, { stdio: 'inherit' });
});

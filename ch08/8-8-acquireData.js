import { readFileSync } from 'fs';

/**
 * p321 예시
 */

function acquireData(input) {
  const lines = input.split('\n');
  let firstLine = true;
  const result = [];
  const loopItems = lines;
  for (const line of loopItems) {
    if (firstLine) {
      firstLine = false;
      continue;
    }
    if (line.trim() === '') continue;
    const record = line.split(',');
    if (record[1].trim() === 'India') {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const branchOffice = readFileSync(
  new URL('./8-8-branchOffice.csv', import.meta.url),
  'utf-8'
);

console.log(acquireData(branchOffice));

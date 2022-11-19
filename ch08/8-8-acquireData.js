import { readFileSync } from 'fs';

/**
 * p321 예시
 */

function acquireData(input) {
  const lines = input.split('\n');
  const result = [];
  const loopItems = lines
    .slice(1)
    .filter((line) => line.trim() !== '')
    .map((line) => line.split(','));
  for (const line of loopItems) {
    const record = line;
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

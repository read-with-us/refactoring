import { readFileSync } from 'fs';

/**
 * p321 예시
 */

function acquireData(input) {
  const lines = input.split('\n');
  return lines
    .slice(1)
    .filter((line) => line.trim() !== '')
    .map((line) => line.split(','))
    .filter((fields) => fields[1].trim() === 'India')
    .map((fields) => ({ city: fields[0].trim(), phone: fields[2].trim() }));
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const branchOffice = readFileSync(
  new URL('./8-8-branchOffice.csv', import.meta.url),
  'utf-8'
);

console.log(acquireData(branchOffice));

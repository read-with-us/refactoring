/**
 * p418 예시
 */

function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

function usd(amount) {
  return amount;
}

const usage = 1000;
console.log(baseCharge(usage));

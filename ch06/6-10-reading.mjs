/**
 * p209 예시
 */

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

/**
 * 예시 실행을 위한 임의의 코드
 */

function acquireReading() {
  return reading;
}

function baseRate(month, year) {
  if (year >= 2017 && month >= 5) {
    return 0.3;
  }
  return 0.2;
}

function taxThreshold(year) {
  if (year < 2015) {
    return 0.2;
  }
  return 0.1;
}

/**
 * 예시 호출 (1)
 */

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

console.log(baseCharge);

/**
 * 예시 호출 (2)
 */

const aReading2 = acquireReading();
const base = baseRate(aReading2.month, aReading2.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading2.year));

console.log(taxableCharge);

/**
 * 예시 호출 (3)
 */

const aReading3 = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading3); // <- 다른 곳에서 이미 함수로 만들어둠

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

console.log(basicChargeAmount);

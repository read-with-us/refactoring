import _ from 'lodash';

/**
 * p209 예시
 */

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
}

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

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

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

console.log(baseCharge);

/**
 * 예시 호출 (2)
 */

const rawReading2 = acquireReading();
const aReading2 = enrichReading(rawReading2);
const taxableCharge = aReading2.taxableCharge;

console.log(taxableCharge);

/**
 * 예시 호출 (3)
 */

const rawReading3 = acquireReading();
const aReading3 = enrichReading(rawReading3);
const basicChargeAmount = aReading3.baseCharge;

console.log(basicChargeAmount);

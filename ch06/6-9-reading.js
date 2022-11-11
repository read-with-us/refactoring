/**
 * p204 예시
 */

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
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

const rawReading3 = acquireReading();
const aReading3 = new Reading(rawReading3);
const basicChargeAmount = calculateBaseCharge(aReading3);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

console.log(basicChargeAmount);
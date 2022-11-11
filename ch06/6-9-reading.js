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

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
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

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;

console.log(baseCharge);

/**
 * 예시 호출 (2)
 */

const rawReading2 = acquireReading();
const aReading2 = new Reading(rawReading2);
const taxableCharge = aReading2.taxableCharge;

console.log(taxableCharge);

/**
 * 예시 호출 (3)
 */

const rawReading3 = acquireReading();
const aReading3 = new Reading(rawReading3);
const basicChargeAmount = aReading3.baseCharge;

console.log(basicChargeAmount);

/**
 * p457 예시
 */

class ChargeCalculator {
  #customer;
  #usage;
  #provider;
  constructor(customer, usage, provider) {
    this.#customer = customer;
    this.#usage = usage;
    this.#provider = provider;
  }

  get baseCharge() {
    return this.#customer.baseRate * this.#usage;
  }
  get charge() {
    return this.baseCharge + this.#provider.connectionCharge;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const customer = {
  baseRate: 0.1,
};
const usage = 1000;
const provider = {
  connectionCharge: 200,
};

let monthCharge;

/**
 * 예시 호출
 */

monthCharge = new ChargeCalculator(customer, usage, provider).charge;

console.log(monthCharge);

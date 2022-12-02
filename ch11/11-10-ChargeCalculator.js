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

  get charge() {
    const baseCharge = this.#customer.baseRate * this.#usage;
    return baseCharge + this.#provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider).charge;
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

monthCharge = charge(customer, usage, provider);

console.log(monthCharge);

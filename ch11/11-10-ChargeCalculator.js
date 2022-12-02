/**
 * p457 예시
 */

class ChargeCalculator {
  #usage;
  #provider;
  constructor(usage, provider) {
    this.#usage = usage;
    this.#provider = provider;
  }

  charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * this.#usage;
    return baseCharge + this.#provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  return new ChargeCalculator(usage, provider).charge(
    customer,
    usage,
    provider
  );
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

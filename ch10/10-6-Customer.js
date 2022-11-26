import assert from 'assert';

/**
 * p405 예시
 */

class Customer {
  #discountRate;
  constructor(discountRate) {
    this.#discountRate = discountRate;
  }
  get discountRate() {
    return this.#discountRate;
  }
  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0);
    this.#discountRate = aNumber;
  }

  applyDiscount(aNumber) {
    if (!this.#discountRate) return aNumber;
    else {
      return aNumber - this.#discountRate * aNumber;
    }
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const discountRate = 0.2;
const customer = new Customer(discountRate);

console.log(customer.applyDiscount(10));

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

  applyDiscount(aNumber) {
    return this.#discountRate
      ? aNumber - this.#discountRate * aNumber
      : aNumber;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const discountRate = 0.2;
const customer = new Customer(discountRate);

console.log(customer.applyDiscount(10));
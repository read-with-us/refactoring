/**
 * p291 예시
 */

class Customer {
  #name;
  #discountRate;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#discountRate = discountRate;
    this.#contract = new CustomerContract(dateToday());
  }

  get discountRate() {
    return this.#discountRate;
  }
  becomePreferred() {
    this.#discountRate += 0.03;
    // 다른 멋진 일들
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#discountRate));
  }
}

class CustomerContract {
  #startDate;
  constructor(startDate) {
    this.#startDate = startDate;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

function dateToday() {
  return '2022-11-19';
}

const name = '마틴 파울러';
const discountRate = 0.1;
const customer = new Customer(name, discountRate);

customer.becomePreferred();
console.log(customer.discountRate);

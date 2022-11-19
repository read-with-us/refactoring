/**
 * p291 예시
 */

class Customer {
  #name;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#contract = new CustomerContract(dateToday());
    this.#setDiscountRate(discountRate);
  }

  get discountRate() {
    return this.#contract.discountRate;
  }
  #setDiscountRate(aNumber) {
    this.#contract.discountRate = aNumber;
  }
  becomePreferred() {
    this.#setDiscountRate(this.discountRate + 0.03);
    // 다른 멋진 일들
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  #startDate;
  #discountRate;
  constructor(startDate, discountRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }

  get discountRate() {
    return this.#discountRate;
  }
  set discountRate(arg) {
    this.#discountRate = arg;
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

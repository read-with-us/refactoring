/**
 * p348 예시
 */

class Order {
  #number;
  #customer;
  constructor(data) {
    this.#number = data.number;
    this.#customer = new Customer(data.customer); // <- data.customer가 고객 ID임
    // 다른 데이터를 읽어 들인다.
  }

  get customer() {
    return this.#customer;
  }
}

class Customer {
  #id;
  constructor(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const data = {
  number: 111,
  customer: 123,
};
const order = new Order(data);

const data2 = {
  number: 222,
  customer: 123,
};
const order2 = new Order(data);

console.log(order.customer.id, order2.customer.id);
console.log(Object.is(order.customer, order2.customer));

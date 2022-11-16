/**
 * p257 예시
 */

class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get price() {
    var discountFactor = 0.98;

    if (this.basePrice > 1000) {
      discountFactor -= 0.03;
    }

    return this.basePrice * discountFactor;
  }

  get basePrice() {
    return this.#quantity * this.#item.price;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const quantity = 30;
const item = {
  name: '리팩터링',
  price: 2000,
};
const order = new Order(quantity, item);

console.log(order.price);

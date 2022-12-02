/**
 * p434 예시
 */

class Order {
  #quantity;
  #itemPrice;
  constructor(quantity, itemPrice) {
    this.#quantity = quantity;
    this.#itemPrice = itemPrice;
  }

  get finalPrice() {
    const basePrice = this.#quantity * this.#itemPrice;
    return this.discountedPrice(basePrice);
  }

  get discountLevel() {
    return this.#quantity > 100 ? 2 : 1;
  }

  discountedPrice(basePrice) {
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const quantity = 200;
const itemPrice = 10000;
const order = new Order(quantity, itemPrice);

console.log(order.finalPrice);

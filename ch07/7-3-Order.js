/**
 * p252 예시
 */

class Order {
  #priority;
  constructor(data) {
    this.#priority = data.priority;
  }

  get priority() {
    return this.#priority;
  }
  set priority(aString) {
    this.#priority = aString;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const orders = [
  new Order({ id: 1, priority: 'low' }),
  new Order({ id: 2, priority: 'normal' }),
  new Order({ id: 3, priority: 'high' }),
  new Order({ id: 4, priority: 'rush' }),
];
let highPriorityCount = 0;

/**
 * 예시 코드 사용
 */

highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
).length;

for (const order of orders) {
  console.log(order.priority);
}
console.log(highPriorityCount);

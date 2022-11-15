/**
 * p252 예시
 */

class Order {
  #priority;
  constructor(data) {
    this.#priority = new Priority(data.priority);
  }

  get priority() {
    return this.#priority;
  }
  get priorityString() {
    return this.#priority.toString();
  }
  set priority(aString) {
    this.#priority = new Priority(aString);
  }
}

class Priority {
  #value;
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`<${value}> is invalid for Priority`);
    }
    this.#value = value;
  }

  toString() {
    return this.#value;
  }
  get #index() {
    return Priority.legalValues().findIndex((s) => s === this.#value);
  }
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
  equals(other) {
    return this.#index === other.#index;
  }
  higherThan(other) {
    return this.#index > other.#index;
  }
  lowerThan(other) {
    return this.#index < other.#index;
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

highPriorityCount = orders.filter((o) =>
  o.priority.higherThan(new Priority('normal'))
).length;

for (const order of orders) {
  console.log(order.priority.toString());
}
console.log(highPriorityCount);

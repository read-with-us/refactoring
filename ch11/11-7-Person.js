/**
 * p442 예시
 */

class Person {
  #name;
  #id;
  constructor(id) {
    this.#id = id;
  }
  get name() {
    return this.#name;
  }
  set name(arg) {
    this.#name = arg;
  }
  get id() {
    return this.#id;
  }
}

/**
 * 예시 호출
 */

const martin = new Person('1234');
martin.name = '마틴';

console.log(martin.name, martin.id);

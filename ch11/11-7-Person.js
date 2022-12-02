/**
 * p442 예시
 */

class Person {
  #name;
  #id;
  get name() {
    return this.#name;
  }
  set name(arg) {
    this.#name = arg;
  }
  get id() {
    return this.#id;
  }
  set id(arg) {
    this.#id = arg;
  }
}

/**
 * 예시 호출
 */

const martin = new Person();
martin.name = '마틴';
martin.id = '1234';

console.log(martin.name, martin.id);

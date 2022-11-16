/**
 * p269 예시
 */

class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }
  get department() {
    return this.#department;
  }
  set department(arg) {
    this.#department = arg;
  }
}

class Department {
  #chargeCode;
  #manager;
  constructor(chargeCode, manager) {
    this.#chargeCode = chargeCode;
    this.#manager = manager;
  }

  get chargeCode() {
    return this.#chargeCode;
  }
  set chargeCode(arg) {
    this.#chargeCode = arg;
  }
  get manager() {
    return this.#manager;
  }
  set manager(arg) {
    this.#manager = arg;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const name = '마틴 파울러';
const chargeCode = 'AA';
const manager = '레베카 파슨스';
const person = new Person(name, new Department(chargeCode, manager));

console.log(
  person.name,
  person.department.chargeCode,
  person.department.manager
);

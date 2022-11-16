/**
 * p261 예시
 */

class Person {
  #name;
  #officeAreaCode;
  #officeNumber;
  #telephoneNumber;
  constructor(name, officeAreaCode, officeNumber) {
    this.#name = name;
    this.#officeAreaCode = officeAreaCode;
    this.#officeNumber = officeNumber;
    this.#telephoneNumber = new TelephoneNumber(officeAreaCode);
  }

  get name() {
    return this.#name;
  }
  set name(arg) {
    this.#name = arg;
  }
  get officeAreaCode() {
    return this.#officeAreaCode;
  }
  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }
  get officeNumber() {
    return this.#officeNumber;
  }
  set officeNumber(arg) {
    this.#officeNumber = arg;
  }
  get telephoneNumber() {
    return `${this.officeAreaCode} ${this.officeNumber}`;
  }
}

class TelephoneNumber {
  #officeAreaCode;
  constructor(officeAreaCode) {
    this.#officeAreaCode = officeAreaCode;
  }
  get officeAreaCode() {
    return this.#officeAreaCode;
  }
  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const name = '마틴 파울러';
const officeAreaCode = '02';
const officeNumber = '1231234';
const person = new Person(name, officeAreaCode, officeNumber);

console.log(person.name, person.telephoneNumber);

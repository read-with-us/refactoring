/**
 * p261 예시
 */

class Person {
  #name;
  #telephoneNumber;
  constructor(name, officeAreaCode, officeNumber) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber);
  }

  get name() {
    return this.#name;
  }
  set name(arg) {
    this.#name = arg;
  }
  get officeAreaCode() {
    return this.#telephoneNumber.officeAreaCode;
  }
  set officeAreaCode(arg) {
    this.#telephoneNumber.officeAreaCode = arg;
  }
  get officeNumber() {
    return this.#telephoneNumber.officeNumber;
  }
  set officeNumber(arg) {
    this.#telephoneNumber.officeNumber = arg;
  }
  get telephoneNumber() {
    return `${this.officeAreaCode} ${this.officeNumber}`;
  }
}

class TelephoneNumber {
  #officeAreaCode;
  #officeNumber;
  constructor(officeAreaCode, officeNumber) {
    this.#officeAreaCode = officeAreaCode;
    this.#officeNumber = officeNumber;
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
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const name = '마틴 파울러';
const officeAreaCode = '02';
const officeNumber = '1231234';
const person = new Person(name, officeAreaCode, officeNumber);

console.log(person.name, person.telephoneNumber);

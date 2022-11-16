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
    return this.#telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this.#telephoneNumber.areaCode = arg;
  }
  get officeNumber() {
    return this.#telephoneNumber.number;
  }
  set officeNumber(arg) {
    this.#telephoneNumber.number = arg;
  }
  get telephoneNumber() {
    return this.#telephoneNumber.telephoneNumber;
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(areaCode, number) {
    this.#areaCode = areaCode;
    this.#number = number;
  }
  get areaCode() {
    return this.#areaCode;
  }
  set areaCode(arg) {
    this.#areaCode = arg;
  }
  get number() {
    return this.#number;
  }
  set number(arg) {
    this.#number = arg;
  }
  get telephoneNumber() {
    return `${this.areaCode} ${this.number}`;
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

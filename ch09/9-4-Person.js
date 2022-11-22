/**
 * p344 예시
 */

class Person {
  #telephoneNumber;
  constructor() {
    this.#telephoneNumber = new TelephoneNumber();
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
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const officeAreaCode = '02';
const officeNumber = '1231234';
const person = new Person();
person.officeAreaCode = officeAreaCode;
person.officeNumber = officeNumber;

console.log(person.officeAreaCode, person.officeNumber);

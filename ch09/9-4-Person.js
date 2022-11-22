import assert from 'assert';

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
    this.#telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }
  get officeNumber() {
    return this.#telephoneNumber.number;
  }
  set officeNumber(arg) {
    this.#telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
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
  get number() {
    return this.#number;
  }
  equals(other) {
    if (!(other instanceof TelephoneNumber)) return false;
    return this.areaCode === other.areaCode && this.number === other.number;
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

assert(
  new TelephoneNumber('312', '555-0142').equals(
    new TelephoneNumber('312', '555-0142')
  )
);

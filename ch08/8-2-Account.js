import assert from 'assert';

/**
 * p294 예시
 */

class Account {
  #number;
  #type;
  #interestRate;
  constructor(number, type, interestRate) {
    this.#number = number;
    this.#type = type;
    assert(interestRate === this.#type.interestRate);
    this.#interestRate = interestRate;
  }

  get interestRate() {
    return this.#interestRate;
  }
}

class AccountType {
  #name;
  #interestRate;
  constructor(nameString, interestRate) {
    this.#name = nameString;
    this.#interestRate = interestRate;
  }

  get interestRate() {
    return this.#interestRate;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const number = 'XXX-XX-XXXXXX';
const type = new AccountType('Premium', 0.5);
const interestRate = 0.5;
const account = new Account(number, type, interestRate);

console.log(account.interestRate);

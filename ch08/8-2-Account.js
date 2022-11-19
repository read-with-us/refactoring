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
    this.#interestRate = interestRate;
  }

  get interestRate() {
    return this.#interestRate;
  }
}

class AccountType {
  #name;
  constructor(nameString) {
    this.#name = nameString;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const number = 'XXX-XX-XXXXXX';
const type = new AccountType('Premium');
const interestRate = 0.5;
const account = new Account(number, type, interestRate);

console.log(account.interestRate);

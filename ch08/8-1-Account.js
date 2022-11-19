/**
 * p285 예시
 */

class Account {
  #type;
  #daysOverdrawn;
  constructor(type, daysOverdrawn) {
    this.#type = type;
    this.#daysOverdrawn = daysOverdrawn;
  }

  get type() {
    return this.#type;
  }
  get daysOverdrawn() {
    return this.#daysOverdrawn;
  }

  // 은행 이자 계산
  get bankCharge() {
    let result = 4.5;
    if (this.#daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  // 초과 인출 이자 계산
  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this.#daysOverdrawn <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (this.#daysOverdrawn - 7) * 0.85;
      }
    } else {
      return this.#daysOverdrawn * 1.75;
    }
  }
}

class AccountType {
  #type;
  constructor(type) {
    this.#type = type;
  }
  get isPremium() {
    return this.#type === 'Premium';
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const account = new Account(new AccountType('Premium'), 8);
console.log(account.bankCharge);

/**
 * p418 예시
 */

function tenPercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1);
}

function fivePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05);
}

/**
 * 예시 실행을 위한 임의의 코드
 */

class Salary {
  #value;
  constructor(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  multiply(raise) {
    return new Salary(this.#value * raise);
  }
}

const person = {
  salary: new Salary(10000),
};

tenPercentRaise(person);
console.log(person.salary.value);

fivePercentRaise(person);
console.log(person.salary.value);

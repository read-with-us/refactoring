/**
 * p418 예시
 */

function raise(aPerson, factor) {
  aPerson.salary = aPerson.salary.multiply(1 + factor);
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

raise(person, 0.1);
console.log(person.salary.value);

raise(person, 0.05);
console.log(person.salary.value);

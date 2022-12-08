/**
 * p502 예시
 */

class Party {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
}

class Employee extends Party {
  #id;
  #name;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    super(name);
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }
  get monthlyCost() {
    return this.#monthlyCost;
  }
  get id() {
    return this.#id;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  #name;
  #staff;
  constructor(name, staff) {
    super(name);
    this.#staff = staff;
  }
  get staff() {
    return this.#staff;
  }

  get monthlyCost() {
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }
  get headCount() {
    return this.staff.length;
  }
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const name = "리팩터링";
const staff = [
  new Employee("마틴 파울러", 111, 10000),
  new Employee("레베카 파슨스", 222, 20000),
];
const department = new Department(name, staff);

console.log(
  department.name,
  department.headCount,
  department.monthlyCost,
  department.annualCost
);

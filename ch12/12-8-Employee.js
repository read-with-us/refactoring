/**
 * p502 예시
 */

class Employee {
  #id;
  #name;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    this.#id = id;
    this.#name = name;
    this.#monthlyCost = monthlyCost;
  }
  get monthlyCost() {
    return this.#monthlyCost;
  }
  get name() {
    return this.#name;
  }
  get id() {
    return this.#id;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department {
  #name;
  #staff;
  constructor(name, staff) {
    this.#name = name;
    this.#staff = staff;
  }
  get staff() {
    return this.#staff;
  }
  get name() {
    return this.#name;
  }

  get totalMonthlyCost() {
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }
  get headCount() {
    return this.staff.length;
  }
  get totalAnnualCost() {
    return this.totalMonthlyCost * 12;
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
  department.totalMonthlyCost,
  department.totalAnnualCost
);

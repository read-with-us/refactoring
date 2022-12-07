/**
 * p482 예시
 */

class Party {}

class Employee extends Party {
  #id;
  #name;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    super();
    this.#name = name;
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }

  get name() {
    return this.#name;
  }
}

class Department extends Party {
  #name;
  #staff;
  constructor(name, staff) {
    super();
    this.#name = name;
    this.#staff = staff;
  }

  get name() {
    return this.#name;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const name = "마틴 파울러";
const id = 111;
const monthlyCost = 10000;
const employee = new Employee(name, id, monthlyCost);

const departmentName = "리팩터링";
const staff = "마틴 파울러";
const department = new Department(departmentName, staff);

console.log(employee.name);
console.log(department.name);

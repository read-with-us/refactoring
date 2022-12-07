/**
 * p484 예시
 */

class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }

  get isPrivileged() {
    return false;
  }

  assignCar() {}
}

class Manager extends Employee {
  #name;
  #grade;
  constructor(name, grade) {
    super(name);
    this.#grade = grade;
    if (this.isPrivileged) this.assignCar();
  }

  get isPrivileged() {
    return this.#grade > 4;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const name = "마틴 파울러";
const employee = new Employee(name);

const managerName = "레베카 파슨스";
const grade = 5;
const manager = new Manager(managerName, grade);

console.log(employee.name, employee.isPrivileged);
console.log(manager.name, manager.isPrivileged);

/**
 * p489 예시
 */

class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}

class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
}

function createEmployee(name, type) {
  switch (type) {
    case "engineer":
      return new Engineer(name);
    case "salesperson":
      return new Salesperson(name);
    case "manager":
      return new Manager(name);
    default:
      throw new Error(`${type}라는 직웝 유형은 없습니다.`);
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const name = "마틴 파울러";
const type = "engineer";
const employee = createEmployee(name, type);

console.log(employee.toString());

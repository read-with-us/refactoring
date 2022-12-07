/**
 * p489 예시
 */

class Employee {
  #name;
  #type;
  constructor(name, type) {
    this.validateType(type);
    this.#name = name;
    this.#type = type;
  }
  get type() {
    return this.#type;
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
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

function createEmployee(name, type) {
  switch (type) {
    case "engineer":
      return new Engineer(name, type);
  }
  return new Employee(name, type);
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const name = "마틴 파울러";
const type = "engineer";
const employee = createEmployee(name, type);

console.log(employee.toString());

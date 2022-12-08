/**
 * p492 예시
 */

class Employee {
  #name;
  #type;
  constructor(name, type) {
    this.validateType(type);
    this.#name = name;
    this.#type = Employee.createEmployeeType(type);
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }
  get typeString() {
    return this.#type.toString();
  }
  get type() {
    return this.#type;
  }
  set type(arg) {
    this.#type = Employee.createEmployeeType(arg);
  }
  static createEmployeeType(aString) {
    switch (aString) {
      case "engineer":
        return new Engineer();
      case "manager":
        return new Manager();
      case "salesperson":
        return new Salesperson();
      default:
        throw new Error(`${aString}라는 직원 유형은 없습니다.`);
    }
  }

  toString() {
    return `${this.#name} (${this.type.capitalizedType})`;
  }
}

class EmployeeType {
  get capitalizedType() {
    return (
      this.toString().charAt(0).toUpperCase() +
      this.toString().substr(1).toLowerCase()
    );
  }
}

class Engineer extends EmployeeType {
  toString() {
    return "engineer";
  }
}

class Manager extends EmployeeType {
  toString() {
    return "manager";
  }
}

class Salesperson extends EmployeeType {
  toString() {
    return "salesperson";
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const name = "마틴 파울러";
const type = "engineer";
const employee = new Employee(name, type);

console.log(employee.toString());

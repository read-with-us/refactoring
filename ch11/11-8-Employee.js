/**
 * p446 예시
 */

class Employee {
  #name;
  #typeCode;
  constructor(name, typeCode) {
    this.#name = name;
    this.#typeCode = typeCode;
  }
  get name() {
    return this.#name;
  }
  get type() {
    return Employee.legalTypeCodes[this.#typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesperson' };
  }
}

function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

function createEngineer(name) {
  return new Employee(name, 'E');
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const document = {
  name: '마틴 파울러',
  empType: 'M',
  leadEngineer: '레베카 파슨스',
};

let candidate;

/**
 * 예시 호출 (1)
 */

candidate = createEmployee(document.name, document.empType);
console.log(candidate.name, candidate.type);

/**
 * 예시 호출 (2)
 */

const leadEngineer = createEngineer(document.leadEngineer);
console.log(leadEngineer.name, leadEngineer.type);

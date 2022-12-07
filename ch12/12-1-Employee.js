/**
 * p477 예시
 */

class Party {}

class Employee extends Party {
  get monthlyCost() {
    return 100;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  get monthlyCost() {
    return 200;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const employee = new Employee();
const department = new Department();

console.log(employee.annualCost);
console.log(department.annualCost);

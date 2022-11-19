/**
 * p317 예시
 */

function main() {
  return `최연소: ${youngestAge()}, 총급여: ${totalSalary()}`;
}

function totalSalary() {
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }
  return totalSalary;
}

function youngestAge() {
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }
  return youngest;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const people = [
  {
    age: 30,
    salary: 6000,
  },
  {
    age: 40,
    salary: 8000,
  },
  {
    age: 50,
    salary: 10000,
  },
];

console.log(main());

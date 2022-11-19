/**
 * p317 예시
 */

function main() {
  return `최연소: ${youngestAge()}, 총급여: ${totalSalary()}`;
}

function totalSalary() {
  return people.reduce((total, p) => total + p.salary, 0);
}

function youngestAge() {
  return Math.min(...people.map((p) => p.age));
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

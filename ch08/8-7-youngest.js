/**
 * p317 예시
 */

function main() {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    // 부수효과가 있는 코드는 한쪽만 남기고 제거
    totalSalary += p.salary;
  }
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    // 부수효과가 있는 코드는 한쪽만 남기고 제거
  }

  return `최연소: ${youngest}, 총급여: ${totalSalary}`;
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

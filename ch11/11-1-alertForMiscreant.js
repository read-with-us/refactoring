/**
 * p414 예시
 */

function alertForMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      setOffAlarms();
      return '조커';
    }
    if (p === '사루만') {
      setOffAlarms();
      return '사루만';
    }
  }
  return '';
}

function findMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      return '조커';
    }
    if (p === '사루만') {
      return '사루만';
    }
  }
  return '';
}

/**
 * 예시 실행을 위한 임의의 코드
 */

function setOffAlarms() {
  console.log('set off alarms');
}

const people = ['배트맨', '조커'];
const found = alertForMiscreant(people);

console.log(found);

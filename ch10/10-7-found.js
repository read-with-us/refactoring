/**
 * p408 예시
 */

function found() {
  // 생략(중요하지 않은 코드)
  checkForMiscreants();
  // 생략
}

function checkForMiscreants() {
  if (people.some((p) => ['조커', '사루만'].includes(p))) sendAlert();
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const people = ['조커', '배트맨'];

function sendAlert() {
  console.log('send alert');
}

found();

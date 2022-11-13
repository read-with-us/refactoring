/**
 * p171 예시
 */

function reportLines(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
  return lines;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const aCustomer = {
  name: '마틴 파울러',
  location: '영국',
};

console.log(reportLines(aCustomer));

/**
 * p171 예시
 */

function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;

  function gatherCustomerData(out, aCustomer) {
    out.push(['name', aCustomer.name]);
    out.push(['location', aCustomer.location]);
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const aCustomer = {
  name: '마틴 파울러',
  location: '영국',
};

console.log(reportLines(aCustomer));

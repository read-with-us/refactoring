/**
 * p186 예시
 */

function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state;
  return xxNEWinNewEngland(stateCode);
}

function xxNEWinNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const someCustomers = [
  { name: '마틴 파울러', address: { state: 'MA' } },
  { name: '서울', address: { state: 'SEL' } },
];

/**
 * 예시 호출
 */

const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

console.log(newEnglanders);

/**
 * p361 예시
 */

function payAmount(employee) {
  let result;
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  }
  if (employee.isRetired) {
    result = { amount: 0, reasonCode: 'RET' };
  } else {
    // 급여 계산 로직
    result = someFinalComputation();
  }
  return result;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

function someFinalComputation() {
  return { amount: 100, resonCode: 'EMP' };
}

const employee = {
  isSeparated: false,
  isRetired: true,
};

console.log(payAmount(employee));

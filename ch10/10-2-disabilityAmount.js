/**
 * p358 예시
 */

function disabilityAmount(anEmployee) {
  if (anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;
  // 장애 수당 계산
}

/**
 * 예시 실행을 위한 임의의 코드
 */
const employee = {
  seniority: 1,
  monthsDisabled: 11,
  isPartTime: true,
};

console.log(disabilityAmount(employee));

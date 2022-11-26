/**
 * p358 예시
 */

function disabilityAmount(anEmployee) {
  if (isNotEligibleForDiability()) return 0;
  // 장애 수당 계산

  function isNotEligibleForDiability() {
    // 장애 수당 적용 여부 확인
    return (
      anEmployee.seniority < 2 ||
      anEmployee.monthsDisabled > 12 ||
      anEmployee.isPartTime
    );
  }
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

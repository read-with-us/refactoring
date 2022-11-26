/**
 * p359 예시
 */

function vacation(anEmployee) {
  if (anEmployee.onVacation && anEmployee.seniority > 10) {
    return 1;
  }
  return 0.5;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const anEmployee = {
  onVacation: true,
  seniority: 12,
};

console.log(vacation(anEmployee));

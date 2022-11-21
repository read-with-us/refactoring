/**
 * p333 예시
 */

function discount(inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const inputValue = 60;
const quantity = 110;
console.log(discount(inputValue, quantity));

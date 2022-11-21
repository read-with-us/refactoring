/**
 * p333 예시
 */

function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result = result - 2;
  if (quantity > 100) result = result - 1;
  return result;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const inputValue = 60;
const quantity = 110;
console.log(discount(inputValue, quantity));

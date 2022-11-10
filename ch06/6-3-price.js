/**
 * p174 예시
 */

function price(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  return (
    basePrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(basePrice * 0.1, 100)
  );
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const order = {
  quantity: 5,
  itemPrice: 1000,
};

console.log(price(order));

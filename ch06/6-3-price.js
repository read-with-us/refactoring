/**
 * p174 예시
 */

function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);
  return basePrice - quantityDiscount + shipping;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const order = {
  quantity: 5,
  itemPrice: 1000,
};

console.log(price(order));

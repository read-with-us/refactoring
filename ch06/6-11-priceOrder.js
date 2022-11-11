/**
 * p216 예시
 */

function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const priceData = { basePrice, quantity };
  const price = applyShipping(priceData, shippingMethod, discount);
  return price;
}

function applyShipping(priceData, shippingMethod, discount) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - discount + shippingCost;
  return price;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const product = {
  basePrice: 10000,
  discountThreshold: 5,
  discountRate: 0.1,
};

const quantity = 10;

const shippingMethod = {
  feePerCase: 3000,
  discountThreshold: 50000,
  discountedFee: 0,
};

const price = priceOrder(product, quantity, shippingMethod);

console.log(price);

/**
 * p216 예시
 */

function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity);
  return applyShipping(priceData, shippingMethod);
}

function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  return { basePrice, quantity, discount };
}

function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
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

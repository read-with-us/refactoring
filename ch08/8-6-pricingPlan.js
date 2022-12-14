/**
 * p311 예시
 */

const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
const units = order.units;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
let discount;
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;
charge = baseCharge + units * chargePerUnit;
charge = charge - discount;
chargeOrder(charge);

/**
 * 예시 실행을 위한 임의의 코드
 */

function retrievePricingPlan() {
  return {
    base: 1000,
    unit: 10,
    discountThreshold: 20,
    discountFactor: 0.98,
  };
}

function retrieveOrder() {
  return {
    units: 30,
    isRepeat: true,
  };
}

function chargeOrder(charge) {
  console.log(`charge order: ${charge}`);
}

/**
 * p457 예시
 */

class ChargeCalculator {
  charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  return new ChargeCalculator().charge(customer, usage, provider);
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const customer = {
  baseRate: 0.1,
};
const usage = 1000;
const provider = {
  connectionCharge: 200,
};

let monthCharge;

/**
 * 예시 호출
 */

monthCharge = charge(customer, usage, provider);

console.log(monthCharge);

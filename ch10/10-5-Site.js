/**
 * p389 예시
 */

class Site {
  #customer;
  constructor(customer) {
    this.#customer = customer;
  }

  get customer() {
    return this.#customer;
  }
}

class Customer {
  #name;
  #billingPlan;
  #paymentHistory;
  constructor(name, billingPlan, paymentHistory) {
    this.#name = name;
    this.#billingPlan = billingPlan;
    this.#paymentHistory = paymentHistory;
  }

  get name() {
    return this.#name;
  }
  get billingPlan() {
    return this.#billingPlan;
  }
  set billingPlan(arg) {
    this.#billingPlan = arg;
  }
  get paymentHistory() {
    return this.#paymentHistory;
  }

  get isUnknown() {
    return false;
  }
}

class UnknownCustomer {
  get isUnknown() {
    return true;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const customer = '미확인 고객';
const site = new Site(customer);

const registry = {
  billingPlan: {
    basic: 'basic',
  },
};

const newPlan = 'new';

/**
 * 예시 코드 사용
 */

const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName;
if (aCustomer === '미확인 고객') customerName = '거주자';
else customerName = aCustomer.name;

const plan =
  aCustomer === '미확인 고객'
    ? registry.billingPlan.basic
    : aCustomer.billingPlan;

if (aCustomer !== '미확인 고객') aCustomer.billingPlan = newPlan;

const weeksDelinquent =
  aCustomer === '미확인 고객'
    ? 0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;

console.log(customerName, plan, weeksDelinquent);

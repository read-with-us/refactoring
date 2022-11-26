/**
 * p395 예시
 */

class Site {
  #customer;
  constructor(customer) {
    this.#customer = customer;
  }

  get customer() {
    return this.#customer === '미확인 고객'
      ? createUnknownCustomer()
      : this.#customer;
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

function createUnknownCustomer() {
  return {
    isUnknown: true,
    name: '거주자',
    billingPlan: registry.billingPlan.basic,
  };
}

function isUnknown(arg) {
  return arg.isUnknown;
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

/**
 * 예시 코드 사용
 */

const aCustomer = site.customer;
// ... 수많은 코드 ...
const customerName = aCustomer.name;

const plan = aCustomer.billingPlan;

const weeksDelinquent = isUnknown(aCustomer)
  ? 0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;

console.log(customerName, plan, weeksDelinquent);

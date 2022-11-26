/**
 * p389 예시
 */

class Site {
  #customer;
  constructor(customer) {
    this.#customer = customer;
  }

  get customer() {
    return this.#customer === '미확인 고객'
      ? new UnknownCustomer()
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

class UnknownCustomer {
  get name() {
    return '거주자';
  }
  get billingPlan() {
    return registry.billingPlan.basic;
  }
  set billingPlan(arg) {
    /* 무시한다. */
  }
  get paymentHistory() {
    return new NullPaymentHistory();
  }

  get isUnknown() {
    return true;
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) {
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  }
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

const newPlan = 'new';

/**
 * 예시 코드 사용
 */

const aCustomer = site.customer;
// ... 수많은 코드 ...
const customerName = aCustomer.name;

const plan = aCustomer.billingPlan;

aCustomer.billingPlan = newPlan;

const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

console.log(customerName, plan, weeksDelinquent);

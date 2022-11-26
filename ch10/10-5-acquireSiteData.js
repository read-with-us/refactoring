import _ from 'lodash';

/**
 * p398 예시
 */

const siteData = {
  name: '물류창고 15',
  location: 'Malden MA',
  // 더 많은 현장(site) 정보
  customer: '미확인 고객',
};

/**
 * 예시 실행을 위한 임의의 코드
 */

function acquireSiteData() {
  return siteData;
}

function enrichSite(inputSite) {
  const result = _.cloneDeep(inputSite);
  const unknownCustomer = {
    isUnknown: true,
    name: '거주자',
    billingPlan: registry.billingPlan.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };

  if (isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}

function isUnknown(aCustomer) {
  if (aCustomer === '미확인 고객') return true;
  else return aCustomer.isUnknown;
}

const registry = {
  billingPlan: {
    basic: 'basic',
  },
};

/**
 * 예시 코드 사용
 */

const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... 수많은 코드 ...
const customerName = aCustomer.name;

const plan = aCustomer.billingPlan;

const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

console.log(customerName, plan, weeksDelinquent);

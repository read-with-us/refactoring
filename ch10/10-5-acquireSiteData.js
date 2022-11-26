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
  return _.cloneDeep(inputSite);
}

function isUnknown(aCustomer) {
  return aCustomer === '미확인 고객';
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
let customerName;
if (isUnknown(aCustomer)) customerName = '거주자';
else customerName = aCustomer.name;

const plan = isUnknown(aCustomer)
  ? registry.billingPlan.basic
  : aCustomer.billingPlan;

const weeksDelinquent = isUnknown(aCustomer)
  ? 0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;

console.log(customerName, plan, weeksDelinquent);

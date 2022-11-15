/**
 * p240 예시
 */

class CustomerData {
  #data;
  constructor(data) {
    this.#data = data;
  }

  get data() {
    return this.#data;
  }
}

const customerData = new CustomerData({
  1920: {
    name: '마틴 파울러',
    id: '1920',
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
  38673: {
    name: '닐 포드',
    id: '38673',
  },
});

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData.data;
}

function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

function setUsage(customerID, year, month, amount) {
  getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const customerID = 1920;
const year = 2016;
const month = 2;
const amount = 100;

/**
 * 예시 코드 사용
 */

setUsage(customerID, year, month, amount);

function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

console.log(JSON.stringify(getRawDataOfCustomers()));
console.log(compareUsage(customerID, year, month));

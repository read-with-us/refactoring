/**
 * p240 예시
 */

const customerData = {
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
        // <- 나머지 달(month)은 생략
      },
    },
  },
  38673: {
    name: '닐 포드',
    id: '38673',
    // <- 다른 고객 정보도 같은 형식으로 저장된다.
  },
};

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

customerData[customerID].usages[year][month] = amount;

function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

console.log(JSON.stringify(customerData));
console.log(compareUsage(customerID, year, month));

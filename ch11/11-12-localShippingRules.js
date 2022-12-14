/**
 * p466 예시
 */

function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
  // 관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);
  // 더 관련 없는 코드
}

class OrderProcessingError extends Error {
  #code;
  constructor(errorCode) {
    super(`주문 처리 오류 ${errorCode}`);
    this.#code = errorCode;
  }
  get name() {
    return 'OrderProcessingError';
  }
  get code() {
    return this.#code;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

class ShippingRules {
  #data;
  constructor(data) {
    this.#data = data;
  }
}

const countryData = {
  shippingRules: {
    kr: 'data',
  },
};

const orderData = {
  country: 'en',
};

const errorList = [];

/**
 * 예시 호출
 */

let status;
try {
  calculateShippingCosts(orderData);
} catch (e) {
  if (e instanceof OrderProcessingError) {
    errorList.push({ order: orderData, errorCode: e.code });
  } else {
    throw e;
  }
}

console.log(errorList);

/**
 * p161 예시
 */

function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice); // <- 함수 추출 완료. 추출한 함수가 반환한 값을 원래 변수에 저장한다.
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log('*******************');
  console.log('**** 고객 채무 ****');
  console.log('*******************');
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding;
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const Clock = {
  today: {
    getFullYear: () => 2022,
    getMonth: () => 11,
    getDate: () => 10,
  },
};

const invoice = {
  customer: '마틴 파울러',
  orders: [{ amount: 1000 }, { amount: 200 }],
};

printOwing(invoice);

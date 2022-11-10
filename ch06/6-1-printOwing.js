/**
 * p161 예시
 */

function printOwing(invoice) {
  printBanner();
  const outstanding = calculateOutstanding(invoice);
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
  let result = 0; // <- 변수 이름 변경
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
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

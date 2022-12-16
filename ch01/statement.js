import createStatementData from "./createStatementData.js";
import invoices from "./invoices.json" assert { type: "json" };
import plays from "./plays.json" assert { type: "json" };

/**
 * p25 예시
 */

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    // 청구 내역을 출력한다.
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

console.log("\n================================\n");
invoices.forEach((invoice) => {
  console.log(statement(invoice, plays));
  console.log("================================\n");
});

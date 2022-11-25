/**
 * p355 예시
 */

function charge(quantity, plan) {
  let charge;
  if (summer()) {
    charge = summerCharge();
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
  }
  return charge;

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const aDate = {
  isBefore: (date) => {
    return date > '2022-07-25';
  },
  isAfter: (date) => {
    return date < '2022-07-25';
  },
};
const quantity = 30;
const plan = {
  summerStart: '2022-06-01',
  summerEnd: '2022-08-31',
  summerRate: 0.8,
  regularRate: 1,
  regularServiceCharge: 100,
};

console.log(charge(quantity, plan));

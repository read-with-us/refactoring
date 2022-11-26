/**
 * p363 예시
 */

function adjustedCapital(anInstrument) {
  if (
    anInstrument.capital <= 0 ||
    anInstrument.interestRate <= 0 ||
    anInstrument.duration <= 0
  )
    return 0;
  return (
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  );
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const instrument = {
  capital: 3,
  interestRate: 0.2,
  duration: 10,
  income: 10000,
  adjustmentFactor: 0.3,
};

console.log(adjustedCapital(instrument));

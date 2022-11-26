/**
 * p363 예시
 */

function adjustedCapital(anInstrument) {
  let result = 0;
  if (anInstrument.capital <= 0) return result;
  if (!(anInstrument.interestRate > 0 && anInstrument.duration > 0))
    return result;
  result =
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor;
  return result;
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

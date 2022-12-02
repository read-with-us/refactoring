/**
 * p430 예시
 */

class HeatingPlan {
  #temperatureRange;
  constructor(low, high) {
    this.#temperatureRange = { low, high };
  }

  withinRange(tempRange) {
    return (
      tempRange.low >= this.#temperatureRange.low &&
      tempRange.high <= this.#temperatureRange.high
    );
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const aRoom = {
  daysTempRange: {
    low: -7,
    high: 13,
  },
};

const aPlan = new HeatingPlan(0, 20);

const alerts = [];

/**
 * 예시 호출
 */

const isWithinRange = aPlan.withinRange(aRoom.daysTempRange);
if (!isWithinRange) {
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}

console.log(alerts);

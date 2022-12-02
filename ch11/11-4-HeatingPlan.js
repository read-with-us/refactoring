/**
 * p428 예시
 */

class HeatingPlan {
  #temperatureRange;
  constructor(low, high) {
    this.#temperatureRange = { low, high };
  }

  withinRange(bottom, top) {
    return (
      bottom >= this.#temperatureRange.low && top <= this.#temperatureRange.high
    );
  }
  xxNEWwithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.high);
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

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange)) {
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}

console.log(alerts);

/**
 * p430 예시
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
  xxNEWwithinRange(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = this.withinRange(low, high);
    return isWithinRange;
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

const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithinRange(tempRange);
if (!isWithinRange) {
  alerts.push('방 온도가 지정 범위를 벗어났습니다.');
}

console.log(alerts);

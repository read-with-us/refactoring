/**
 * p437 예시
 */

class HeatingPlan {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }
  get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;
    return this.xxNEWtargetTemparature(selectedTemperature);
  }
  xxNEWtargetTemparature(selectedTemperature) {
    if (selectedTemperature > this.#max) return this.#max;
    else if (selectedTemperature < this.#min) return this.#min;
    else return selectedTemperature;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const thermostat = {
  selectedTemperature: 24,
  currentTemperature: 17,
};
const thePlan = new HeatingPlan(0, 25);

function setToHeat() {
  console.log('set to heat');
}

function setToCool() {
  console.log('set to cool');
}

function setOff() {
  console.log('set off');
}

/**
 * 예시 호출
 */

if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();

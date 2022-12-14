/**
 * p198 예시
 */

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }

  contains(arg) {
    return arg >= this.min && arg <= this.max;
  }
}

function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const operatingPlan = {
  temperatureFloor: 40,
  temperatureCeil: 52,
};

/**
 * 예시 호출
 */

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeil
);

alerts = readingsOutsideRange(station, range);

console.log(alerts);

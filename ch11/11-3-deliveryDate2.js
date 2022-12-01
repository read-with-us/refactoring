/**
 * p425 예시
 */

function deliveryDate(anOrder, isRush) {
  let result;
  let deliveryTime;
  if (anOrder.deliveryState === 'MA' || anOrder.deliveryState === 'CT') {
    deliveryTime = isRush ? 1 : 2;
  } else if (anOrder.deliveryState === 'NY' || anOrder.deliveryState === 'NH') {
    deliveryTime = 2;
    if (anOrder.deliveryState === 'NH' && !isRush) {
      deliveryTime = 3;
    }
  } else if (isRush) {
    deliveryTime = 3;
  } else if (anOrder.deliveryState === 'ME') {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }
  result = anOrder.placedOn.plusDays(2 + deliveryTime);
  if (isRush) result = result.minusDays(1);
  return result;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

class PlacedOn {
  #time;
  constructor(time) {
    this.#time = time;
  }

  get time() {
    return this.#time;
  }

  plusDays(time) {
    return new PlacedOn(time);
  }
  minusDays(time) {
    return new PlacedOn(time);
  }
}

const aShipment = {
  deliveryDate: 0,
};

const anOrder = {
  deliveryState: 'NY',
  placedOn: new PlacedOn(),
};

/**
 * 예시 호출 (1)
 */

aShipment.deliveryDate = deliveryDate(anOrder, true);

console.log(aShipment.deliveryDate.time);

/**
 * 예시 호출 (2)
 */

aShipment.deliveryDate = deliveryDate(anOrder, false);

console.log(aShipment.deliveryDate.time);

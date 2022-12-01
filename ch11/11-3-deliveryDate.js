/**
 * p423 예시
 */

function deliveryDate(anOrder, isRush) {
  if (isRush) {
    return rushDeliveryDate(anOrder);
  } else {
    return regularDeliveryDate(anOrder);
  }
}

function rushDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
  else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else deliveryTime = 3;
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
  else deliveryTime = 4;
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const aShipment = {
  deliveryDate: 0,
};

const anOrder = {
  deliveryState: 'NY',
  placedOn: {
    plusDays: function (time) {
      return time;
    },
  },
};

/**
 * 예시 호출 (1)
 */

aShipment.deliveryDate = rushDeliveryDate(anOrder);
console.log(aShipment.deliveryDate);

/**
 * 예시 호출 (2)
 */

aShipment.deliveryDate = regularDeliveryDate(anOrder);
console.log(aShipment.deliveryDate);

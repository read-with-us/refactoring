/**
 * p170 예시
 */

function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;

  function moreThanFiveLateDeliveries(dvr) {
    return dvr.numberOfLateDeliveries > 5;
  }
}

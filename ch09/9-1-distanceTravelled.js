/**
 * p331 예시
 */

function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
  return result;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const scenario = {
  primaryForce: 100,
  secondaryForce: 200,
  mass: 50,
  delay: 10,
};
const time = 20;
console.log(distanceTravelled(scenario, time));

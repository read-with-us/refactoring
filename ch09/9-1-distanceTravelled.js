/**
 * p331 예시
 */

function distanceTravelled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  // 두 번째 힘을 반영해 다시 계산
  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
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

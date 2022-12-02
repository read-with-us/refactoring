/**
 * 예시 실행을 위한 임의의 코드
 */

const points = [{ elevation: 5000 }, { elevation: 8000 }];

/**
 * p462 예시
 */

const totalAscent = calculateAscent();
const totalTime = calculateTime();
const totalDistance = calculateDistance();
const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

function calculateTime() {
  let result = 0;
  result = 360;
  return result;
}

function calculateDistance() {
  let result = 0;
  result = 1000;
  return result;
}

console.log(pace);

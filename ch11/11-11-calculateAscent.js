/**
 * 예시 실행을 위한 임의의 코드
 */

const points = [{ elevation: 5000 }, { elevation: 8000 }];

/**
 * p462 예시
 */

let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;
totalAscent = calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    totalAscent += verticalChange > 0 ? verticalChange : 0;
  }
  return totalAscent;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

function calculateTime() {
  totalTime = 360;
}

function calculateDistance() {
  totalDistance = 1000;
}

console.log(pace);

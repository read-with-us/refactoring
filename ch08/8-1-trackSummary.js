/**
 * p280 예시
 */

function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);

  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace,
  };

  function calculateTime() {
    /**
     * 예시 실행을 위한 임의의 코드
     */
    return 46800;
  }
}

function totalDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;

  function distance(p1, p2) {
    // 하버사인 공식(haversine formula)은 다음 사이트를 참고하자.
    // http://www.movable-type.co.uk/scripts/latlong.html
    const EARTH_RADIUS = 3959; // 단위: 마일(mile)
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.cos(radians(p2.lat)) *
        Math.cos(radians(p1.lat)) *
        Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }

  function radians(degrees) {
    return (degrees * Math.PI) / 180;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const seoul = {
  lat: 37.5665,
  lon: 126.978,
};

const england = {
  lat: 52.3555,
  lon: 1.1743,
};

const track = trackSummary([seoul, england]);
console.log(track);

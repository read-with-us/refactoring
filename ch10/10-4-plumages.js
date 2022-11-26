/**
 * p368 예시
 */

function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  switch (bird.type) {
    case '유럽 제비':
      return '보통이다';
    case '아프리카 제비':
      return bird.numberOfCoconuts > 2 ? '지쳤다' : '보통이다';
    case '노르웨이 파랑 앵무':
      return bird.voltage > 100 ? '그을렸다' : '예쁘다';
    default:
      return '알 수 없다';
  }
}

function airSpeedVelocity(bird) {
  switch (bird.type) {
    case '유럽 제비':
      return 35;
    case '아프리카 제비':
      return 40 - 2 * bird.numberOfCoconuts;
    case '노르웨이 파랑 앵무':
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const birds = [
  {
    name: '유럽 제비',
    type: '유럽 제비',
    numberOfCoconuts: 2,
    voltage: 0,
    isNailed: false,
  },
  {
    name: '아프리카 제비',
    type: '아프리카 제비',
    numberOfCoconuts: 2,
    voltage: 0,
    isNailed: false,
  },
  {
    name: '앵무',
    type: '노르웨이 파랑 앵무',
    numberOfCoconuts: 2,
    voltage: 0,
    isNailed: false,
  },
];

console.log(plumages(birds));
console.log(speeds(birds));

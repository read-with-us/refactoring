/**
 * p368 예시
 */

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    switch (this.type) {
      case '유럽 제비':
        throw '오류 발생';
      case '아프리카 제비':
        throw '오류 발생';
      case '노르웨이 파랑 앵무':
        throw '오류 발생';
      default:
        return '알 수 없다';
    }
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case '유럽 제비':
        return 35;
      case '아프리카 제비':
        return 40 - 2 * this.numberOfCoconuts;
      case '노르웨이 파랑 앵무':
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}

function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return '보통이다';
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? '지쳤다' : '보통이다';
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? '그을렸다' : '예쁘다';
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

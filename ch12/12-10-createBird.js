/**
 * p518 예시
 */

function createBird(data) {
  switch (data.type) {
    case "아프리카 제비":
      return new AfricanSwallow(data);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(data);
    default:
      return new Bird(data);
  }
}

class Bird {
  #name;
  constructor(data) {
    this.#name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }

  selectSpeciesDelegate(data) {
    switch (data.type) {
      case "유럽 제비":
        return new EuropeanSwallowDelegate();
      case "아프리카 제비":
        return new AfricanSwallowDelegate(data);
      default:
        return null;
    }
  }

  get name() {
    return this.#name;
  }
  get plumage() {
    return this._plumage || "보통이다";
  }
  get airSpeedVelocity() {
    return this._speciesDelegate
      ? this._speciesDelegate.airSpeedVelocity
      : null;
  }
}

class EuropeanSwallowDelegate {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  #numberOfCoconuts;
  constructor(data) {
    super(data);
    this.#numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.#numberOfCoconuts;
  }
}

class AfricanSwallowDelegate {
  #numberOfCoconuts;
  constructor(data) {
    this.#numberOfCoconuts = data.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  #voltage;
  #isNailed;
  constructor(data) {
    super(data);
    this.#voltage = data.voltage;
    this.#isNailed = data.isNailed;
  }

  get plumage() {
    if (this.#voltage > 100) return "그을렸다";
    else return this._plumage || "예쁘다";
  }
  get airSpeedVelocity() {
    return this.#isNailed ? 0 : 10 + this.#voltage / 10;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const data = [
  {
    name: "새",
  },
  {
    name: "유럽 제비",
    type: "유럽 제비",
  },
  {
    name: "아프리카 제비",
    type: "아프리카 제비",
    numberOfCoconuts: 2,
  },
  {
    name: "노르웨이 파랑 앵무",
    type: "노르웨이 파랑 앵무",
    voltage: 0,
    isNailed: false,
  },
];

const birds = data.map((d) => createBird(d));

birds.forEach((b) => console.log(b.name, b.plumage, b.airSpeedVelocity));

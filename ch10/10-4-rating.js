/**
 * p375 예시
 */

function rating(voyage, history) {
  return createRating(voyage, history).value;
}

class Rating {
  #voyage;
  #history;
  constructor(voyage, history) {
    this.#voyage = voyage;
    this.#history = history;
  }
  get voyage() {
    return this.#voyage;
  }
  get history() {
    return this.#history;
  }

  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > vr + chr + 2) return 'A';
    else return 'B';
  }

  get voyageRisk() {
    let result = 1;
    if (this.#voyage.length > 4) result += 2;
    if (this.#voyage.length > 8) result += this.#voyage.length - 8;
    if (['중국', '동인도'].includes(this.#voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this.#history.length < 5) result += 4;
    result += this.#history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;
    if (this.#voyage.zone === '중국') result += 1;
    if (this.#voyage.zone === '동인동') result += 1;
    result += this.historyLengthFactor;
    result += this.voyageLengthFactor;
    return result;
  }

  get voyageLengthFactor() {
    return this.#voyage.length > 14 ? -1 : 0;
  }

  get historyLengthFactor() {
    return this.#history.length > 8 ? 1 : 0;
  }

  get hasChinaHistory() {
    return this.#history.some((v) => '중국' === v.zone);
  }
}

class ExperiencedChinaRating extends Rating {
  constructor(voyage, history) {
    super(voyage, history);
  }

  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get voyageLengthFactor() {
    let result = 0;
    result += 3;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }

  get historyLengthFactor() {
    return this.history.length > 10 ? 1 : 0;
  }
}

function createRating(voyage, history) {
  if (voyage.zone === '중국' && history.some((v) => '중국' === v.zone)) {
    return new ExperiencedChinaRating(voyage, history);
  } else {
    return new Rating(voyage, history);
  }
}

/**
 * 예시 코드 사용
 */

const voyage = {
  zone: '서인도',
  length: 10,
};

const history = [
  { zone: '동인도', profit: 5 },
  { zone: '서인도', profit: 15 },
  { zone: '중국', profit: -2 },
  { zone: '서아프리카', profit: 7 },
];

const myRating = rating(voyage, history);

/**
 * 예시 실행을 위한 임의의 코드
 */

console.log(myRating);

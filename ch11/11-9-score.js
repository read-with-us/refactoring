/**
 * p450 예시
 */

function score(candidate, medicalExam, scoringGuide) {
  return new Score(candidate, medicalExam, scoringGuide).execute();
}

class Score {
  #candidate;
  #medicalExam;
  #scoringGuide;
  #result;
  #healthLevel;
  #highMedicalRiskFlag;
  constructor(candidate, medicalExam, scoringGuide) {
    this.#candidate = candidate;
    this.#medicalExam = medicalExam;
    this.#scoringGuide = scoringGuide;
  }

  execute() {
    this.#result = 0;
    this.#healthLevel = 0;
    this.#highMedicalRiskFlag = false;

    if (this.#medicalExam.isSmoker) {
      this.#healthLevel += 10;
      this.#highMedicalRiskFlag = true;
    }
    let certificationGrade = 'regular';
    if (
      this.#scoringGuide.stateWithLowCertification(this.#candidate.originState)
    ) {
      certificationGrade = 'low';
      this.#result -= 5;
    }
    // 비슷한 코드가 한참 이어짐
    this.#result -= Math.max(this.#healthLevel - 5, 0);
    return this.#result;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const candidate = {
  originState: 'state',
};
const medicalExam = {
  isSmoker: false,
};
const scoringGuide = {
  stateWithLowCertification: (state) => true,
};

console.log(score(candidate, medicalExam, scoringGuide));

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
  constructor(candidate, medicalExam, scoringGuide) {
    this.#candidate = candidate;
    this.#medicalExam = medicalExam;
    this.#scoringGuide = scoringGuide;
  }

  execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this.#medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = 'regular';
    if (
      this.#scoringGuide.stateWithLowCertification(this.#candidate.originState)
    ) {
      certificationGrade = 'low';
      result -= 5;
    }
    // 비슷한 코드가 한참 이어짐
    result -= Math.max(healthLevel - 5, 0);
    return result;
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

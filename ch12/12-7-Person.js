/**
 * p496 예시
 */

class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode || "X";
  }
  get name() {
    return this.#name;
  }
  get genderCode() {
    return this.#genderCode;
  }
  get isMale() {
    return "M" === this.#genderCode;
  }
  // 생략
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const data = [
  { name: "마틴 파울러", gender: "M" },
  { name: "레베카 파슨스", gender: "F" },
  { name: "리팩터링" },
];
const people = loadFromInput(data);

/**
 * 예시 호출
 */

function createPerson(aRecord) {
  switch (aRecord.gender) {
    case "M":
      return new Person(aRecord.name, "M");
    case "F":
      return new Female(aRecord.name);
    default:
      return new Person(aRecord.name);
  }
}

function loadFromInput(data) {
  return data.map((aRecord) => createPerson(aRecord));
}

const numberOfMales = people.filter((p) => p.isMale).length;

console.log(numberOfMales);

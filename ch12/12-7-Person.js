/**
 * p496 예시
 */

class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  get genderCode() {
    return "X";
  }
  // 생략
}

class Male extends Person {
  get genderCode() {
    return "M";
  }
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
      return new Male(aRecord.name);
    case "F":
      return new Female(aRecord.name);
    default:
      return new Person(aRecord.name);
  }
}

function loadFromInput(data) {
  return data.map((aRecord) => createPerson(aRecord));
}

const numberOfMales = people.filter((p) => p instanceof Male).length;

console.log(numberOfMales);

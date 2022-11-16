/**
 * p248 예시
 */

class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }
  get courses() {
    return this.#courses.slice();
  }
  set courses(aList) {
    this.#courses = aList.slice();
  }
  addCourse(aCourse) {
    this.#courses.push(aCourse);
  }
  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this.#courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this.#courses.splice(index, 1);
  }
}

class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }
  get isAdvanced() {
    return this.#isAdvanced;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const filename = 'refactoring';

const courses = {
  refactoring: ['Encapsulate Record', 'Encapsulate Collection'],
};

function readBasicCourseNames(filename) {
  return courses[filename];
}

/**
 * 예시 코드 사용
 */

const aPerson = new Person('kim');
const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;
for (const name of readBasicCourseNames(filename)) {
  aPerson.addCourse(new Course(name, false));
}

console.log(aPerson.name);
for (const course of aPerson.courses) {
  console.log(course.name, course.isAdvanced);
}
console.log(numAdvancedCourses);

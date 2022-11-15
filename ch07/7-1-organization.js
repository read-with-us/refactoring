/**
 * p238 예시
 */

class Organization {
  #data;
  constructor(data) {
    this.#data = data;
  }

  get data() {
    return this.#data;
  }

  get name() {
    return this.#data.name;
  }

  get country() {
    return this.#data.country;
  }

  set name(aString) {
    this.#data.name = aString;
  }

  set country(aCountryCode) {
    this.#data.country = aCountryCode;
  }
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});

function getOrganization() {
  return organization;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

let result = '';

/**
 * 예시 코드 사용
 */

result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = 'newName';

console.log(result);
console.log(getOrganization().name, getOrganization().country);

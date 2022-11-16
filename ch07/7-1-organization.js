/**
 * p238 예시
 */

class Organization {
  #name;
  #country;
  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  set name(aString) {
    this.#name = aString;
  }

  set country(aCountryCode) {
    this.#country = aCountryCode;
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

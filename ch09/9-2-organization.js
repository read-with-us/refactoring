/**
 * p335 예시
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
  set name(aString) {
    this.#name = aString;
  }
  get country() {
    return this.#country;
  }
  set country(aCountryCode) {
    this.#country = aCountryCode;
  }
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});

/**
 * 예시 실행을 위한 임의의 코드
 */
console.log(organization.name, organization.country);

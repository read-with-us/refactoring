/**
 * p335 예시
 */

class Organization {
  #title;
  #country;
  constructor(data) {
    this.#title = data.title;
    this.#country = data.country;
  }

  get name() {
    return this.#title;
  }
  set name(aString) {
    this.#title = aString;
  }
  get country() {
    return this.#country;
  }
  set country(aCountryCode) {
    this.#country = aCountryCode;
  }
}

const organization = new Organization({
  title: '애크미 구스베리',
  country: 'GB',
});

/**
 * 예시 실행을 위한 임의의 코드
 */
console.log(organization.name, organization.country);

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
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});

function getRawDataOfOrganization() {
  return organization.data;
}

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

result += `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = 'newName';

console.log(result);
console.log(
  getRawDataOfOrganization().name,
  getRawDataOfOrganization().country
);

/**
 * p238 예시
 */

const organization = { name: '애크미 구스베리', country: 'GB' };

/**
 * 예시 실행을 위한 임의의 코드
 */

let result = '';

/**
 * 예시 코드 사용
 */

result += `<h1>${organization.name}</h1>`; // <- 읽기 예
organization.name = 'newName'; // <- 쓰기 예

console.log(result);
console.log(organization.name, organization.country);

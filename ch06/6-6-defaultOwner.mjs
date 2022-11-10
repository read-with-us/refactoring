/**
 * p190 예시
 */

let defaultOwnerData = { firstName: '마틴', lastName: '파울러' };

export function defaultOwner() {
  return Object.assign({}, defaultOwnerData);
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const spaceship = {
  owner: '',
};

/**
 * 예시 참조 & 갱신
 */

spaceship.owner = defaultOwner();

setDefaultOwner({ firstName: '레베카', lastName: '파슨스' });

console.log('spaceship owner: ', spaceship.owner);
console.log('default owner: ', defaultOwnerData);

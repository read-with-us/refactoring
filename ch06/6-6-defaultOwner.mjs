/**
 * p190 예시
 */

let defaultOwner = { firstName: '마틴', lastName: '파울러' };

function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
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

spaceship.owner = defaultOwner;

defaultOwner = { firstName: '레베카', lastName: '파슨스' };

console.log('spaceship owner: ', spaceship.owner);
console.log('default owner: ', defaultOwner);

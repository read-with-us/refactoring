/**
 * p195 예시
 */

let tpHd = 'untitled';

function title() {
  return tpHd;
}

function setTitle(arg) {
  tpHd = arg;
}

/**
 * 예시 실행을 위한 임의의 코드
 */

let result = '';
const obj = {
  articleTitle: '제목',
};

/**
 * 예시 참조 & 수정
 */

result += `<h1>${title()}</h1>`;

setTitle(obj['articleTitle']);

console.log(result);
console.log(tpHd);

/**
 * p297 예시
 */

function renderPerson(outStream, person) {
  const result = [];

  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

function photoDiv(p) {
  return ['<div>', emitPhotoData(p), '</div>'].join('\n');
}

function emitPhotoData(p) {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${p.location}</p>`,
    `<p>날짜: ${p.date.toString()}</p>`,
  ].join('\n');
}

/**
 * 예시 실행을 위한 임의의 코드
 */

function renderPhoto(photo) {
  const result = [];
  result.push(`<img src="${photo.src}" alt="${photo.alt}" />`);
  return result.join('\n');
}

const rawPersonData = {
  name: '마틴 파울러',
  photo: {
    src: 'https://commons.wikimedia.org/wiki/File:Webysther_20150414193208_-_Martin_Fowler.jpg',
    alt: 'Martin Fowler.jpg',
    title: '리팩터링 저자',
    location: '영국',
    date: new Date('2022-11-19'),
  },
};

const person = renderPerson('_', rawPersonData);

console.log(person);

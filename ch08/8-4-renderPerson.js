/**
 * p302 예시
 */

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  outStream.write(`<p>위치: ${person.photo.location}</p>`);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, p);
      outStream.write(`<p>위치: ${p.location}</p>`);
      outStream.write('</div>\n');
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>`);
  outStream.write(`<p>날짜: ${photo.date.toString()}</p>`);
}

/**
 * 예시 실행을 위한 임의의 코드
 */

function renderPhoto(photo) {
  outStream.write(`<img src="${photo.src}" alt="${photo.alt}" />`);
}

function recentDateCutoff() {
  return new Date('2022-11-20');
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

const photos = [
  {
    src: 'https://commons.wikimedia.org/wiki/File:Webysther_20150414193208_-_Martin_Fowler.jpg',
    alt: 'Martin Fowler.jpg',
    title: '리팩터링 저자',
    location: '영국',
    date: new Date('2022-11-19'),
  },
  {
    src: 'https://github.com/read-with-us/refactoring/blob/main/images/cover.jpg',
    alt: '리팩터링 표지',
    title: '리팩터링 책',
    location: '한국',
    date: new Date('2022-11-26'),
  },
];

const outStream = {
  write: function (content) {
    console.log(content);
  },
};

renderPerson(outStream, rawPersonData);
listRecentPhotos(outStream, photos);

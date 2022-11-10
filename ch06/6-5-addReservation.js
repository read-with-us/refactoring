/**
 * p184 예시
 */

class Book {
  constructor() {
    this._reservations = [];
  }

  get reservations() {
    return this._reservations;
  }

  addReservation(customer) {
    this.zz_addReservation(customer);
  }

  zz_addReservation(customer) {
    this._reservations.push(customer);
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const book = new Book();
const customer = { name: '마틴 파울러' };
book.addReservation(customer);

console.log(book.reservations);

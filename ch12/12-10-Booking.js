/**
 * p510 예시
 */

class Booking {
  #show;
  #date;
  constructor(show, date) {
    this.#show = show;
    this.#date = date;
  }
  get show() {
    return this.#show;
  }

  get isPeakDay() {
    return this.#date === "2022-12-08";
  }
  get hasTalkback() {
    return this.#show.hasOwnProperty("talkback") && !this.isPeakDay;
  }
  get basePrice() {
    let result = this.#show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }
}

class PremiumBooking extends Booking {
  #extras;
  constructor(show, date, extras) {
    super(show, date);
    this.#extras = extras;
  }
  get hasTalkback() {
    return this.show.hasOwnProperty("talkback");
  }
  get basePrice() {
    return Math.round(super.basePrice + this.#extras.premiumFee);
  }
  get hasDinner() {
    return this.#extras.hasOwnProperty("dinner") && !this.isPeakDay;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const show = {
  talkback: true,
  price: 1000,
};
const date = "2022-12-08";

const premiumShow = {
  talkback: true,
  price: 5000,
};
const premiumDate = "2022-12-09";
const extras = {
  premiumFee: 3000,
  dinner: true,
};

/**
 * 예시 호출
 */

const aBooking = new Booking(show, date);
const aPremiumBooking = new PremiumBooking(premiumShow, premiumDate, extras);

console.log(aBooking.hasTalkback, aBooking.basePrice);
console.log(
  aPremiumBooking.hasTalkback,
  aPremiumBooking.basePrice,
  aPremiumBooking.hasDinner
);

/**
 * p510 예시
 */

class Booking {
  #show;
  #date;
  #premiumDelegate;
  constructor(show, date) {
    this.#show = show;
    this.#date = date;
  }
  get show() {
    return this.#show;
  }
  get premiumDelegate() {
    return this.#premiumDelegate;
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

  _bePremium(extras) {
    this.#premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}

class PremiumBooking extends Booking {
  #extras;
  constructor(show, date, extras) {
    super(show, date);
    this.#extras = extras;
  }
  get hasTalkback() {
    return this.premiumDelegate.hasTalkback;
  }
  get basePrice() {
    return Math.round(super.basePrice + this.#extras.premiumFee);
  }
  get hasDinner() {
    return this.#extras.hasOwnProperty("dinner") && !this.isPeakDay;
  }
}

class PremiumBookingDelegate {
  #host;
  #extras;
  constructor(hostBooking, extras) {
    this.#host = hostBooking;
    this.#extras = extras;
  }

  get hasTalkback() {
    return this.#host.show.hasOwnProperty("talkback");
  }
}

function createBooking(show, date) {
  return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
  const result = new PremiumBooking(show, date, extras);
  result._bePremium(extras);
  return result;
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

const aBooking = createBooking(show, date);
const aPremiumBooking = createPremiumBooking(premiumShow, premiumDate, extras);

console.log(aBooking.hasTalkback, aBooking.basePrice);
console.log(
  aPremiumBooking.hasTalkback,
  aPremiumBooking.basePrice,
  aPremiumBooking.hasDinner
);

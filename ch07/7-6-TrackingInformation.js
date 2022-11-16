/**
 * p265 예시
 */

class TrackingInformation {
  #shippingCompany;
  #trackingNumber;
  constructor(shippingCompany, trackingNumber) {
    this.#shippingCompany = shippingCompany;
    this.#trackingNumber = trackingNumber;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }
  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }
  get trackingNumber() {
    return this.#trackingNumber;
  }
  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  #trackingInformation;
  constructor(trackingInformation) {
    this.#trackingInformation = trackingInformation;
  }

  get trackingInfo() {
    return this.#trackingInformation.display;
  }
  get trackingInformation() {
    return this.#trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this.#trackingInformation = aTrackingInformation;
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const shippingCompany = '배송회사';
const trackingNumber = 1452;
const aShipment = new Shipment(
  new TrackingInformation(shippingCompany, trackingNumber)
);

const request = {
  vendor: '벤더사',
};

/**
 * 예시 코드 사용
 */

aShipment.trackingInformation.shippingCompany = request.vendor;

console.log(aShipment.trackingInfo);

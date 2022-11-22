/**
 * p339 예시
 */

class ProductionPlan {
  #production;
  #adjustments;
  constructor(production) {
    /**
     * 예시 실행을 위한 임의의 코드
     */
    this.#production = production;
    this.#adjustments = [{ amount: production }];
  }

  get production() {
    return this.#adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(anAdjustment) {
    this.#adjustments.push(anAdjustment);
  }
}

/**
 * 예시 실행을 위한 임의의 코드
 */

const production = 100;
const productionPlan = new ProductionPlan(production);
const adjustment = {
  amount: 20,
};
productionPlan.applyAdjustment(adjustment);

console.log(productionPlan.production);

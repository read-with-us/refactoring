import assert from 'assert';

/**
 * p341 예시
 */

class ProductionPlan {
  #initialProduction;
  #productionAccumulator;
  #adjustments;
  constructor(production) {
    this.#initialProduction = production;
    this.#productionAccumulator = 0;
    this.#adjustments = [];
  }

  get production() {
    assert(
      this.#productionAccumulator === this.calculatedProductionAccumulator
    );
    return this.#initialProduction + this.#productionAccumulator;
  }
  get calculatedProductionAccumulator() {
    return this.#adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(anAdjustment) {
    this.#adjustments.push(anAdjustment);
    this.#productionAccumulator += anAdjustment.amount;
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

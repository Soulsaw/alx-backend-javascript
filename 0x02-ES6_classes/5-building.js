export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  get sqrt() {
    return this._sqft;
  }

  set sqrt(sqft) {
    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('sqrt must be a number');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

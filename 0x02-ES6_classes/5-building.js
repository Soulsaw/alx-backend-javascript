export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default class Building {
  constructor(sqrt) {
    this.sqrt = sqrt;
  }

  get sqrt() {
    return this._sqrt;
  }

  set sqrt(sqrt) {
    if (typeof (sqrt) === 'number') {
      this._sqrt = sqrt;
    } else {
      throw new TypeError('sqrt must be a number');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

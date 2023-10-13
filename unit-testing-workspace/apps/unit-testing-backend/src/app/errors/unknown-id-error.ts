export class UnknownIdError extends Error {
  constructor(args) {
    super(args);
    this.name = 'UnknownIdError';
  }
}

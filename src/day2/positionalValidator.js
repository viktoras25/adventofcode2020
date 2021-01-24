export default class PositionValidator {
  constructor(password, condition) {
    this.password = password;
    this.condition = condition;
  }

  valid() {
    const firstPosition = this.password.substr(this.condition.min - 1, 1);
    const secondPosition = this.password.substr(this.condition.max - 1, 1);

    return firstPosition !== secondPosition
      && (
        firstPosition === this.condition.requiredChar
        || secondPosition === this.condition.requiredChar
      );
  }
}

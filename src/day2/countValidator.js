export default class CountValidator {
  constructor(password, condition) {
    this.password = password;
    this.condition = condition;
  }

  valid() {
    const regex = new RegExp(`${this.condition.requiredChar}`, 'g');
    const occurrences = (this.password.match(regex) || []).length;

    return this.condition.min <= occurrences && this.condition.max >= occurrences;
  }
}

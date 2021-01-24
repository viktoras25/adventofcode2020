import input from './input';
import CountValidator from './countValidator';
import PositionValidator from './positionalValidator';
import InputParser from './inputParser';

export default {
  part1() {
    const parser = new InputParser(input);
    let validPasswords = 0;

    for (const [password, condition] of parser.parse()) {
      const validator = new CountValidator(password, condition);

      if (validator.valid()) {
        validPasswords += 1;
      }
    }

    return validPasswords;
  },

  part2() {
    const parser = new InputParser(input);
    let validPasswords = 0;

    for (const [password, condition] of parser.parse()) {
      const validator = new PositionValidator(password, condition);

      if (validator.valid()) {
        validPasswords += 1;
      }
    }

    return validPasswords;
  },
};

import Condition from './condition';

export default class InputParser {
  constructor(input) {
    this.data = input;
  }

  * parse() {
    // yield* this.data.forEach(function* each(item) {
    //   const [range, character, password] = item.split(' ');
    //   const [from, to] = range.split('-');
    //
    //   const condition = new Condition(character.substr(0, 1), from, to);
    //
    //   yield [password, condition];
    // });

    for (const item of this.data) {
      const [range, character, password] = item.split(' ');
      const [from, to] = range.split('-');

      const condition = new Condition(character.substr(0, 1), from, to);

      yield [password, condition];
    }
  }
}

import input from './input';
import Map from './map';

export default {
  part1() {
    const map = new Map(input);

    return map.traverse(3, 1);
  },

  part2() {
    const map = new Map(input);
    const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

    return slopes
      .map(slope => map.traverse(...slope))
      .reduce((acc, current) => acc *= current, 1);
  },
};

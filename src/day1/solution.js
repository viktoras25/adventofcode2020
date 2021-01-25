import numbers from './input';

export default {
  part1() {
    for (let i = 0; i < numbers.length - 1; i += 1) {
      for (let j = i + 1; j < numbers.length; j += 1) {
        if (numbers[i] + numbers[j] === 2020) {
          return numbers[i] * numbers[j];
        }
      }
    }

    return 0;
  },

  part2() {
    for (let i = 0; i < numbers.length - 2; i += 1) {
      for (let j = i + 1; j < numbers.length - 1; j += 1) {
        for (let k = j + 1; k < numbers.length; k += 1) {
          if (numbers[i] + numbers[j] + numbers[k] === 2020) {
            return numbers[i] * numbers[j] * numbers[k];
          }
        }
      }
    }

    return 0;
  },
};

const tree = '#';

export default class Map {
  constructor(textRepresentation) {
    this.parse(textRepresentation);
    this.baseHeight = this.cells.length;
    this.baseWidth = this.cells[0].length;
  }

  parse(textRepresentation) {
    this.cells = textRepresentation
      .split('\n')
      .map((line) => line.split(''));
  }

  isTree(originalX, originalY) {
    let x = originalX;
    let y = originalY;

    while (x >= this.baseWidth) {
      x %= this.baseWidth;
    }

    while (y >= this.baseHeight) {
      y %= this.baseHeight;
    }

    return this.cells[y][x] === tree;
  }

  traverse(stepX = 3, stepY = 1) {
    let y = 0;
    let x = 0;
    let trees = 0;

    while (y < this.baseHeight) {
      if (this.isTree(x, y)) {
        trees += 1;
      }

      y += stepY;
      x += stepX;
    }

    return trees;
  }
}

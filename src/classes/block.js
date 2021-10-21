import { col, css, row } from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('toHTML method should be realized');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h1', styles } = this.options; // destructurisation
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { imageStyles, styles } = this.options;
    return row(
      `<img src="${this.value}" alt="picture" style="${css(imageStyles)}"/>`,
      css(styles)
    );
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const html = this.value.map((item) => col(item));
    return row(html.join(''), css(this.options.styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles));
  }
}

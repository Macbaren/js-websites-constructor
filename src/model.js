import image from './assets/image.png';
import {
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
  TextBlock,
} from './classes/block';

const text = `
  Coolest github account you can find here: <a href="https://github.com/Macbaren" target="_blank">Macbaren</a>
`;

export const model = [
  new TitleBlock('JS Websites Constructor', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493249)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem',
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
  }),
  new ColumnsBlock(
    [
      'This is pure js app, without using libraries',
      'Based on SOLID and OOP principals',
      'JS its simple. Create your own UI',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),
];

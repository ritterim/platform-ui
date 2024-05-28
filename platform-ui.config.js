export default {
  name: 'Platform UI',
  output: {
    directory: './src/styles/',
    filename: 'platform-ui.css',
  },
  tokens: {
    color: [
      { name: 'gold-200', value: '#D8CBB7' },
      { name: 'gold-400', value: '#A9905F' },
      { name: 'gold-500', value: '#A08359' },
      { name: 'navy-400', value: '#052A63' },
      { name: 'navy-500', value: '#002856' },
      { name: 'blue-100', value: '#F4F8FB' },
      { name: 'blue-200', value: '#D8E9F9' },
      { name: 'blue-300', value: '#54A9FA' },
      { name: 'blue-400', value: '#4178FF' },
      { name: 'blue-500', value: '#3174F8' },
      { name: 'grayscale-100', value: '#FFFFFF' },
      { name: 'grayscale-200', value: '#F1F1F1' },
      { name: 'grayscale-300', value: '#B9B9B9' },
      { name: 'grayscale-500', value: '#4F555A' },
      { name: 'grayscale-600', value: '#434A51' },
      { name: 'green-400', value: '#3FCF69' },
      { name: 'green-500', value: '#009227' },
      { name: 'yellow-500', value: '#FFD537' },
      { name: 'red-500', value: '#DF2E1F' },
    ],
    typography: {
      font: [
        { name: 'body', value: 'system-ui' },
        { name: 'header', value: 'system-ui' },
      ],
    },
  },
};
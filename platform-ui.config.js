export default {
  name: 'Platform UI',
  output: {
    directory: './src/styles/',
    filename: 'platform-ui.css',
  },
  tokens: {
    color: [
      { name: 'Navy', value: '#003f70' },
      { name: 'Skyblue', value: '#91b9dc' },
      { name: 'Lightblue', value: '#e5f5ff' },
      { name: 'Med-Blue', value: '#3f7bad' },
      { name: 'Beige', value: '#ecd7b1' },
      { name: 'Peach', value: '#dfa278' },
      { name: 'Salmon', value: '#e58967' },
      { name: 'Brown', value: '#866657' },
      { name: 'Orange', value: '#f48418' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Lighter', value: '#efefef' },
      { name: 'Light', value: '#999' },
      { name: 'Base', value: '#666' },
      { name: 'Dark', value: '#333' },
      { name: 'Black', value: '#222' },
    ],
    space: [
      { name: 'xl', value: '4rem' },
      { name: 'lg', value: '3rem' },
      { name: 'md', value: '2rem' },
    ],
    typography: {
      font: [
        { name: 'body', value: 'system-ui' },
        { name: 'header', value: 'system-ui' },
      ],
      size: [
        { name: 'xl', value: '4rem' },
        { name: 'lg', value: '3rem' },
        { name: 'md', value: '1rem' },
      ],
    },
  },
};
var data = {
  labels: ['2016', '2017', '2018'],
  series: [
    {
      data: [null, null, 73]
    }
  ]
};

var responsiveOptions = [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
    showPoint: false
  }],
  ['screen and (max-width: 640px)', {
    showLine: false
  }]
];

new Chartist.Line('.insight-chart', data, responsiveOptions);

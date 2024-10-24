Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Strawberries', 'Apples', 'Bananas', 'Oranges', ]
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Ashley and Sara\'s house'
      }
    },
    series: [{
      name: 'Ashley',
      data: [6, 1, 0, 4, ]
    }, {
      name: 'Sara',
      data: [6, 5, 7, 3, ]
    }]
  });

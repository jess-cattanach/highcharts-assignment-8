//chart 1
Highcharts.chart('container', {

    title: {
        text: 'Reciepts of Sexual Harassment Charges Over the Last 10 Years',
        align: 'left'
    },

    subtitle: {
        text: 'Source: U.S Equal Employment Opportunity Commission',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Number in the Thousands'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2013 to 2023'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2013
        }
    },

    series: [{
        name: 'Receipts of Charges',
        data: [
            7256, 6862, 6822, 6758, 6696, 7609,
            7514, 6587, 5581, 6201, 7732
        ]
   
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

//chart 2
Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Monetary Compensation Per Year',
        align: 'left'
    },
    subtitle: {
        text:
            'Source: U.S Equal Employment Opportunity Commission',
        align: 'left'
    },
    xAxis: {
        categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        crosshair: true,
        accessibility: {
            description: 'Years'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Amount in Millions of Dollars'
        }
    },
    tooltip: {
        valueSuffix: ' (mill)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Year',
            data: [44.6, 35, 46, 40.7, 46.3, 56.6, 68.2, 65.3, 61.6, 59, 60.6]
        },
       
    ]
});

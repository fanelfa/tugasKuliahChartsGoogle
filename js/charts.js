google.charts.load('current', {
    packages: ['corechart', 'bar', 'treemap', 'geochart'],
    mapsApiKey: 'AIzaSyC9k8r0vjTs9k5ecs_r3Ltq-JTg7r4wq1A',
});




// utils
function getLabel(minn, maxx, stepp) {
    var arr = [];
    for (i = minn; i <= maxx; i += stepp) {
        arr.push(i);
    }
    return arr;

};



// Combo Chart [Bar, Line]

google.charts.setOnLoadCallback(drawBarLine);

function drawBarLine() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Change Off');
    data.addColumn('number', 'Current');
    data.addColumn('number', 'Default');
    data.addColumn('number', 'Fully Paid');
    data.addColumn('number', 'Average of int_rate');

    data.addRows([
        ['CA', .01, .02, .00, .03, .07],
        ['NY', .01, .02, .00, .03, .07],
        ['TX', .02, .01, .01, .03, .07],
        ['FL', .02, .01, .00, .03, .07],
        ['IL', .02, .01, .00, .03, .07],
        ['NI', .01, .01, .00, .03, .06],
        ['PA', .02, .01, .01, .03, .08],
        ['OH', .02, .01, .00, .03, .07],
    ])

    var options = {
        title: 'Loan Statuses & Average Interest Rate By State',
        width: 900,
        height: 400,
        legend: { position: 'bottom'},
        bar: { groupWidth: '80%' },
        isStacked: true,
        hAxis: {
            minValue: 0
        },
        vAxis: {
            minValue: 0,
            ticks: getLabel(0, .16, .02),
            format: '#,##0.0 %',
            gridlines: {
                color: 'transparent'
            }
        },
        seriesType: 'bars',
        series: {
            0: { color: '#03a9f4' },
            1: { color: '#01579b' },
            2: { color: '#1976d2' },
            3: { color: '#0d47a1' },
            4: { type: 'line', color: '#e65100', lineDashStyle: [10, 2] },
        },
        pointSize: 5,
    };

    var chart = new google.visualization.ComboChart(document.getElementById('BarLine'));
    chart.draw(data, options);
}



google.charts.setOnLoadCallback(drawAreaSolidLine);

function drawAreaSolidLine(){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'A');
    data.addColumn('number', 'B');
    data.addColumn('number', 'C');
    data.addColumn('number', 'D');
    data.addColumn('number', 'E');
    data.addColumn('number', 'F');
    data.addColumn('number', 'G');

    data.addRows([
        ['CA', .03, .035, .035, .027, .023, .025, .025, ],
        ['NY', .025, .025, .025, .025, .02, .02, .024, ],
        ['TX', .02,  .02,  .02,  .02,  .02,  .02,  .02,  ],
        ['FL', .017, .017, .017, .017, .017, .017, .017, ],
        ['IL', .013, .013, .01, .01, .01, .013, .013, ],
        ['NI', .01,  .01,  .01,  .007,  .007,  .007,  .01,  ],
        ['PA', .004, .004, .004, .004, .004, .004, .004, ],
        ['OH', .002, .002, .002, .002, .002, .002, .002, ],
    ])

    var options = {
        title: 'Loan Grade Distribution % State',
        width: 900,
        height: 400,
        legend: { position: 'bottom' },
        isStacked: true,
        hAxis: {
            minValue: 0
        },
        vAxis: {
            minValue: 0,
            ticks: getLabel(0, .2, .05),
            format: '#,##0.0 %',
            gridlines: {
                color: 'transparent'
            }
        },
        series: {
            0: { color: '#0d47a1' },
            1: { color: '#1565c0' },
            2: { color: '#1976d2' },
            3: { color: '#1e88e5' },
            4: { color: '#2196f3' },
            5: { color: '#42a5f5' },
            6: { color: '#90caf9' },
        },
    };

    var chart = new google.visualization.AreaChart(document.getElementById('AreaSolidLine'));
    chart.draw(data, options);
}




google.charts.setOnLoadCallback(drawAreaStrippedLine);

function drawAreaStrippedLine(){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Average of annual_inc');
    data.addColumn('number', 'Average of funded_amnt');

    data.addRows([
        ['CA', 100, 85, ],
        ['NY', 99,  84, ],
        ['TX', 97,  84,  ],
        ['FL', 96,  83, ],
        ['IL', 96,  82, ],
        ['NI', 95,  82,  ],
        ['PA', 95,  81, ],
        ['OH', 94,  80, ],
        ['NH', 94,  78, ],
        ['DE', 93,  77.5, ],
        ['CO', 91,  77, ],
    ])

    var options = {
        title: 'Average Annual Income & Funded Amount By State',
        width: 900,
        height: 400,
        legend: { position: 'bottom' },
        hAxis: {
            minValue: 0
        },
        vAxis: {
            minValue: 0,
            ticks: getLabel(40, 100, 20),
            format: '$##K',
            gridlines: {
                color: 'transparent'
            }
        },
        series: {
            0: { color: '#2196f3', lineDashStyle: [10, 2] },
            1: { color: '#0d47a1', lineDashStyle: [10, 2] },
        },
        pointSize: 5,
    };

    var chart = new google.visualization.AreaChart(document.getElementById('AreaStrippedLine'));
    chart.draw(data, options);
}


google.charts.setOnLoadCallback(drawBar);

function drawBar() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Change Off');
    data.addColumn({ type: 'string', role: 'style' });

    data.addRows([
        ['CA', .07, '#0d47a1' ],
        ['NY', .11, '#0288d1' ],
        ['TX', .13, '#0288d1' ],
        ['FL', .12, '#0288d1' ],
        ['IL', .15, '#4fc3f7' ],
        ['NI', .09, '#4fc3f7' ],
        ['PA', .12, '#4fc3f7' ],
        ['OH', .13, '#4fc3f7' ],
    ])

    var options = {
        title: 'Proportion of Home Ownership By State',
        width: 700,
        height: 400,
        legend: 'none',
        bar: { groupWidth: '80%' },
        hAxis: {
            minValue: 0,
            ticks: getLabel(0, .16, .02),
            format: 'percent',
            gridlines: {
                color: 'transparent'
            }
        },
        vAxis: {
            minValue: 0,
        },
    };

    var chart = new google.visualization.BarChart(document.getElementById('Bar'));
    chart.draw(data, options);
}


google.charts.setOnLoadCallback(drawTreeMap);

function drawTreeMap(){
    var data = google.visualization.arrayToDataTable([
        ['Location', 'Parent', 'size', 'color'],
        ['Global', null, 0, 0],
        ['CA', 'Global', 40, 40],
        ['NY', 'Global', 20, 30],
        ['FL', 'Global', 16, 35],
        ['TX', 'Global', 16, 23],
        ['NJ', 'Global', 8, 30],
        ['PA', 'Global', 7, 8],
        ['IL', 'Global', 7, 12],
        ['OH', 'Global', 7, 3],
        ['VA', 'Global', 7, 18],
        ['GA', 'Global', 5, 15],
    ]);

    var options = {
        title: 'Top 10 States Maxsimum % of Charged Off Loans',
        height: 400,
        minColor: '#e1f5fe',
        midColor: '#0288d1',
        maxColor: '#0d47a1',
        headerHeight: 15,
        fontColor: 'black',
        showScale: true
    };

    tree = new google.visualization.TreeMap(document.getElementById('TreeMap'));

    tree.draw(data, options);
}


google.charts.setOnLoadCallback(drawGeo);

function drawGeo(){
    var data = google.visualization.arrayToDataTable([
        ['State', 'Popularity'],
        ['New York', 200],
        ['Nevada', 100],
        ['North Dakota', 100],
        ['South Dakota', 100],
        ['Washington', 130],
        ['New Mexico', 100],
        ['Georgia', 200],
        ['Michigan', 100],
        ['Indiana', 100],
        ['Virginia', 150],
        ['West Virginia', 100],
        ['Kansas', 100],
        ['Kentucky', 100],
        ['Moniana', 100],
        ['Texas', 100],
    ]);

    var options = {
        region: 'US',
        resolution: 'provinces',
        displayMode: 'markers',
        colorAxis: { colors: ['#0288d1', '#0d47a1'] },
        // magnifyingGlass: { enable: true, zoomFactor: 7.5 },
        sizeAxis: {minSize: 5},
        tooltip: { textStyle: { color: '#0d47a1' }, showColorCode: true },
    };

    var chart = new google.visualization.GeoChart(document.getElementById('Geo'));

    chart.draw(data, options);
}



// function drawRegionsMap() {
//     var data = google.visualization.arrayToDataTable([
//         ['City', 'Population', 'Area'],
//         ['Rome', 2761477, 1285.31],
//         ['Milan', 1324110, 181.76],
//         ['Naples', 959574, 117.27],
//         ['Turin', 907563, 130.17],
//         ['Palermo', 655875, 158.9],
//         ['Genoa', 607906, 243.60],
//         ['Bologna', 380181, 140.7],
//         ['Florence', 371282, 102.41],
//         ['Fiumicino', 67370, 213.44],
//         ['Anzio', 52192, 43.43],
//         ['Ciampino', 38262, 11]
//     ]);

//     var options = {
//         region: 'IT',
//         displayMode: 'markers',
//         colorAxis: { colors: ['green', 'blue'] }
//     };

//     var chart = new google.visualization.GeoChart(document.getElementById('Geo'));

//     chart.draw(data, options);
// }
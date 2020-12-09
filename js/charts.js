google.charts.load('current', { packages: ['corechart'] });




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
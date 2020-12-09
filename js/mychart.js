google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawStacked);

function getLabel(minn, maxx, stepp) {
    var arr = [];
    for (i = minn; i <= maxx; i+=stepp) {
        arr.push(i);
        // if (i % stepp == 0) {
        // }
    }
    console.log(arr);
    return arr;

};

function drawStacked() {
    // var data = google.visualization.arrayToDataTable([
    //     ['Genre', 'Data1', 'Data2', 'Data3', 'Data4'],
    //     ['2010', 10, 24, 20, 32],
    //     ['2020', 16, 22, 23, 30],
    //     ['2030', 28, 19, 29, 30],
    //     ['2040', 28, 19, 29, 30],
    //     ['2050', 28, 19, 29, 30],
    //     ['2060', 28, 19, 29, 30],
    //     ['2070', 28, 19, 29, 30],
    //     ['2080', 28, 19, 29, 30],
    //     ['2090', 28, 19, 29, 30],
    //     ['2100', 28, 19, 29, 30],
    //     ['2110', 28, 19, 29, 30],
    //     ['2120', 28, 19, 29, 30],
    //     ['2130', 28, 19, 29, 30],
    // ]);

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
        // explorer: {
        //     axis: 'horizontal',
        //     actions: ['dragToZoom', 'rightClickToReset'],
        //     keepInBounds: true,
        //     maxZoomIn: 4.0
        // }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('BarLine'));
    chart.draw(data, options);
}
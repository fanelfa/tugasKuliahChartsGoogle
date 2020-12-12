$(function () {
    $("#slider-range").slider({
        range: true,
        min: new Date('2010.01.01').getTime() / 1000,
        max: new Date().getTime() / 1000,
        step: 86400,
        values: [new Date('2013.01.01').getTime() / 1000, new Date().getTime() / 1000],
        slide: function (event, ui) {
            // $("#amount").val((new Date(ui.values[0] * 1000).toDateString()) + " - " + (new Date(ui.values[1] * 1000)).toDateString());

            var start = new Date(ui.values[0] * 1000);
            var startDay = ("0" + start.getDate()).slice(-2);
            var startMonth = ("0" + (start.getMonth() + 1)).slice(-2);

            var startDate = start.getFullYear() + "-" + (startMonth) + "-" + (startDay);
            $("#startDate").val(startDate);


            var end = new Date(ui.values[1] * 1000);
            var endDay = ("0" + end.getDate()).slice(-2);
            var endMonth = ("0" + (end.getMonth() + 1)).slice(-2);

            var endDate = end.getFullYear() + "-" + (endMonth) + "-" + (endDay);

            $("#endDate").val(endDate);
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const getDataFromJson = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const names = [];
                const checkIn = [];
                const checkOut = [];
                const keterangans = [];

                data.map((data) => {
                    names.push(data.nama);
                    checkIn.push(Number(data.check_in));
                    checkOut.push(Number(data.check_out));
                    keterangans.push(data.keterangan);
                })

                resolve({
                    names,
                    checkIn,
                    checkOut,
                    keterangans
                })
            }, 2000)
        })
    }

    const tableKaryawan = $('#table-data');
    const dataTableKaryawan = tableKaryawan.DataTable({
        serverSide : true,
        ajax: {
            type: 'GET',
            url: 'databaseconnect.php',
            dataType: 'JSON',
            dataSrc: ""
        },
        columns: [{
            data: 'nama'
        }, {
            data: 'jabatan'
        }, {
            data: 'check_in'
        }, {
            data: 'check_out'
        }, {
            data: 'keterangan'
        }]
    })

    const renderColumnChart = async (d) => {
        const data = await getDataFromJson(d);
        var chart = {
            type: 'column'
        };
        var title = {
            text: 'Column Chart'
        };
        var xAxis = {
            categories: data.names,
            crosshair: true
        };
        var yAxis = {
            min: 0,
            max: 10,
            title: {
                text: 'Time (hour)'
            }
        };
        var tooltip = {
            headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                '<td style = "padding:0"><b>{point.y:.1f} hour</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        };
        var plotOptions = {
            series: {
                cursor: 'pointer'
            },
            coloumn: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        };
        var credits = {
            enabled: false
        };
        var series = [{
                name: 'Check in',
                data: data.checkIn
            },
            {
                name: 'Check Out',
                data: data.checkOut
            }
        ]
        var json = {};
        json.chart = chart;
        json.title = title;
        json.tooltip = tooltip;
        json.xAxis = xAxis;
        json.yAxis = yAxis;
        json.series = series;
        json.plotOptions = plotOptions;
        json.credits = credits;
        $('#column-chart').highcharts(json);
    }
    setTimeout(() => {
        renderColumnChart(dataTableKaryawan.data());
    }, 1000)

    const renderPieChart = async (d) => {
        const data = await getDataFromJson(d);
        var chart = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        };
        var title = {
            text: 'Pie Chart'
        };
        var tooltip = {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        };
        var plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.names}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                            'black'
                    }
                }
            },
            series: {
                cursor: 'pointer'
            }
        };
        var series = [{
            type: 'pie',
            name: 'Check Out',
            data: data.checkOut
        }];
        var json = {};
        json.chart = chart;
        json.title = title;
        json.tooltip = tooltip;
        json.series = series;
        json.plotOptions = plotOptions;
        $('#pie-chart').highcharts(json);
    }
    setTimeout(() => {
        renderPieChart(dataTableKaryawan.data());
    }, 1000)
})


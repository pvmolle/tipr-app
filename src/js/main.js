google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Day', 'Donated'],
        ['Mon',   1.0    ],
        ['Tue',   0.0    ],
        ['Wen',   2.3    ],
        ['Thu',   0.4    ],
        ['Fri',   2.0    ],
        ['Sat',   0.0    ],
        ['Sun',   0.0    ]
    ]);

    new google.visualization.ColumnChart(document.getElementById('chart')).
        draw(data, {
            width: $('#chart').width(),
            height: 200,
            colors: ['#ff6600']
        });
}
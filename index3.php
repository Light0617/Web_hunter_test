<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name = "viewport" content = "initial-scale = 1, user-scalable = no">
<title>Love  </title>
<script src="Chart.js"></script>
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script lang="javascript" type="text/javascript">
        $(document).ready(function () {

            var background = {
                type: 'linearGradient',
                x0: 0,
                y0: 0,
                x1: 0,
                y1: 1,
                colorStops: [{ offset: 0, color: '#d2e6c9' },
                             { offset: 1, color: 'white' }]
            };

            $('#jqChart').jqChart({
                title: { text: 'Radar Line Chart' },
                border: { strokeStyle: '#6ba851' },
                background: background,
                shadows: {
                    enabled: true
                },
                animation: { duration: 1 },
                axes: [
                    {
                        type: 'categoryAngle',
                        categories: ['France', 'Canada', 'Germany', 'USA', 'Italy', 'Spain', 'Russia', 'Sweden', 'Japan']
                    }
                ],
                series: [
                    {
                        title: 'Series 1',
                        type: 'radarLine',
                        data: [65.62, 75.54, 60.45, 34.73, 85.42, 55.9, 63.6, 55.1, 77.2]
                    },
                    {
                        title: 'Series 2',
                        type: 'radarLine',
                        data: [76.45, 23.78, 86.45, 30.76, 23.79, 35.67, 89.56, 67.45, 38.98]
                    }
                ]
            });
        });


var radarChartData = {
		labels: ["外表吸引力", "社會級別", "創造力", "仁慈程度", "活潑程度"],
		datasets: [
			{				
				label: "My First dataset",
				fillColor: "rgba(255,191,0,0.5)",
				strokeColor: "rgba(255,191,0,1)",
				pointColor: "rgba(255,191,0,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [0,0,0,0,0]
			},
			{
				label: "My Second dataset",
				fillColor: "rgba(151,204,255,0.5)",
				strokeColor: "rgba(151,204,255,1)",
				pointColor: "rgba(151,204,255,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [0,0,0,0,0]
			}
		]
	};

	window.onload = function(){
		window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
			 scaleShowLabels: true,responsive: true, scaleShowLabels : true,  pointLabelFontSize : 24,
		});
		update_ran();
	}
	function update_ran(){
        	value=80;
                 window.myRadar.datasets[0].points[0].value = value;
                 window.myRadar.datasets[0].points[1].value = value;
                 window.myRadar.datasets[0].points[2].value = value;
                 window.myRadar.datasets[0].points[3].value = value;
                 window.myRadar.datasets[0].points[4].value = value;
                window.myRadar.update();
	}
	
</script>
</head>
<body>
<div height='300px'>
	<canvas id="canvas" ></canvas>
</div>

</body>
</html>



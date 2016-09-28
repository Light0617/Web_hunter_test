function init(){ 
	var background = {
                type: 'linearGradient',
                x0: 0,
                y0: 0,
                x1: 0,
                y1: 1,
                colorStops: [{ offset: 0, color: '#d2e6c9'}]
            };
		init1=array({
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
                        categories: ['1', '2', '3', '4', '5', '6']
                    }
                ],
                series: [
                    {
                        title: 'Series 1',
                        type: 'radarLine',
                        data: [0,0, 0, 0, 0, 0]
                    }
                ]
            });
}
function cdata(){

		var radarChartData = {
                labels: ["強化系", "變化系", "具現化系", "特質系", "操作系","放出系"],
                datasets: [
                        {
                                label: "My First dataset",
                                fillColor: "rgba(255,191,0,0.5)",
                                strokeColor: "rgba(255,191,0,1)",
                                pointColor: "rgba(255,191,0,1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(220,220,220,1)",
                                data: [0,0,0,0,0,0]
                        }
                ]
        };
	return radarChartData;
}

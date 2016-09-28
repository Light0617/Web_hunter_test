<script lang="javascript" type="text/javascript">
	$(document).ready(function(){
		var chartData = {
                labels: ["強化系", "變化系", "具現化系", "特質系", "操作系","放出系"],
                datasets: [
                        {
                                label: "My First dataset",
                                fillColor: "#85E688",
                                strokeColor: "rgba(255,191,0,1)",
                                pointColor: "rgba(255,191,0,1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(220,220,220,1)",
                                data: [0,0,0,0,0,0]
                        }
                ]};
		var background = {
        	        type: 'linearGradient',
        	        x0: 0,
        	        y0: 0,
        	        x1: 0,
        	        y1: 1,
        	        colorStops: [{ offset: 0, color: '#d2e6c9'}]
        	};

///////////////////////////
		var 	ch = [],
			num_question = 11,
			num_ch = 12,
			sels = [],
			score = 0,
			index = 0,
			$results = $('#results'),
			$test = $('#test'),
			$submit = $('#submit'),
			$start = $('#start'),
			$choice= $('.choice');
		for(var i=0;i<num_question;i++){
			sels.push([]);
		}
		$results.hide();
		$test.hide();
		$submit.hide();
		$start.on('click',function(){
			$('#home').hide();
			$('#righthint').hide();
			$('#lefthint').hide();
			$test.show();
			var index1=index+1;
                        var progress=index1+"/11";
                        $('#progress').text(progress);
                        document.getElementById("progress1").value=index1.toString();
			for (var i=0;i<num_ch;i++){
				$choice.eq(i).hide();
			}
			$.getJSON('question.json',function(data){
				for(var element in data.questions[0])
				$('#question').text(data.questions[0][element]);
			});
			$.getJSON("choices1.json",function(data){
				var i=0;
				for (var element in data.choices[0]){ 
					ch.push(element);
					$choice.eq(i).text(data.choices[0][element]);
					$choice.eq(i).show();	
					i+=1;
				}
			});
		});
		
		$choice.on('click',function(){
			if (index<7){
				$('.choice_selected').removeClass('choice_selected');
				$submit.hide();
				sels[index].push(parseInt($choice.index($(this)))+1);
				$(this).addClass('choice_selected');	
			}
			else{
				if(index==10)$submit.show();
				if(index<10)$submit.hide();
				if( $(this).hasClass('choice_selected')){//selected
					$(this).removeClass('choice_selected');	
					var my_element=parseInt($choice.index($(this)))+1;
					function check_element(item){
						return item==my_element;
					} 
					var findex=sels[index].findIndex(check_element);
					sels[index].splice(findex,1);
					
				}
				else{//not selected
					sels[index].push(parseInt($choice.index($(this)))+1);
					$(this).addClass('choice_selected');	

				}
			}
		});
		
		$('.btn').on({'mouseover':function(){
				$(this).addClass('submit_selected');
			},'mouseout':function(){
				$(this).removeClass('submit_selected');
			}
		});
		$('.leftbtn').on('click',function(){
			$('.choice_selected').removeClass('choice_selected');
			if(index>-1)index-=1;
			if(index<10)$('.rightbtn').show();
			var index1=index+1;
			var progress=index1+"/11";
			var progres1=index1.toString();
			$('#progress').text(progress);
                        document.getElementById("progress1").value=index1.toString();
			for (var i=0;i<num_ch;i++){
				$choice.eq(i).hide();
			}
			if(index<0){
				$test.hide();
				$('#home').show();
				index=0;
			}
			else{
				$.getJSON("choices1.json",function(data){
					clen=Object.keys(data.choices[index]).length;
					i=0;
					for (var element in data.choices[index]){ 
						$choice.eq(i).text(data.choices[index][element]);
						$choice.eq(i).show();
						i+=1;	
					}		
				});
				$.getJSON('question.json',function(data){
					for(var element in data.questions[index])
					$('#question').text(data.questions[index][element]);
				});
				$(this).removeClass('submit_selected');
			}
			
		});
		$('.rightbtn').on('click',function(){						
			$('.choice_selected').removeClass('choice_selected');
			if (index<11)index+=1;
			if(index==10) $(this).hide();
			for (var i=0;i<num_ch;i++){
				$choice.eq(i).hide();
			}
			var index1=index+1;
			var progress=index1+"/11";
			$('#progress').text(progress);
                        document.getElementById("progress1").value=index1.toString();
			$.getJSON("choices1.json",function(data){
				clen=Object.keys(data.choices[index]).length;
				i=0;
				for (var element in data.choices[index]){ 
					$choice.eq(i).text(data.choices[index][element]);
					$choice.eq(i).show();
					i+=1;	
				}		
			});
			$.getJSON('question.json',function(data){
				for(var element in data.questions[index])
				$('#question').text(data.questions[index][element]);
			});
			$(this).removeClass('submit_selected');
			
		});
		$submit.on('click',function(){
			$test.hide();
                                $('#results').show();
				$('.photo1').hide(); $('#desc1').hide(); 
				$('.photo2').hide(); $('#desc2').hide(); 
				$('.photo3').hide(); $('#desc3').hide(); 
				$('.photo4').hide(); $('#desc4').hide(); 
				$('.photo5').hide(); $('#desc5').hide(); 
				//$.getJSON('question.json',function(data){
				$.getJSON('desc1.json',function(data){
					
					$('#desc1').text(data.descs[0].desc1);
					$('#desc2').text(data.descs[0].desc2);
					$('#desc3').text(data.descs[0].desc3);
					$('#desc4').text(data.descs[0].desc4);
					$('#desc5').text(data.descs[0].desc5);
					$('#desc6').text(data.descs[0].desc6);
				});
				$('.photo6').hide(); $('#desc6').hide(); 
				var url='score.php';
                                $.getJSON(url,{sels:sels},
					function(data){
						$('#score1').text(data.score1);
                                        	$('#score2').text(data.score2);
                                        	$('#score3').text(data.score3);
                                        	$('#score4').text(data.score4);
                                        	$('#score5').text(data.score5);
                                        	$('#score6').text(data.score6);
		 			var scores=new Array(data.score1,data.score2,data.score3,data.score4,data.score5,data.score6);
					var max_score=Math.max.apply(Math, scores);
					//var max_score = scores.indexOf(Math.max.apply(Math, scores));
					if(data.score1==max_score){$('.photo1').show(); $('#desc1').show(); }
					if(data.score2==max_score){$('.photo2').show(); $('#desc2').show(); }
					if(data.score3==max_score){$('.photo3').show(); $('#desc3').show(); }
					if(data.score4==max_score){$('.photo4').show(); $('#desc4').show(); }
					if(data.score5==max_score){$('.photo5').show(); $('#desc5').show(); }
					if(data.score6==max_score){$('.photo6').show(); $('#desc6').show(); }
					radarChartData=cdata();
					window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
        			           scaleShowLabels: true,responsive: true, scaleShowLabels : true,  pointLabelFontSize : 24,});
  			                 window.myRadar.datasets[0].points[0].value = data.score1;
  			                 window.myRadar.datasets[0].points[1].value = data.score2;
  			                 window.myRadar.datasets[0].points[2].value = data.score3;
  			                 window.myRadar.datasets[0].points[3].value = data.score4;
  			                 window.myRadar.datasets[0].points[4].value = data.score5;
  			                 window.myRadar.datasets[0].points[5].value = data.score6;
			        	 window.myRadar.datasets[0].fillColor= "rgba(48,41,225,0.4)";
			                 window.myRadar.datasets[0].strokeColor= "rgba(48,41,225,1)";
				         window.myRadar.update();
					});

                });
});
			



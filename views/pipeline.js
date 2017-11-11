$("#generateCards").on("click",function(event){
	var school = $("#schoolSelect").val();
	console.log(school);

	$.get("/generateCards/"+school, function(data) {
		console.log(data);
		var xAxis = 150;
		var xAxis1 = 150;
		for(var i = 0; i<data.length;i++){
			if(data[i]["status"] == "contacted"){
				xAxis1 = xAxis1 + 60;
				$(".flashCards").append("<div id='yes-drop' class='draggable drag-drop' value="+data[i]["child_first_name"]+data[i]["child_last_name"]+" style='float:left;margin-top:-90px;margin-left:"+xAxis1+"px'"+">"+data[i]["child_first_name"]+" "+data[i]["child_last_name"]);
			}
			if(data[i]["status"] == "new-lead"){
				xAxis = xAxis + 60;
				$(".flashCards").append("<div id='yes-drop' class='draggable drag-drop' value="+data[i]["child_first_name"]+data[i]["child_last_name"]+" style='float:left;margin-top:-200px;margin-left:"+xAxis+"px'"+">"+data[i]["child_first_name"]+" "+data[i]["child_last_name"]);
			}
			
		}																																				
	})


})








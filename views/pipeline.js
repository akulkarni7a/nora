$("#generateCards").on("click",function(event){
	var school = $("#schoolSelect").val();
	console.log(school);

	$.get("/generateCards/"+school, function(data) {
		console.log(data);
		for(var i = 0; i<data.length;i++){
			$(".flashCards").append("<div id='yes-drop' class='draggable drag-drop' value="+data[i]["child_first_name"]+data[i]["child_last_name"]+">"+data[i]["child_first_name"]+" "+data[i]["child_last_name"]);
		}
	})


})








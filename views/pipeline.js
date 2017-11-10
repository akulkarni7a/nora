$("#schoolSelect").on('change', function(){
    alert($(this).val())
});

$.get("/generateCards/"+school, function(data) {
	console.log(data);
})
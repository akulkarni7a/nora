$("#generateCards").on("click", function(event) {
    var school = $("#schoolSelect").val();
    console.log(school);

    $.get("/generateCards/" + school, function(data) {
        console.log(data);
        var xAxis = 150;
        var xAxis1 = 150;
        for (var i = 0; i < data.length; i++) {
            if (data[i]["status"] == "contacted") {
                xAxis1 = xAxis1 + 60;
                $(".flashCards").append("<div id='yes-drop' class='draggable drag-drop' rel='modal:open' value=" + data[i]["child_first_name"] + data[i]["child_last_name"] + " style='float:left;margin-top:-645px;margin-left:" + xAxis1 + "px'" + ">" + data[i]["child_first_name"] + " " + data[i]["child_last_name"]);
            }
            if (data[i]["status"] == "new-lead") {
                xAxis = xAxis + 60;
                $(".flashCards").append("<div id='yes-drop' class='draggable drag-drop' value=" + data[i]["child_first_name"] + data[i]["child_last_name"] + " style='float:left;margin-top:-540px;margin-left:" + xAxis + "px'" + ">" + data[i]["child_first_name"] + " " + data[i]["child_last_name"]);
            }
            if (data[i]["status"] == "tour-scheduled") {
                xAxis = xAxis + 60;
                $(".flashCards").append("<div id='yes-drop' class='draggable drag-drop' value=" + data[i]["child_first_name"] + data[i]["child_last_name"] + " style='float:left;margin-top:-435px;margin-left:" + xAxis + "px'" + ">" + data[i]["child_first_name"] + " " + data[i]["child_last_name"]);
            }
            if (data[i]["status"] == "tour-completed") {
                xAxis = xAxis + 60;
                $(".flashCards").append("<div id='yes-drop' class='draggable drag-drop' value=" + data[i]["child_first_name"] + data[i]["child_last_name"] + " style='float:left;margin-top:-330px;margin-left:" + xAxis + "px'" + ">" + data[i]["child_first_name"] + " " + data[i]["child_last_name"]);
            }
            if (data[i]["status"] == "registered") {
                xAxis = xAxis + 60;
                $(".flashCards").append("<div id='yes-drop' class='draggable drag-drop' value=" + data[i]["child_first_name"] + data[i]["child_last_name"] + " style='float:left;margin-top:-225px;margin-left:" + xAxis + "px'" + ">" + data[i]["child_first_name"] + " " + data[i]["child_last_name"]);
            }

        }
    })
})

$("#schoolSelect").change(function(event) {
    console.log("school changed");
    $(".drag-drop").remove();
});

var modal = document.getElementById('moreInfoModal');

$(document).on('dblclick', '.drag-drop', function(event) {
    console.log(event.target.innerHTML);
    var name = event.target.innerHTML;
    modal.style.display = "block";

    $.get("/getchildID/" + event.target.innerHTML, function(evt) {
        console.log("getting child info");
        console.log(evt);

        var childBirthday = evt[0]['child_birthday'];
        var output = childBirthday.split('T');


        $("#childName").html(name);
        $("#childBirthday").html(output[0]);
        $("#childGender").html(evt[0]['child_gender']);

        $.get("/getParent/" + evt[0]['parent_id'], function(e) {
        	$("#parent1Name").html(e[0]['Parent1_first_name']+" "+e[0]['Parent1_last_name']);
        	$("#parent2Name").html(e[0]['Parent2_first_name']+" "+e[0]['Parent2_last_name']);
        	$("#parentPhone").html(e[0]['Parent_phone']);
        	$("#parentEmail").html(e[0]['Parent_email']);


            console.log("getting parent info");
            console.log(e);
        });

    });

});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
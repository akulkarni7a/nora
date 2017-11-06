$.get("/permissions", function(data) {
    console.log(data[0]);
    var obj = data[0];

    for (var key in obj) {
        console.log(key, obj[key]);
        if (obj[key] !== null && typeof(obj[key]) !== "number") {
            $("#schoolSelect").append("<option id=" + obj[key] + ">" + obj[key] + "</option>")
        }
    }
})


$.get("/pageLoad", function(data) {
    console.log(data);
    $("#profileImg").attr("src", data.photo);
    $("#userName").html("<div>" + data.first_name + " " + data.last_name + "</div>");

})

$(document).ready(function() {
    $(".parentInputs1").show();
    $(".parentInputs").hide();
});

$('#familyToggle').change(function() {
    console.log("switched");
    parentStatus = $('#familyToggle').val();
    console.log(parentStatus);
    if (parentStatus == "newParent") {
        $(".parentInputs").show();
        $(".parentInputs1").hide();
    }
    if (parentStatus == "existingParent") {
        $(".parentInputs").hide();
        $(".parentInputs1").show();
    }
});

$("#submitLead-btn").on("click", function(evet) {
    console.log("button");
    var parentID = 0;
    var leadFormObj = {
        school: $("#schoolSelect").val(),
        childFirstName: $("#childFirstName").val(),
        childLastName: $("#childLastName").val(),
        childBirthdate: $("#childBirthdate").val(),
        childGender: $("#childGender").val(),
        childStartDate: $("#childStartDate").val(),
        parent1FirstName: $("#parent1FirstName").val(),
        parent1LastName: $("#parent1LastName").val(),
        parent2FirstName: $("#parent2FirstName").val(),
        parent2LastName: $("#parent2LastName").val(),
        parentEmail: $("#parentEmail").val(),
        parentPhone: $("#parentPhone").val()
    }

    if (parentStatus == "newParent") {
        $.post("/addParent", leadFormObj, function(data) {});
        console.log("parentEmail "+leadFormObj.parentEmail);
        
        $.get("/getID/"+leadFormObj.parentEmail, function(event){
        	console.log("getting an ID");
            console.log(event[0].id);
            leadFormObj.parentID = event[0].id;

        });
        console.log(leadFormObj);

        $.post("/addChild", leadFormObj, function(data) {
            console.log(leadFormObj);
            console.log("sent");
        });
    }


});
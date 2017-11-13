var statusObject = {
    "contacted": {

    }
}
statusObject["contacted"]["sendEmail"] = false;
statusObject["contacted"]["sendText"] = false;
$('#contactedEmailBox').click(function() {
    if ($('#contactedEmailBox').prop('checked')) {
        statusObject["contacted"]["sendEmail"] = true;
    };
    console.log(statusObject);
});
$('#contactedTextBox').click(function() {
    if ($('#contactedTextBox').prop('checked')) {
        statusObject["contacted"]["sendText"] = true;
    };
    console.log(statusObject);
});


$("#save").on("click", function(event) {
    //EmailBoolean
    statusObject["contacted"]["EmailDelay"] = $("#contactedEmailDelay").val();
    statusObject["contacted"]["EmailText"] = "test";
    statusObject["contacted"]["TextDelay"] = $("#contactedTextDelay").val();
    statusObject["contacted"]["TextText"] = "test";
    statusObject["school"] = $("#schoolSelect").val();
    console.log(statusObject);
 

    $.post("/updateSettings", statusObject, function(data) {
        console.log(data);
     });

})















//modal
var modal = document.getElementById('messageModal');
$(".editMessage").on("click", function() {
    //api call
    modal.style.display = "block";
})
var btn = document.getElementsByClassName("editMessage");
btn.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
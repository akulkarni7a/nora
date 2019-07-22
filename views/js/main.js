$(document).ready(function() {
    $.get("/current_user",function(data){
        var username = data.username;
    })
});


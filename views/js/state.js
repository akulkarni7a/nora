var school;
$.get("/permissions", function(data) {
    console.log(data[0]);
    var obj = data[0];
    school = data[0]["School 1"];
    
   

    for (var key in obj) {
        console.log(key, obj[key]);
        if (obj[key] !== null && typeof(obj[key]) !== "number") {
            $("#schoolSelect").append("<option id=" + obj[key] + ">" + obj[key] + "</option>")
        }
    }
})
console.log(school);

$.get("/pageLoad", function(data) {
    console.log(data);
    $("#profileImg").attr("src", data.photo);
    $("#userName").html("<div>" + data.first_name + " " + data.last_name + "</div>");

})


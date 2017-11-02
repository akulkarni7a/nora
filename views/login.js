// Get the modal
var modal = document.getElementById('loginModal');
var span = document.getElementsByClassName("close")[0];
$("#login-btn").on("click",function(event){
	event.preventDefault();
	console.log("clicked");
	modal.style.display = "block";
})


var signUpModal = document.getElementById('signupModal');
$("#join-btn").on("click",function(event){
	event.preventDefault();
	console.log("Join btn clicked");
	signupModal.style.display = "block";
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}


//Login
// $("#submit").on("click",function(event){
// 	event.preventDefault();
// 	console.log("submit");
// 	var loginobj = {
// 		username:$("#uname").val(),
// 		password:$("#psw").val()
// 	}

// 	$.post("/login", loginobj, function(data){
// 		console.log("sent");
// 	});

// })



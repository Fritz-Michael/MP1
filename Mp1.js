<<<<<<< HEAD

=======
var changeContents = function(header_id) {
	var content;
	if(header_id === "posts") {
		content = "posts goes here";
		document.getElementById("contents").textContent = content;
	}
	if(header_id === "profile") {
		content = "profile goes here";
		document.getElementById("contents").textContent = content;
	}
	if(header_id === "photos") {
		content = "phtos goes here";
		document.getElementById("contents").textContent = content;
	}
	if(header_id === "album") {
		content = "album goes here";
		document.getElementById("contents").textContent = content;
	}
}
>>>>>>> refs/remotes/origin/master

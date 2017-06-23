
/*var changeContents = function(header_id) {
	var content;
	console.log(header_id);
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
}*/

$(document).ready(function() {
	$("#posts").click( function() {
		var msg = "Posts goes here";

		$("#contents").text(msg);
	});

	$("#profile").click( function() {
		var msg = "Profile goes here";

		$("#contents").text(msg);
	});

	$("#photos").click( function() {
		var msg = "Photos goes here";

		$("#contents").text(msg);
	});

	$("#album").click( function() {
		var msg = "Album goes here";

		$("#contents").text(msg);
	});
});

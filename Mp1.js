
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
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"><h1 id = \"contents\">Profile goes here</h1></div>");
		$("#contentDiv").css("background", "blue");
	});

	$("#profile").click( function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"><h1 id = \"contents\">Posts goes here</h1></div>");
		$("#contentDiv").css("background", "yellow");
	});

	$("#photos").click( function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"><h1 id = \"contents\">Photos goes here</h1></div>");
		$("#contentDiv").css("background", "green");
	});

	$("#album").click( function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"><h1 id = \"contents\">Album goes here</h1></div>");
		$("#contentDiv").css("background", "red");
	});
});

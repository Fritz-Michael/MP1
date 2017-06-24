
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
		$("#mainDiv").append("<div id = \"contentDiv\"><h1 id = \"contents\">Posts goes here</h1></div>");
		$("#contentDiv").css("background", "blue");

		//ajax part here
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts',
			success: function(data) {
				console.log("sup world", data[0]);
			}
		});
	});

	$("#profile").click( function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"><h1 id = \"contents\">Profile goes here</h1></div>");
		$("#contentDiv").css("background", "yellow");

		//ajax part here
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(data) {
				console.log("sup world", data[0]);
			}
		});
	});

	$("#photos").click( function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"><h1 id = \"contents\">Photos goes here</h1></div>");
		$("#contentDiv").css("background", "green");

		//ajax part here
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/photos',
			success: function(data) {
				console.log("sup world", data[0]);
			}
		});
	});

	$("#album").click( function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"><h1 id = \"contents\">Album goes here</h1></div>");
		$("#contentDiv").css("background", "red");

		//ajax part here
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/albums',
			success: function(data) {
				console.log("sup world", data[0]);
			}
		});
	});
});

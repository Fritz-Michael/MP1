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
		var count;

		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"></div>");
		$("#contentDiv").css("background", "yellow");

		//ajax part here
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(data) {
				console.log("sup world", data[0]);
				
				for(count = 0; count < data.length; count++) {
					$("#contentDiv").append("<br>");
					$("#contentDiv").append(data[count].name);
				}
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

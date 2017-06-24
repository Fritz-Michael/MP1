$(document).ready(function() {

	var globalUsername;
	var globalUserId;

	var getUsername = function(userid) {
		var username;
		var users;
		var x;

		users = $.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			async: false,
			success: function(result) {
				for(x = 0; x < result.length; x++) {
					if(userid == result[x].id) {
						$("#contentDiv").append("<p align = \"center\"><a href = \"\">" + result[x].username + "</a></p>");
						x = result.length;
					}
				}
			}
		});
	}

	$("#posts").click( function() {
		var userId;
		var users;
		var username;

		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"></div>");
		$("#contentDiv").css("background", "blue");

		//ajax part here
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts',
			//async: false,
			success: function(data) {
				$.each(data, function(i, data) {
					console.log(data);
					$("#contentDiv").append("<br>");
					$("#contentDiv").append("<p align = \"center\"><b>" + data.title + "</b></p>");
				

					//$("#contentDiv").append("<p align = \"center\"><a href = \"\">" + globalUsername + "</a></p>");

					$("#contentDiv").append("<p align = \"center\" class = \"textBody\">" + data.body + "</p>");
					$("#contentDiv").append("<br>");
				});
			},
			error: function() {
				alert("There is an error in loading. We are sorry about that");
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
				$.each(data, function(i,data) {
					$("#contentDiv").append("<br>");
					$("#contentDiv").append(data[count].name);
				});
			},
			error: function() {
				alert("There is an error in loading. We are sorry about that");
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

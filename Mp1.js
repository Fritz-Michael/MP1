$(document).ready(function() {

	// var globalId;

	// var getUserId = function(username) {
	// 	$.ajax({
	// 		type: 'GET',
	// 		url: 'https://jsonplaceholder.typicode.com/users',
	// 		async: false,
	// 		success: function(users) {
	// 			$.each(users, function(i, users){
	// 				if(users.username == username)
	// 					globalId = users.id;
	// 			});
	// 		}
	// 	});
	// }

	// $(document).on('click', '.userpost', function() {
	// 	var elementId;

	// 	elementId = $(this).attr("id");

	// 	console.log(elementId);

	// 	getUserId(elementId);

	// 	console.log(globalId);
	// 	$("#contentDiv").empty();
	// 	$("#contentDiv").append("<p align = center>" + elementId + "'s posts </p>");
	// 	$("#contentDiv").append("<button id = \"return\" align = center>Click here to return</button>");
	// 	$.ajax({
	// 		type: 'GET',
	// 		url: 'https://jsonplaceholder.typicode.com/posts',
	// 		success: function(posts) {
	// 			$.each(posts, function(i,posts) {
	// 				if(posts.userId == globalId) {
	// 					console.log(posts.title);
	// 					$("#contentDiv").append("<p align = \"center\"><b>" + posts.title + "</b></p>");
	// 					$("#contentDiv").append("<p align = \"center\" class = \"textBody\">" + posts.title + "</p>");
	// 					console.log("Im here");
	// 				}
	// 			});
	// 			$("#contentDiv").append("<button id = \"return\" align = center>Show more</button>");
	// 		},
	// 		error: function() {
	// 			alert("Oops! Something went wrong. Sorry about that.");
	// 		}
	// 	});
	// });

	$("#posts").click( function() {
		var userId;
		var users;
		var username;

		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"></div>");
		$("#contentDiv").css("background", "blue");

		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i,users){
					$("#contentDiv").append("<div class = \"userpost\" id = \"" + users.id + "\">" + users.username + "</div>");
					$("#contentDiv").append("<br>");

				});
				$.ajax({
					type: 'GET',
					url: 'https://jsonplaceholder.typicode.com/posts',
					success: function(posts) {
						$.each(posts, function(i,posts) {
							$("#" + posts.userId).append("<p class = \"textTitle post" + posts.userId + "\"><b>" + posts.title + "</b></p>");
							$("#" + posts.userId).append("<p class = \"textBody\">" + posts.body + "</p>");
						});
					}
				});
				$.ajax({
					type: 'GET',
					url: 'https://jsonplaceholder.typicode.com/users',
					success: function(users) {
						$.each(users, function(i,users) {
							//$(".textTitle").eq(i).append("<p>hello</p>");
							$(".textTitle.post" + users.id).append("<p class = \"textUser\"><a href = \"\">" + users.username + "</a></p>");
						});
					}
				});
			},
			error: function() {
				alert("Oops! Something went wrong. Sorry about that.");
			}
		});
	});

	$(document).on("click", "#return", function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"></div>");
		$("#contentDiv").css("background", "blue");

		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i,users){
					$("#contentDiv").append("<div class = \"userpost\" id = \"" + users.username + "\">" + users.username + "</button>");
					$("#contentDiv").append("<br>");
				});
			},
			error: function() {
				alert("Oops! Something went wrong. Sorry about that.");
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
        var photos;
        var temp;
        
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"></div>");
		$("#contentDiv").css("background", "green");

		//ajax part here		
		$.ajax({
			dataType: "json",
			url: 'https://jsonplaceholder.typicode.com/photos',	
            success: function(photos) {
						$.each(photos, function(i,photos) {
							$("#contentDiv").append("<img class = \"photos\" id = \"" + photos.id + "\" src = \"" + photos.thumbnailUrl + "\" alt = \"" + photos.url + "\" </button>")
                        });                        
                        $("img").click(photos, function(i,photos) {
                            var loc = $(this).attr("alt");
                            window.open(loc, '_blank');
                        });
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

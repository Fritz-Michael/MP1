$(document).ready(function() {

	var displayPosts = function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"></div>");
		$("#contentDiv").css("background", "blue");

		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i,users){
					$("#contentDiv").append("<div class = \"userpost\" id = \"" + users.id + "\"></div>");
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
							$(".textTitle.post" + users.id).append("<p class = \"textUser\">by <button class = \"names\" id = \"" + users.id + "\">" + users.username + "</button></p>");
						});
					},
					error: function() {
						alert("Oops! Something went wrong. Please refresh the webpage");
					}
				});
			},
			error: function() {
				alert("Oops! Something went wrong. Sorry about that.");
			}
		});
	}

	var displayUsers = function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"></div>");
		$("#contentDiv").css("background", "blue");

		//ajax part here
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i,users) {
					$("#contentDiv").append("<div class = \"userProfile\" id = \"" + users.id + "\">" + users.username + "</div>");
				});
			},
			error: function() {
				alert("There is an error in loading. We are sorry about that");
			}
		});
	}

	var displayProfile = function(userId, returnFunc) {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i,users) {
					if(userId == users.id) {
						$("#contentDiv").append("<p align = center>" + users.name + "</p>");
						$("#contentDiv").append("<p>Username: " + users.username + "</p>");
						$("#contentDiv").append("<p>Email: " + users.email + "</p>");
						$("#contentDiv").append("<p>Address:</p>");
						$("#contentDiv").append("<p>Street: " + users.address.street + "</p>");
						$("#contentDiv").append("<p>Suite: " + users.address.suite + "</p>");
						$("#contentDiv").append("<p>City: " + users.address.city + "</p>");
						$("#contentDiv").append("<p>Zip Code: " + users.address.zipcode + "</p>");
						$("#contentDiv").append("<p>Phone Number: " + users.phone + "</p>");
						$("#contentDiv").append("<p>Website: " + users.website + "</p>");
						$("#contentDiv").append("<p>Company:</p>");
						$("#contentDiv").append("<p>Name: " + users.company.name + "</p>");
						$("#contentDiv").append("<p>Catch Phrase: " + users.company.catchPhrase + "</p>");
						$("#contentDiv").append("<p>BS: " + users.company.bs + "</p>");
					}
				});
				$("#contentDiv").append("<button id = \"" + returnFunc + "\">Return to Profiles</button>");
			},
			error: function() {
				alert("There is an error in loading. We are sorry about that");
			}
		});
	}

	$("#posts").click( function() {
		displayPosts();
	});

	$("#profile").click( function() {
		displayUsers();
	});

	$(document).on("click", ".userProfile", function(){
		var userId;
		$("#contentDiv").empty();
		userId = $(this).attr("id");
		
		displayProfile(userId, "returnProfiles");

	});

	$(document).on("click", ".names", function(){
		var userId;
		$("#contentDiv").empty();
		userId = $(this).attr("id");
		
		displayProfile(userId, "returnPosts");

	});

	$(document).on("click", "#returnProfiles", function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"></div>");
		$("#contentDiv").css("background", "blue");

		//ajax part here
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i,users) {
					$("#contentDiv").append("<div class = \"userProfile\" id = \"" + users.id + "\">" + users.username + "</div>");
				});
			},
			error: function() {
				alert("There is an error in loading. We are sorry about that");
			}
		});
	});

	$(document).on("click", "#returnPosts", function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"></div>");
		$("#contentDiv").css("background", "blue");

		//ajax part here
		displayPosts();
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

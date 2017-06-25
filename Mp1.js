$(document).ready(function() {

	var globalId;

	var displayPosts = function() {
		$("#mainDiv").empty();
		$("#mainDiv").append("<div id = \"contentDiv\"></div>");

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
		$("#contentDiv").append("<button id = \"" + returnFunc + "\">Return</button>");
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users',
			success: function(users) {
				$.each(users, function(i,users) {
					if(userId == users.id) {
						$("#contentDiv").append("<p align = center>" + users.name + "</p>");
						$("#contentDiv").append("<a id = \"personalInfo\">Personal Information</a>");
						$("#contentDiv").append("<div id = \"personalInfoDiv\"></div>");
						$("#personalInfoDiv").append("<p class = \"info\">Username: " + users.username + "</p>");
						$("#personalInfoDiv").append("<p class = \"info\">Email: " + users.email + "</p>");
						$("#personalInfoDiv").append("<p class = \"info\">Address:</p>");
						$("#personalInfoDiv").append("<p class = \"subInfo\">Street: " + users.address.street + "</p>");
						$("#personalInfoDiv").append("<p class = \"subInfo\">Suite: " + users.address.suite + "</p>");
						$("#personalInfoDiv").append("<p class = \"subInfo\">City: " + users.address.city + "</p>");
						$("#personalInfoDiv").append("<p class = \"subInfo\">Zip Code: " + users.address.zipcode + "</p>");
						$("#personalInfoDiv").append("<p class = \"info\">Phone Number: " + users.phone + "</p>");
						$("#personalInfoDiv").append("<p class = \"info\">Website: " + users.website + "</p>");
						$("#personalInfoDiv").append("<p class = \"info\">Company:</p>");
						$("#personalInfoDiv").append("<p class = \"subInfo\">Name: " + users.company.name + "</p>");
						$("#personalInfoDiv").append("<p class = \"subInfo\">Catch Phrase: " + users.company.catchPhrase + "</p>");
						$("#personalInfoDiv").append("<p class = \"subInfo\">BS: " + users.company.bs + "</p>");
						$("#contentDiv").append("<a id = \"album\">Latest Photo Album</a>");
						$("#contentDiv").append("<div id = \"albumDiv\"></div>");
						globalId = users.id;
						insertLatestPhotoAlbum(users.id);
						$("#contentDiv").append("<a id = \"post\">Latest Post</a>");
						$("#contentDiv").append("<div id = \"postDiv\"></div>");
						insertLatestPost(users.id);
					}
				});
			},
			error: function() {
				alert("There is an error in loading. We are sorry about that");
			}
		});
	}


	var getLatestPost = function(userid) {
		var latest = 0;
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts',
			async: false,
			success: function(posts) {
				$.each(posts, function(i,posts) {
					if(posts.userId == userid) {
						if(latest < posts.id)
							latest = posts.id;
					}
				});
			}
		});
		return latest;
	}


	var insertLatestPost = function(userid) {

		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts',
			success: function(posts) {
				$.each(posts, function(i, posts) {
					if(getLatestPost(userid) == posts.id) {
						console.log("hello");
						$("#postDiv").append("<p align = \"center\"><b>Title: " + posts.title + "</b></p>");
						$("#postDiv").append("<p align = \"center\">" + posts.body + "</p>");
					}
				});
			}
		});
	}


	var getLatestAlbum = function(userid) {
		var latest = 0;
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/albums',
			async: false,
			success: function(albums) {
				$.each(albums, function(i,albums) {
					if(albums.userId == userid) {
						if(latest < albums.id)
							latest = albums.id;
					}
				});
			}
		});
		return latest;
	}

	var insertLatestPhotoAlbum = function(userid) {
		var albumid;
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/albums',
			success: function(albums) {
				$.each(albums, function(i, albums) {
					if(userid == albums.userId && getLatestAlbum(userid) == albums.id) {
						albumid = albums.id;
						$("#albumDiv").append("<p>Title: " + albums.title + "</p>");
						$("#albumDiv").append("<div id = \"photosDiv\"></div>");
						insertPicture(albums.id);
					}
				});
			}
		});
	}

	var insertPicture = function(albumid) {
		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/photos',
			success: function(photos) {
				$.each(photos, function(i, photos){
					if(albumid == photos.albumId) {
						$("#photosDiv").append("<img src = \"" + photos.url + ".jpg\" style = \"height: 90px; width: 90px;\">");
					}
				});
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

	$(document).on("click", "#personalInfo", function(){
		if($("#personalInfoDiv").css("display") == "none")
			$("#personalInfoDiv").css("display","block");
		else
			$("#personalInfoDiv").css("display","none");
	});

	$(document).on("click", "#album", function(){
		if($("#albumDiv").css("display") == "none")
			$("#albumDiv").css("display","block");
		else
			$("#albumDiv").css("display","none");
	});

	$(document).on("click", "#post", function(){
		if($("#postDiv").css("display") == "none")
			$("#postDiv").css("display","block");
		else
			$("#postDiv").css("display","none");
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

var changeContents = function(header_id) {
	var content;
	if(header_id === "posts") {
		content = "posts goes here";
		document.getElementById("contents").textContent = content;		
		document.getElementById('images').style.display = "none";
	}
	if(header_id === "profile") {
		content = "profile goes here";
		document.getElementById("contents").textContent = content;
		document.getElementById('images').style.display = "none";
	}
	if(header_id === "photos") {
		content = "Sample Photos";
		document.getElementById("contents").textContent = content;
		document.getElementById('images').style.display = "block";
	}
	if(header_id === "album") {
		content = "album goes here";
		document.getElementById("contents").textContent = content;
		document.getElementById('images').style.display = "none";
	}
}

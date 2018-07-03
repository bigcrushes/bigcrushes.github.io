$(document).ready(function () {

	$.get("https://wd.comsci.club/api/kv.php?key=myvisitorcount", function(data){
		var visitorCount = parseInt(data);
		$("#visitor-count").html(visitorCount);
		$.post("https://wd.comsci.club/api/kv.php?key=myvisitorcount", {
		value: visitorCount+1
	});

	});

	
	$.get("https://wd.comsci.club/api/kv.php?key=myprivatecommentsection", function(data) {
			$("#comments-box").html(data);
		});
	
	$("#submitcomment").click(function() {
		var currentcomments = $("#comments-box").html();
		var newcomments = currentcomments + "<br>" + "<b>" + $("#commentName").val() + "</b>: " + $("#comment").val();
		$.post("https://wd.comsci.club/api/kv.php?key=myprivatecommentsection", {
			value: newcomments
		});
		$.get("https://wd.comsci.club/api/kv.php?key=myprivatecommentsection", function(data) {
			$("#comments-box").html(data);
		});
		$("#commentName").val("");
		$("#comment").val("");
	});


	
});
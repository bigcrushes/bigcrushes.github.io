$(document).ready(function () {

	$.get("http://wd.comsci.club/api/kv.php?key=myvisitorcount", function(data){
		var visitorCount = parseInt(data);
		$("#visitor-count").html(visitorCount);
		$.post("http://wd.comsci.club/api/kv.php?key=myvisitorcount", {
		value: visitorCount+1
	});

	});
	$.post("http://wd.comsci.club/api/kv.php?key=myprivatecommentsection", {
		value:""
	});

	

	$("#submitcomment").click(function() {
		var currentcomments = $("#comments-box").html();
		var newcomments = currentcomments + "<br>" + "<b>" + $("#commentName").val() + "</b>: " + $("#comment").val();
		$.post("http://wd.comsci.club/api/kv.php?key=myprivatecommentsection", {
			value: newcomments
		});
		$.get("http://wd.comsci.club/api/kv.php?key=myprivatecommentsection", function(data) {
			$("#comments-box").html(data);
		});
		$("#commentName").val("");
		$("#comment").val("");
	});


	
});
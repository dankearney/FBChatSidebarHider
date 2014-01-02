$(document).ready(function () {

	measureMargins();

	$("#blueBar").prepend("<a id='control'				\
		style=' 										\
			position: absolute;							\
			padding: 2px;								\
			background-color: rgb(240, 240, 255); 		\
			border-radius: 0px 5px 5px 0px;				\
			width: 70px;								\
			text-decoration: none;						\
			top: 42px;									\
			font-weight: bold;							\
			border: 2px solid rgb(200,200,200); 		\
		'> 												\
		</a>");
	setSidebarText();

	$("#control").click(function() {
		toggleSidebar(this);	
	})

	if (localStorage['state'] == 'hidden') {
		hideSidebar();
	} 
});

function toggleSidebar(element) {
	if (localStorage['state'] == 'hidden') {
		showSidebar();
		localStorage['state'] = 'visible';
	} else {
		hideSidebar();
		localStorage['state'] = 'hidden';
	}
	setSidebarText();
}

function setSidebarText() {
	if (localStorage['state'] == 'hidden') {
		$("#control").text('Show Chat Sidebar');
	} else {
		$("#control").text('Hide Chat Sidebar');
	}
}

function hideSidebar() {
	$("#blueBar").animate({"margin-left" : 0}, {duration : 200, queue : false});
	$(".fbChatSidebar").hide(200);
	$("#globalContainer").parent().animate({"margin-left" : 0}, {duration : 200, queue : false});
}

function measureMargins() {
	localStorage['blueBarMargin'] = $("#blueBar").css("margin-left");
	localStorage['containerMargin'] = $("#globalContainer").parent().css("margin-left");
}

function showSidebar() {
	$("#blueBar").animate({"margin-left" : localStorage['blueBarMargin']}, {duration : 200, queue : false});
	$(".fbChatSidebar").show(200);
	$("#globalContainer").parent().animate({"margin-left" : localStorage['containerMargin']}, {duration : 200, queue : false});
}
function checkStatus() {
	$('.actualButton').each(function () {
		$(this).css({
			'margin-left': ($('.buttonContainer').width() - $(this).width()) / 2
		});
	});
	if (enabled === true) {
		if(iconColorChecked){
			chrome.browserAction.setIcon({path: "images/enabled.png"});
		}
		currentStatus = true;
		$(".status").html("Enabled");
		$(".statusContainer").css("background-color", "rgb(24, 150, 71)");
		$(".powerButton").attr("src", "images/enabled.png");
		//$(".questionContainer").show("fast");
		$(".domain").html("on " + window.domain);
	}
	else if (enabled === false) {
		if(iconColorChecked){
			chrome.browserAction.setIcon({path: "images/disabled.png"});
		}
		currentStatus = false;
		$(".status").html("Disabled");
		$(".statusContainer").css("background-color", "rgb(102, 102, 102)");
		$(".powerButton").attr("src", "images/disabled.png");
		//$(".questionContainer").hide("fast");
		$(".domain").html("on " + window.domain);
	}

	if ( status == "Enabled") {
		Enabled.checked = true;
	}
	else if ( status == "Disabled") {
		Disabled.checked = true;
	}
	else if ( status == "Neither") {
		Neither.checked = true;
	}

	if (status == "Enabled" || (enabled === true && status != "Disabled")){
		saveDomainValues();
		cssInject();
	}
	else {
		saveDomainValues();
		cssRemove();
	}

	saveDomainValues();
}

//This basically just checks the values on the popup.html and changes it accordingly.
//It also calls cssInject or cssRemove based on these values.

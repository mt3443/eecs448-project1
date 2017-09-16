/*
==============================
Filename     : toggleTime.js
Authored by  : team "Team"
Last Updated : 09 12 17
==============================
*/
var timeStyle = 12;

function to24hour(input) {
	if(input.substr(input.length - 1, 1) != 'm') {
		return input;
	}

	if(input == "12:00 am") {
		return "00:00";
	}

	if(input == "12:30 am") {
		return "00:30";
	}

	if(input == "12:00 pm") {
		return "12:00";
	}

	if(input == "12:30 pm") {
		return "12:30";
	}

	if(input.substr(input.length - 2,2) == "am") {
		if(input.charAt(1) == ':') {
			return "0" + input.substr(0,4);
		} else {
			return input.substr(0,5);
		}
	} else {
		if(input.charAt(1) == ':') {
			var hour = input.substr(0,1);
			return parseInt(hour) + 12 + input.substr(1,3);
		} else {
			var hour = input.substr(0,2);
			return parseInt(hour) + 12 + input.substr(2,3);
		}
	}
}

function to12hour(input) {
	if(input.substr(input.length - 1, 1) == "m") {
		return input;
	}

	if(input.substr(0,2) < 12) {
		if(input.substr(0,2) == "00") {
			return "12" + input.substr(2,3) + " am";
		} else {
			if(input.substr(0,2) < 10) {
				return input.substr(1,4) + " am";
			} else {
				return input + " am";
			}
		}
	} else {
		if(input.substr(0,2) == "12") {
			return input + " pm";
		} else {
			return parseInt(input.substr(0,2)) - 12 + input.substr(2,3) + " pm";
		}
	}
}

function changeTimeStyle(time) {

	var hour;
	var minutes;
	var afternoon;

	if(timeStyle == 12) {

		if(time == "12:00 pm") {
			return "12:00";
		}

		if(time == "12:30 pm") {
			return "12:30";
		}

		if(time.charAt(1) == ':') {
			hour = time.substr(0,1);
			minutes = time.substr(2,2);
			afternoon = time.substr(5,2) == "pm" ? true : false;
		} else {
			hour = time.substr(0,2);
			minutes = time.substr(3,2);
			afternoon = time.substr(6,2) == "pm" ? true : false;
		}

		if(afternoon && hour != 12) {
			hour = parseInt(hour) + 12 + "";
		} else {
			if(hour < 10) {
				hour = "0" + hour;
			}

			if(hour == 12) {
				hour = "00";
			}
		}

		return (hour + ":" + minutes);

	} else {

		hour = time.substr(0,2);
		minutes = time.substr(3,2);
		afternoon = hour > 11;

		if(hour < 10) {
			hour = hour.substr(1,1);
		}

		if(hour == "0") {
			hour = "12";
		}

		if(afternoon && hour != 12) {
			hour = parseInt(hour) - 12 + "";
		}

		return hour + ":" + minutes + (afternoon ? " pm" : " am");

	}
}


function toggleTime() {

var timeArray = document.getElementsByClassName("time");

	for(var i = 0; i < timeArray.length; i++) {
		timeArray[i].innerHTML = changeTimeStyle(timeArray[i].innerHTML);
	}

	timeStyle = (timeStyle == 12 ? 24 : 12);
}

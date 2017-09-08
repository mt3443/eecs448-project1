var timeStyle = 12;

function changeTimeStyle(time) {
	
	var hour;
	var minutes;
	var afternoon;
	
	if(timeStyle == 12) {
		
		if(time.charAt(1) == ':') {
			hour = time.substr(0,1);
			minutes = time.substr(2,2);
			afternoon = time.substr(5,2) == "pm" ? true : false;
		} else {
			hour = time.substr(0,2);
			mintues = time.substr(3,2);
			afternoon = time.substr(6,2) == "pm" ? true : false;
		}
		
		if(afternoon) {
			hour = parseInt(hour) + 12 + "";
		} else {
			hour = "0" + hour;
		}
		
		return (hour + ":" + minutes);
		
	} else {
	
		hour = time.substr(0,2);
		minutes = time.substr(3,2);
		afternoon = hour > 11;
		
		if(hour < 10) {
			hour = hour.substr(1,1);
		}
		
		return ((afternoon ? parseInt(hour) - 12 + "" : hour) + ":" + minutes + (afternoon ? " pm" : " am"));
	
	}
}


function toggleTime() {

var timeArray = document.getElementsByClassName("time");

	for(var i = 0; i < timeArray.length; i++) {
		timeArray[i].innerHTML = changeTimeStyle(timeArray[i].innerHTML);
	}
	
	timeStyle = (timeStyle == 12 ? 24 : 12);
}
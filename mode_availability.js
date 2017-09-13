/*
==============================
Filename     : mode_availability.js
Authored by  : team "Team"
Last Updated : 09 12 17
==============================
*/


function displayEvents() {

	var selectedDate = document.getElementById("date").innerHTML;

	for(var i = 0; i < eventsArray.length; i++) { //run through every event
		if(eventsArray[i].date == selectedDate) { //if an event happens today
			for(var j = 0; j < eventsArray[i].times.length; j++) { //run through the times that event is occuring
				for(var k = 0; k < document.getElementsByClassName("time").length; k++) {
					if(document.getElementsByClassName("time")[k].innerHTML == eventsArray[i].times[j] || document.getElementsByClassName("time")[k].innerHTML == to24hour(eventsArray[i].times[j])) {
						var color = eventsArray[i].getColor; 		// FIX THIS
						document.getElementsByClassName("t_block")[k].innerHTML += '<div style="background-color:' + color + '" class="eventDisplay">' + eventsArray[i].name + ', hosted by ' + eventsArray[i].host + '</div>';
					}
				}
			}
		}
	}

}

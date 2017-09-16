/*
==============================
Filename     : mode_availability.js
Authored by  : team "Team"
Last Updated : 09 12 17
==============================
*/

var attendButtonText = 'I can attend at this time';

function showAvailabilityCreation() {
	document.getElementById("availabilityCreation").style.display = "block";
	document.getElementById("availabilityCreationButton").style.display = "none";
	document.getElementById("eventCreationButton").style.display = "none";
}

function hideAvailabilityCreation() {
	document.getElementById("availabilityCreation").style.display = "none";
	document.getElementById("availabilityCreationButton").style.display = "block";
	document.getElementById("eventCreationButton").style.display = "block";

}

function fillEventDetails(index, time) {
	
	var divs = '<br><div class="attending">' + Object.keys(eventsArray[index].canAttend[to12hour(time)]).length;

	if(eventsArray[index].canAttend[to12hour(time)].length == 1) {
		divs += ' person is attending: </div>';
	} else {
		divs += ' people are attending: </div>'
	}

	for(var i = 0; i < eventsArray[index].canAttend[to12hour(time)].length; i++) {
		divs += '<div class="attendeeName">' + eventsArray[index].canAttend[to12hour(time)][i] + '</div>';
	}

	divs += '<br><button style="background-color:#f4f4f4;border:none;border-radius:3px;color:#333;" onclick="javascript:window.location.reload()">Collapse All</button>';

	return divs += '<br>';
}

function constructAvailability() {

	var currentEvent;
	var eventTime;
	var eventTitle

	for(var i = 0; i < document.getElementsByClassName("attendButton").length; i++) {
		if(document.getElementsByClassName("attendButton")[i].checked) {
			eventTime = document.getElementsByClassName("attendButton")[i].parentNode.parentNode.childNodes[0].innerHTML;
			currentEvent = document.getElementsByClassName("attendButton")[i].parentNode; //add name to events canAttend list at that time
			eventTitle = currentEvent.innerText;

			for(var j = 0; j < eventsArray.length; j++) { //find the event in eventsArray
				if(eventsArray[j].title == eventTitle.substr(0, eventsArray[j].title.length)) { //match title
					for(var k = 0; k < eventsArray[j].times.length; k++) {
						if(eventsArray[j].times[k] == eventTime) { //match time
							eventsArray[j].canAttend[eventTime].push(document.getElementById("attendee").value);
						} else if(eventsArray[j].times[k] == to12hour(eventTime)) {
							eventsArray[j].canAttend[to12hour(eventTime)].push(document.getElementById("attendee").value);
						}
					}
				}
			}
		}
	}

	saveEventsArray();
	window.location.reload();
}

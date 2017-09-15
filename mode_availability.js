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

function showEventDetails(input) { //input is time slot that we want the details to show up in, the time slot where the button was pressed

	var selectedTime = document.getElementsByClassName("t_block")[input[2]];

	var selectedEvent;

	for(var i = 0; i < selectedTime.childNodes.length; i++) {
		if(selectedTime.childNodes[i].innerText == eventsArray[input[0]].title + " " + attendButtonText + "Details") { //MUST CHANGE THIS LINE TO MATCH NAME OF CHECKBOX
			selectedEvent = selectedTime.childNodes[i];
			break;
		}
	}
	selectedEvent.lastElementChild.style.display = "block";

}

function fillEventDetails(index, time) {
	var divs = '<br><div class="attending">' + Object.keys(eventsArray[index].canAttend[time]).length;

	if(eventsArray[index].canAttend[time].length == 1) {
		divs += ' person is attending: </div>';
	} else {
		divs += ' people are attending: </div>'
	}

	for(var i = 0; i < eventsArray[index].canAttend[time].length; i++) {
		divs += '<div class="attendeeName">' + eventsArray[index].canAttend[time][i] + '</div>';
	}

	divs += '<br><button onclick="javascript:window.location.reload()">Cancel</button>';

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
						if(to24hour(eventsArray[j].times[k]) == to24hour(eventTime)) { //match time
							eventsArray[j].canAttend[eventTime].push(document.getElementById("attendee").value);
						}
					}
				}
			}
		}
	}
	
	saveEventsArray();
	window.location.reload();
}

function displayEvents() {

	var selectedDate = document.getElementById("date").innerHTML;
	var time;
	for(var i = 0; i < eventsArray.length; i++) { //run through the entire eventsArray
		
		if(eventsArray[i].date == selectedDate) {   //if an event happens today
			
			for(var j = 0; j < eventsArray[i].times.length; j++) { //run through the times that event is occuring
				
				for(var k = 0; k < document.getElementsByClassName("time").length; k++) {
					
					if(to24hour(document.getElementsByClassName("time")[k].innerHTML) == to24hour(eventsArray[i].times[j])) {
						time = document.getElementsByClassName("time")[k].innerHTML;
						document.getElementsByClassName("t_block")[k].innerHTML += '<div style="background-color:' + eventsArray[i].color + ';" class="eventDisplay">' + eventsArray[i].title + ' ' + '<input type="checkbox" class="attendButton">' + attendButtonText + '</input>' + 
						'<button class="btn_details" style="float:right;" onclick="showEventDetails([' + i.toString() + ',' + j.toString() + ',' + k.toString() + '])">Details</button><div class="eventDetails" style="display:none;">' + fillEventDetails(i, time) + '</div></div>';
					}
				}
			}
		}
	}
}

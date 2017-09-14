/*
==============================
Filename     : mode_availability.js
Authored by  : team "Team"
Last Updated : 09 12 17
==============================
*/


function showEventDetails(input) { //input is time slot that we want the details to show up in, the time slot where the button was pressed
	var selectedTime = document.getElementsByClassName("t_block")[input[2]];
	
	var selectedEvent;
	
	for(var i = 0; i < selectedTime.childNodes.length; i++) {
		if(selectedTime.childNodes[i].innerText == eventsArray[input[0]].title + " Details") {
			selectedEvent = selectedTime.childNodes[i];
			break;
		}
	}
	
	selectedEvent.lastElementChild.style.display = "block";
	
	console.log(input);
}

function addToCanAttend(input) {
	eventsArray[input].canAttend.push(document.getElementById("rsvpTextbox").value);
	saveEventsArray();
}

function addToCannotAttend(input) {
	eventsArray[input].cannotAttend.push(document.getElementById("rsvpTextbox").value);
	saveEventsArray();
}

function fillEventDetails(input) {
	var divs = '<br><div class="attending">' + eventsArray[input].canAttend.length;
	
	if(eventsArray[input].canAttend.length == 1) {
		divs += ' person is attending: </div>';
	} else {
		divs += ' people are attending: </div>'
	}
	
	for(var i = 0; i < eventsArray[input].canAttend.length; i++) {
		divs += '<div class="attendeeName">' + eventsArray[input].canAttend[i] + '</div>';
	}
	
	divs += '<br><div class="notAttending">' + eventsArray[input].cannotAttend.length;
	
	if(eventsArray[input].cannotAttend.length == 1) {
		divs += ' person is not attending: </div>';
	} else {
		divs += ' people are not attending: </div>';
	}
	
	for(var i = 0; i < eventsArray[input].cannotAttend.length; i++) {
		divs += '<div class="cannotAttendName">' + eventsArray[input].cannotAttend[i] + '</div>';
	}
	
	divs += '<br><input type="text" id="rsvpTextbox" placeholder="Enter your name"></input><button onclick="addToCanAttend(' + input + ')">I can attend</button><button onclick="addToCannotAttend(' + input + ')">I cannot attend</button>';
	
	return divs += '<br><br>';
}

function displayEvents() {

	var selectedDate = document.getElementById("date").innerHTML;

	for(var i = 0; i < eventsArray.length; i++) { //run through every event
		if(eventsArray[i].date == selectedDate) { //if an event happens today
			for(var j = 0; j < eventsArray[i].times.length; j++) { //run through the times that event is occuring
				for(var k = 0; k < document.getElementsByClassName("time").length; k++) {
					if(document.getElementsByClassName("time")[k].innerHTML == eventsArray[i].times[j] || document.getElementsByClassName("time")[k].innerHTML == to24hour(eventsArray[i].times[j])) {
						var color = eventsArray[i].getColor;		// FIX THIS
						document.getElementsByClassName("t_block")[k].innerHTML += '<div style="background-color:' + color + '" class="eventDisplay">' + eventsArray[i].title + ' ' +
						'<button onclick="showEventDetails([' + i.toString() + ',' + j.toString() + ',' + k.toString() + '])">Details</button><div class="eventDetails" style="display: none;">' + fillEventDetails(i) + '</div></div>';
					}
				}
			}
		}
	}

}

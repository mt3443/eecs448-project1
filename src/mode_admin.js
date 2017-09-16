/*
==============================
Filename     : mode_admin.js
Authored by  : team "Team"
Last Updated : 09 12 17
==============================
*/

var today = new Date();
var day = new Date();
var cal = new Calendar();
// Event Object

function Event(host, name, newColor, date, times) {
	this.host = host;
	this.name = name;
	this.title = this.name + ', hosted by ' + this.host;
	this.color = newColor;
	this.date = date;
	this.times = times; //array of times
	this.canAttend = createCanAttend(host, times); //array of the names of people that can attend
}

function createCanAttend(host, times) {
	var tempCanAttend = {};

	for(var i = 0; i < times.length; i++) {
		tempCanAttend[times[i]] = [host];
	}

	return tempCanAttend;
}

if(localStorage.getItem("eventsArray") != null) {
	loadEventsArray();
} else {
	var eventsArray = [];
}

function showEventCreation() {
	document.getElementById("eventCreation").style.display = "block";
	document.getElementById("eventCreationButton").style.display = "none";
	document.getElementById("availabilityCreationButton").style.display = "none";
}

function hideEventCreation() {
	document.getElementById("eventCreation").style.display = "none";
	document.getElementById("eventCreationButton").style.display = "block";
	document.getElementById("availabilityCreationButton").style.display = "block";

}

function constructEvent() {
	if(getSelectedTimes().length == 0) {
		alert("Please select at least one time block for your event");
	} else {
			if(today > day) {
				alert("You cannot create an event in the past");
				resetSelectedTimes();
			} else if(eventAlreadyExisits()) {
				alert("This event already exists at one of the selected times");
				resetSelectedTimes();
			} else {
				var tempDate = document.getElementById("date").innerHTML;

				var tempEvent = new Event(document.getElementById("host").value, document.getElementById("name").value, randomColor({luminosity: 'light'}), tempDate, getSelectedTimes());
				eventsArray.push(tempEvent);
				saveEventsArray();
				hideEventCreation();
				resetSelectedTimes();
			}
	}
}

function eventAlreadyExisits() {
	var tempDate = document.getElementById("date").innerHTML;

	var tempEvent = new Event(document.getElementById("host").value, document.getElementById("name").value, randomColor(), tempDate, getSelectedTimes());
	
	for(var i = 0; i < eventsArray.length; i++) {
		if(eventsArray[i].title == tempEvent.title) { //if two events have the same title
			for(var j = 0; j < eventsArray[i].times.length; j++) {
				for(var k = 0; k < tempEvent.times.length; k++) {
					if(eventsArray[i].times[j] == tempEvent.times[k]) {
						return true;
					}
				}
			}
		}
	}
	
	return false;
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
						document.getElementsByClassName("t_block")[k].innerHTML += '<div style="font-weight:800;background-color:' + eventsArray[i].color + ';" class="eventDisplay">' + eventsArray[i].title + ' ' + '<br><input type="checkbox" style="margin:25px;line-height:60px;width:auto;" class="attendButton"></input>' + '<div style="display:inline-block;font-weight:300;margin-left:-10px;">' + attendButtonText  +
						'</div><button id="details'+ j + '" class="btn_details" style="float:right;background-color:#f4f4f4;border:none;border-radius:3px;color:#333;" onclick="showEventDetails([' + i.toString() + ',' + j.toString() + ',' + k.toString() + ']);hideSelf(' + j + ');">Details</button><div class="eventDetails" style="font-weight:300;display:none;">' + fillEventDetails(i, time) + '</div></div>';
					}
				}
			}
		}
	}
}

function showEventDetails(input) { //input is time slot that we want the details to show up in, the time slot where the button was pressed

	var selectedTime = document.getElementsByClassName("t_block")[input[2]];

	var selectedEvent;

	for(var i = 0; i < selectedTime.childNodes.length; i++) {
		if(selectedTime.childNodes[i].innerText == eventsArray[input[0]].title + " \n" + attendButtonText + "Details") {
			selectedEvent = selectedTime.childNodes[i];
			break;
		}
	}
	selectedEvent.lastElementChild.style.display = "block";

}

function saveEventsArray() {
	localStorage.setItem("eventsArray", JSON.stringify(eventsArray));
}

function loadEventsArray() {
	eventsArray = JSON.parse(localStorage.getItem("eventsArray"));
}

function isEventsArrayEmpty() {
  var eventsArrayIsEmpty = true;
  if (eventsArray.length !== 0) {
    eventsArrayIsEmpty = false;
  }
  return eventsArrayIsEmpty;
}

function clearEventsArray() {
	localStorage.removeItem("eventsArray");
	window.location.reload();
}

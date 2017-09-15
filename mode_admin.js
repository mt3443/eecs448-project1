/*
==============================
Filename     : mode_admin.js
Authored by  : team "Team"
Last Updated : 09 12 17
==============================
*/
var eventsArray;
var today = new Date();
var day = new Date();
var cal = new Calendar();
// Event Object

function createCanAttend(host, times) {
	var tempCanAttend = {};

	for(var i = 0; i < times.length; i++) {
		tempCanAttend[times[i]] = [host];
	}

	return tempCanAttend;
}

function Event(host, name, newColor, date, times) {
	this.host = host;
	this.name = name;
	this.title = this.name + ', hosted by ' + this.host;
	this.color = newColor;
	this.date = date;
	this.times = times; //array of times
	this.canAttend = createCanAttend(host, times); //array of the names of people that can attend
}

if(localStorage.getItem("eventsArray") != null) {
	loadEventsArray();
} else {
	eventsArray = [];
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

function constructEventChe() {

}

function constructEvent() {
	if(getSelectedTimes().length == 0) {
		alert("Please select at least 1 time block for your event");
	} else {
			if(today < day) {
						alert("You are creating an event in a past");
						resetSelectedTimes();
			} else {
				var tempDate = document.getElementById("date").innerHTML;

				var tempEvent = new Event(document.getElementById("host").value, document.getElementById("name").value, randomColor(), tempDate, getSelectedTimes());
				eventsArray.push(tempEvent);
				saveEventsArray();
				hideEventCreation();
				resetSelectedTimes();
			}
	}
}

function saveEventsArray() {
	localStorage.setItem("eventsArray", JSON.stringify(eventsArray));
}

function loadEventsArray() {
	eventsArray = JSON.parse(localStorage.getItem("eventsArray"));
}

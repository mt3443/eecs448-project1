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
function Event(host, name, newColor, date, times, canAttend, cannotAttend) {
	this.host = host;
	this.name = name;
	this.title = this.name + ', hosted by ' + this.host;
	this.color = newColor;
	this.date = date;
	this.times = times; //array of times
	this.canAttend = canAttend; //array of the names of people that can attend
	this.cannotAttend = cannotAttend; //array of the names of people that cannot attend
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

function constructEvent() {
	if(getSelectedTimes().length == 0) {
		alert("Please select at least 1 time block for your event");
	} else {
		var tempDate = document.getElementById("date").innerHTML;
		var tempEvent = new Event(document.getElementById("host").value, document.getElementById("name").value, randomColor(), tempDate, getSelectedTimes(), [host.value], []);
		eventsArray.push(tempEvent);
		saveEventsArray();
		hideEventCreation();
		resetSelectedTimes();
	}
}

function saveEventsArray() {
	localStorage.setItem("eventsArray", JSON.stringify(eventsArray));
}

function loadEventsArray() {
	eventsArray = JSON.parse(localStorage.getItem("eventsArray"));
}

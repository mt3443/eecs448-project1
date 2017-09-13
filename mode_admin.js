/*
==============================
Filename     : mode_admin.js
Authored by  : team "Team"
Last Updated : 09 12 17
==============================
*/
var eventsArray;
var day = new Date();
var cal = new Calendar();
var date = '' + day.getMonth() + '/' + day.getDay();
// Event Object
function Event(host, name, date, times, canAttend, cannotAttend) {
	this.host = host;
	this.name = name;
	this.color = function() {
		var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color; // Returns in form #000000 - #FFFFFF
	};
	this.date = date;
	this.times = times; //array of times
	this.canAttend = canAttend; //array of the names of people that can attend
	this.cannotAttend = cannotAttend; //array of the names of people that cannot attend
}

function getEvents() {
	return [];
}

if(localStorage.getItem("eventsArray") != null) {
	loadEventsArray();
} else {
	eventsArray = [];
}

function showEventCreation() {
	document.getElementById("eventCreation").style.display = "block";
	document.getElementById("eventCreationButton").style.display = "none";
}

function hideEventCreation() {
	document.getElementById("eventCreation").style.display = "none";
	document.getElementById("eventCreationButton").style.display = "block";
}

function constructEvent() {

	var checkedTimes = getSelectedTimes();

	var tempEvent = new Event(document.getElementById("host").value, document.getElementById("name").value, date, checkedTimes, [host.value], []);

	eventsArray.push(tempEvent);

	saveEventsArray();

	hideEventCreation();

	resetSelectedTimes();

	//document.getElementById("result").innerHTML = "make another event, close window, reopen, repeat";
}

function saveEventsArray() {

	localStorage.setItem("eventsArray", JSON.stringify(eventsArray));

	//document.getElementById("savedInformation").innerHTML = JSON.stringify(eventsArray); //remove in final
}

function loadEventsArray() {

	eventsArray = JSON.parse(localStorage.getItem("eventsArray"));

	//document.getElementById("savedInformation").innerHTML = JSON.stringify(eventsArray); //remove in final

}

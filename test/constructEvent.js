var eventsArray;
var day = new Date();
var date = '' + day.getMonth() + '/' + day.getDay();

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

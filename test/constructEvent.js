var eventsArray;

if(localStorage.getItem("eventsArray") != null) {
	loadEventsArray();
} else {
	eventsArray = [];
}

function showEventCreation() {
	document.getElementById("eventCreation").style.display = "block";
	document.getElementById("eventCreationButton").style.display = "none";
}

function constructEvent() {

	var checkedTimes = [];
	var temp = document.getElementsByClassName("checkbox");

	for(var i = 0; i < temp.length; i++) {
		if(temp[i].checked) {
			checkedTimes.push(temp[i].id);
		}
	}

	var tempEvent = new Event(document.getElementById("host").value, document.getElementById("name").value, "today", checkedTimes, [], []);

	eventsArray.push(tempEvent);

	saveEventsArray();

	//document.getElementById("result").innerHTML = "make another event, close window, reopen, repeat";
	
	
	//TODO
	//CHANGE "TODAY" TO ACTUAL DATE
}

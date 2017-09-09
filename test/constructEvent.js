var eventsArray = [];

var test;

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
	
	var tempEvent = new Event(document.getElementById("name").value, "today", checkedTimes, []);
	
	eventsArray.push(tempEvent);
	
	eventsArray[0].print();
	
	document.getElementById("result").innerHTML = "check console";
	
}
var day = new Date();

function removeExistingEvents() {
	var elementsToRemove = document.getElementsByClassName("eventDisplay");
	
	while(elementsToRemove.length != 0) {
		elementsToRemove[0].remove();
	}
}

function monthForward() {
	day.setMonth(day.getMonth() + 1);
	updateTime();
	cal = new Calendar();
	removeExistingEvents();
	displayEvents();
}

function monthBackward() {
	day.setMonth(day.getMonth() - 1);
	updateTime();
	cal = new Calendar();
	removeExistingEvents();
	displayEvents();
}

function dayForward() {
	day.setDate(day.getDate() + 1);
	updateTime();
	cal = new Calendar();
	removeExistingEvents();
	displayEvents();
}

function dayBackward() {
	day.setDate(day.getDate() - 1);
	updateTime();
	cal = new Calendar();
	removeExistingEvents();
	displayEvents();
}

function updateTime()
{

	var weekDay;
	//day of the week if's
	if(day.getDay() == 0) {
		weekDay = "Sunday"
	} else if(day.getDay() == 1) {
		weekDay = "Monday"
	} else if(day.getDay() == 2) {
		weekDay = "Tuesday"
	} else if(day.getDay() == 3) {
		weekDay = "Wednesday"
	} else if(day.getDay() == 4) {
		weekDay = "Thursday"
	} else if(day.getDay() == 5) {
		weekDay = "Friday"
	} else if(day.getDay() == 6) {
		weekDay = "Saturday"
	}

	var month;
	//month if's
	if(day.getMonth() == 0) {
		month = "January"
	} else if(day.getMonth() == 1) {
		month = "February"
	} else if(day.getMonth() == 2) {
		month = "March"
	} else if(day.getMonth() == 3) {
		month = "April"
	} else if(day.getMonth() == 4) {
		month = "May"
	} else if(day.getMonth() == 5) {
		month = "June"
	} else if(day.getMonth() == 6) {
		month = "July"
	} else if(day.getMonth() == 7) {
		month = "August"
	} else if(day.getMonth() == 8) {
		month = "September"
	} else if(day.getMonth() == 9) {
		month = "October"
	} else if(day.getMonth() == 10) {
		month = "November"
	} else if(day.getMonth() == 11) {
		month = "December"
	}



	document.getElementById("dayOfWeek").innerHTML = weekDay + "";
	document.getElementById("date").innerHTML = monthToString() + " " + day.getDate() + ", " + day.getFullYear();

}

function monthToString() {
	var month;
	//month if's
	if(day.getMonth() == 0) {
		month = "January"
	} else if(day.getMonth() == 1) {
		month = "February"
	} else if(day.getMonth() == 2) {
		month = "March"
	} else if(day.getMonth() == 3) {
		month = "April"
	} else if(day.getMonth() == 4) {
		month = "May"
	} else if(day.getMonth() == 5) {
		month = "June"
	} else if(day.getMonth() == 6) {
		month = "July"
	} else if(day.getMonth() == 7) {
		month = "August"
	} else if(day.getMonth() == 8) {
		month = "September"
	} else if(day.getMonth() == 9) {
		month = "October"
	} else if(day.getMonth() == 10) {
		month = "November"
	} else if(day.getMonth() == 11) {
		month = "December"
	}
	return month;
}

function removeExistingEvents() {
	var elementsToRemove = document.getElementsByClassName("eventDisplay");

	while(elementsToRemove.length != 0) {
		elementsToRemove[0].remove();
	}
}

function monthForward() {
	cal = new Calendar();
	document.getElementById('Calendar').innerHTML = '';
	var month_next = monthToString(today.getMonth() + 1);
	cal[month_next].draw();
	today.setMonth(today.getMonth() + 1);
	updateTime();
	removeExistingEvents();
	displayEvents();
}

function monthBackward() {
	cal = new Calendar();
	document.getElementById('Calendar').innerHTML = '';
	var month_prev = monthToString(today.getMonth() - 1);
	cal[month_prev].draw();
	today.setMonth(today.getMonth() - 1);
	updateTime();
	removeExistingEvents();
	displayEvents();
}

function dayForward() {
	cal = new Calendar();
	document.getElementById('Calendar').innerHTML = '';
	today.setDate(today.getDate() + 1);
	updateTime();
	var month = monthToString(today.getMonth());
	cal[month].draw();
	removeExistingEvents();
	displayEvents();
}

function dayBackward() {
	cal = new Calendar();
	document.getElementById('Calendar').innerHTML = '';
	today.setDate(today.getDate() - 1);
	updateTime();
	var month = monthToString(today.getMonth());
	cal[month].draw();
	removeExistingEvents();
	displayEvents();
}

function updateTime()
{

	var weekDay;
	//day of the week if's
	if(today.getDay() == 6) {
		weekDay = "Sunday"
	} else if(today.getDay() == 0) {
		weekDay = "Monday"
	} else if(today.getDay() == 1) {
		weekDay = "Tuesday"
	} else if(today.getDay() == 2) {
		weekDay = "Wednesday"
	} else if(today.getDay() == 3) {
		weekDay = "Thursday"
	} else if(today.getDay() == 4) {
		weekDay = "Friday"
	} else if(today.getDay() == 5) {
		weekDay = "Saturday"
	}

	document.getElementById("dayOfWeek").innerHTML = weekDay + "";
	document.getElementById("date").innerHTML = monthToString(today.getMonth()) + " " + today.getDate() + ", " + today.getFullYear();

}

function monthToString(month) {
	//month if's
	if(month == 0) {
		month = "January"
	} else if(month == 1) {
		month = "February"
	} else if(month == 2) {
		month = "March"
	} else if(month == 3) {
		month = "April"
	} else if(month == 4) {
		month = "May"
	} else if(month == 5) {
		month = "June"
	} else if(month == 6) {
		month = "July"
	} else if(month == 7) {
		month = "August"
	} else if(month == 8) {
		month = "September"
	} else if(month == 9) {
		month = "October"
	} else if(month == 10) {
		month = "November"
	} else if(month == 11) {
		month = "December"
	}
	return month;
}

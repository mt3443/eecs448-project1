/*
==============================
Filename     : date.js
Authored by  : team "Team"
Last Updated : 09 16 17
==============================
*/

/**
 * Function that removes all event graphics from UI<br><br>Pre conditions: Events for current day have been rendered on UI<br><br>Post conditions: All event graphics for the current day have been removed
 * @param {none}
 * @return {void}
 */
function removeExistingEvents() {
	var elementsToRemove = document.getElementsByClassName("eventDisplay");

	while(elementsToRemove.length != 0) {
		elementsToRemove[0].remove();
	}
}

/**
 * Function that checks if the selected day is the last day of the month<br><br>Pre conditions: day has been instantiated<br><br>Post conditions: none
 * @param {none}
 * @return {bool} true if the selected day is the last day of the month, false if it is not
 */

function lastDayOfMonth() {
	if(day.getMonth() == 0 || day.getMonth == 2 || day.getMonth() == 4 || day.getMonth() == 6 || day.getMonth() == 7 || day.getMonth() == 9 || day.getMonth() == 11) {
		if(day.getDate() == 31) {
			return true;
		} else {
			return false;
		}
	} else if(day.getMonth() == 1) {
		if(day.getDate() == checkLeapYear()) {
			return true;
		} else {
			return false;
		}
	} else {
		if(day.getDate() == 30) {
			return true;
		} else {
			return false;
		}
	}
}

/**
 * Changes the selected day to one month in the future<br><br>Pre conditions: none<br><br>Post conditions: New selected date is one month after previous selected date
 * @param {none}
 * @return {void}
 */

function monthForward() {
	cal = new Calendar();
	document.getElementById('Calendar').innerHTML = '';
	day.setMonth(day.getMonth() + 1);
	updateTime();
	removeExistingEvents();
	displayEvents();
	cal.draw();
	fixCalendar();
}

/**
 * Changes the selected day to one month in the past<br><br>Pre conditions: none<br><br>Post conditions: New selected date is one month before previous selected date
 * @param {none}
 * @return {void}
 */

function monthBackward() {
	cal = new Calendar();
	document.getElementById('Calendar').innerHTML = '';
	day.setMonth(day.getMonth() - 1);
	updateTime();
	removeExistingEvents();
	displayEvents();
	cal.draw();
	fixCalendar();
}

/**
 * Changes the selected day to one day in the future<br><br>Pre conditions: none<br><br>Post conditions: New selected date is one day after previous selected date
 * @param {none}
 * @return {void}
 */

function dayForward() {

	if(day.getMonth() == 2 && day.getDate() == 31) {

		cal = new Calendar();
		document.getElementById('Calendar').innerHTML = '';
		day.setDate(day.getDate() + 1);
		updateTime();
		removeExistingEvents();
		displayEvents();
		cal.draw();
		fixCalendarRight();

	} else if(day.getMonth() == 2 && day.getDate() == 30) {

		cal = new Calendar();
		document.getElementById('Calendar').innerHTML = '';
		day.setDate(day.getDate() + 1);
		updateTime();
		removeExistingEvents();
		displayEvents();
		cal.draw();

	} else {

		if(lastDayOfMonth()) {
			cal = new Calendar();
			document.getElementById('Calendar').innerHTML = '';
			day.setDate(day.getDate() + 1);
			updateTime();
			removeExistingEvents();
			displayEvents();
			cal.draw();
			fixCalendarRight();

		} else {

			cal = new Calendar();
			document.getElementById('Calendar').innerHTML = '';
			day.setDate(day.getDate() + 1);
			updateTime();
			removeExistingEvents();
			displayEvents();
			cal.draw();
		}
	}
}

/**
 * Changes the selected day to one day in the past<br><br>Pre conditions: none<br><br>Post conditions: New selected date is one day before previous selected date
 * @param {none}
 * @return {void}
 */

function dayBackward() {
	if(day.getDate() == 1) {
		cal = new Calendar();
		document.getElementById('Calendar').innerHTML = '';
		day.setDate(day.getDate() - 1);
		updateTime();
		removeExistingEvents();
		displayEvents();
		cal.draw();
		fixCalendarLeft();
	} else {
		cal = new Calendar();
		document.getElementById('Calendar').innerHTML = '';
		day.setDate(day.getDate() - 1);
		updateTime();
		removeExistingEvents();
		displayEvents();
		cal.draw();
	}
}

/**
 * Updates HTML on UI to display the current date<br><br>Pre conditions: none<br><br>Post conditions: UI displays the correct day
 * @param {none}
 * @return {void}
 */

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

	document.getElementById("dayOfWeek").innerHTML = weekDay + "";
	document.getElementById("date").innerHTML = monthToString(day.getMonth()) + " " + day.getDate() + ", " + day.getFullYear();

}

/**
 * Converts integer representation of a month to the name of the month<br><br>Pre conditions: input is an integer from 0 to 11<br><br>Post conditions: none
 * @param {number} month integer representation of a month (0 - 11)
 * @return {string} name of month corresponding to input
 */

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

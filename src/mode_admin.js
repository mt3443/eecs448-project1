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
var unique = 0;
// Event Object

/**
 * Event object constructor<br><br>Pre conditions: none<br><br>Post conditions: Event instance is created containing relevant information
 * @param {string} host name of event creator
 * @param {string} name name of event
 * @param {string} newColor hexadecimal color code for the background color of the event on list of times (random color)
 * @param {string} date date during which the event occurs
 * @param {array} times array of strings of the times during which the event is occuring
 * @return {void}
 */

function Event(host, name, newColor, date, times) {
	this.host = host;
	this.name = name;
	this.title = this.name + ', hosted by ' + this.host;
	this.color = newColor;
	this.date = date;
	this.times = times; //array of times
	this.canAttend = createCanAttend(host, times); //array of the names of people that can attend
}

/**
 * Helper function that creates the canAttend property of each event<br><br>Pre conditions: event is already instantiated<br><br>Post conditions: event object has can attend object representing who can attend the event at each time
 * @param {string} host name of event creator
 * @param {array} times array of strings of the times during which the event is occuring
 * @return {Object} key-value object containing arrays of names of who can attend the event at each time
 */

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

/**
 * Edits HTML to show event creation prompt<br><br>Pre conditions: event creation prompt must not already be displayed<br><br>Post conditions: prompt for creating events is shown
 * @param {none}
 * @return {void}
 */

function showEventCreation() {
	document.getElementById("eventCreation").style.display = "block";
	document.getElementById("eventCreationButton").style.display = "none";
	document.getElementById("availabilityCreationButton").style.display = "none";
}

/**
 * Edits HTML to hide event creation prompt<br><br>Pre conditions: event creation prompt must already be displayed<br><br>Post conditions: prompt for creating events is hidden
 * @param {none}
 * @return {void}
 */

function hideEventCreation() {
	document.getElementById("eventCreation").style.display = "none";
	document.getElementById("eventCreationButton").style.display = "block";
	document.getElementById("availabilityCreationButton").style.display = "block";

}

/**
 * Return times the user selected during event creation<br><br>Pre conditions: at least one time slot must be selected<br><br>Post conditions: none
 * @param {none}
 * @return {array} array of selected times for the event to take place during
 */

function getSelectedTimes() {
  var timeslots = [];
  for(var i = 0; i < time_selections.length; i++) {
    if(time_selections[i].selected) {
      timeslots.push(time_selections[i].time);
    }
  }
  return timeslots;
}

/**
 * Clears all time slot selections<br><br>Pre conditions: at least one time slot must be selected<br><br>Post conditions: no time slots are selected
 * @param {none}
 * @return {void}
 */

function resetSelectedTimes() {
  for(var i = 0; i < time_selections.length; i++) {
    if(time_selections[i].selected) {
      toggle_timeAdd(i);
    }
  }
  window.location.reload();
}

/**
 * Collects information from event creation prompt and constructs an event object containing said information<br><br>Pre conditions: event must have a host, a name, and at least one selected time slot<br><br>Post conditions: event is added to eventsArray
 * @param {none}
 * @return {void}
 */

function constructEvent() {
	if(getSelectedTimes().length == 0) {
		alert("Please select at least one time block for your event");
	} else if(document.getElementById("host").value.length == 0) {
		alert("Please enter your name");
	} else if(document.getElementById("name").value.length == 0) {
		alert("Please enter a name for your event");
	}else {
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

/**
 * Helper function called during event creation that checks for duplicate events<br><br>Pre conditions: none<br><br>Post conditions: none
 * @param {none}
 * @return {bool} true if the event you're trying to make already exists, false if the event you're trying to make is unique
 */

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

/**
 * Edits HTML to show all created events in their respective time slots for the current day<br><br>Pre conditions: none<br><br>Post conditions: all events for the day are displayed
 * @param {none}
 * @return {void}
 */

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
						'</div><button id="details'+ (unique) + '" class="btn_details" style="float:right;background-color:#f4f4f4;border:none;border-radius:3px;color:#333;" onclick="showEventDetails([' + i.toString() + ',' + j.toString() + ',' + k.toString() + ']);hideSelf(' + (unique) + ');">Details</button><div class="eventDetails" style="font-weight:300;display:none;">' + fillEventDetails(i, time) + '</div></div>';
						unique = unique + 1;
					}
				}
			}
		}
	}
}

/**
 * Edits HTML to show who is attending a specified event at the specified time<br><br>Pre conditions: event must exist<br><br>Post conditions: information about who is attending the event is shown
 * @param {array} input array containing information about the specified event in the specified time slot
 * @return {void}
 */
 
function showEventDetails(input) { //input is time slot that we want the details to show up in, the time slot where the button was pressed

	var selectedTime = document.getElementsByClassName("t_block")[input[2]];

	var selectedEvent;

	for(var i = 0; i < selectedTime.childNodes.length; i++) {
		if(selectedTime.childNodes[i].innerText == eventsArray[input[0]].title + " \n" + attendButtonText + "Details" || selectedTime.childNodes[i].innerText == eventsArray[input[0]].title + "\n" + attendButtonText + "Details") {
			selectedEvent = selectedTime.childNodes[i];
			break;
		}
	}
	selectedEvent.lastElementChild.style.display = "block";

}

/**
 * Saves created events on local machine<br><br>Pre conditions: browser must support HTML5's localStorage API<br><br>Post conditions: events are stored for future use
 * @param {none}
 * @return {void}
 */

function saveEventsArray() {
	localStorage.setItem("eventsArray", JSON.stringify(eventsArray));
}

/**
 * Loads events previously saved on local machine<br><br>Pre conditions: browser must support HTML5's localStorage API<br><br>Post conditions: information about events created in previous sessions is stored in the eventsArray gloabl variable
 * @param {none}
 * @return {void}
 */

function loadEventsArray() {
	eventsArray = JSON.parse(localStorage.getItem("eventsArray"));
}

/**
 * Checks if events array is empty<br><br>Pre conditions: none<br><br>Post conditions: none
 * @param {none}
 * @return {bool} true if events array is empty, false if events array is not empty
 */

function isEventsArrayEmpty() {
  var eventsArrayIsEmpty = true;
  if (eventsArray.length !== 0) {
    eventsArrayIsEmpty = false;
  }
  return eventsArrayIsEmpty;
}

/**
 * Removes all saved events from your local machine<br><br>Pre conditions: there must be existing events saved on local machine, browser must suppoort HTML5's localStorage API<br><br>Post conditions: information about events on local machine is removed
 * @param {none}
 * @return {void}
 */

function clearEventsArray() {
	localStorage.removeItem("eventsArray");
	window.location.reload();
}

/**
 * Edits HTML to hide element that called this function<br><br>Pre conditions: element must not be hidden<br><br>Post conditions: element is hidden
 * @param {number} index number representing which element called this function and must be hidden
 * @return {void}
 */

function hideSelf(index) {
	document.getElementById('details' + index).style.display = "none";
}

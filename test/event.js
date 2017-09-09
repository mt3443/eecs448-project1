function Event(name, date, times, attendees) {
	
	this.name = name;
	this.date = date;
	this.times = times; //array of times
	this.attendees = attendees; //array of the names of attendees
	
	this.numberOfAttendees = function() { return this.attendees.length; };
	this.print = function() { console.log(this.name + " " + this.date + " " + this.times + " " + this.attendees); };
}
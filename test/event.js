function Event(host, name, date, times, canAttend, cannotAttend) {
	this.host = host;
	this.name = name;
	this.getColor = function() {
		var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color; // Returns Broken Form FIX THIS
	};
	this.date = date;
	this.times = times; //array of times
	this.canAttend = canAttend; //array of the names of people that can attend
	this.cannotAttend = cannotAttend; //array of the names of people that cannot attend

}

function getEvents() {
	return eventsArray;
}

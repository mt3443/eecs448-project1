function Event(host, name, date, times, canAttend, cannotAttend) {
	
	this.host = host;
	this.name = name;
	this.date = date;
	this.times = times; //array of times
	this.canAttend = canAttend; //array of the names of people that can attend
	this.cannotAttend = cannotAttend; //array of the names of people that cannot attend
	
}

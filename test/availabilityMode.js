function isEventScheduled(){
	var hasEvent = false;
    if (eventsArray[i].times  && eventsArray[i].date) {
        hasEvent = true;
    }
	return hasEvent;
}


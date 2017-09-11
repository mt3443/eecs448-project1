function attendEvent(){
	var canAttend = false;
	for ( var i, i < eventsArray.length ,i++)
        if (eventsArray[i].times  && eventsArray[i].date) {
            canAttend = true;
        }
	return canAttend;
}


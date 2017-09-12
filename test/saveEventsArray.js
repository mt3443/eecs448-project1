function saveEventsArray() {

	localStorage.setItem("eventsArray", JSON.stringify(eventsArray));

	//document.getElementById("savedInformation").innerHTML = JSON.stringify(eventsArray); //remove in final
}

function loadEventsArray() {

	eventsArray = JSON.parse(localStorage.getItem("eventsArray"));

	//document.getElementById("savedInformation").innerHTML = JSON.stringify(eventsArray); //remove in final

}

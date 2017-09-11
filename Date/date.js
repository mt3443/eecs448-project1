var day = new Date();



function updateTime()
{

	var weekDay;
	var month;
//day of the week if's
	if(day.getDay() == 0)
	{
		weekDay = "Sunday,"
	}
	if(day.getDay() == 1)
	{
		weekDay = "Monday,"
	}
	if(day.getDay() == 2)
	{
		weekDay = "Tuesday,"
	}
	if(day.getDay() == 3)
	{
		weekDay = "Wednesday,"
	}
	if(day.getDay() == 4)
	{
		weekDay = "Thursday,"
	}
	if(day.getDay() == 5)
	{
		weekDay = "Friday,"
	}
	if(day.getDay() == 6)
	{
		weekDay = "Saturday,"
	}
//month if's
	if(day.getMonth() == 0)
	{
		month = "January "
	}
	if(day.getMonth() == 1)
	{
		month = "February "
	}
	if(day.getMonth() == 2)
	{
		month = "March "
	}
	if(day.getMonth() == 3)
	{
		month = "April "
	}
	if(day.getMonth() == 4)
	{
		month = "May "
	}
	if(day.getMonth() == 5)
	{
		month = "June "
	}
	if(day.getMonth() == 6)
	{
		month = "July "
	}
	if(day.getMonth() == 7)
	{
		month = "August "
	}
	if(day.getMonth() == 8)
	{
		month = "September "
	}
	if(day.getMonth() == 9)
	{
		month = "October "
	}
	if(day.getMonth() == 10)
	{
		month = "November "
	}
	if(day.getMonth() == 11)
	{
		month = "December "
	}

	var str1 = month;
	var str2 = (day.getDate());// + ("th")

	var monthDate = str1.concat(str2);



document.getElementById("dayOfWeek").innerHTML = weekDay;
document.getElementById("monthAndDay").innerHTML = monthDate;






}

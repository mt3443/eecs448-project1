var days_of_the_week = '<div class="days_of_the_week">Su</div><div class="days_of_the_week">M</div><div class="days_of_the_week">T</div><div class="days_of_the_week">W</div><div class="days_of_the_week">T</div><div class="days_of_the_week">F</div><div class="days_of_the_week">S</div>';

function Calendar() {

  var month = monthToString(day.getMonth());
  var tempDate = new Date(day.getFullYear(), day.getMonth(), 1);
  
  if(month == "February") {
	this.number_of_days = checkLeapYear();  
  } else if (month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December") {
	this.number_of_days = 31;
  } else {
	this.number_of_days = 30;
  }
  
  this.draw = function() {
	  var wrapper = document.getElementById('Calendar');
	  wrapper.style.width = '182px';
	  wrapper.innerHTML += '<div class="monthname">' + monthToString(day.getMonth()) + ' ' + day.getFullYear() + '</div>'
	  wrapper.innerHTML += days_of_the_week;
	  drawDays(day.getMonth(), this.number_of_days, tempDate.getDay());
  };
}

function drawDays(month_num, number_of_days, weekday) {
	var wrapper = document.getElementById('Calendar');
	
	var today = new Date();
	var currentMonth = today.getMonth();
	var currentYear = today.getFullYear();
	
	for(var i = 1; i <= number_of_days; i++) {
		
		if(i == 1) {
			if(weekday == 0) { //wrap around when day is sunday (create a new row for the next week)
				var margin_left = 0;
			} else {
				var margin_left = weekday * 26;
			}
       
			if (day.getDate() == i) { //setup for first day of the month (getting month lined up)
				wrapper.innerHTML += '<div style="color:orange; margin-left:' + margin_left + 'px;" class="day">' + i + '</div>';
			} else if (day.getDate() == i) {
				wrapper.innerHTML += '<div class="day" style="color:orange; margin-left:' + margin_left + 'px;">' + i + '</div>';
			} else {
				wrapper.innerHTML += '<div style="margin-left:' + margin_left + 'px;" class="day">' + i + '</div>';
			}
		} else {
			if (day.getMonth() == currentMonth && day.getFullYear() == currentYear && today.getDate() == i) {
				wrapper.innerHTML += '<div class="day" style="background-color:#02779E;color:lightyellow;">' + i + '</div>';
			} else if (day.getDate() == i) {  // Hightlights today's text in calendar
				wrapper.innerHTML += '<div class="day" style="color:orange;">' + i + '</div>';
			} else {
				wrapper.innerHTML += '<div class="day">' + i + '</div>';
			}
		}
	}
}


function checkLeapYear() {
	if(day.getFullYear() % 4 == 0) {
		if(day.getFullYear() % 100 == 0) {
			if(day.getFullYear() % 400 == 0) {
				return 29;
			}
			return 28;
		}
		return 29;
	}
	return 28;
}

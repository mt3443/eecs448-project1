var days_of_the_week = '<div class="days_of_the_week">Su</div><div class="days_of_the_week">M</div><div class="days_of_the_week">T</div><div class="days_of_the_week">W</div><div class="days_of_the_week">T</div><div class="days_of_the_week">F</div><div class="days_of_the_week">S</div>';

function Calendar() {
var d = new Date(2017, 1, 1);
  this.year = day.getFullYear();

  this.January = {
		weekday: (d.getDay() + 1),
    number_of_days: 31,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">January</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.February = {
		weekday: (d.getDay() + 1),
    number_of_days: checkLeapYear(),
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">February</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.March = {
		weekday: (d.getDay() + 1),
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">March</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.April = {
		weekday: (d.getDay() + 1),
    number_of_days: 30,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">April</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.May = {
		weekday: (d.getDay() + 1),
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">May</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.June = {
		weekday: (d.getDay() + 1),
    number_of_days: 30,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">June</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.July = {
		weekday: (d.getDay() + 1),
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">July</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.August = {
		weekday: (d.getDay() + 1),
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">August</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.September = {
		weekday: (d.getDay() + 1),
    number_of_days: 30,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">September</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.October = {
		weekday: (d.getDay() + 1),
    number_of_days: 31,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">October</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.November = {
		weekday: (d.getDay() + 1),
    number_of_days: 30,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">November</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.December = {
		weekday: (d.getDay() + 1),
    number_of_days: 31,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">December</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.number_of_days, this.weekday);
		}
	};
}

function drawDays(number_of_days, weekday) {
		var wrapper = document.getElementById('Calendar');
		for(var i = 0; i < number_of_days; i++) {
			if(i === 0) {
				var margin_left = (weekday + 1) * 26;
        if (day.getDate()===i+1) {  // Hightlights today's cell in calendar
          wrapper.innerHTML += '<div style="background-color:#lightblue; margin-left:' + margin_left + 'px;" class="day">' + (i + 1) + '</div>';
        }else{
          wrapper.innerHTML += '<div style="background-color:#white; margin-left:' + margin_left + 'px;" class="day">' + (i + 1) + '</div>';
        }
		}else {
        if (day.getDate()===i+1) {  // Hightlights today's cell in calendar
          wrapper.innerHTML += '<div class="day" style="background-color:lightblue;">' + (i + 1) + '</div>';
        }else{
          wrapper.innerHTML += '<div class="day" style="background-color:#white;">' + (i + 1) + '</div>';
        }
			}
		}
		return;
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

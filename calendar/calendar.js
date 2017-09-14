var days_of_the_week = '<div class="days_of_the_week">Su</div><div class="days_of_the_week">M</div><div class="days_of_the_week">T</div><div class="days_of_the_week">W</div><div class="days_of_the_week">T</div><div class="days_of_the_week">F</div><div class="days_of_the_week">S</div>';

function Calendar() {
var january = new Date(2017, 0, 0);
var february = new Date(2017, 1, 0);
var march = new Date(2017, 2, 0);
var april = new Date(2017, 3, 0);
var may = new Date(2017, 4, 0);
var june = new Date(2017, 5, 0);
var july = new Date(2017, 6, 0);
var august = new Date(2017, 7, 0);
var september = new Date(2017, 8, 0);
var october = new Date(2017, 9, 0);
var november = new Date(2017, 10, 0);
var december = new Date(2017, 11, 0);

  this.year = day.getFullYear();

  this.January = {
		weekday: (january.getDay() + 1),
    month_num: 0,
    number_of_days: 31,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">January</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.February = {
		weekday: (february.getDay() + 1),
    month_num: 1,
    number_of_days: checkLeapYear(),
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">February</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.March = {
		weekday: (march.getDay() + 1),
    month_num: 2,
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">March</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.April = {
		weekday: (april.getDay() + 1),
    month_num: 3,
    number_of_days: 30,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">April</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.May = {
		weekday: (may.getDay() + 1),
    month_num: 4,
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">May</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.June = {
		weekday: (june.getDay() + 1),
    month_num: 5,
    number_of_days: 30,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">June</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.July = {
		weekday: (july.getDay() + 1),
    month_num: 6,
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">July</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.August = {
		weekday: (august.getDay() + 1),
    month_num: 7,
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">August</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.September = {
		weekday: (september.getDay() + 1),
    month_num: 8,
    number_of_days: 30,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">September</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.October = {
		weekday: (october.getDay() + 1),
    month_num: 9,
    number_of_days: 31,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">October</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.November = {
		weekday: (november.getDay() + 1),
    month_num: 10,
    number_of_days: 30,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">November</div>';
			wrapper.innerHTML += days_of_the_week;
      drawDays(this.month_num, this.number_of_days, this.weekday);
		}
  };

  this.December = {
		weekday: (december.getDay() + 1),
    month_num: 11,
    number_of_days: 31,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div class="monthname">December</div>';
			wrapper.innerHTML += days_of_the_week;
			drawDays(this.month_num, this.number_of_days, this.weekday);
		}
	};
}

function drawDays(month_num, number_of_days, weekday) {
		var wrapper = document.getElementById('Calendar');
		for(var i = 0; i < number_of_days; i++) {
			if(i === 0) {
        if(weekday === 7) {
          var margin_left = 0;
        }else {
          var margin_left = (weekday + 1) * 26;
        }
        if (day.getDate() === i + 1) {
          if(day.getMonth() === today.getMonth()) { // Hightlights today's cell in calendar
            wrapper.innerHTML += '<div style="background-color:#02779E;margin-left:' + margin_left + 'px;" class="day">' + (i + 1) + '</div>';
          }else {
            wrapper.innerHTML += '<div style="margin-left:' + margin_left + 'px;" class="day">' + (i + 1) + '</div>';
          }
        }else if (today.getDate() === i + 1) {
          wrapper.innerHTML += '<div style="color:orange; margin-left:' + margin_left + 'px;" class="day">' + (i + 1) + '</div>';
        }else {
          wrapper.innerHTML += '<div style="margin-left:' + margin_left + 'px;" class="day">' + (i + 1) + '</div>';
        }
		  }else {
        if (day.getDate() === i + 1) {
          if(day.getMonth() === today.getMonth()){
            wrapper.innerHTML += '<div class="day" style="background-color:#02779E;color:lightyellow;">' + (i + 1) + '</div>';
          }else {
            wrapper.innerHTML += '<div class="day">' + (i + 1) + '</div>';
          }
        }else if (today.getDate() === i + 1) {  // Hightlights today's text in calendar
            wrapper.innerHTML += '<div class="day" style="color:orange;">' + (i + 1) + '</div>';
        }else {
          wrapper.innerHTML += '<div class="day">' + (i + 1) + '</div>';
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

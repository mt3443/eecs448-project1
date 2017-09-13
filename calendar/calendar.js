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

function Calendar() {
var d = new Date(2017, 1, 1);
  this.year = day.getFullYear();

  this.January = {
		weekday: d.getDay(),
    number_of_days: 31,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">January</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.February = {
    number_of_days: checkLeapYear(),
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">February</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.March = {
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">March</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.April = {
    number_of_days: 30,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">April</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.May = {
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">May</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.June = {
    number_of_days: 30,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">June</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.July = {
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">July</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.August = {
    number_of_days: 31,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">August</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.September = {
    number_of_days: 30,
		draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">September</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.October = {
    number_of_days: 31,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">October</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.November = {
    number_of_days: 30,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">November</div>';
			drawDays(this.number_of_days, this.weekday);
		}
  };

  this.December = {
    number_of_days: 31,
    draw: function() {
			var wrapper = document.getElementById('Calendar');
			wrapper.style.width = '182px';
			wrapper.innerHTML += '<div style="width:182px;height:28px;class="monthname">December</div>';
			drawDays(this.number_of_days, this.weekday);
		}
	};

  /* Use This For All Months
  this.MONTHNAME = {
    number_of_days: #,
    month_prev: this.PREVMONTHNAME,
    month_next: this.NEXTMONTHNAME
  };
  */
}

function drawDays(number_of_days, weekday) {
		var wrapper = document.getElementById('Calendar');
		for(var i = 0; i < number_of_days; i++) {
			if(i === 0) {
				var margin_left = (weekday + 1) * 26;
				wrapper.innerHTML += '<div style="margin-left:' + margin_left + 'px;display:inline-block;text-align:center;border-radius:5px;padding:2px;width:20px;height:20px;border:1px solid #333;" class="day">' + (i + 1) + '</div>';
			}else {
				wrapper.innerHTML += '<div style="display:inline-block;text-align:center;border-radius:5px;padding:2px;width:20px;height:20px;border:1px solid #333;" class="day">' + (i + 1) + '</div>';
			}
		}
		return;
}

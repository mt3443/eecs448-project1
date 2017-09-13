function checkLeapYear() {
	
}

function Calendar() {
  
  this.January = {
    number_of_days: 31,
    month_prev: this.December,
    month_next: this.February,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">January</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.February = {
    number_of_days: 28,
    month_prev: this.January,
    month_next: this.March,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">February</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.March = {
    number_of_days: 31,
    month_prev: this.February,
    month_next: this.April,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">March</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.April = {
    number_of_days: 30,
    month_prev: this.March,
    month_next: this.May,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">April</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.May = {
    number_of_days: 31,
    month_prev: this.April,
    month_next: this.June,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">May</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.June = {
    number_of_days: 30,
    month_prev: this.May,
    month_next: this.July,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">July</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.July = {
    number_of_days: 31,
    month_prev: this.June,
    month_next: this.August,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">July</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.August = {
    number_of_days: 31,
    month_prev: this.July,
    month_next: this.September,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">August</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.September = {
    number_of_days: 30,
    month_prev: this.August,
    month_next: this.October,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">September</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.October = {
    number_of_days: 31,
    month_prev: this.September,
    month_next: this.November,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">October</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.November = {
    number_of_days: 30,
    month_prev: this.October,
    month_next: this.December,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">November</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
    }
  };
  
  this.December = {
    number_of_days: 31,
    month_prev: this.November,
    month_next: this.January,
    draw: function() {
      var wrapper = document.getElementById('Calendar');
      wrapper.innerHTML += '<div class="monthname">December</div>';
      for(var i = 0; i < this.number_of_days; i++) {
        wrapper.innerHTML += '<div style="border:1px solid #000;" class="day">' + i + '</div>';
      }
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

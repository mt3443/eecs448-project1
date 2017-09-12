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
  /* Use This For All Months
  this.MONTHNAME = {
    number_of_days: #,
    month_prev: this.PREVMONTHNAME,
    month_next: this.NEXTMONTHNAME
  };
  */
}

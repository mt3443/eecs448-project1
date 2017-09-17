/*
==============================
Filename     : preload.js
Authored by  : team "Team"
Last Updated : 09 12 17
==============================
*/
// Initialize timeslots and display previously made event

/**
 * Constructs UI at the beginning of every session<br><br>Pre conditions: none<br><br>Post conditions: program is ready for user interaction
 * @param {none}
 * @return {void}
 */

window.onload = function() {
  var month_current = monthToString(day.getMonth());
  cal.draw();
  time_selections = [];
  var table_hours = ['12', '12', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '10', '10', '11', '11'];
  var date_view = document.getElementsByClassName('date_view')[0];
  var t_block;
  var time;
  var text_hour;
  var text_halfhour;
  var am = true;
  var number_of_halfhours = 48; // 24 Hours * 2
  for(var i = 0; i < number_of_halfhours; i++) {
    if(i % 2 === 1) {
      text_halfhour = '30';
    }else {
      text_halfhour = '00';
    }
    if(i < 24) {
      text_hour = table_hours[i];
      date_view.innerHTML += '<div class="t_block"></div>';
      t_block = {
        element: document.getElementsByClassName('t_block')[i],
        selected: false,
        time: text_hour + ':' + text_halfhour + ' am'
      };
      time_selections.push(t_block);
      t_block.element.innerHTML += '<div onclick="javascript:toggle_timeAdd('+ i +');" class="time"></div>';

      // Check for event and display event

      time = document.getElementsByClassName('time')[i];
      time.innerHTML += t_block.time;
    } else {
      text_hour = table_hours[i - 24];
      date_view.innerHTML += '<div class="t_block"></div>';
      t_block = {
        element: document.getElementsByClassName('t_block')[i],
        selected: false,
        time: text_hour + ':' + text_halfhour + ' pm'
      };
      time_selections.push(t_block);
      t_block.element.innerHTML += '<div onclick="javascript:toggle_timeAdd(' + i + ');" class="time"></div>';

        // Check for event and display event

      time = document.getElementsByClassName('time')[i];
      time.innerHTML += t_block.time;
    }
  }
  updateTime(); // date.js
  displayEvents(); //mode_availability.js
};
/*
==============================
SECTION OVERFLOW
Use : Any additional functions to include not covered by the modes
==============================
*/
var time_selections = [];
// Navbar Functionality
var toggle = true;

/**
 * Controls settings menu portion of the UI when gear button is clicked<br><br>Pre conditions: none<br><br>Post conditions: settings menu is now in toggled state
 * @param {none}
 * @return {void}
 */

function toggle_navbar() {
  if(toggle) {
    document.getElementById('navbar').style.display = "block";
    document.getElementById('navbar').style.left = "0px";
    document.getElementById('navbar').style.boxShadow = "10px 0px 30px 0px #999";
    toggle = false;
  }else {
    document.getElementById('navbar').style.boxShadow = "none";
    document.getElementById('navbar').style.left = "-340px";
    document.getElementById('navbar').style.display = "none";
    toggle = true;
  }
  return;
}
// Toggles the selected behavior of each timeslot

/**
 * Edits HTML to show which time slots are selected<br><br>Pre conditions: none<br><br>Post conditions: selected time slots are highlighted in yellow
 * @param {number} index integer representing the time slot that was selected
 * @return {void}
 */

function toggle_timeAdd(index) {
  if(!time_selections[index].selected) {
    document.getElementsByClassName('t_block')[index].style.backgroundColor = "lightyellow";
    document.getElementsByClassName('time')[index].style.color = "#02779E";
    time_selections[index].selected = true;
  }else {
    document.getElementsByClassName('t_block')[index].style.backgroundColor = "#f4f4f4";
    document.getElementsByClassName('time')[index].style.color = "#02779E";
    time_selections[index].selected = false;
  }
}
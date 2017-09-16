/*
==============================
Filename     : btn_toggle.js
Authored by  : team "Team"
Last Updated : 09 08 17
==============================
*/
var button_background;
var button_inner;
var button_array = []; // This is where our switches are stored
                       // Object is instantiated after first btn_toggle call
// @PRE Button Element Must Have Unique Index
// @PRE Button Element Must Use 'onclick="javascript:btn_toggle(uniqueIndex, btn_wrapperID, btn_innerID);behavior();"'
// @PRE behavior() Must Be A Toggle Function
// In HTML Within The 'btn_wrapper' Div

/**
 * High level function that controls the 12 hour to 24 hour button
 * @pre Button element must have unique index
 * @param {number} number integer that represents the button
 * @param {string} name element id of the div that contains the button in index.html
 * @param {string} inner_name element id of actual button in index.html
 * @return Nothing {post} Button is in toggled state
 * {post} Button is in toggled state
 */
function btn_toggle(number, name, inner_name, /*behavior*/) {
  if(!inButtonArray(number)) {
    // Create a new object to keep track of our individual toggles
    var button = {
      element: document.getElementById(name),
      inner: document.getElementById(inner_name),
      //callback: behavior,
      toggle: true
    };
    button_array.push(button);
    animateSwitch(number);
  }else {
    for(var i = 0; i < button_array.length; i++) {
      // If the object is in button_array[] > Toggle
      if(i === number) {
        animateSwitch(number);
        return;
      }
    }
  }
}
// @POST Button Has Been Toggled To Inverse State
// @PRE Follows btn_toggle()

/**
 * Checks if given number, which represents a button, is in the button array
 * @pre Button element must have unique ID
 * @param {number} number representing a button
 * @returns true if number is in the button array, false if number is not in the button array
 * @post None
 */
function inButtonArray(number) {
  if(button_array.length === 0) {
    return false;
  }else {
    for(var i = 0; i < button_array.length; i++) {
      if(button_array[i] === number){
        return true;
      }
    }
  }
  return false;
}
// @POST Returns Bool Indicating If Button Already Exists In button_array

/**
 * Function that manipulates css to achieve button toggling animation
 * @pre None
 * @param {number} number representing the button that we wish to toggle
 * @returns Nothing
 * @post Button animation is played, button is then in the toggled state
 */

function animateSwitch(number) {
  button_background = button_array[number].element;
  button_inner = button_array[number].inner;
  // The toggle switch has been targeted and will now check state
  if(button_array[number].toggle) {
    // Call the behavior function before animating
    // button_array[number].callback;
    // Turn the background green
    button_background.style.backgroundColor = '#5BC236';
    // Animate the toggle
    button_inner.style.float = 'right';
    // Should follow global session font styling
    // Some alignment issues can arise with font-size
    // These can be adjusted in the btn_toggle.css file
    button_inner.innerHTML = '<div dragabble="false">I</div>';

    button_array[number].toggle = false;
  }else {
    // Call the behavior function before animating
    // button_array[number].callback;
    // Be sure background-color matches the background color of the content --- ! STYLE
    button_background.style.backgroundColor = '#f4f4f4';
    // Animate the toggle
    button_inner.style.float = 'left';

    button_inner.innerHTML = '<div dragabble="false">O</div>';

    button_array[number].toggle = true;
  }
}

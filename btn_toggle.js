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
// @PRE Button Element Must Use 'onclick="javascript:btn_toggle(uniqueIndex, btn_wrapperID, btn_innerID);"'
// In HTML Within The 'btn_wrapper' Div
function btn_toggle(number, name, inner_name) {
  if(button_array.length === 0) {
    // Create a new object to keep track of our individual toggles
    // This causes first toggle to lag                            --- ! ISSUE
    button_array[number] = {
      element: document.getElementById(name),
      inner: document.getElementById(inner_name),
      toggle: true
    };
  } else {
    for(var i = 0; i < button_array.length; i++) {
      // If the object is in button_array[] > Toggle
      if(i === number) {
        // The toggle switch has been targeted and will now check state
        if(button_array[number].toggle) {
          button_background = button_array[number].element;
          button_inner = button_array[number].inner;
          // Turn the background green
          button_background.style.backgroundColor = '#5BC236';
          // Animate the toggle
          button_inner.style.float = 'right';
          // Should follow global session font styling
          // Some alignment issues can arise with font-size
          // These can be adjusted in the btn_toggle.css file
          button_inner.innerHTML = '<div>I</div>';

          button_array[number].toggle = false;
        }else {
          button_background = button_array[number].element;
          button_inner = button_array[number].inner;
          // Be sure background-color matches the background color of the content --- ! STYLE
          button_background.style.backgroundColor = 'white';

          button_inner.style.float = 'left';

          button_inner.innerHTML = '<div dragabble="false">O</div>';

          button_array[number].toggle = true;
        }
      }
    }
  }
}
// @POST Button Has Been Toggled To Inverse State

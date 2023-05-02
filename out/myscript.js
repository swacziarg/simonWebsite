// get the button and stylesheets
var styleBtn = document.getElementById("style-btn");
var style1 = document.getElementById("pagestyle");
var style2 = document.getElementById("pagestyle2");

// set the default stylesheet
style1.setAttribute("href", "style1.css");

// add event listener to button
styleBtn.addEventListener("click", function() {
  // check which stylesheet is currently active and switch to the other one
    if (style1.getAttribute("href") === "style1.css") {
        style1.setAttribute("href", "style2.css");
        style2.setAttribute("href", "style1.css");
    } else {
        style1.setAttribute("href", "style1.css");
        style2.setAttribute("href", "style2.css");
    }
});

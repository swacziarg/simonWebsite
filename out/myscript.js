const styleBtn = document.getElementById("style-btn");
const pageStyle = document.getElementById("pagestyle");

styleBtn.addEventListener("click", () => {
  if (pageStyle.getAttribute("href") === "style1.css") {
    pageStyle.setAttribute("href", "style2.css");
  } else {
    pageStyle.setAttribute("href", "style1.css");
  }
});

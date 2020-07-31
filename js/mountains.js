const popup = document.querySelector(".popup");
function showPopup() {
  popup.classList.add("open");
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
}
function hidePopup() {
  popup.classList.remove("open");
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
}

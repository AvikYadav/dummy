document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("ping");
  if (btn) {
    btn.addEventListener("click", function () {
      btn.textContent = "Clicked at " + new Date().toLocaleTimeString();
    });
  }
});

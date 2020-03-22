

var popup = document.getElementsByClassName("popup");
var i;

for (i = 0; i < popup.length; i++) {
  popup[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    var label = this.nextElementSibling;
    var popup = document.getElementsByClassName("popup");
    if (panel.style.height === "100px") {
      this.style.background = "#e2e2e2";
      this.style.color = "#6a6a6a";
      panel.style.height = "0px";
    } else {
      panel.style.height = "100px";
      this.style.background = "#0087be";
      this.style.color = "#fff";
    }
  });
}

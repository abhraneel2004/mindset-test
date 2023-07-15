var cancelButtons = document.getElementsByClassName("cancelButton");

for (var i = 0; i < cancelButtons.length; i++) {
  cancelButtons[i].addEventListener("click", function() {
    var row = this.parentNode.parentNode;
    row.classList.add("cancelled");
  });
}

  
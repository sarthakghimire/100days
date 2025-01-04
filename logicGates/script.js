function switchColor(button) {
  const buttons = document.getElementsByClassName("clickable");

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].style.backgroundColor == "yellow") {
      buttons[i].style.backgroundColor = "gray";
    } else {
      buttons[i].style.backgroundColor = "yellow";
    }
  }
}

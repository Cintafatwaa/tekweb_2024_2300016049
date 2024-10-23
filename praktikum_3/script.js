function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function changeFont(font) {
  document.getElementById("text").style.fontFamily = font;
}

function changeBackgroundColor(color) {
  var body = document.getElementById("bg"); // Get the body element
  if (color === 'lilac') {
      body.style.backgroundColor = '#E6E6FA'; // Lilac color
  } else if (color === 'pink') {
      body.style.backgroundColor = '#FFC0CB'; // Pink color
  }else if (color === '#f5f5f5') {
    body.style.backgroundColor = '#f5f5f5'; // Pink color
  }
}
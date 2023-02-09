addEventListener('DOMContentLoaded', (displayTime));

function displayTime() {
  let date = new Date();

  // date.setTime(500000);

  // console.log(date.setTime(50));
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
    session = "AM";
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  if (h === 12) {
    h = 12;
    session = "PM";
  }

  h = h < 10 ? (h = "0" + h) : h;
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;

  const time = `${h}:${m}<small>:${s}${session}</small>`;
  // console.log(time);

  document.getElementById("display_clock").innerHTML = time;

  setTimeout(displayTime, 1000);
  // calls function after a number of milliseconds

  //change body background
  let bg;
  // const userName = "Enaz";
  const user = document.getElementById("User")

  if (h < 8 && session === "AM") {
    user.innerHTML = `Good Morning`;
    bg = `url(https://source.unsplash.com/vKNjdRBqep0)`;
  } else if (h < 11 && session === "AM") {
    user.innerHTML = `Good Day`;
    bg = `url(https://source.unsplash.com/vvYEwcimfBw)`;
  } else if (h = 12 || h < 8 && session === "PM") {
    user.innerHTML = `Good Afternoon`;
    bg = `url(https://source.unsplash.com/cO8_uKY532M)`;
  } else {
    user.innerHTML = `Good Night`;
    bg = `url(https://source.unsplash.com/ef0sXQtnCYU)`;
  }

  //insert bg img
  const body = document.querySelector("body")
  body.style.background = `${bg} center/cover`;

  const focus = document.querySelector(".focus-container input");
  focus.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.querySelector(".focus-container").innerHTML = `<h5>TODAY'S FOCUS:</h5><h1>${focus.value}</h1>`;
    }
  });

};

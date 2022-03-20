function paintClock() {
  const dateElement = document.querySelector("#clock h1:first-child");
  const timeElement = document.querySelector("#clock h1:last-child");

  const date = new Date();

  dateElement.innerText = `${date.getFullYear()}/${convertDateNumberToString(
    date.getMonth() + 1
  )}/${convertDateNumberToString(date.getDate())}`;
  timeElement.innerText = `${convert12HourClock(
    date.getHours()
  )}:${convertDateNumberToString(
    date.getMinutes()
  )}:${convertDateNumberToString(date.getSeconds())}`;
}

function convertDateNumberToString(date) {
  return String(date).padStart(2, "0");
}

function convert12HourClock(hour) {
  const subtractedHour = hour - 12;
  if (subtractedHour < 0) {
    return `AM ${convertDateNumberToString(hour)}`;
  }
  return `PM ${convertDateNumberToString(subtractedHour)}`;
}

paintClock();
setInterval(paintClock, 1000);

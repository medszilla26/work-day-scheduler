var today = new Date();
var day = today.getDay();
var month = today.getMonth();
var date = today.getDate();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var monthlist = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.getElementById("currentDay").innerHTML =
  daylist[day] + ", " + monthlist[month] + " " + [date];

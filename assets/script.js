var today = new Date();
var month = today.getMonth();
var date = today.getDate();
var day = today.getDay();
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
var printedDay = daylist[day].concat(", " + monthlist[month] + " " + [date]);

$("#currentDay").text(printedDay);

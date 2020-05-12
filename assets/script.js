$("#currentDay").text(moment().format("dddd, MMMM Do"));

/*function currentTime(time) {
  var hours = time.getHours();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  var strTime = hours + ampm;
  return strTime;
}*/

$("#currentDay").text(moment().format("dddd, MMMM Do"));

function saveDesc() {}

$(".saveBtn").click(saveDesc);

$(".time-block").each(function () {
  var hour = parseInt($(this).attr("id"));
  console.log(hour);
});

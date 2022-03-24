var today = moment();
var time = moment();

// important DOM elements
var currentDayEl = today.format("dddd[,] MMMM Do");
$("#currentDay").text(currentDayEl);

var containerEl = $('#container');
var tableEl = $("#row");

function printHourSchedule(hour, eventText, saveBtn) {
  var 
}

// function getCurrent(){
//   if (time < today) {
//     colorPast;
//   } else if (time > today) {
//     colorFuture;
//   } else if (time === today) {
//     c
// }

// if (time < today) {
//   colorPast;
// } else if (time > today) {
//   colorFuture;
// } else if (time === today) {
//   colorPresent;
// }
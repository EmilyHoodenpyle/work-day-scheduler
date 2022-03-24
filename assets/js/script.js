// MOMENT.JS
var today = moment();
var hour = moment("9","h").format("h a")

// important DOM elements
var currentDayEl = today.format("dddd[,] MMMM Do");
$("#currentDay").text(currentDayEl);

// var divTags = $("div");
// var containerEl = $('#container');
// var tableEl = $("<table>");
// var tableBodyEl = $("<tbody>");
// var tableRowEl = $("<tr>")
// var tableTimeEl = $("<td>");
// var tableEventEl = $("<td>");
// var saveBtnTileEl = $("<button>");
// var saveBtnEl = $("<span>")

// //TABLE
// tableBodyEl.append(tableRowEl);
// tableEl.append(tableBodyEl);
// containerEl.append(tableEl);

// //HOUR
// tableTimeEl.addClass('hour');
// tableTimeEl.text(hour)
// tableRowEl.append(tableTimeEl);

//EVENT
function getCurrent(){
    if (hour < today) {
      tableEventEl.addClass("past");
    } else if (time > today) {
      tableEventEl.addClass("future");
    } else if (time === today) {
      tableEventEl.addClass("present");
  }
}
// tableEventEl.text();
// tableRowEl.append(tableEventEl);

//SAVE
// saveBtnEl.on('click', function () {
//     if (isDark) {
//       $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
//       isDark = !isDark;
//     } else {
//       $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
//       isDark = !isDark;
//     }
//   });

// saveBtnEl.addClass("saveBtn " + "material-icons-outlined");
// saveBtnEl.text("e878")
// saveBtnTileEl.append(saveBtnEl);
// tableRowEl.append(saveBtnTileEl);

$(".saveBtn").on("click",saveUserInput)

function saveUserInput(event) {
    var saveBtnEl = event.target;
    var userInput = saveBtnEl.previousElementSibling.value;
    var rowTime = $(this).parent().attr("time") //access the event.target's parent using JS
    console.log(userInput, rowTime)
    //put your saving to local storage here
    //you're going to need:
    localStorage.setItem(rowTime,userInput)
}

//you're also going to need a for loop to read through every item in localStorage and retrieve the value and store it in the userInput field

// it looks like:
// element.value = localStorage.getItem(rowTime) || ""
//use that in a for loop for every timeblock row

//you're going to want to write a click event function for the save buttons for each row. when the save button is clicked, it needs to select the textarea next to it (hint: you can use a thing called previousElementSibling to select the preceding element), and save the value to a variable. 


//you're going to need to compare the times of all the rows, and then using an if statement, apply past, present, or future classes to each row

// to do this, you'll need:
//element.classList.add("className") || element.classList.remove("className")

//jQuery version: $(element).addClass("" || .removeClass(""))

//you're going to need to save the textarea input to local storage (see line 65)

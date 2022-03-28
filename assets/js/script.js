// MOMENT.JS
var today = moment();
var hour = moment().format("h")

console.log(hour)

// CURRENT DAY ELEMENT
var currentDayEl = today.format("dddd[,] MMMM Do");
$("#currentDay").text(currentDayEl);

//EVENT
var currentTime = $(".hour")
console.log(currentTime.value);
function getCurrent(){
    if (currentTime.value < hour) {
      $("textarea").addClass("past");
    } else if (currentTime.value > hour) {
      $("textarea").addClass("future");
    } else if (currentTime.value === hour) {
      $("textarea").addClass("present");
  }
}

console.log(currentTime)

$(".saveBtn").on("click",saveUserInput)

function saveUserInput(event) {
    var saveBtnEl = event.target;
    var userInput = saveBtnEl.previousElementSibling.value;
    var rowTime = $(this).data("time"); //access the event.target's parent using JS
    
    console.log(userInput, rowTime);
    //put your saving to local storage here
    //you're going to need:
    localStorage.getItem(userInput);

    textarea.textContent = 

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

//wrapped the code in a call to jquery
$(document).ready(function() {
  console.log("the browser has finished rendering all the elements in the html.");
});



  //save button will saves the user input in the time box into local storage.
  
  $(".saveBtn").on("click", function() {
      let scheduleText = $(this).siblings(".description").val();
      let correctTime = $(this).parent().attr("id")
      localStorage.setItem(correctTime, scheduleText)
  })

  let currentTime = dayjs().hour();
  //console.log(currentTime)

//going to use .each funtion to remove the background colors for each hour,
//then apply the correct ones using an if statement

$(".time-block").each(function() {
  const hourBlock = parseInt($(this).attr("id"));
  //console.log(hourBlock)
  $(this).removeClass("past", "present", "future")

   if (hourBlock < currentTime){
    $(this).addClass("past")
   }
   else if (hourBlock === currentTime){
    $(this).addClass("present")
   }
   else {
    $(this).addClass("future")
   }
});

//formatting date using day.js. displaying in header.
const todaysDate = dayjs();
$('#currentDay').text(todaysDate.format('MMM D, YYYY'));



// This is to prevent any jQuery code from running before the document is finished loading (is ready).

// It is good practice to wait for the document to be fully loaded and ready before working with it. This also allows you to have your JavaScript code before the body of your document, in the head section.

// adding my first onlcick handler..
$(document).ready(function () {
  console.log("hello world...");
  $(".btn").click(function () {
    console.log("I got clicked.....");
  });
});

// this will hide the p tag
// $("#test") id selector
// $(":button") selects all button elements even having input type="button."
// $("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"
$(".hide").click(function () {
  $("p").hide(); // will select all p elements
});

$("#hover").hover(
  function () {
    alert("You entered p1!");
  },
  function () {
    alert("Bye! You now leave p1!");
  }
);

// changing css
$("#hover2").click(function () {
  $(this).css("background-color", "green");
});


// hide and show elements
$("#hide-text").click(function(){
    // .hide(speed, callback) some optional parameters...
    $(".hide-text-now").hide(1000);
})

$('#show-text').click(function(){
    // we can even toggle .toggle function helps us to do that...
    $('.show-text-now').show();
})

// the below syntax will hide all p elements
// $("p").on("click", function(){
//   $(this).hide();
// });












// there are many events as well..
// 1. mousenter
// 2. mouseleave
// 3. click
// 4. hover and it is a special one, normal handlers only have function argument

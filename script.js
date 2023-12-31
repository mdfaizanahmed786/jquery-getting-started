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
// $(":button") selects all button elements even ha ving input type="button."
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
$("#hide-text").click(function () {
  // .hide(speed, callback) some optional parameters...
  $(".hide-text-now").hide(1000);
});

$("#show-text").click(function () {
  // we can even toggle .toggle function helps us to do that...
  $(".show-text-now").show();
});

// the below syntax will hide all p elements
// $("p").on("click", function(){
//   $(this).hide();
// });

// we also have fadeIn as well..
$(".fadeOutDemo").click(function () {
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});

// This below code will fade to some transparent or less opacity colors...
//   $("button").click(function(){
//     $("#div1").fadeTo("slow", 0.15);
//     $("#div2").fadeTo("slow", 0.4);
//     $("#div3").fadeTo("slow", 0.7);
//   });

// slideUp, slideDown, slideToggle
// $("#flip").click(function(){
//     $("#panel").slideUp();
//   });
$("selector").slideToggle("speed", "callback");

// The jQuery stop() method is used to stop an animation or effect before it is finished.

// The stop() method works for all jQuery effect functions, including sliding, fading and custom animations.
// $(selector).stop(stopAll,goToEnd);

// Importance of callback function:( it is optional)
// $("button").click(function(){
//     $("p").hide("slow", function(){
//       alert("The paragraph is now hidden");
//     });
//   });

// chaining is also possible:
// $("#p1").css("color", "red").slideUp(2000).slideDown(2000);

// Animate Now
// Is it possible to manipulate ALL CSS properties with the anim  ate() method?

// Yes, almost! However, there is one important thing to remember: all property names must be camel-cased when used with the animate() method: You will need to write paddingLeft instead of padding-left, marginRight instead of margin-right, and so on.
$(".animate-btn").click(function () {
  $(".animate-div").animate({ left: "250px" });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#scrollUpButton").fadeIn();
  } else {
    $("#scrollUpButton").fadeOut();
  }
});

// Scroll up when the button is clicked
$("#scrollUpButton").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
});

$(".content-btn").click(function () {
  // To set values we can add the arguments in it. for instance, .text("Adding this test.."), .html("<b> Hello world</b>")
  alert($(".get-content").text());
  alert($(".get-content").html());
  alert($(".get-content").attr("data-x"));
  // below code will set attribute..
  $(".get-content").attr({
    href: "https://www.w3schools.com/jquery/",
    title: "W3Schools jQuery Tutorial",
  });
});

// The below code gives us value of input element...
// $("#btn1").click(function(){
//   alert("Value: " + $("#test").val());
// });

$("#add-content").click(addContent);
$("#prepend-content").click(prependContent);

function addContent() {
  $("#add-prev-content").append("faizan");
}
//below ones helps to understand to add multiple tags...
function appendText() {
  var txt1 = "<p>Text.</p>"; // Create element with HTML
  var txt2 = $("<p></p>").text("Text."); // Create with jQuery
  var txt3 = document.createElement("p"); // Create with DOM
  txt3.innerHTML = "Text.";
  $("body").append(txt1, txt2, txt3); // Append the new elements
}

function prependContent() {
  $("#add-prev-content").prepend("<h1>riyan</h1>");
}

// Below demonstrates adding element before and after....
$("#btn1").click(function () {
  $("img").before("<b>Before</b>");
});

$("#btn2").click(function () {
  $("img").after("<i>After</i>");
});

$("button").click(function () {
  // below callback function removes the
  $("#div1").remove();
  // below removes the elements having all elements that have this class...
  $("p").remove(".test");
});

// below allows us to add css..
$("article").css({ "background-color": "yellow", "font-size": "200%" });

// will go until we get our ancestor(till html...)
console.log($("span").parents());
// will select just above parent..
console.log($("span").parent());

// we can set limit as well till where can we go..
console.log($("span").parentsUntil("div"));

// Going till children..
// The find() method returns descendant elements of the selected element, all the way down to the last descendant.
console.log($("div").find("span"));
// returns all descendants of div...
$("div").find("*");

// This will check for all siblings, at same level of the tree
// some parameter, can also be used like: siblings("p") to check for another level...
$("h2").siblings().css({ color: "red", border: "2px solid red" });

$(".get-external-data").load(
  "https://jsonplaceholder.typicode.com/todos/1",
  function (responseTxt, statusTxt, xhr) {
    if (statusTxt == "success") alert("External content loaded successfully!");
    if (statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  }
);

// to get some externald data on button click:

$("#fetch-data").click(function () {
  $.get(
    "https://jsonplaceholder.typicode.com/todos/1",
    function (data, status) {
      console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
    }
  );
});

$("button2").click(function () {
  $.post(
    "demo_test_post.asp",
    {
      name: "Donald Duck",
      city: "Duckburg",
    },
    function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    }
  );
});

// we also have, ("h2").next(), nextAll(), nextUnitl("p") and same for previous as well..
// there are many events as well..
// 1. mousenter
// 2. mouseleave
// 3. click
// 4. hover and it is a special one, normal handlers only have function argument

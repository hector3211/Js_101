// changing colors
// $("h1").css("color", "red");

// changing text
// $("h1").text("put it in reverse Terry!");

// adding html
$("button").html("<em>click now!</em>");

// changing link
$("a").attr("href", "http://www.youtube.com");

// event listeners
$("h1").click(function () {
  $("h1").css("color", "green");
});

$(document).keydown(function (e) {
  $("h1").text(e.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "red");
  $("h1").text("PUT IT IN REVERSE TERRY!");
});

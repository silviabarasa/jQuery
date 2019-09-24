jQuery('h1').click(function(){
  alert("This is a heading tag")
});
jQuery('p').click(function(){
  alert("This is a paragraph")
});
jQuery('img').click(function(){
  alert("This is an image")
});
$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});
$(document).ready(function() {
$("p").click(function() {
$(".silviaimage-showing").toggle();
$(".silviaimage-hidden").toggle();
  });
});
$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});

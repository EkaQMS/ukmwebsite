$(document).ready(function() {
$(".down").click(function() {
     $('html, body').animate({
         scrollTop: $(".up").offset().top
     }, 2000);
 });
});
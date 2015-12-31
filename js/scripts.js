$(function() {
  $(".flashCard").click(function() {
    $(this).children("p").fadeToggle();
  });
});

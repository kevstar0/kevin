$(document).ready(function () {
  $("body").append('<span class="cursor"></span>');
  $("body").append('<span class="cursor_point"></span>');

  var top = 0;
  var left = 0;

  $(body).on("mousemove", function (event) {
    top = $(window).scrollTop() - $(this).offset().top + event.clientY;
    top = $(window).scrollLeft() - $(this).offset().left + event.clientX;

    $(".cursor").css({ left: left - 20, top: top - 20 });
    $(".cursor_point").css({ left: left - 2, top: top - 2 });
  });
});

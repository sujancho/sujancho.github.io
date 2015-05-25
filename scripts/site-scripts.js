$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

var headerGap = 32;

$(document).on("scroll", function(){
  if ($(document).scrollTop() > headerGap){
    $(".header-wrap").addClass("fix-menu");
  }
  else
  {
    $(".header-wrap").removeClass("fix-menu");
  }
})

function checkSize(){
    if ($("#header-wrap").height < 80){
      headerGap = 80;
    } else {
      headerGap = 32;
    }
}

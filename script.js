var main = function() {
  $(".nav-main").find("a").hover( 
    function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  })
 
  $(".scroll").click(function(event){     
      event.preventDefault();
   $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
}
$(document).ready(main)
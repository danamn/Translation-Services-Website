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


  $(".services-button").click(function(){

      var textToToggle = $(this).parent().find(".service-info-toggled");

      if (textToToggle.is(":visible")) {
        textToToggle.fadeOut(700);
        
      } else {
        textToToggle.fadeIn(800);
      } 


     if ($(this).find('.btn-text').html() == "Click for details"){
        $(this).find('.btn-text').html('Click to hide details');
     } else {
          $(this).find('.btn-text').html('Click for details');
      }
   
/*   var parentSection = $(this).parents().find('.section-services');
      if (parentSection.css('height', '150vh')){
        console.log('ok');
        parentSection.css('height', '250vh');
      } else {
        parentSection.css('height', '150vh');
      }

*/
    })

}

$(document).ready(main)
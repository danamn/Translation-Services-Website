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


      console.log("click");
      $(this).parents().find(".service-info-toggled").toggleClass('hide-div');

     if ($(this).find('.btn-text').html() == "Click for details"){
        $(this).find('.btn-text').html('Click to hide details');
     } else {
          $(this).find('.btn-text').html('Click for details');
      }
   
      
    });

}

$(document).ready(main)
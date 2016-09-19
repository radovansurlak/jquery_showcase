$(window).on('beforeunload', function(){
  $('#preloader-wrap').fadeOut('250ms');
  $(window).scrollTop(0);
});


$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 100) {
         $('#main-menu').css({'top' : '-5vw'});
         $('#secondary-menu').css({'top' : '0'});
         $('#secondary-menu').css({'color' : 'rgba(0,0,0,0.4)'});
         $('#current').css({ 'text-decoration' : 'none'});
         $('#logo').css({ 'height' : '2.8vw'});
        //  $("#secondary-menu").animate({
        // top: "0",}, '200ms' );
     }
     else {
         $('#secondary-menu').css({'top' : '5vw'});
        $('#main-menu').css({'top' : '0'});
        // $('#secondary-menu').css({'color' : 'initial'});
        $('#current').css({ 'text-decoration' : 'underline'});
    //     //  $('#main-menu').slideDown('300ms');
         $('#logo').css({ 'height' : '3.5vw'});

    //     //  $("#secondary-menu").animate({
    //     // top: "4vw",}, '200ms' );
     }
});

var modalClosed = false;

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 200 && modalClosed == false) {
       $('#modal-box').slideDown('500ms');
     }
     else {

     }
});


$( "#close-modal" ).click(function() {
  $(this).parent().fadeOut();
  modalClosed = true;

});

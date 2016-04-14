$(document).ready(function(){

  $('.lightbox-link').click(function(){
    $('img').css('display', 'block');
    $('body').css('background', 'grey');
    $('body').css('opacity', '0.9');
  });


  $('img').click(function(){
    $('img').css('display', 'none');
    $('body').css('background', 'white');
    $('body').css('opacity', '1');
  });

})
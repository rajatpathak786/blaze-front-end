// import Swup from 'swup';

// const swup = new Swup();
$('.page.home').show();
$(document).ready(function(){
  $('svg').click(function() {
    $('#node2').on('click', function(e){
      if (e.handled != true) {
        $('.page').hide();
        $('.node2').show();
        e.handled = true;
      }
    })
    $('#node1').on('click', function(e){
      if (e.handled != true) {
        $('.page').hide();
        $('.node1').show();
        e.handled = true;
      }
    })
  })
});
$('.index').click(function(e) {
  if (e.handled != true) {
    $('.page').hide();
    $('.page.home').show();
    e.handled = true;
  }
})
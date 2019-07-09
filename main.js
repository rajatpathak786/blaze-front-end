$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  $('.project').each(function(){
    var ourScene = new ScrollMagic.Scene({
    triggerElement: this,
    duration: '47.9%'
  })
  .setClassToggle(this,'fade-in')
  .addIndicators({})
  .addTo(controller);  
  })

  var ourScene1 = new ScrollMagic.Scene({
    triggerElement: '#project00',
    duration: '76%'
  })
  .setClassToggle('#project00','fade-in')
  .addIndicators({})
  .addTo(controller);
});
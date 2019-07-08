$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  // var ourScene = new ScrollMagic.Scene({
  //   triggerElement: '#project00',
  //   duration: 300
  // })
  // .setClassToggle('#project00','fade-in')
  // .addIndicators({})
  // .add(controller);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project01',
    duration: 300
  })
  .setClassToggle('#project01','fade-in')
  .addIndicators({})
  .addTo(controller);
  
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project02',
    duration: 300
  })
  .setClassToggle('#project02','fade-in')
  .addIndicators({})
  .addTo(controller);
  
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project03',
    duration: 300
  })
  .setClassToggle('#project03','fade-in')
  .addIndicators({})
  .addTo(controller);
});

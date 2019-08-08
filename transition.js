import {eventNode} from './transitionFunction';

$('.page.home').show();

$(document).ready(function () {
  $('svg').on('click', '#node1', function (e) { // event handler to click on node1 and implementing its transitions.
    if (e.handled != true) {
      eventNode('node1');
      e.handled = true;
    }
  })
  $('.node_1').on('click', function(e) { // event handler for node labels
    if (e.handled != true) {
      eventNode('node1');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node2', function (e) {
    if (e.handled != true) {
      eventNode('node2');
      e.handled = true;
    }
  })
  $('.node_2').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node2');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node3', function (e) {
    if (e.handled != true) {
      eventNode('node3');
      e.handled = true;
    }
  })
  $('.node_3').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node3');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node4', function (e) {
    if (e.handled != true) {
      eventNode('node4');
      e.handled = true;
    }
  })
  $('.node_4').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node4');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node5', function (e) {
    if (e.handled != true) {
      eventNode('node5');
      e.handled = true;
    }
  })
  $('.node_5').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node5');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node6', function (e) {
    if (e.handled != true) {
      eventNode('node6');
      e.handled = true;
    }
  })
  $('.node_6').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node6');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node7', function (e) {
    if (e.handled != true) {
      eventNode('node7');
      e.handled = true;
    }
  })
  $('.node_7').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node7');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node8', function (e) {
    if (e.handled != true) {
      eventNode('node8');
      e.handled = true;
    }
  })
  $('.node_8').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node8');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node9', function (e) {
    if (e.handled != true) {
      eventNode('node9');
      e.handled = true;
    }
  })
  $('.node_9').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node9');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node10', function (e) {
    if (e.handled != true) {
      eventNode('node10');
      e.handled = true;
    }
  })
  $('.node_10').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node10');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node11', function (e) {
    if (e.handled != true) {
      eventNode('node11');
      e.handled = true;
    }
  })
  $('.node_11').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node11');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node12', function (e) {
    if (e.handled != true) {
      eventNode('node12');
      e.handled = true;
    }
  })
  $('.node_12').on('click', function(e) {
    if (e.handled != true) {
      eventNode('node12');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node_side', function (e) { // event handler when we click on side node
    if (e.handled != true) {
      eventNode('node_side');
      e.handled = true;
    }
  })
  $('#home_button').on('click', function (e) { // event handler when we click on home button
    if (e.handled != true) {
      eventNode('home_button');
      e.handled = true;
    }
  })
})

$(window).scroll(function () { // to move home button on top of screen on scroll
  $("#home_button").stop().animate({ "marginTop": ($(window).scrollTop()) + "px" }, "medium");
});


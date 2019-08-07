let node_transition, displayout, r, node_x, node_y, y_final, x_initial, y_initial, x_final = 99.9, svgID, y_offset;
var svgNS = "http://www.w3.org/2000/svg";
$('.page.home').show();
$(document).ready(function () {
  $('svg').on('click', '#node1', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node1').show();
      window.scrollTo(0, 0);
      node_x = 65.2, node_y = 9.2, y_final = 40, svgID = `mySVG_node1`; //25
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node2', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node2').show();
      window.scrollTo(0, 0);
      node_x = 37.5, node_y = 13.338, y_final = 40, svgID = `mySVG_node2`; //26
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node3', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node3').show();
      window.scrollTo(0, 0);
      node_x = 65.2, node_y = 16, y_final = 40, svgID = `mySVG_node3`; //26
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node4', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node4').show();
      window.scrollTo(0, 0);
      node_x = 46.8, node_y = 28.5, y_final = 40, svgID = `mySVG_node4`;//35
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node5', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node5').show();
      window.scrollTo(0, 0);
      node_x = 25, node_y = 37.8, y_final = 40, svgID = `mySVG_node5`;//45
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node6', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node6').show();
      window.scrollTo(0, 0);
      node_x = 59, node_y = 44, y_final = 40, svgID = `mySVG_node6`;//47
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node7', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node7').show();
      window.scrollTo(0, 0);
      node_x = 68, node_y = 34.6, y_final = 40, svgID = `mySVG_node7`;//43
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node8', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node8').show();
      window.scrollTo(0, 0);
      node_x = 38.06, node_y = 56, y_final = 40, svgID = `mySVG_node8`;//59
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node9', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node9').show();
      window.scrollTo(0, 0);
      node_x = 18.5, node_y = 62.5, y_final = 40, svgID = `mySVG_node9`;//70
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node10', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node10').show();
      window.scrollTo(0, 0);
      node_x = 34.6, node_y = 74, y_final = 40, svgID = `mySVG_node10`;//80
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node11', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node11').show();
      window.scrollTo(0, 0);
      node_x = 65.3, node_y = 71.6, y_final = 40, svgID = `mySVG_node11`;//77
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node12', function (e) {
    if (e.handled != true) {
      y_offset = scrollY;
      $('.page').hide();
      $('.node12').show();
      window.scrollTo(0, 0);
      node_x = 71.5, node_y = 61.2, y_final = 40, svgID = `mySVG_node12`; //67
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node_side', function (e) {
    if (e.handled != true) {
      $(".parabox").fadeOut(500)
      window.scrollTo(0, y_offset / 4);
      setTimeout(() => {
        window.scrollTo(0, y_offset / 2);
      }, 10);
      setTimeout(() => {
        window.scrollTo(0, 3 * y_offset / 4);
      }, 10);
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
})

$('#home_button').on('click', function (e) {
  if (e.handled != true) {
    $(".parabox").fadeOut(500);
    animateNode(node_x, node_y, 'node_side');
    e.handled = true;
  }
})
$(window).scroll(function () {
  $("#home_button").stop().animate({ "marginTop": ($(window).scrollTop()) + "px" }, "medium");
});

function animateNode(x, y, id, svgID) {
  if (document.getElementById('home_button_ul').style.display == 'block') {
    $(".home_button_ul").hide();
  } else {
    $(".home_button_ul").fadeIn(500);
  }
  if (displayout) {
    displayOut(id);
  } else {
    r = 20;
    x_initial = node_x;
    y_initial = node_y;
    display(id);
  }
}

function display(id) {
  if (r < 600) {
    r = r + 10;
  }
  if (node_x < x_final) {
    node_x = node_x + 1.2;
  }
  if (node_y < y_final) {
    node_y = node_y + 0.5;
  } else {
    node_y = node_y - 0.5;
  }
  if (!(r >= 600 && node_x >= x_final && node_y >= y_final) && (y_initial < y_final)) {
    setTimeout(() => {
      CreateCircle(`${node_x}%`, `${node_y}%`, r, 'red', id);
    }, 10);
  } else if (!(r >= 600 && node_x >= x_final && node_y <= y_final) && (y_initial > y_final)) {
    setTimeout(() => {
      CreateCircle(`${node_x}%`, `${node_y}%`, r, 'red', id);
    }, 10);
  }
  else {
    $(".parabox").fadeIn(500)
    displayout = true;
    node_x = x_final, node_y = y_final;
    window.scrollTo(0, 0);
  }
}

function displayOut(id) {
  if (r > 20) {
    r = r - 10;
  }
  if (node_x > x_initial) {
    node_x = node_x - 1.2;
  }
  if (node_y > y_initial) {
    node_y = node_y - 0.5;
  } else {
    node_y = node_y + 0.5;
  }
  if (!(r <= 20 && node_x <= x_initial && node_y <= y_initial) && (y_initial < y_final)) {
    setTimeout(() => {
      node_transition = true;
      CreateCircle(`${node_x}%`, `${node_y}%`, r, 'red', id);
    }, 10);
  } else if (!(r <= 20 && node_x <= x_initial && node_y <= y_initial) && (y_initial > y_final)) {
    setTimeout(() => {
      node_transition = true;
      CreateCircle(`${node_x}%`, `${node_y}%`, r, 'red', id);
    }, 10);
  } else {
    node_transition = false;
    document.getElementById(id).remove();
    r = 20;
    displayout = false;
    $('.page').hide();
    $('.page.home').show();
    window.scrollTo(0, y_offset);
  }

}

function CreateCircle(x, y, r, color, id) {
  if (node_transition) {
    node_transition = false;
    document.getElementById(id).remove();
  }
  var myCircle = document.createElementNS(svgNS, "circle"); //to create a circle. for rectangle use "rectangle"
  myCircle.setAttributeNS(null, "id", id);
  myCircle.setAttributeNS(null, "cx", x);
  myCircle.setAttributeNS(null, "cy", y);
  myCircle.setAttributeNS(null, "r", r);
  myCircle.setAttributeNS(null, "fill", color);
  myCircle.setAttributeNS(null, "stroke", "black");
  document.getElementById(svgID).appendChild(myCircle);
  node_transition = true;
  if (displayout) {
    displayOut(id);
  } else if (r != 20) { 
    display(id);
  }
}

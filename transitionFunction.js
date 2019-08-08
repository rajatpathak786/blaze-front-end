let node_transition, displayout, r, node_x, node_y, y_final, x_initial, y_initial, x_final = 99.9, svgID, y_offset;
var svgNS = "http://www.w3.org/2000/svg";

export function eventNode(node) {
  switch (node) {
    case 'node_side':
      $(".parabox").fadeOut(500)
      window.scrollTo(0, y_offset / 4);
      setTimeout(() => {
        window.scrollTo(0, y_offset / 2);
      }, 10);
      setTimeout(() => {
        window.scrollTo(0, 3 * y_offset / 4);
      }, 20);
      break;
    case 'home_button':
      $(".parabox").fadeOut(500);
      break;
    default:
      y_offset = scrollY
      $('.page').hide();
      switch (node) {
        case 'node1':
          $('.node1').show();
          node_x = 65.2, node_y = 9.2, y_final = 40, svgID = `mySVG_node1`;
          break;
        case 'node2':
          $('.node2').show();
          node_x = 37.5, node_y = 13.338, y_final = 40, svgID = `mySVG_node2`;
          break;
        case 'node3':
          $('.node3').show();
          node_x = 65.2, node_y = 16, y_final = 40, svgID = `mySVG_node3`; 
          break;
        case 'node4':
          $('.node4').show();
          node_x = 46.8, node_y = 28.5, y_final = 40, svgID = `mySVG_node4`;
          break;
        case 'node5':
          $('.node5').show();
          node_x = 25, node_y = 37.8, y_final = 40, svgID = `mySVG_node5`;
          break;
        case 'node6':
          $('.node6').show();
          node_x = 59, node_y = 44, y_final = 40, svgID = `mySVG_node6`;
          break; 
        case 'node7':
          $('.node7').show();
          node_x = 68, node_y = 34.6, y_final = 40, svgID = `mySVG_node7`;
          break;
        case 'node8':
          $('.node8').show();
          node_x = 38.06, node_y = 56, y_final = 40, svgID = `mySVG_node8`;
          break;
        case 'node9':
          $('.node9').show();
          node_x = 18.5, node_y = 62.5, y_final = 40, svgID = `mySVG_node9`;
          break;
        case 'node10':
          $('.node10').show();
          node_x = 34.6, node_y = 74, y_final = 40, svgID = `mySVG_node10`;
          break;
        case 'node11':
          $('.node11').show();
          node_x = 65.3, node_y = 71.6, y_final = 40, svgID = `mySVG_node11`;
          break;
        case 'node12':  
          $('.node12').show();
          node_x = 71.5, node_y = 61.2, y_final = 40, svgID = `mySVG_node12`;
          break;
      }
      window.scrollTo(0, 0);
      break;
  }
  animateNode(node_x, node_y, 'node_side');
}

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

function display(id) { // function to display in node
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

function displayOut(id) { // function to display out node
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

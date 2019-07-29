let node_transition, displayout, r, node_x, node_y, y_final, x_initial, y_initial, x_final = 99; 
// node_y_final = 25, node2x, node2y, node2y_final = 26, y_final, id;
var svgNS = "http://www.w3.org/2000/svg";
$('.page.home').show();
$(document).ready(function(){
  $('svg').on('click', '#node1',function(e) {
    // $('#node1').on('click', function(e){
    if (e.handled != true) {
      $('.page').hide();
      $('.node1').show();
      node_x = 65.2, node_y = 9.2, y_final = 25;
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node2',function(e) {
    if (e.handled != true) {
      $('.page').hide();
      $('.node1').show();
      node_x = 37.5, node_y = 13.338, y_final = 26;
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })    
  $('svg').on('click', '#node_side', function(e) {
    if (e.handled != true) {
      animateNode(node_x, node_y, 'node_side');
      e.handled = true;
    }
  })
})

function animateNode(x, y, id) {
  console.log(x, y, id);
  if(document.getElementById('section1').style.display == 'block') {
    if (displayout) {
      displayOut(id);  
    } else {
      r = 20;
      x_initial = node_x;
      y_initial = node_y;
      display(id);
    }
  }
}

function display(id) {
  console.log(id)
  if (r < 600) {
    r = r + 10;
  }
  if (node_x < x_final) {
    node_x = node_x + 0.6;
  }
  if (node_y < y_final) {
    node_y = node_y + 0.2
  }
  console.log(node_x, node_y, id, r);
  console.log(node_x, node_y);
  if (!(r >= 600 && node_x >= x_final && node_y >= y_final)) {
    setTimeout(() => {
      // CreateCircle('65.2%', '9.2%', r, 'red', 'node_transition');
      CreateCircle(`${node_x}%`, `${node_y}%`, r, 'red', id);
    }, 10);
  } else {
    console.log(node_x, node_y, x_initial, y_initial);
    displayout = true;
    node_x = x_final, node_y = y_final;
  }
}

function displayOut(id) {
  console.log(r, "displayOut");
  if (r > 20) {
    r = r - 10;
  }
  if (node_x > x_initial) {
    node_x = node_x - 0.6;
  }
  if (node_y > y_initial) {
    node_y = node_y - 0.25;
  }
  console.log(node_x, node_y, "^^^^^^^^^^^^^^^^^^^^^^");
  if (!(r <= 20 && node_x <= x_initial && node_y <= y_initial)) {
    setTimeout(() => {
      // CreateCircle('65.2%', '9.2%', r, 'red', 'node_transition');
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
  }
  
}

function CreateCircle(x, y, r, color, id) {
  console.log(x, y, id);
  console.log(r, node_transition, "Create Circle");
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
  if (document.getElementById('section1').style.display == 'block') {
    document.getElementById("mySVG_node1").appendChild(myCircle);
    node_transition = true;
  } else {
    document.getElementById("mySVG").appendChild(myCircle);
    node_transition = true;
  }
  if (displayout) {
    displayOut(id);
  } else if (r !=20) { //(r != 200 && r !=20)
    display(id);
  } 
  // else {
  //   displayout = true;
  //   console.log(displayout, node_transition, r);
  //   console.log('ban gaya', x, y , r);
  //   console.log(typeof x, typeof y, typeof r);
  // }
}






// console.log('displayout enter', r);
// if (r != 20) {
//   console.log('displayout update condition', r);
//   displayOut(x, y, id);
// } else {
//   console.log('displayout final', r, x, y);
//   r = 20;
//   displayout = false;
//   if (document.getElementById('home').style.display == 'block') {
//     node_transition = true;
//     CreateCircle(x, y, r, 'red', id);
//     displayout = false;         
//   } else {
//     $('.page').hide();
//     $('.page.home').show();
//     node_transition = true;
//     CreateCircle(x, y, r, 'red', id);
//     displayout = false;
//   }
// }
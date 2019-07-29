let node_transition, displayout, r, node1x, node1y, x_final = 99, node1y_final = 25;
var svgNS = "http://www.w3.org/2000/svg";
$('.page.home').show();
$(document).ready(function(){
  $('svg').on('click', '#node1',function(e) {
    // $('#node1').on('click', function(e){
    if (e.handled != true) {
      $('.page').hide();
      $('.node1').show();
      node1x = 65.2, node1y = 9.2
      animateNode(node1x, node1y, 'node1_side');
      e.handled = true;
    }
  })
  $('svg').on('click', '#node2',function(e) {
    if (e.handled != true) {
      animateNode('37.5%', '13.338%', 'node2');
      e.handled = true;
    }
  })    
  $('svg').on('click', '#node1_side', function(e) {
    if (e.handled != true) {
      node1x = 65.2, node1y = 9.2;
      animateNode(x_final, node1y_final, 'node1_side');
      e.handled = true;
    }
  })
    // })
    // $('#node2').on('click', function(e){
    //   if (e.handled != true) {
    //     animateNode('37.5%', '13.338%', 'node2');
    //     e.handled = true;
    //   }
    // })
    // $('#node3').on('click', function(e){;
    //   if (e.handled != true) {
    //     $('.page').hide();
    //     $('.node3').show();
    //     e.handled = true;
    //   }
    // })
    // $('#node_transition').on('click', function(e) {
    //   if (e.handled != true) {
    //     displayout = true;
    //     animateNode();
    //     e.handled = true;
    //   }
    // })
})
// });

// $('.index').click(function(e) {
//   if (e.handled != true) {
//     // node_transition = false;
//     // r = 18;
//     // document.getElementById('node_transition').remove();
//     // $('.page').hide();
//     // $('.page.home').show();
//     displayout = true;
//     animateNode();
//     e.handled = true;
//   }
// })

function animateNode(x, y, id) {
  console.log(x, y, id);
  if(document.getElementById('section1').style.display == 'block') {
    // let a = 0
    // for (let r = 20; r <= 200; r = r + 2) {
    //   a += 10
    //   let display = async(r) => {
    //     setTimeout(() => {
    //       CreateCircle('66%', '10%', r, 'red', 'node_transition')
    //       if (r == 200) {
    //         // removeElements();
    //       }
    //     }, a);
    //   }
    //   console.log(r)
    //   await display(r); 
    // }
    if (displayout) {
      displayOut(x, y, id);  
    } else {
      r = 20;
      console.log(x, y, id);
      display(x, y, id);
    }
    // CreateCircle('66%', '10%', '20', 'red', 'node_transition');
    // document.getElementById('node_transition').remove();
  }
  else if (document.getElementById('home').style.display == 'block') {
    if (displayout) {
      displayOut(x, y, id);  
    } else {
      r = 20;
      console.log(x, y, id, r);
      display(x, y, id);
    }
  }
}

function display(x, y, id) {
  if (r < 600) {
    r = r + 10;
  }
  if (node1x < x_final) {
    node1x = node1x + 0.6;
  }
  if (node1y < node1y_final) {
    node1y = node1y + 0.2
  }
  console.log(x, y, id, r);
  // if (node_transition) {
  //   node_transition = false;
  //   document.getElementById('node_transition').remove();
  // }
  console.log(node1x, node1y);
  if (!(r >= 600 && node1x >= x_final && node1y >= node1y_final)) {
    setTimeout(() => {
      // CreateCircle('65.2%', '9.2%', r, 'red', 'node_transition');
      CreateCircle(`${node1x}%`, `${node1y}%`, r, 'red', id);
    }, 10);
  } else {
    displayout = true;
  }
  // else if (r > 200) {
  //   // displayout = true;
    

  // }
}

function displayOut(x, y, id) {
  console.log(r, "displayOut");
  if (r > 20) {
    r = r - 10;
  }
  if (x_final > node1x) {
    x_final = x_final - 0.6;
  }
  if (node1y_final > node1y) {
    node1y_final = node1y_final - 0.25;
  }
  console.log(x_final, node1y_final, "^^^^^^^^^^^^^^^^^^^^^^");
  if (!(r <= 20 && x_final <= node1x && node1y_final <= node1y)) {
    setTimeout(() => {
      // CreateCircle('65.2%', '9.2%', r, 'red', 'node_transition');
      node_transition = true;
      CreateCircle(`${x_final}%`, `${node1y_final}%`, r, 'red', id);
    }, 10);
  } else {
    x_final = 99, node1y_final = 25;
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
    displayOut(x , y, id);
  } else if (r !=20) { //(r != 200 && r !=20)
      display(x, y, id);
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
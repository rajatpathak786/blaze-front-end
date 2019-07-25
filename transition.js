let node_transition, r = 18, displayout;
var svgNS = "http://www.w3.org/2000/svg";
$('.page.home').show();
$(document).ready(function(){
  $('svg').click(function() {
    $('#node1').on('click', function(e){
      if (e.handled != true) {
        $('.page').hide();
        $('.node1').show();
        animateNode();
        e.handled = true;
      }
    })
    $('#node2').on('click', function(e){
      if (e.handled != true) {
        $('.page').hide();
        $('.node2').show();
        e.handled = true;
      }
    })
    $('#node3').on('click', function(e){;
      if (e.handled != true) {
        $('.page').hide();
        $('.node3').show();
        e.handled = true;
      }
    })
  })
});
$('.index').click(function(e) {
  if (e.handled != true) {
    // node_transition = false;
    // r = 18;
    // document.getElementById('node_transition').remove();
    // $('.page').hide();
    // $('.page.home').show();
    displayout = true;
    animateNode();
    e.handled = true;
  }
})

function animateNode() {
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
      displayOut();  
    } else {
      display();
    }
    
    // CreateCircle('66%', '10%', '20', 'red', 'node_transition');
    // document.getElementById('node_transition').remove();
  }
}

function display() {
  r = r + 2;
  // if (node_transition) {
  //   node_transition = false;
  //   document.getElementById('node_transition').remove();
  // }
  if (r <= 200) {
    setTimeout(() => {
      CreateCircle('65.2%', '9.2%', r, 'red', 'node_transition');
    }, 10);
  }
}

function displayOut() {
  console.log(r, "displayOut");
  r = r - 2;
  if (r >= 20) {
    setTimeout(() => {
      CreateCircle('65.2%', '9.2%', r, 'red', 'node_transition');
    }, 10);
  }
  
}

function CreateCircle(x, y, r, color, id) {
  console.log(r, "Create Circle");
  if (node_transition) {
    node_transition = false;
    document.getElementById('node_transition').remove();
  }
  var myCircle = document.createElementNS(svgNS, "circle"); //to create a circle. for rectangle use "rectangle"
  myCircle.setAttributeNS(null, "id", id);
  myCircle.setAttributeNS(null, "cx", x);
  myCircle.setAttributeNS(null, "cy", y);
  myCircle.setAttributeNS(null, "r", r);
  myCircle.setAttributeNS(null, "fill", color);
  myCircle.setAttributeNS(null, "stroke", "black");
  document.getElementById("mySVG_node1").appendChild(myCircle);
  node_transition = true;

  if (displayout) {
    console.log('displayout enter', r);
    if (r != 20) {
      console.log('displayout update condition', r);
      displayOut();
    } else {
      console.log('displayout final', r);
      node_transition = false;
      r = 18;
      document.getElementById('node_transition').remove();
      displayout = false;
      $('.page').hide();
      $('.page.home').show();
    }
  } else if (r != 200) {
      display();
  }
}
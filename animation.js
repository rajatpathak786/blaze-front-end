let x = window.innerWidth;
let y = 981;
let endpoint = 0; // initial endpoint of palagus
let palagusPosition = y; // initial center of palagus which is an rectangle not a line
let firstScroll = false; // condition whether user have scrolled or not
let aspectRatio = window.innerWidth / 981;
let scroll = window.scrollY; // variable containing the scroll Y-offset
let l1endpointx = 0.5 * x, l1endpointy = 0.45 * y; // initial endpoint for latus1 which is a line
let l2endpointx = 0.25 * x, l2endpointy = 0.415 * y; //  initial endpoint for latus2 which is a line
let l3endpointx = 0.25 * x, l3endpointy = 0.3 * y; //   initial endpoint for latus3 which is a line and so on till latus11 all are lines
let l4endpointx = -0.05 * x, l4endpointy = 0.1 * y; 
let l5endpointx = -0.05 * x, l5endpointy = 0.1 * y; 
let l6endpointx = -0.05 * x, l6endpointy = 0.1 * y; 
let l7endpointx = 0.15 * x, l7endpointy = -0.15 * y; 
let l8endpointx = -0.2 * x, l8endpointy = -0.35 * y; 
let l9endpointx = -0.2 * x, l9endpointy = -0.35 * y; 
let l10endpointx = -0.2 * x, l10endpointy = -0.35 * y; 
let l11endpointx = -0.2 * x, l11endpointy = -0.35 * y; 
let node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12; // Initializing all circle nodes 
var svgNS = "http://www.w3.org/2000/svg";

let scene = new THREE.Scene(); // Creating a scene in threejs
let camera = new THREE.PerspectiveCamera(90, aspectRatio, 0.1, 1000); // Creating Camera and adjusting its position 
camera.lookAt(0, 0, 0);
camera.position.z = 800;
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.domElement.id = "canvasID";
renderer.setSize(window.innerWidth, 2943);
renderer.setClearColor('#0b0b0b');
document.getElementById("myScene").appendChild(renderer.domElement);
var light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
scene.add( light );

function createCircle(x, y, color, id) { // function to create circle nodes
  var myCircle = document.createElementNS(svgNS, "circle");
  myCircle.setAttributeNS(null, "id", id);
  myCircle.setAttributeNS(null, "cx", x);
  myCircle.setAttributeNS(null, "cy", y);
  myCircle.setAttributeNS(null, "r", 20);
  myCircle.setAttributeNS(null, "fill", color);
  myCircle.setAttributeNS(null, "stroke", "black");
  document.getElementById("mySVG").appendChild(myCircle);
}

function update() { // function to create & update palagus 
  geometry = new THREE.BoxGeometry(15, endpoint, 0.0011)
  material = new THREE.MeshToonMaterial({ color: '#B22222', wireframe: false })
  line = new THREE.Mesh(geometry, material)
  line.position.x = x /2;
  line.position.y = palagusPosition;
  line.geometry.verticesNeedUpdate = true;
  scene.add(line);
}

update();

function latus(initialX, initialY, finalX, finalY, latus) { // function to create & update latus.
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(initialX, initialY, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(finalX, finalY, 0));
  switch(latus) {
    case "line1":
      line1 = new THREE.Line(geometry, material);
      line1.geometry.verticesNeedUpdate = true;
      scene.add(line1);
      break;
    case "line2":
      line2 = new THREE.Line(geometry, material);
      line2.geometry.verticesNeedUpdate = true;
      scene.add(line2);
      break;
    case "line3":
      line3 = new THREE.Line(geometry, material);
      line3.geometry.verticesNeedUpdate = true;
      scene.add(line3);
      break;
    case "line4":
      line4 = new THREE.Line(geometry, material);
      line4.geometry.verticesNeedUpdate = true;
      scene.add(line4);
      break;
    case "line5":
      line5 = new THREE.Line(geometry, material);
      line5.geometry.verticesNeedUpdate = true;
      scene.add(line5);
      break;  
    case "line6":
      line6 = new THREE.Line(geometry, material);
      line6.geometry.verticesNeedUpdate = true;
      scene.add(line6);
      break;
    case "line7":
      line7 = new THREE.Line(geometry, material);
      line7.geometry.verticesNeedUpdate = true;
      scene.add(line7);
      break;
    case "line8":
      line8 = new THREE.Line(geometry, material);
      line8.geometry.verticesNeedUpdate = true;
      scene.add(line8);
      break;
    case "line9":
      line9 = new THREE.Line(geometry, material);
      line9.geometry.verticesNeedUpdate = true;
      scene.add(line9);
      break;
    case "line10":
      line10 = new THREE.Line(geometry, material);
      line10.geometry.verticesNeedUpdate = true;
      scene.add(line10);
      break;
    case "line11":
      line11 = new THREE.Line(geometry, material);
      line11.geometry.verticesNeedUpdate = true;
      scene.add(line11);
      break;
  }
}
latus(0.5*x, 0.45*y, l1endpointx, l1endpointy, 'line1'); // Creating latus1 initially and so on.
latus(0.25*x, 0.415*y, l2endpointx, l2endpointy, 'line2');
latus(0.25*x, 0.3*y, l3endpointx, l3endpointy, 'line3');
latus(-0.05*x, 0.1*y, l4endpointx, l4endpointy, 'line4');
latus(-0.05*x, 0.1*y, l5endpointx, l5endpointy, 'line5');
latus(-0.05*x, 0.1*y, l6endpointx, l6endpointy, 'line6');
latus(0.15*x, -0.15*y, l7endpointx, l7endpointy, 'line7');
latus(-0.2*x, -0.35*y, l8endpointx, l8endpointy, 'line8');
latus(-0.2*x, -0.35*y, l9endpointx, l9endpointy, 'line9');
latus(-0.2*x, -0.35*y, l10endpointx, l10endpointy, 'line10');
latus(-0.2*x, -0.35*y, l11endpointx, l11endpointy, 'line11');

function latus1scrolldown() { // function to update latus1 endpoint coordinates through on scroll event handler(scroll down).
  if (endpoint > 0.55 * y) {
    if (l1endpointx <= -0.2 * x || l1endpointy <= 0.35 * y) {
      l1endpointx = -0.2 * x;
      l1endpointy = 0.35 * y;
      if (!node2) {
        $('.node_2').fadeIn(500);
        createCircle('37.5%', '28.5%', 'red', 'node2');
        node2 = true;
      }
    } else {
      l1endpointx = l1endpointx - 0.098 * x / 4;
      l1endpointy = l1endpointy - 0.014 * y / 4;
    }
    if (l1endpointx < 0.25 * x) {
      if (!node1) {
        $('.node_1').fadeIn(500); // condition for fading in node labels
        createCircle('65.2%', '24.56%', 'red', 'node1');
        node1 = true;
      }
      latus2scrolldown();
    }
    scene.remove(line1);
    latus(0.5*x, 0.45*y, l1endpointx, l1endpointy, 'line1');
  }
}

function latus1scrollup() { // function to update latus1 endpoint coordinates through on scroll event handler(scroll up).
  if (l1endpointx >= 0.5 * x || l1endpointy >= 0.45 * y) {
    l1endpointx = 0.5 * x;
    l1endpointy = 0.45 * y;
  } else {
    l1endpointx = l1endpointx + 0.098 * x / 8;
    l1endpointy = l1endpointy + 0.014 * y / 8;
    if (node2) {
      $('.node_2').fadeOut(250);
      document.getElementById('node2').remove();
      node2 = false;
    }
  }
  if (l1endpointx >= 0.25 * x || l1endpointy >= 0.415 * y) {
    if (node1) {
      $('.node_1').fadeOut(250); //condition for fading out node labels.
      document.getElementById('node1').remove();
      node1 = false;
    }
  }
  scene.remove(line1);
  latus(0.5*x, 0.45*y, l1endpointx, l1endpointy, 'line1');
}

function latus2scrolldown() {
  if (l1endpointy <= 0.415 * y) {
    if (l2endpointy <= 0.3 * y) {
      l2endpointy = 0.3 * y;
      if (!node3) {
        $('.node_3').fadeIn(500);
        createCircle('65.1%', '31.6%', 'red', 'node3');
        node3 = true;
      }
      latus3scrolldown();
    } else {
      l2endpointy = l2endpointy - 0.0075 * y;
    }
    scene.remove(line2);
    latus(0.25*x, 0.415*y, l2endpointx, l2endpointy, 'line2');
  }
}

function latus2scrollup() {
  if (l2endpointy >= 0.415 * y) {
    l2endpointy = 0.415 * y;
    latus1scrollup();
    scene.remove(line2);
    latus(0.25*x, 0.415*y, l2endpointx, l2endpointy, 'line2');
  } else {
    l2endpointy = l2endpointy + 0.0075 * y / 4;
    scene.remove(line2);
    latus(0.25*x, 0.415*y, l2endpointx, l2endpointy, 'line2');
    if (node3) {
      $('.node_3').fadeOut(250);
      document.getElementById('node3').remove();
      node3 = false;
    }
  }
}

function latus3scrolldown() {
  if (l2endpointy <= 0.3 * y) {
    if (l3endpointx <= -0.05 * x || l3endpointy <= 0.1 * y) {
      l3endpointx = -0.05 * x;
      l3endpointy = 0.1 * y;
      if (!node4) {
        $('.node_4').fadeIn(500);
        createCircle('47.2%', '43.8%', 'red', 'node4');
        node4 = true;
      }
      latus4scrolldown();
      latus5scrolldown();
      latus6scrolldown();
    } else {
      l3endpointx = l3endpointx - 0.006 * x;
      l3endpointy = l3endpointy - 0.004 * y;
    }
    scene.remove(line3);
    latus(0.25*x, 0.3*y, l3endpointx, l3endpointy, 'line3');
  }
}

function latus3scrollup() {
  if (l3endpointx <= 0.25 * x || l3endpointy <= 0.3 * y) {
    if ((l4endpointx == -0.05 * x) && (l4endpointy == 0.1 * y) && (l5endpointx == -0.05 * x) && (l5endpointy == 0.1 * y) && (l6endpointx == -0.05 * x) && (l6endpointy == 0.1 * y)) {
      if (l3endpointx >= 0.25 * x || l3endpointy >= 0.3 * y) {
        l3endpointx = 0.25 * x;
        l3endpointy = 0.3 * y;
        latus2scrollup();
        scene.remove(line3);
        latus(0.25*x, 0.3*y, l3endpointx, l3endpointy, 'line3');
      } else {
        l3endpointx = l3endpointx + 0.006 * x / 4;
        l3endpointy = l3endpointy + 0.004 * y / 4;
        scene.remove(line3);
        latus(0.25*x, 0.3*y, l3endpointx, l3endpointy, 'line3');
        if (node4) {
          $('.node_4').fadeOut(250);
          document.getElementById('node4').remove();
          node4 = false;
        }
      }
    }
  } else {
    l3endpointx = 0.25 * x;
    l3endpointy = 0.3 * y;
    scene.remove(line3);
    latus(0.25*x, 0.3*y, l3endpointx, l3endpointy, 'line3');
    latus2scrollup();
  }
}

function latus4scrolldown() {
  if (l3endpointx <= -0.05 * x || l3endpointy <= 0.1 * y) {
    if (l4endpointx <= -0.4 * x || l4endpointy <= -0.05 * y) {
      l4endpointx = -0.4 * x;
      l4endpointy = -0.05 * y;
      if (!node5) {
        $('.node_5').fadeIn(500);
        createCircle('25.264%', '53%', 'red', 'node5');
        node5 = true;
      }
    } else {
      l4endpointx = l4endpointx - 0.007 * x;
      l4endpointy = l4endpointy - 0.003 * y;
    }
    scene.remove(line4);
    latus(-0.05*x, 0.1*y, l4endpointx, l4endpointy, 'line4');
  }
}

function latus4scrollup() {
  if (l4endpointx <= -0.05 * x || l4endpointy <= 0.1 * y) {
    if (l4endpointx >= -0.05 * x || l4endpointy >= 0.1 * y) {
      l4endpointx = -0.05 * x;
      l4endpointy = 0.1 * y;
      scene.remove(line4);
      latus3scrollup();
      latus(-0.05*x, 0.1*y, l4endpointx, l4endpointy, 'line4');
    } else {
      l4endpointx = l4endpointx + 0.007 * x / 4;
      l4endpointy = l4endpointy + 0.003 * y / 4;
      scene.remove(line4);
      latus(-0.05*x, 0.1*y, l4endpointx, l4endpointy, 'line4');
      if (node5) {
        $('.node_5').fadeOut(250);
        document.getElementById('node5').remove();
        node5 = false;
      }
    }
  } else {
    l4endpointx = -0.05 * x;
    l4endpointy = 0.1 * y;
    scene.remove(line4);
    latus3scrollup();
    latus(-0.05*x, 0.1*y, l4endpointx, l4endpointy, 'line4');
  }
}

function latus5scrolldown() {
  if (l3endpointx <= -0.05 * x || l3endpointy <= 0.1 * y) {
    if (l5endpointx >= 0.15 * x || l5endpointy <= -0.15 * y) {
      l5endpointx = 0.15 * x;
      l5endpointy = -0.15 * y;
      if (!node6) {
        $('.node_6').fadeIn(500);
        createCircle('58.75%', '59.25%', 'red', 'node6');
        node6 = true;
      }
      latus7scrolldown();
    } else {
      l5endpointx = l5endpointx + 0.004 * x;
      l5endpointy = l5endpointy - 0.005 * y;
    }
    scene.remove(line5);
    latus(-0.05*x, 0.1*y, l5endpointx, l5endpointy, 'line5');
  }
}

function latus5scrollup() {
  if (l5endpointx >= -0.05 * x || l5endpointy <= 0.1 * y) {
    if (l5endpointx <= -0.05 * x || l5endpointy >= 0.1 * y) {
      l5endpointx = -0.05 * x;
      l5endpointy = 0.1 * y;
      scene.remove(line5);
      latus3scrollup();
      latus(-0.05*x, 0.1*y, l5endpointx, l5endpointy, 'line5');
    } else {
      l5endpointx = l5endpointx - 0.004 * x / 4;
      l5endpointy = l5endpointy + 0.005 * y / 4;
      scene.remove(line5);
      latus(-0.05*x, 0.1*y, l5endpointx, l5endpointy, 'line5');
      if (node6) {
        $('.node_6').fadeOut(250);
        document.getElementById('node6').remove();
        node6 = false;
      }
    }
  } else {
    l5endpointx = 0.15 * x;
    l5endpointy = -0.15 * y;
    scene.remove(line5);
    latus(-0.05*x, 0.1*y, l5endpointx, l5endpointy, 'line5');
    latus3scrollup();
  }
}

function latus6scrolldown() {
  if (l3endpointx >= -0.05 * x || l3endpointy <= 0.1 * y) {
    if (l6endpointx >= 0.3 * x || l6endpointy <= 0) {
      l6endpointx = 0.3 * x;
      l6endpointy = 0;
      if (!node7) {
        $('.node_7').fadeIn(500);
        createCircle('68%', '50%', 'red', 'node7');
        node7 = true;
      }
    } else {
      l6endpointx = l6endpointx + 0.0035 * 1.5 * x;
      l6endpointy = l6endpointy - 0.001 * 1.5 * y;
    }
    scene.remove(line6);
    latus(-0.05*x, 0.1*y, l6endpointx, l6endpointy, 'line6');
  }
}

function latus6scrollup() {
  if (l6endpointx <= -0.05 * x || l6endpointy >= 0.1 * y) {
    l6endpointx = -0.05 * x;
    l6endpointy = 0.1 * y;
    scene.remove(line6);
    latus3scrollup();
    latus(-0.05*x, 0.1*y, l6endpointx, l6endpointy, 'line6');
  } else {
    l6endpointx = l6endpointx - 0.0035 * 1.5 * x / 4;
    l6endpointy = l6endpointy + 0.001 * 1.5 * y / 4;
    scene.remove(line6);
    latus(-0.05*x, 0.1*y, l6endpointx, l6endpointy, 'line6');
    if (node7) {
      $('.node_7').fadeOut(250);
      document.getElementById('node7').remove();
      node7 = false;
    }
  }
}

function latus7scrolldown() {
  if (l5endpointx <= 0.15 * x || l5endpointy <= -0.15 * y) {
    if (l7endpointx <= -0.2 * x || l7endpointy <= -0.35 * y) {
      l7endpointx = -0.2 * x;
      l7endpointy = -0.35 * y;
      if (!node8) {
        $('.node_8').fadeIn(500);
        createCircle('38.06%', '71.45%', 'red', 'node8');
        node8 = true;
      }
      latus8scrolldown();
      latus9scrolldown();
      latus10scrolldown();
      latus11scrolldown();
    } else {
      l7endpointx = l7endpointx - 0.007 * x;
      l7endpointy = l7endpointy - 0.004 * y;
    }
    scene.remove(line7);
    latus(0.15*x, -0.15*y, l7endpointx, l7endpointy, 'line7');
  }
}

function latus7scrollup() {
  if (l7endpointx <= 0.15 * x || l7endpointy <= -0.15 * y) {
    if ((l8endpointx == -0.2 * x) && (l8endpointy == -0.35 * y) && (l9endpointx == -0.2 * x) && (l9endpointy == -0.35 * y) && (l10endpointx == -0.2 * x) && (l10endpointy == -0.35 * y) && (l11endpointx == -0.2 * x) && (l11endpointy == -0.35 * y)) {
      if (l7endpointx >= 0.15 * x || l7endpointy >= -0.15 * y) {
        l7endpointx = 0.15 * x;
        l7endpointy = -0.15 * y;
        latus4scrollup();
        latus5scrollup();
        latus6scrollup();
        scene.remove(line7);
        latus(0.15*x, -0.15*y, l7endpointx, l7endpointy, 'line7');
      } else {
        l7endpointx = l7endpointx + 0.007 * x / 4;
        l7endpointy = l7endpointy + 0.004 * y / 4;
        scene.remove(line7);
        latus(0.15*x, -0.15*y, l7endpointx, l7endpointy, 'line7');
        if (node8) {
          $('.node_8').fadeOut(250);
          document.getElementById('node8').remove();
          node8 = false;
        }
      }
    }
  } else {
    l7endpointx = 0.15 * x;
    l7endpointy = -0.15 * y;
    latus4scrollup();
    latus5scrollup();
    latus6scrollup();
    scene.remove(line7);
    latus(0.15*x, -0.15*y, l7endpointx, l7endpointy, 'line7');
  }
}

function latus8scrolldown() {
  if (l7endpointx <= -0.2 * x || l7endpointy <= -0.35 * y) {
    if (l8endpointx <= -0.5 * x || l8endpointy <= -0.45 * y) {
      l8endpointx = -0.5 * x;
      l8endpointy = -0.45 * y;
      if (!node9) {
        $('.node_9').fadeIn(500);
        createCircle('18.56%', '78%', 'red', 'node9');
        node9 = true;
      }
    } else {
      l8endpointx = l8endpointx - 0.012 * x;
      l8endpointy = l8endpointy - 0.004 * y;
    }
    scene.remove(line8);
    latus(-0.2*x, -0.35*y, l8endpointx, l8endpointy, 'line8');
  }
}

function latus8scrollup() {
  if (l7endpointx >= -0.2 * x || l7endpointy <= -0.35 * y) {
    if (l8endpointx >= -0.2 * x || l8endpointy >= -0.35 * y) {
      l8endpointx = -0.2 * x;
      l8endpointy = -0.35 * y;
      latus7scrollup();
      scene.remove(line8);
      latus(-0.2*x, -0.35*y, l8endpointx, l8endpointy, 'line8');
    } else {
      l8endpointx = l8endpointx + 0.012 * x / 2;
      l8endpointy = l8endpointy + 0.004 * y / 2;
      scene.remove(line8);
      latus(-0.2*x, -0.35*y, l8endpointx, l8endpointy, 'line8');
      if (node9) {
        $('.node_9').fadeOut(250);
        document.getElementById('node9').remove();
        node9 = false;
      }
    }
  } else {
    l8endpointx = -0.2 * x;
    l8endpointy = -0.35 * y;
    latus7scrollup();
    scene.remove(line8);
    latus(-0.2*x, -0.35*y, l8endpointx, l8endpointy, 'line8');
  }
}

function latus9scrolldown() {
  if (l7endpointx <= -0.2 * x || l7endpointy <= -0.35 * y) {
    if (l9endpointx <= -0.25 * x || l9endpointy <= -0.65 * y) {
      l9endpointx = -0.25 * x;
      l9endpointy = -0.65 * y;
      if (!node10) {
        $('.node_10').fadeIn(500);
        createCircle('34.6%', '90%', 'red', 'node10');
        node10 = true;
      }
    } else {
      l9endpointx = l9endpointx - 0.002 * x;
      l9endpointy = l9endpointy - 0.012 * y;
    }
    scene.remove(line9);
    latus(-0.2*x, -0.35*y, l9endpointx, l9endpointy, 'line9');
  }
}

function latus9scrollup() {
  if (l7endpointx >= -0.2 * x || l7endpointy <= -0.35 * y) {
    if (l9endpointx >= -0.2 * x || l9endpointy >= -0.35 * y) {
      l9endpointx = -0.2 * x;
      l9endpointy = -0.35 * y;
      latus7scrollup();
      scene.remove(line9);
      latus(-0.2*x, -0.35*y, l9endpointx, l9endpointy, 'line9');
    } else {
      l9endpointx = l9endpointx + 0.002 * x;
      l9endpointy = l9endpointy + 0.012 * y;
      scene.remove(line9);
      latus(-0.2*x, -0.35*y, l9endpointx, l9endpointy, 'line9');
      if (node10) {
        $('.node_10').fadeOut(250);
        document.getElementById('node10').remove();
        node10 = false;
      }
    }
  } else {
    l9endpointx = -0.2 * x;
    l9endpointy = -0.35 * y;
    latus7scrollup();
    scene.remove(line9);
    latus(-0.2*x, -0.35*y, l9endpointx, l9endpointy, 'line9');
  }
}

function latus10scrolldown() {
  if (l7endpointx <= -0.2 * x || l7endpointy <= -0.35 * y) {
    if (l10endpointx >= 0.25 * x || l10endpointy <= -0.6 * y) {
      l10endpointx = 0.25 * x;
      l10endpointy = -0.6 * y;
      if (!node11) {
        $('.node_11').fadeIn(500);
        createCircle('65.3%', '87%', 'red', 'node11');
        node11 = true;
      }
    } else {
      l10endpointx = l10endpointx + 0.009 * x;
      l10endpointy = l10endpointy - 0.005 * y;
    }
    scene.remove(line10);
    latus(-0.2*x, -0.35*y, l10endpointx, l10endpointy, 'line10');
  }
}

function latus10scrollup() {
  if (l7endpointx >= -0.2 * x || l7endpointy <= -0.35 * y) {
    if (l10endpointx <= -0.2 * x || l10endpointy >= -0.35 * y) {
      l10endpointx = -0.2 * x;
      l10endpointy = -0.35 * y;
      latus7scrollup();
      scene.remove(line10);
      latus(-0.2*x, -0.35*y, l10endpointx, l10endpointy, 'line10');
    } else {
      l10endpointx = l10endpointx - 0.009 * x;
      l10endpointy = l10endpointy + 0.005 * y;
      scene.remove(line10);
      latus(-0.2*x, -0.35*y, l10endpointx, l10endpointy, 'line10');
      if (node11) {
        $('.node_11').fadeOut(250);
        document.getElementById('node11').remove();
        node11 = false;
      }
    }
  } else {
    l10endpointx = -0.2 * x;
    l10endpointy = -0.35 * y;
    latus7scrollup();
    scene.remove(line10);
    latus(-0.2*x, -0.35*y, l10endpointx, l10endpointy, 'line10');
  }
}

function latus11scrolldown() {
  if (l7endpointx <= -0.2 * x || l7endpointy <= -0.35 * y) {
    if (l11endpointx >= 0.35 * x || l11endpointy <= -0.43 * y) {
      l11endpointx = 0.35 * x;
      l11endpointy = -0.43 * y;
      if (!node12) {
        $('.node_12').fadeIn(500);
        createCircle('71.5%', '76.5%', 'red', 'node12');
        node12 = true;
      }
    } else {
      l11endpointx = l11endpointx + 0.0275 * x;
      l11endpointy = l11endpointy - 0.004 * y;
    }
    scene.remove(line11);
    latus(-0.2*x, -0.35*y, l11endpointx, l11endpointy, 'line11');
  }
}

function latus11scrollup() {
  if (l7endpointx >= -0.2 * x || l7endpointy >= -0.35 * y) {
    if (l11endpointx <= -0.2 * x || l11endpointy >= -0.35 * y) {
      l11endpointx = -0.2 * x;
      l11endpointy = -0.35 * y;
      latus7scrollup();
      scene.remove(line11);
      latus(-0.2*x, -0.35*y, l11endpointx, l11endpointy, 'line11');
    } else {
      l11endpointx = l11endpointx - 0.0275 * x / 2;
      l11endpointy = l11endpointy + 0.004 * y / 2;
      scene.remove(line11);
      latus(-0.2*x, -0.35*y, l11endpointx, l11endpointy, 'line11');
      if (node12) {
        $('.node_12').fadeOut(250);
        document.getElementById('node12').remove();
        node12 = false;
      }
    }
  } else {
    l11endpointx = -0.2 * x;
    l11endpointy = -0.35 * y;
    latus7scrollup();
    scene.remove(line11);
    latus(-0.2*x, -0.35*y, l11endpointx, l11endpointy, 'line11');
  }
}

function updateDrawDown() { // function updating endpoint coordinates(scroll down) for each latus and palagus by y-offset
  if (scroll > 190) {
    l1endpointx = -0.2 * x;
    l1endpointy = 0.35 * y;
    scene.remove(line1);
    latus(0.5*x, 0.45*y, l1endpointx, l1endpointy, 'line1');
    if (!node2) {
      createCircle('37.5%', '28.5%', 'red', 'node2');
      $('.node_2').fadeIn(500);
      node2 = true;
    }
    if (endpoint < 0.65 * y) {
      endpoint = 0.65 * y;
      palagusPosition = 0.675 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 250) {
    l2endpointx = 0.25 * x;
    l2endpointy = 0.3 * y;
    scene.remove(line2);
    latus(0.25*x, 0.415*y, l2endpointx, l2endpointy, 'line2');
    if (!node3) {
      createCircle('65.1%', '31.6%', 'red', 'node3');
      $('.node_3').fadeIn(500);
      node3 = true;
    }
    if (endpoint < 0.7 * y) {
      endpoint = 0.7 * y;
      palagusPosition = 0.65 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 320) {
    if (l3endpointx > 0.1 * x && l3endpointy > 0.2 * y) {
      l3endpointx = 0.1 * x;
      l3endpointy = 0.2 * y;
      scene.remove(line3);
      latus(0.25*x, 0.3*y, l3endpointx, l3endpointy, 'line3');
      if (endpoint < 0.8 * y) {
        endpoint = 0.8 * y;
        palagusPosition = 0.6 * y
        scene.remove(line);
        update();
      }
    }
  }
  if (scroll > 370) {
    l3endpointx = -0.05 * x;
    l3endpointy = 0.1 * y;
    scene.remove(line3);
    latus(0.25*x, 0.3*y, l3endpointx, l3endpointy, 'line3');
    if (!node4) {
      createCircle('47.2%', '43.8%', 'red', 'node4');
      $('.node_4').fadeIn(500);
      node4 = true;
    }
    if (endpoint < 0.9 * y) {
      endpoint = 0.9 * y;
      palagusPosition = 0.55 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 600) {
    if (l4endpointx > -0.225 * x && l4endpointy > 0.025 * y) {
      l4endpointx = -0.225 * x;
      l4endpointy = 0.025 * y;
      scene.remove(line4);
      latus(-0.05*x, 0.1*y, l4endpointx, l4endpointy, 'line4');
    }
    if (l5endpointx < 0.05 * x && l5endpointy > -0.025 * y) {
      l5endpointx = 0.05 * x;
      l5endpointy = -0.025 * y;
      scene.remove(line5);
      latus(-0.05*x, 0.1*y, l5endpointx, l5endpointy, 'line5');
    }
    if (l6endpointx < 0.125 * x && l6endpointy > 0.05 * y) {
      l6endpointx = 0.125 * x;
      l6endpointy = 0.05 * y;
      scene.remove(line6);
      latus(-0.05*x, 0.1*y, l6endpointx, l6endpointy, 'line6');
    }
    if (endpoint < 0.95 * y) {
      endpoint = 0.95 * y;
      palagusPosition = 0.525 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 800) {
    l4endpointx = -0.4 * x, l4endpointy = -0.05 * y, l5endpointx = 0.15 * x, l5endpointy = -0.15 * y, l6endpointx = 0.3 * x, l6endpointy = 0;
    scene.remove(line4);
    scene.remove(line5);
    scene.remove(line6);
    latus(-0.05*x, 0.1*y, l4endpointx, l4endpointy, 'line4');
    latus(-0.05*x, 0.1*y, l5endpointx, l5endpointy, 'line5');
    latus(-0.05*x, 0.1*y, l6endpointx, l6endpointy, 'line6');
    if (!node5) {
      createCircle('25.264%', '53%', 'red', 'node5');
      $('.node_5').fadeIn(500);
      node5 = true;
    }
    if (!node6) {
      createCircle('58.75%', '59.25%', 'red', 'node6');
      $('.node_6').fadeIn(500);
      node6 = true;
    }
    if (!node7) {
      createCircle('68%', '50%', 'red', 'node7');
      $('.node_7').fadeIn(500);
      node7 = true;
    }
    if (endpoint < 1.025 * y) {
      endpoint = 1.025 * y;
      palagusPosition = 0.4875 * y
      scene.remove(line);
      update();
    }
  }
  if (scroll > 1000) {
    if (l7endpointx > -0.025 * x && l7endpointy > -0.25) {
      l7endpointx = -0.025 * x, l7endpointy = -0.25;
      scene.remove(line7);
      latus(0.15*x, -0.15*y, l7endpointx, l7endpointy, 'line7');
    }
    if (endpoint < 1.15 * y) {
      endpoint = 1.15 * y;
      palagusPosition = 0.425 * y
      scene.remove(line);
      update();
    }
  }
  if (scroll > 1200) {
    l7endpointx = -0.2 * x, l7endpointy = -0.35 * y;
    scene.remove(line7);
    latus(0.15*x, -0.15*y, l7endpointx, l7endpointy, 'line7');
    if (!node8) {
      createCircle('38.06%', '71.45%', 'red', 'node8');
      $('.node_8').fadeIn(500);
      node8 = true;
    }
    if (endpoint < 1.34 * y) {
      endpoint = 1.34 * y;
      palagusPosition = 0.325 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 1400) {
    if (l8endpointx > -0.35 * x && l8endpointy > -0.40 * y) {
      l8endpointx = -0.35 * x, l8endpointy = -0.4 * y;
      scene.remove(line8);
      latus(-0.2*x, -0.35*y, l8endpointx, l8endpointy, 'line8');
    }
    if (l9endpointx > -0.225 * x && l9endpointy > -0.5 * y) {
      l9endpointx = -0.225 * x, l9endpointy = -0.5 * y;
      scene.remove(line9);
      latus(-0.2*x, -0.35*y, l9endpointx, l9endpointy, 'line9');
    }
    if (l10endpointx < 0.025 * x && l10endpointy > - 0.475) {
      l10endpointx = 0.025 * x, l10endpointy = -0.475 * y;
      scene.remove(line10);
      latus(-0.2*x, -0.35*y, l10endpointx, l10endpointy, 'line10');
    }
    if (l11endpointx < 0.075 * x && l11endpointy > -0.49 * y) {
      l11endpointx = 0.075 * x, l11endpointy = -0.49 * y;
      scene.remove(line11);
      latus(-0.2*x, -0.35*y, l11endpointx, l11endpointy, 'line11');
    }
    if (endpoint < 1.5 * y) {
      endpoint = 1.5 * y;
      scene.remove(line);
      palagusPosition = .25 * y
      update();
    }
  }
  if (scroll > 1600) {
    l8endpointx = -0.5 * x, l8endpointy = -0.45 * y, l9endpointx = -0.25 * x, l9endpointy = -0.65 * y, l10endpointx = 0.25 * x, l10endpointy = -0.65 * y, l11endpointx = 0.35 * x, l11endpointy = -0.43 * y;
    scene.remove(line8);
    scene.remove(line9);
    scene.remove(line10);
    scene.remove(line11);
    latus(-0.2*x, -0.35*y, l8endpointx, l8endpointy, 'line8');
    latus(-0.2*x, -0.35*y, l9endpointx, l9endpointy, 'line9');
    latus(-0.2*x, -0.35*y, l10endpointx, l10endpointy, 'line10');
    latus(-0.2*x, -0.35*y, l11endpointx, l11endpointy, 'line11');
    if (!node9) {
      createCircle('18.56%', '78%', 'red', 'node9');
      $('.node_9').fadeIn(500);
      node9 = true;
    }
    if (!node10) {
      createCircle('34.6%', '90%', 'red', 'node10');
      $('.node_10').fadeIn(500);
      node10 = true;
    }
    if (!node11) {
      createCircle('65.3%', '87%', 'red', 'node11');
      $('.node_11').fadeIn(500);
      node11 = true;
    }
    if (!node12) {
      createCircle('71.5%', '76.5%', 'red', 'node12');
      $('.node_12').fadeIn(500);
      node12 = true;
    }
    if (endpoint < 1.65 * y) {
      endpoint = 1.65 * y;
      scene.remove(line);
      palagusPosition = .175 * y
      update();
    }
  }
}

function scrolldown() { //scroll down functionality
  updateDrawDown();
  if (!firstScroll) {
    firstScroll = true;
    $('#scrolldown').fadeOut(1000);
  }
  if ((l1endpointy < 0.45 * y && l1endpointy > 0.415 * y) || (l2endpointy < 0.415 * y && endpoint < 0.7 * y) || (l3endpointx < 0.25 * x && endpoint < 0.9 * y) || (l5endpointx > -0.05 * x && endpoint < 1.15 * y) || (l7endpointx < 0.15 * x && endpoint < 1.35 * y) || (l9endpointx < -0.2 * x && endpoint < 1.65 * y)) {
    endpoint = endpoint + 0.008 * y;
    palagusPosition = palagusPosition - 0.004 * y;
  } else if (endpoint < 0.55 * y) {
    endpoint = endpoint + 0.1 * y;
    palagusPosition = palagusPosition - 0.05 * y;
  }
  latus1scrolldown();
  scene.remove(line);
  update();
}

function updateDrawUp() { // function updating endpoint coordinates(scroll up) for each latus and palagus by y-offset
  if (scroll < 100) {
    if (node3) {
      $('.node_3').fadeOut(250);
      document.getElementById('node3').remove();
      node3 = false;
    }
    if (node2) {
      $('.node_2').fadeOut(250);
      document.getElementById('node2').remove();
      node2 = false;
    }
    l1endpointx = 0.5 * x, l1endpointy = 0.45 * y, l2endpointx = 0.25 * x, l2endpointy = 0.415 * y;
    scene.remove(line1);
    scene.remove(line2);
    latus(0.5*x, 0.45*y, l1endpointx, l1endpointy, 'line1');
    latus(0.25*x, 0.415*y, l2endpointx, l2endpointy, 'line2');
    if (endpoint > 0.65 * y) {
      endpoint = 0.65 * y;
      palagusPosition = 0.675 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 150) {
    l3endpointx = 0.25 * x;
    l3endpointy = 0.3 * y;
    scene.remove(line3);
    latus(0.25*x, 0.3*y, l3endpointx, l3endpointy, 'line3');
    if (endpoint > 0.7 * y) {
      endpoint = 0.7 * y;
      palagusPosition = 0.65 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 225) {
    if (node4) {
      $('.node_4').fadeOut(250);
      document.getElementById('node4').remove();
      node4 = false;
    }
    if (l3endpointx < 0.1 * x && l3endpointy < 0.2 * y) {
      l3endpointx = 0.1 * x;
      l3endpointy = 0.2 * y;
      scene.remove(line3);
      latus(0.25*x, 0.3*y, l3endpointx, l3endpointy, 'line3');
      if (endpoint > 0.8 * y) {
        endpoint = 0.8 * y;
        palagusPosition = 0.6 * y;
        scene.remove(line);
        update();
      }
    }
  }
  if (scroll < 300) {
    l4endpointx = -0.05 * x, l4endpointy = 0.1 * y, l5endpointx = -0.05 * x, l5endpointy = 0.1 * y, l6endpointx = -0.05 * x, l6endpointy = 0.1 * y;
    scene.remove(line4);
    scene.remove(line5);
    scene.remove(line6);
    latus(-0.05*x, 0.1*y, l4endpointx, l4endpointy, 'line4');
    latus(-0.05*x, 0.1*y, l5endpointx, l5endpointy, 'line5');
    latus(-0.05*x, 0.1*y, l6endpointx, l6endpointy, 'line6');
    if (endpoint > 0.9 * y) {
      endpoint = 0.9 * y;
      palagusPosition = 0.55 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 380) {
    if (node5) {
      $('.node_5').fadeOut(250);
      document.getElementById('node5').remove();
      node5 = false;
    }
    if (node6) {
      $('.node_6').fadeOut(250);
      document.getElementById('node6').remove();
      node6 = false;
    }
    if (node7) {
      $('.node_7').fadeOut(250);
      document.getElementById('node7').remove();
      node7 = false;
    }
    if (l4endpointx < -0.225 * x && l4endpointy < 0.025 * y) {
      l4endpointx = -0.225 * x;
      l4endpointy = 0.025 * y;
      scene.remove(line4);
      latus(-0.05*x, 0.1*y, l4endpointx, l4endpointy, 'line4');
    }
    if (l5endpointx > 0.05 * x && l5endpointy < -0.025 * y) {
      l5endpointx = 0.05 * x;
      l5endpointy = -0.025 * y;
      scene.remove(line5);
      latus(-0.05*x, 0.1*y, l5endpointx, l5endpointy, 'line5');
    }
    if (l6endpointx > 0.125 * x && l6endpointy < 0.05 * y) {
      l6endpointx = 0.125 * x;
      l6endpointy = 0.05 * y;
      scene.remove(line6);
      latus(-0.05*x, 0.1*y, l6endpointx, l6endpointy, 'line6');
    }
    if (endpoint > 0.95 * y) {
      endpoint = 0.95 * y;
      palagusPosition = 0.525 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 530) {
    l7endpointx = 0.15 * x, l7endpointy = -0.15 * y;
    scene.remove(line7);
    latus(0.15*x, -0.15*y, l7endpointx, l7endpointy, 'line7');
    if (endpoint > 1.15 * y) {
      endpoint = 1.15 * y;
      palagusPosition = 0.425 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 700) {
    if (node8) {
      $('.node_8').fadeOut(250);
      document.getElementById('node8').remove();
      node8 = false;
    }
    if (l7endpointx < -0.025 * x && l7endpointy < -0.25) {
      l7endpointx = -0.025 * x;
      l7endpointy = -0.25;
      scene.remove(line7);
      latus(0.15*x, -0.15*y, l7endpointx, l7endpointy, 'line7');
    }
    if (endpoint > 1.25 * y) {
      endpoint = 1.25 * y;
      palagusPosition = 0.375 * y; 
      scene.remove(line);
      update();
    }
  }
  if (scroll < 930) {
    l8endpointx = -0.2 * x, l8endpointy = -0.35 * y, l9endpointx = -0.2 * x, l9endpointy = -0.35 * y, l10endpointx = -0.2 * x, l10endpointy = -0.35 * y, l11endpointx = -0.2 * x, l11endpointy = -0.35 * y;
    scene.remove(line8);
    scene.remove(line9);
    scene.remove(line10);
    scene.remove(line11);
    if (node9) {
      $('.node_9').fadeOut(250);
      document.getElementById('node9').remove();
      node9 = false;
    }
    if (node10) {
      $('.node_10').fadeOut(250);
      document.getElementById('node10').remove();
      node10 = false;
    }
    if (node11) {
      $('.node_11').fadeOut(250);
      document.getElementById('node11').remove();
      node11 = false;
    }
    if (node12) {
      $('.node_12').fadeOut(250);
      document.getElementById('node12').remove();
      node12 = false;
    }
    if (endpoint > 1.35 * y) {
      endpoint = 1.35 * y;
      palagusPosition = 0.325 * y;
      scene.remove(line);
      update();
    }
  }
}

function scrollup() { // scroll up functionality
  updateDrawUp();
  if ((l2endpointy > 0.3 * y && endpoint > 0.585 * y) || (l3endpointy > 0.1 * y && endpoint > 0.7 * y) || (l5endpointy > -0.15 * y && endpoint > 0.9 * y) || (l7endpointy > -0.35 * y && endpoint > 1.15 * y) || (l9endpointy > -0.65 * y && endpoint > 1.35 * y)) {
    endpoint = endpoint - 0.008 * y; 
    palagusPosition = palagusPosition + 0.004 * y;
  } else if (l1endpointx == 0.5 * x && endpoint > 0) {
    endpoint = endpoint - 0.1 * y;
    palagusPosition = palagusPosition + 0.05 * y;
  }
  latus11scrollup();
  latus10scrollup();
  latus9scrollup();
  latus8scrollup();
  scene.remove(line)
  update();
}

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / 981;
  renderer.setSize(window.innerWidth, 2943);
});

window.addEventListener('scroll', function () {
  if (scroll < window.scrollY) {
    scroll = window.scrollY;
    scrolldown()
  } else if (scroll > window.scrollY) {
    scroll = window.scrollY;
    if (scroll == 0) { // condition setting all latus and palagus position back to initial.
      endpoint = 0;
      palagusPosition = y;
      scene.remove(line);
      update();
      l1endpointx = 0.5 * x, l1endpointy = 0.45 * y, l2endpointx = 0.25 * x, l2endpointy = 0.415 * y, l3endpointx = 0.25 * x, l3endpointy = 0.3 * y, l4endpointx = -0.05 * x, l4endpointy = 0.1 * y, l5endpointx = -0.05 * x, l5endpointy = 0.1 * y, l6endpointx = -0.05 * x, l6endpointy = 0.1 * y, l7endpointx = 0.15 * x, l7endpointy = -0.15 * y, l8endpointx = -0.2 * x, l8endpointy = -0.35 * y, l9endpointx = -0.2 * x, l9endpointy = -0.35 * y, l10endpointx = -0.2 * x, l10endpointy = -0.35 * y, l11endpointx = -0.2 * x, l11endpointy = -0.35 * y;
      scene.remove(line1);
      scene.remove(line2);
      scene.remove(line3);
      scene.remove(line4);
      scene.remove(line5);
      scene.remove(line6);
      scene.remove(line7);
      scene.remove(line8);
      scene.remove(line9);
      scene.remove(line10);
      scene.remove(line11);
      latus(0.5*x, 0.45*y, l1endpointx, l1endpointy, 'line1');
      latus(0.25*x, 0.415*y, l2endpointx, l2endpointy, 'line2');
      latus(0.25*x, 0.3*y, l3endpointx, l3endpointy, 'line3');
      latus(-0.05*x, 0.1*y, l4endpointx, l4endpointy, 'line4');
      latus(-0.05*x, 0.1*y, l5endpointx, l5endpointy, 'line5');
      latus(-0.05*x, 0.1*y, l6endpointx, l6endpointy, 'line6');
      latus(0.15*x, -0.15*y, l7endpointx, l7endpointy, 'line7');
      latus(-0.2*x, -0.35*y, l8endpointx, l8endpointy, 'line8');
      latus(-0.2*x, -0.35*y, l9endpointx, l9endpointy, 'line9');
      latus(-0.2*x, -0.35*y, l10endpointx, l10endpointy, 'line10');
      latus(-0.2*x, -0.35*y, l11endpointx, l11endpointy, 'line11');
    } else {
      scrollup()
    }
  }
});

function initialNode() { // condition setting back all node to initial.
  if (node1) {
    $('.node_1').fadeOut(250);
    document.getElementById('node1').remove();
    node1 = false;
  }
  if (node2) {
    $('.node_2').fadeOut(250);
    document.getElementById('node2').remove();
    node2 = false;
  }
  if (node3) {
    $('.node_3').fadeOut(250);
    document.getElementById('node3').remove();
    node3 = false;
  }
  if (node4) {
    $('.node_4').fadeOut(250);
    document.getElementById('node4').remove();
    node4 = false;
  }
  if (node5) {
    $('.node_5').fadeOut(250);
    document.getElementById('node5').remove();
    node5 = false;
  }
  if (node6) {
    $('.node_6').fadeOut(250);
    document.getElementById('node6').remove();
    node6 = false;
  }
  if (node7) {
    $('.node_7').fadeOut(250);
    document.getElementById('node7').remove();
    node7 = false;
  }
  if (node8) {
    $('.node_8').fadeOut(250);
    document.getElementById('node8').remove();
    node8 = false;
  }
  if (node9) {
    $('.node_9').fadeOut(250);
    document.getElementById('node9').remove();
    node9 = false;
  }
  if (node10) {
    $('.node_10').fadeOut(250);
    document.getElementById('node10').remove();
    node10 = false;
  }
  if (node11) {
    $('.node_11').fadeOut(250);
    document.getElementById('node11').remove();
    node11 = false;
  }
  if (node12) {
    $('.node_12').fadeOut(250);
    document.getElementById('node12').remove();
    node12 = false;
  }
}

let animate = function () {
  if (scroll == 0) {
    initialNode();
  }
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();

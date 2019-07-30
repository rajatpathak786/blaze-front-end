let x = window.innerWidth;
let y = window.innerHeight;
let endpoint = 0.8 * y;
let aspectRatio = window.innerWidth / window.innerHeight;
let scroll = window.scrollY;
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(90, aspectRatio, 0.1, 1000);
camera.lookAt(0, 0, 0);
camera.position.z = 800;
let l1endpointx = 0.5 * x, l1endpointy = 0.7 * y;;
let l2endpointx = 0.25 * x, l2endpointy = 0.665 * y;
let l3endpointx = 0.25 * x, l3endpointy = 0.55 * y;
let l4endpointx = -0.05 * x, l4endpointy = 0.35 * y;
let l5endpointx = -0.05 * x, l5endpointy = 0.35 * y;
let l6endpointx = -0.05 * x, l6endpointy = 0.35 * y;
let l7endpointx = 0.15 * x, l7endpointy = 0.1 * y;
let l8endpointx = -0.2 * x, l8endpointy = -0.1 * y;
let l9endpointx = -0.2 * x, l9endpointy = -0.1 * y;
let l10endpointx = -0.2 * x, l10endpointy = -0.1 * y;
let l11endpointx = -0.2 * x, l11endpointy = -0.1 * y;
let node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12;
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.domElement.id = "canvasID";
renderer.setSize(window.innerWidth, document.documentElement.scrollHeight);
document.getElementById("myScene").appendChild(renderer.domElement);
// var light = new THREE.PointLight(0xffffff, 1, 0);
// light.position.set(-0.1 * x, 0.75 * y, 100);
// scene.add(light)
// var light = new THREE.AmbientLight( 0xffffff ); 
// scene.add( light );

var svgNS = "http://www.w3.org/2000/svg";
function createCircle(x, y, color, id) {
  var myCircle = document.createElementNS(svgNS, "circle"); //to create a circle. for rectangle use "rectangle"
  myCircle.setAttributeNS(null, "id", id);
  myCircle.setAttributeNS(null, "cx", x);
  myCircle.setAttributeNS(null, "cy", y);
  myCircle.setAttributeNS(null, "r", 20);
  myCircle.setAttributeNS(null, "fill", color);
  myCircle.setAttributeNS(null, "stroke", "black");
  document.getElementById("mySVG").appendChild(myCircle);
}

function update() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 10 });
  geometry.vertices.push(new THREE.Vector3(x / 2, y, 0)); //x, y, z//500
  geometry.vertices.push(new THREE.Vector3(x / 2, endpoint, 0));
  line = new THREE.Line(geometry, material);
  line.geometry.verticesNeedUpdate = true;
  scene.add(line);
}

update();

function latus1() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 }); //#ff0000
  geometry.vertices.push(new THREE.Vector3(0.5 * x, 0.7 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l1endpointx, l1endpointy, 0));
  line1 = new THREE.Line(geometry, material);
  line1.geometry.verticesNeedUpdate = true;
  scene.add(line1);
}

latus1();

function latus2() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(0.25 * x, 0.665 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l2endpointx, l2endpointy, 0));
  line2 = new THREE.Line(geometry, material);
  line2.geometry.verticesNeedUpdate = true;
  scene.add(line2);
}

latus2();

function latus3() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(0.25 * x, 0.55 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l3endpointx, l3endpointy, 0));
  line3 = new THREE.Line(geometry, material);
  line3.geometry.verticesNeedUpdate = true;
  scene.add(line3);
}

latus3();

function latus4() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.05 * x, 0.35 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l4endpointx, l4endpointy, 0));
  line4 = new THREE.Line(geometry, material);
  line4.geometry.verticesNeedUpdate = true;
  scene.add(line4);
}

latus4();

function latus5() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.05 * x, 0.35 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l5endpointx, l5endpointy, 0));
  line5 = new THREE.Line(geometry, material);
  line5.geometry.verticesNeedUpdate = true;
  scene.add(line5);
}

latus5();

function latus6() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.05 * x, 0.35 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l6endpointx, l6endpointy, 0));
  line6 = new THREE.Line(geometry, material);
  line6.geometry.verticesNeedUpdate = true;
  scene.add(line6);
}

latus6();

function latus7() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(0.15 * x, 0.1 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l7endpointx, l7endpointy, 0));
  line7 = new THREE.Line(geometry, material);
  line7.geometry.verticesNeedUpdate = true;
  scene.add(line7);
}

latus7();

function latus8() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.2 * x, -0.1 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l8endpointx, l8endpointy, 0));
  line8 = new THREE.Line(geometry, material);
  line8.geometry.verticesNeedUpdate = true;
  scene.add(line8);
}

latus8();

function latus9() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.2 * x, -0.1 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l9endpointx, l9endpointy, 0));
  line9 = new THREE.Line(geometry, material);
  line9.geometry.verticesNeedUpdate = true;
  scene.add(line9);
}

latus9();

function latus10() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.2 * x, -0.1 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l10endpointx, l10endpointy, 0));
  line10 = new THREE.Line(geometry, material);
  line10.geometry.verticesNeedUpdate = true;
  scene.add(line10);
}

latus10();

function latus11() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#B22222', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.2 * x, -0.1 * y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l11endpointx, l11endpointy, 0));
  line11 = new THREE.Line(geometry, material);
  line11.geometry.verticesNeedUpdate = true;
  scene.add(line11);
}

latus11();

function latus1scrolldown() {
  if (endpoint <= 0.7 * y) {
    if (l1endpointx <= -0.2 * x || l1endpointy <= 0.6 * y) {
      l1endpointx = -0.2 * x;
      l1endpointy = 0.6 * y;
      if (!node2) {
        createCircle('37.5%', '13.338%', 'red', 'node2');
        node2 = true;
      }
      //console.log(scroll, "LATUS 1 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7");
    } else {
      l1endpointx = l1endpointx - 0.098 * x / 4;
      l1endpointy = l1endpointy - 0.014 * y / 4;
    }
    if (l1endpointx < 0.25 * x) {
      if (!node1) {
        createCircle('65.2%', '9.2%', 'red', 'node1');
        node1 = true;
      }
      latus2scrolldown();
    }
    scene.remove(line1);
    latus1();
  }
}

function latus1scrollup() {
  if (l1endpointx >= 0.5 * x || l1endpointy >= 0.7 * y) {
    l1endpointx = 0.5 * x;
    l1endpointy = 0.7 * y;
  } else {
    l1endpointx = l1endpointx + 0.098 * x / 8;
    l1endpointy = l1endpointy + 0.014 * y / 8;
    if (node2) {
      document.getElementById('node2').remove();
      node2 = false;
    }
  }
  if (l1endpointx >= 0.25*x || l1endpointy >= 0.665*y) {
    if (node1) {
      document.getElementById('node1').remove();
      node1 = false;
    }
  }
  scene.remove(line1);
  latus1();
}

function latus2scrolldown() {
  if (l1endpointy <= 0.665 * y) {
    if (l2endpointy <= 0.55 * y) {
      //console.log(scroll, "LATUS 2 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      l2endpointy = 0.55 * y;
      if (!node3) {
       createCircle('65.1%', '16.42%', 'red', 'node3');
        node3 = true;
      }
      latus3scrolldown();
    } else {
      l2endpointy = l2endpointy - 0.0075 * y;
    }
    scene.remove(line2);
    latus2();
  }
}

function latus2scrollup() {
  if (l2endpointy >= 0.665 * y) {
    l2endpointy = 0.665 * y;
    latus1scrollup();
    scene.remove(line2);
    latus2();
  } else {
    l2endpointy = l2endpointy + 0.0075 * y / 4;
    scene.remove(line2);
    latus2();
    if (node3) {
      document.getElementById('node3').remove();
      node3 = false;
    }
  }
}

function latus3scrolldown() {
  if (l2endpointy <= 0.55 * y) {
    if (l3endpointx <= -0.05 * x || l3endpointy <= 0.35 * y) {
      l3endpointx = -0.05 * x;
      l3endpointy = 0.35 * y;
      if (!node4) {
        createCircle('47.2%', '28.5%', 'red', 'node4');
        node4 = true;
      }
      //console.log(scroll, "L3 points *************************************************************************");
      latus4scrolldown();
      latus5scrolldown();
      latus6scrolldown();
    } else {
      l3endpointx = l3endpointx - 0.006 * x;
      l3endpointy = l3endpointy - 0.004 * y;
    }
    scene.remove(line3);
    latus3();
  }
}

function latus3scrollup() {
  if (l3endpointx <= 0.25 * x || l3endpointy <= 0.55 * y) {
    // //console.log(l4endpointx, l5endpointx, l6endpointx, l4endpointy, l5endpointy, l6endpointy)
    if ((l4endpointx == -0.05 * x) && (l4endpointy == 0.35 * y) && (l5endpointx == -0.05 * x) && (l5endpointy == 0.35 * y) && (l6endpointx == -0.05 * x) && (l6endpointy == 0.35 * y)) {
      if (l3endpointx >= 0.25 * x || l3endpointy >= 0.55 * y) {
        l3endpointx = 0.25 * x;
        l3endpointy = 0.55 * y;
        latus2scrollup();
        scene.remove(line3);
        latus3();
      } else {
        l3endpointx = l3endpointx + 0.006 * x / 4;
        l3endpointy = l3endpointy + 0.004 * y / 4;
        scene.remove(line3);
        latus3();
        if (node4) {
          document.getElementById('node4').remove();
          node4 = false;  
        }
      }
    }
  } else {
    l3endpointx = 0.25 * x;
    l3endpointy = 0.55 * y;
    scene.remove(line3);
    latus3();
    latus2scrollup();
  }
}

function latus4scrolldown() {
  if (l3endpointx <= -0.05 * x || l3endpointy <= 0.35 * y) {
    if (l4endpointx <= -0.4 * x || l4endpointy <= 0.2 * y) {
      l4endpointx = -0.4 * x;
      l4endpointy = 0.2 * y;
      if (!node5) {
        createCircle('25.264%', '37.8%', 'red', 'node5');
        node5 = true;
      }
    } else {
      l4endpointx = l4endpointx - 0.007 * x;
      l4endpointy = l4endpointy - 0.003 * y;
    }
    scene.remove(line4);
    latus4();
  }
}

function latus4scrollup() {
  if (l4endpointx <= -0.05 * x || l4endpointy <= 0.35 * y) {
    // if ((l8endpointx == -0.2*x) && (l8endpointy == -0.1*y) && (l9endpointx == -0.2*x) && (l9endpointy == -0.1*y) && (l10endpointx == -0.2*x) && (l10endpointy == -0.1*y) && (l11endpointx == -0.2*x) && (l11endpointy == -0.1*y) ) {
    if (l4endpointx >= -0.05 * x || l4endpointy >= 0.35 * y) {
      l4endpointx = -0.05 * x;
      l4endpointy = 0.35 * y;
      scene.remove(line4);
      latus3scrollup();
      latus4();
    } else {
      l4endpointx = l4endpointx + 0.007 * x / 4;
      l4endpointy = l4endpointy + 0.003 * y / 4;
      scene.remove(line4);
      latus4();
      if (node5) {
        document.getElementById('node5').remove();
        node5 = false;
      }
    }
    // }
  } else {
    l4endpointx = -0.05 * x;
    l4endpointy = 0.35 * y;
    scene.remove(line4);
    latus3scrollup();
    latus4();
  }
}

function latus5scrolldown() {
  if (l3endpointx <= -0.05 * x || l3endpointy <= 0.35 * y) {
    if (l5endpointx >= 0.15 * x || l5endpointy <= 0.1 * y) {
      l5endpointx = 0.15 * x;
      l5endpointy = 0.1 * y;
      if (!node6) {
        createCircle('58.75%', '44%', 'red', 'node6');
        node6 = true;
      }
      //console.log(scroll, 'L5 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
      latus7scrolldown();
    } else {
      l5endpointx = l5endpointx + 0.004 * x;
      l5endpointy = l5endpointy - 0.005 * y;
    }
    scene.remove(line5);
    latus5();
  }
}

function latus5scrollup() {
  if (l5endpointx >= -0.05 * x || l5endpointy <= 0.35 * y) {
    // if ((l8endpointx == -0.2*x) && (l8endpointy == -0.1*y) && (l9endpointx == -0.2*x) && (l9endpointy == -0.1*y) && (l10endpointx == -0.2*x) && (l10endpointy == -0.1*y) && (l11endpointx == -0.2*x) && (l11endpointy == -0.1*y) ) {
    if (l5endpointx <= -0.05 * x || l5endpointy >= 0.35 * y) {
      l5endpointx = -0.05 * x;
      l5endpointy = 0.35 * y;
      scene.remove(line5);
      latus3scrollup();
      latus5();
    } else {
      l5endpointx = l5endpointx - 0.004 * x / 4;
      l5endpointy = l5endpointy + 0.005 * y / 4;
      scene.remove(line5);
      latus5();
      if (node6) {
        document.getElementById('node6').remove();
        node6 = false;
      }
    }
    // }
  } else {
    l5endpointx = -0.05 * x;
    l5endpointy = 0.35 * y;
    scene.remove(line5);
    latus5();
    latus3scrollup();
  }
}

function latus6scrolldown() {
  if (l3endpointx >= -0.05 * x || l3endpointy <= 0.35 * y) {
    if (l6endpointx >= 0.3 * x || l6endpointy <= 0.25 * y) {
      l6endpointx = 0.3 * x;
      l6endpointy = 0.25 * y;
      if (!node7) {
        createCircle('68%', '34.6%', 'red', 'node7');
        node7 = true;
      }
    } else {
      l6endpointx = l6endpointx + 0.0035 * 1.5 * x;
      l6endpointy = l6endpointy - 0.001 * 1.5 * y;
    }
    scene.remove(line6);
    latus6();
  }
}

function latus6scrollup() {
  if (l6endpointx <= -0.05 * x || l6endpointy >= 0.35 * y) {
    l6endpointx = -0.05 * x;
    l6endpointy = 0.35 * y;
    scene.remove(line6);
    latus3scrollup();
    latus6();
  } else {
    l6endpointx = l6endpointx - 0.0035 * 1.5 * x / 4;
    l6endpointy = l6endpointy + 0.001 * 1.5 * y / 4;
    scene.remove(line6);
    latus6();
    if (node7) {
      document.getElementById('node7').remove();
      node7 = false;
    }
  }
}

function latus7scrolldown() {
  if (l5endpointx <= 0.15 * x || l5endpointy <= 0.1 * y) {
    if (l7endpointx <= -0.2 * x || l7endpointy <= -0.1 * y) {
      //console.log(scroll, "L7 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      l7endpointx = -0.2 * x;
      l7endpointy = -0.1 * y;
      if (!node8) {
        createCircle('38.06%', '56%', 'red', 'node8');
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
    latus7();
  }
}

function latus7scrollup() {
  if (l7endpointx <= 0.15 * x || l7endpointy <= 0.1 * y) {
    if ((l8endpointx == -0.2 * x) && (l8endpointy == -0.1 * y) && (l9endpointx == -0.2 * x) && (l9endpointy == -0.1 * y) && (l10endpointx == -0.2 * x) && (l10endpointy == -0.1 * y) && (l11endpointx == -0.2 * x) && (l11endpointy == -0.1 * y)) {
      if (l7endpointx >= 0.15 * x || l7endpointy >= 0.1 * y) {
        l7endpointx = 0.15 * x;
        l7endpointy = 0.1 * y;
        latus4scrollup();
        latus5scrollup();
        latus6scrollup();
        scene.remove(line7);
        latus7();
      } else {
        l7endpointx = l7endpointx + 0.007 * x / 4;
        l7endpointy = l7endpointy + 0.004 * y / 4;
        scene.remove(line7);
        latus7();
        if (node8) {
          document.getElementById('node8').remove();
          node8 = false;
        }
      }
    }
  } else {
    l7endpointx = 0.15 * x;
    l7endpointy = 0.1 * y;
    latus4scrollup();
    latus5scrollup();
    latus6scrollup();
    scene.remove(line7);
    latus7();
  }
}

function latus8scrolldown() {
  if (l7endpointx <= -0.2 * x || l7endpointy <= -0.1 * y) {
    if (l8endpointx <= -0.5 * x || l8endpointy <= -0.2 * y) {
      l8endpointx = -0.5 * x;
      l8endpointy = -0.2 * y;
      if (!node9) {
        createCircle('18.56%', '62.5%', 'red', 'node9');
        node9 = true;
      }
    } else {
      l8endpointx = l8endpointx - 0.012 * x;
      l8endpointy = l8endpointy - 0.004 * y;
    }
    scene.remove(line8);
    latus8();
  }
}

function latus8scrollup() {
  if (l7endpointx >= -0.2 * x || l7endpointy <= -0.1 * y) {
    if (l8endpointx >= -0.2 * x || l8endpointy >= -0.1 * y) {
      l8endpointx = -0.2 * x;
      l8endpointy = -0.1 * y;
      latus7scrollup();
      scene.remove(line9);
      latus9();
    } else {
      l8endpointx = l8endpointx + 0.012 * x / 2;
      l8endpointy = l8endpointy + 0.004 * y / 2;
      scene.remove(line8);
      latus8();
      if (node9) {
        document.getElementById('node9').remove();
        node9 = false;
      }
    }
  } else {
    l8endpointx = -0.2 * x;
    l8endpointy = -0.1 * y;
    latus7scrollup();
    scene.remove(line9);
    latus9();
  }
}

function latus9scrolldown() {
  if (l7endpointx <= -0.2 * x || l7endpointy <= -0.1 * y) {
    if (l9endpointx <= -0.25 * x || l9endpointy <= -0.4 * y) {
      //console.log(scroll, "L9 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      l9endpointx = -0.25 * x;
      l9endpointy = -0.4 * y;
      if (!node10) {
        createCircle('34.6%', '74%', 'red', 'node10');
        node10 = true;
      }
    } else {
      l9endpointx = l9endpointx - 0.002 * x;
      l9endpointy = l9endpointy - 0.012 * y;
    }
    scene.remove(line9);
    latus9();
  }
}

function latus9scrollup() {
  if (l7endpointx >= -0.2 * x || l7endpointy <= -0.1 * y) {
    if (l9endpointx >= -0.2 * x || l9endpointy >= -0.1 * y) {
      l9endpointx = -0.2 * x;
      l9endpointy = -0.1 * y;
      latus7scrollup();
      scene.remove(line9);
      latus9();
    } else {
      l9endpointx = l9endpointx + 0.002 * x;
      l9endpointy = l9endpointy + 0.012 * y;
      scene.remove(line9);
      latus9();
      if (node10) {
        document.getElementById('node10').remove();
        node10 = false;
      }
    }
  } else {
    l9endpointx = -0.2 * x / 4;
    l9endpointy = -0.1 * y / 4;
    latus7scrollup();
    scene.remove(line9);
    latus9();
  }
}

function latus10scrolldown() {
  if (l7endpointx <= -0.2 * x || l7endpointy <= -0.1 * y) {
    if (l10endpointx >= 0.25 * x || l10endpointy <= -0.35 * y) {
      l10endpointx = 0.25 * x;
      l10endpointy = -0.35 * y;
      if (!node11) {
        createCircle('65.3%', '71.6%', 'red', 'node11');
        node11 = true;
      }
    } else {
      l10endpointx = l10endpointx + 0.009 * x;
      l10endpointy = l10endpointy - 0.005 * y;
    }
    scene.remove(line10);
    latus10();
  }
}

function latus10scrollup() {
  if (l7endpointx >= -0.2 * x || l7endpointy <= -0.1 * y) {
    if (l10endpointx <= -0.2 * x || l10endpointy >= -0.1 * y) {
      l10endpointx = -0.2 * x;
      l10endpointy = -0.1 * y;
      latus7scrollup();
      scene.remove(line10);
      latus10();
    } else {
      l10endpointx = l10endpointx - 0.009 * x;
      l10endpointy = l10endpointy + 0.005 * y;
      scene.remove(line10);
      latus10();
      if (node11) {
        document.getElementById('node11').remove();
        node11 = false;
      }
    }
  } else {
    l10endpointx = -0.2 * x / 4;
    l10endpointy = -0.1 * y / 4;
    latus7scrollup();
    scene.remove(line10);
    latus10();
  }
}

function latus11scrolldown() {
  if (l7endpointx <= -0.2 * x || l7endpointy <= -0.1 * y) {
    if (l11endpointx >= 0.35 * x || l11endpointy <= -0.18 * y) {
      l11endpointx = 0.35 * x;
      l11endpointy = -0.18 * y;
      if (!node12) {
        createCircle('71.5%', '61.2%', 'red', 'node12');
        node12 = true;
      }
    } else {
      l11endpointx = l11endpointx + 0.0275 * x;
      l11endpointy = l11endpointy - 0.004 * y;
    }
    scene.remove(line11);
    latus11();
  }
}

function latus11scrollup() {
  if (l7endpointx >= -0.2 * x || l7endpointy <= -0.1 * y) {
    if (l11endpointx <= -0.2 * x || l11endpointy >= -0.1 * y) {
      l11endpointx = -0.2 * x;
      l11endpointy = -0.1 * y;
      latus7scrollup();
      scene.remove(line11);
      latus11();
    } else {
      l11endpointx = l11endpointx - 0.0275 * x / 2;
      l11endpointy = l11endpointy + 0.004 * y / 2;
      scene.remove(line11);
      latus11();
      if (node12) {
        document.getElementById('node12').remove();
        node12 = false;
      }
    }
  } else {
    l11endpointx = -0.2 * x;
    l11endpointy = -0.1 * y;
    latus7scrollup();
    scene.remove(line11);
    latus11();
  }
}

function updateDrawDown() {
  if (scroll > 190) {
    l1endpointx = -0.2 * x;
    l1endpointy = 0.6 * y;
    scene.remove(line1);
    latus1();
    if (!node2) {
      createCircle('37.5%', '13.338%', 'red', 'node2');
      node2 = true;
    }
    if (endpoint > 0.6 * y) {
      endpoint = 0.6 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 250) {
    l2endpointx = 0.25 * x;
    l2endpointy = 0.55 * y;
    scene.remove(line2);
    latus2();
    if (!node3) {
     createCircle('65.1%', '16.42%', 'red', 'node3');
      node3 = true;
    }
    if (endpoint > 0.55 * y) {
      endpoint = 0.55 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 320) {
    if (l3endpointx > 0.1 * x && l3endpointy > 0.45 * y) {
      l3endpointx = 0.1 * x;
      l3endpointy = 0.45 * y;
      scene.remove(line3);
      latus3();
      if (endpoint > 0.45 * y) {
        endpoint = 0.45 * y;
        scene.remove(line);
        update();
      }
    }
  }
  if (scroll > 370) {
    l3endpointx = -0.05 * x;
    l3endpointy = 0.35 * y;
    scene.remove(line3);
    latus3();
    if (!node4) {
      createCircle('47.2%', '28.5%', 'red', 'node4');
      node4 = true;
    }
    if (endpoint > 0.35 * y) {
      endpoint = 0.35 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 600) {
    if (l4endpointx > -0.225 * x && l4endpointy > 0.275 * y) {
      l4endpointx = -0.225 * x;
      l4endpointy = 0.275 * y;
      scene.remove(line4);
      latus4();
    }
    if (l5endpointx < 0.05 * x && l5endpointy > 0.225 * y) {
      l5endpointx = 0.05 * x;
      l5endpointy = 0.225 * y;
      scene.remove(line5);
      latus5();
    }
    if (l6endpointx < 0.125 * x && l6endpointy > 0.3 * y) {
      l6endpointx = 0.125 * x;
      l6endpointy = 0.3 * y;
      scene.remove(line6);
      latus6();
    }
    if (endpoint > 0.3 * y) {
      endpoint = 0.3 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 800) {
    l4endpointx = -0.4 * x, l4endpointy = 0.2 * y, l5endpointx = 0.15 * x, l5endpointy = 0.1 * y, l6endpointx = 0.3 * x, l6endpointy = 0.25 * y;
    scene.remove(line4);
    scene.remove(line5);
    scene.remove(line6);
    latus4();
    latus5();
    latus6();
    if (!node5) {
      createCircle('25.264%', '37.8%', 'red', 'node5');
      node5 = true;
    }
    if (!node6) {
      createCircle('58.75%', '44%', 'red', 'node6');
      node6 = true;
    }
    if (!node7) {
      createCircle('68%', '34.6%', 'red', 'node7');
      node7 = true;
    }
    if (endpoint > 0.1 * y) {
      endpoint = 0.1 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 1000) {
    if (l7endpointx > -0.025 * x && l7endpointy > 0) {
      l7endpointx = -0.025 * x, l7endpointy = 0;
      scene.remove(line7);
      latus7();
    }
    if (endpoint > 0) {
      endpoint = 0;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 1200) {
    l7endpointx = -0.2 * x, l7endpointy = -0.1 * y;
    scene.remove(line7);
    latus7();
    if (!node8) {
      createCircle('38.06%', '56%', 'red', 'node8');
      node8 = true;
    }
    if (endpoint > -0.1 * y) {
      endpoint = -0.1 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 1400) {
    if (l8endpointx > -0.35 * x && l8endpointy > -0.15 * y) {
      l8endpointx = -0.35 * x, l8endpointy = -0.15 * y;
      scene.remove(line8);
      latus8();
    }
    if (l9endpointx > -0.225 * x && l9endpointy > -0.25 * y) {
      l9endpointx = -0.225 * x, l9endpointy = -0.25 * y;
      scene.remove(line9);
      latus9();
    }
    if (l10endpointx < 0.025 * x && l10endpointy > - 0.225) {
      l10endpointx = 0.025 * x, l10endpointy = -0.225 * y;
      scene.remove(line10);
      latus10();
    }
    if (l11endpointx < 0.075 * x && l11endpointy > -0.24 * y) {
      l11endpointx = 0.075 * x, l11endpointy = -0.24 * y;
      scene.remove(line11);
      latus11();
    }
    if (endpoint > -0.25 * y) {
      endpoint = -0.25 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 1600) {
    l8endpointx = -0.5 * x, l8endpointy = -0.2 * y, l9endpointx = -0.25 * x, l9endpointy = -0.4 * y, l10endpointx = 0.25 * x, l10endpointy = -0.35 * y, l11endpointx = 0.35 * x, l11endpointy = -0.18 * y;
    scene.remove(line8);
    scene.remove(line9);
    scene.remove(line10);
    scene.remove(line11);
    latus8();
    latus9();
    latus10();
    latus11();
    if (!node9) {
      createCircle('18.56%', '62.5%', 'red', 'node9');
      node9 = true;
    }
    if (!node10) {
      createCircle('34.6%', '74%', 'red', 'node10');
      node10 = true;
    }
    if (!node11) {
      createCircle('65.3%', '71.6%', 'red', 'node11');
      node11 = true;
    }
    if (!node12) {
      createCircle('71.5%', '61.2%', 'red', 'node12');
      node12 = true;
    }
    if (endpoint > -0.4 * y) {
      endpoint = -0.6 * y;
      scene.remove(line);
      update();
    }
  }
}

function updateDrawUp() {
  if (scroll < 100) {
    if (node3) {
      document.getElementById('node3').remove();
      node3 = false;
    }
    if (node2) {
      document.getElementById('node2').remove();
      node2 = false;
    }
    l1endpointx = 0.5 * x, l1endpointy = 0.7 * y, l2endpointx = 0.25 * x, l2endpointy = 0.665 * y;
    scene.remove(line1);
    scene.remove(line2);
    latus1();
    latus2();
    if (endpoint < 0.6 * y) {
      endpoint = 0.6 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 150) {
    l3endpointx = 0.25 * x;
    l3endpointy = 0.55 * y;
    scene.remove(line3);
    latus3();
    if (endpoint < 0.55 * y) {
      endpoint = 0.55 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 225) {
    if (node4) {
      document.getElementById('node4').remove();
      node4 = false;  
    }
    if (l3endpointx < 0.1 * x && l3endpointy < 0.45 * y) {
      l3endpointx = 0.1 * x;
      l3endpointy = 0.45 * y;
      scene.remove(line3);
      latus3();
      if (endpoint < 0.45 * y) {
        endpoint = 0.45 * y;
        scene.remove(line);
        update();
      }
    }
  }
  if (scroll < 300) {
    l4endpointx = -0.05 * x, l4endpointy = 0.35 * y, l5endpointx = -0.05 * x, l5endpointy = 0.35 * y, l6endpointx = -0.05 * x, l6endpointy = 0.35 * y;
    scene.remove(line4);
    scene.remove(line5);
    scene.remove(line6);
    latus4();
    latus5();
    latus6();
    if (endpoint < 0.35 * y) {
      endpoint = 0.35 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 380) {
    if (node5) {
      document.getElementById('node5').remove();
      node5 = false;
    }
    if (node6) {
      document.getElementById('node6').remove();
      node6 = false;
    }
    if (node7) {
      document.getElementById('node7').remove();
      node7 = false;
    }
    if (l4endpointx < -0.225 * x && l4endpointy < 0.275 * y) {
      l4endpointx = -0.225 * x;
      l4endpointy = 0.275 * y;
      scene.remove(line4);
      latus4();
    }
    if (l5endpointx > 0.05 * x && l5endpointy < 0.225 * y) {
      l5endpointx = 0.05 * x;
      l5endpointy = 0.225 * y;
      scene.remove(line5);
      latus5();
    }
    if (l6endpointx > 0.125 * x && l6endpointy < 0.3 * y) {
      l6endpointx = 0.125 * x;
      l6endpointy = 0.3 * y;
      scene.remove(line6);
      latus6();
    }
    if (endpoint < 0.3 * y) {
      endpoint = 0.3 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 530) {
    l7endpointx = 0.15 * x, l7endpointy = 0.1 * y;
    scene.remove(line7);
    latus7();
    if (endpoint < 0.1 * y) {
      endpoint = 0.1 * y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 700) {
    if (node8) {
      document.getElementById('node8').remove();
      node8 = false;
    }
    if (l7endpointx < -0.025 * x && l7endpointy < 0) {
      l7endpointx = -0.025 * x;
      l7endpointy = 0;
      scene.remove(line7);
      latus7();
    }
    if (endpoint < 0) {
      endpoint = 0;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 930) {
    l8endpointx = -0.2 * x, l8endpointy = -0.1 * y, l9endpointx = -0.2 * x, l9endpointy = -0.1 * y, l10endpointx = -0.2 * x, l10endpointy = -0.1 * y, l11endpointx = -0.2 * x, l11endpointy = -0.1 * y;
    scene.remove(line8);
    scene.remove(line9);
    scene.remove(line10);
    scene.remove(line11);
    if (node9) {
      document.getElementById('node9').remove();
      node9 = false;
    }
    if (node10) {
      document.getElementById('node10').remove();
      node10 = false;
    }
    if (node11) {
      document.getElementById('node11').remove();
      node11 = false;
    }
    if (node12) {
      document.getElementById('node12').remove();
      node12 = false;
    }
    if (endpoint < -0.1 * y) {
      endpoint = -0.1 * y;
      scene.remove(line);
      update();
    }
  }
}

function scrolldown() {
  // //console.count('down');
  updateDrawDown();
  if ((l2endpointy > 0.6 * y && endpoint > 0.6 * y) || (l3endpointx < 0.25 * x && endpoint > 0.35 * y) || (l5endpointx > -0.05 * x && endpoint > 0.1 * y) || (l7endpointx < 0.15 * x && endpoint > -0.1 * y) || (l9endpointy < -0.1 * y && endpoint > -0.6 * y)) {
    endpoint = endpoint - 0.008 * y;
    //console.log(endpoint);
  }
  latus1scrolldown();
  scene.remove(line)
  update();
}

function scrollup() {
  // //console.count('up');
  updateDrawUp()
  if ((l2endpointy < 0.665 * y && endpoint < 0.665 * y) || (l3endpointy < 0.55 * y && endpoint < 0.55 * y) || (l5endpointy < 0.35 * y && endpoint < 0.35 * y) || (l7endpointy < 0.1 * y && endpoint < 0.1 * y) || (l9endpointy < -0.1 * y && endpoint < -0.1 * y) || (l1endpointx == 0.5 * x)) {
    endpoint = endpoint + 0.008 * y;
  }
  latus11scrollup();
  latus10scrollup();
  latus9scrollup();
  latus8scrollup();
  scene.remove(line)
  update();
}

window.addEventListener('resize', function () {
  // location.reload();
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, document.documentElement.scrollHeight);
});

window.addEventListener('scroll', function () {
  if (scroll < window.scrollY) {
    scroll = window.scrollY;
    scrolldown()
  } else if (scroll > window.scrollY) {
    scroll = window.scrollY;
    if (scroll == 0) {
      endpoint = 0.8 * y;
      scene.remove(line)
      update();
      l1endpointx = 0.5 * x, l1endpointy = 0.7 * y, l2endpointx = 0.25 * x, l2endpointy = 0.665 * y, l3endpointx = 0.25 * x, l3endpointy = 0.55 * y, l4endpointx = -0.05 * x, l4endpointy = 0.35 * y, l5endpointx = -0.05 * x, l5endpointy = 0.35 * y, l6endpointx = -0.05 * x, l6endpointy = 0.35 * y, l7endpointx = 0.15 * x, l7endpointy = 0.1 * y, l8endpointx = -0.2 * x, l8endpointy = -0.1 * y, l9endpointx = -0.2 * x, l9endpointy = -0.1 * y, l10endpointx = -0.2 * x, l10endpointy = -0.1 * y, l11endpointx = -0.2 * x, l11endpointy = -0.1 * y;
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
      latus1();
      latus2();
      latus3();
      latus4();
      latus5();
      latus6();
      latus7();
      latus8();
      latus9();
      latus10();
      latus11();
    } else {
      scrollup()
    }
  }
});

function initialNode() {
  if (node1) {
    document.getElementById('node1').remove();
    node1 = false;
  }
  if (node2) {
    document.getElementById('node2').remove();
    node2 = false;
  }
  if (node3) {
    document.getElementById('node3').remove();
    node3 = false;
  }
  if (node4) {
    document.getElementById('node4').remove();
    node4 = false;
  }
  if (node5) {
    document.getElementById('node5').remove();
    node5 = false;
  }
  if (node6) {
    document.getElementById('node6').remove();
    node6 = false;
  }
  if (node7) {
    document.getElementById('node7').remove();
    node7 = false;
  }
  if (node8) {
    document.getElementById('node8').remove();
    node8 = false;
  }
  if (node9) {
    document.getElementById('node9').remove();
    node9 = false;
  }
  if (node10) {
    document.getElementById('node10').remove();
    node10 = false;
  }
  if (node11) {
    document.getElementById('node11').remove();
    node11 = false;
  }
  if (node12) {
    document.getElementById('node12').remove();
    node12 = false;
  }
}

// imageBlaze();
let animate = function () {
  if (scroll == 0) {
    initialNode();
  }
  //console.log(scroll, "initial scroll", endpoint);
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();



// var light = new THREE.DirectionalLight(0xffffff, 5);
// light.position.setScalar(10);
// scene.add(light);



// var planeGeometry = new THREE.PlaneGeometry(1000, 300, 30, 10);
// var texture = new THREE.TextureLoader().load('https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg');
// texture.minFilter = THREE.LinearFilter;
// var planeMaterial = new THREE.MeshLambertMaterial({ map: texture });
// //var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
// var plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.receiveShadow = true;

// plane.position.x = x / 2;
// plane.position.y = 0.7 * y;





// var planeGeometry1 = new THREE.PlaneGeometry(50, 30, 30, 10);
// var texture1 = new THREE.TextureLoader().load('https://blazeprotocol.io/wp-content/themes/blaze-new/images/favicon.png');
// texture1.minFilter = THREE.LinearFilter;
// var planeMaterial1 = new THREE.MeshLambertMaterial({ map: texture1 });
// var plane1 = new THREE.Mesh(planeGeometry, planeMaterial);
// plane1.receiveShadow = true;

// plane1.position.x = -x / 2;
// plane1.position.y = 0.7 * y;
// scene.add(plane1);
// scene.add(plane)



// function animate() {
//   requestAnimationFrame( animate );
//     renderer.render( scene, camera );
//   }
//   animate();



//var InitDemo = function(){

//   var canvas = document.getElementById('canvasID');
//   var gl = canvas.getContext('webgl');

//   //define geomtry
//   var vertices = [];
//   var origin = [0,0];
//   vertices.push( origin[0], origin[1] );  

//   for(var i = 0; i <= 360; i+=1){
//       var j = i*Math.PI/180;
//       var vert = [Math.sin(j),Math.cos(j)];
//       vertices.push( vert[0], vert[1] );    
//   }
  
//   //console.log('the vertices are: '+vertices);
//   var vertBuffer = gl.createBuffer();
//   gl.bindBuffer(gl.ARRAY_BUFFER, vertBuffer);
//   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
//   //shaders
//   var vertSrc = 'attribute vec2 coordinates;'+
//         'void main(){' +
//         '	gl_Position = vec4(coordinates,0.0,1.0);'+
//         '}';
//   var vertShader = gl.createShader(gl.VERTEX_SHADER);
//   gl.shaderSource(vertShader, vertSrc);
//   gl.compileShader(vertShader);
//   if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
//     //console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertShader));
//     return;
//   }

//   var fragSrc = 'void main(){'+
//           '	gl_FragColor = vec4(1.0,0.0,1.0,1.0);'+
//           '}';
//   var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
//   gl.shaderSource(fragShader, fragSrc);
//   gl.compileShader(fragShader);
//   if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
//     //console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragShader));
//     return;
//   }

//   var shaderProg = gl.createProgram();
//   gl.attachShader(shaderProg, vertShader);
//   gl.attachShader(shaderProg, fragShader);
//   gl.linkProgram(shaderProg);
//   gl.useProgram(shaderProg);
  
//   if (!gl.getProgramParameter(shaderProg, gl.LINK_STATUS)) {
//     //console.error('ERROR linking program!', gl.getProgramInfoLog(shaderProg));
//     return;
//   }
//   gl.validateProgram(shaderProg);
//   if (!gl.getProgramParameter(shaderProg, gl.VALIDATE_STATUS)) {
//     //console.error('ERROR validating program!', gl.getProgramInfoLog(shaderProg));
//     return;
//   }

//   //associate shader and buffer

//   var coord = gl.getAttribLocation(shaderProg, 'coordinates');
//   gl.vertexAttribPointer(coord, 2, gl.FLOAT, gl.FALSE, 2*Float32Array.BYTES_PER_ELEMENT, 0);
//   gl.enableVertexAttribArray(coord);
//   //Draw
//   gl.clearColor(0.0, 0.0, 0.2, 1.0);
//   gl.clear(gl.COLOR_BUFFER_BIT);
//   gl.drawArrays(gl.TRIANGLE_FAN, 0, vertices.length/2);    
// }

// InitDemo();

// ctx.beginPath();
// ctx.arc(20, 500,4,0,2*Math.PI);
// ctx.stroke();

// function imageBlaze() {
//   // var loader = new THREE.TextureLoader();
//   // var material = new THREE.MeshLambertMaterial({
//   //   map: loader.load('https://blazeprotocol.io/wp-content/themes/blaze-new/images/logo-white.png')
//   // });
//   // var geometry = new THREE.PlaneGeometry(200, 125);
//   // var mesh = new THREE.Mesh(geometry, material);
//   // mesh.position.set(-0.1*x, 0.75*y, 0)
//   // scene.add(mesh);
//   // var light = new THREE.PointLight( 0xffffff, 1, 0 );
//   // light.position.set(1, 1, 100 );

//   var planeGeometry = new THREE.PlaneGeometry(200, 80);
//   // var texture = new THREE.TextureLoader().load('https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg');
//   // var texture = new THREE.TextureLoader().load('https://png2.kisspng.com/sh/7f33fa9d05a29608ab0919e1bf43c2fc/L0KzQYm3VMI3N6dtfZH0aYP2gLBuTfJidJ0yitdtLXTog7z7jCAuf5JxhOJqcHX1PbTzigAuaaN5RadqZUG4coboVvY4PmE9Rqg5MkC2Q4O8UcUzPGg2UKY7NkS4Roe1kP5o/kisspng-ball-red-desktop-wallpaper-clip-art-5ae15b5a6f7608.6020332515247184264566.png');
//   let texture = new THREE.TextureLoader().load('https://blazeprotocol.io/wp-content/themes/blaze-new/images/logo-white.png');
//   texture.needsUpdate = true;
//   texture.minFilter = THREE.LinearFilter;
//   texture.flipY = true;
//   // tex.generateMipmaps = false;
//   var planeMaterial = new THREE.MeshLambertMaterial({ map: texture });
//   //var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
//   var plane = new THREE.Mesh(planeGeometry, planeMaterial);
//   plane.receiveShadow = true;
//   plane.position.set(-0.1 * x, 0.75 * y, 0);
//   scene.add(plane)
// }

// function image() {
//   var planeGeometry = new THREE.PlaneGeometry(50, 20, 30, 10);
//   var texture = new THREE.TextureLoader().load('https://png2.kisspng.com/sh/7f33fa9d05a29608ab0919e1bf43c2fc/L0KzQYm3VMI3N6dtfZH0aYP2gLBuTfJidJ0yitdtLXTog7z7jCAuf5JxhOJqcHX1PbTzigAuaaN5RadqZUG4coboVvY4PmE9Rqg5MkC2Q4O8UcUzPGg2UKY7NkS4Roe1kP5o/kisspng-ball-red-desktop-wallpaper-clip-art-5ae15b5a6f7608.6020332515247184264566.png');
//   texture.minFilter = THREE.LinearFilter;
//   var planeMaterial = new THREE.MeshLambertMaterial({ map: texture });
//   var plane = new THREE.Mesh(planeGeometry, planeMaterial);
//   plane.receiveShadow = true;
//   plane.position.set(0.25*x, 0.665*y, 1);
//   var light = new THREE.PointLight(0xffffff, 1, 0);
//   light.position.set(0.25 * x, 0.665 * y, 100);
//   scene.add(light)
//   scene.add(plane)
// }
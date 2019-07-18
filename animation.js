var endpoint = 750;
var scroll = window.scrollY;  
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 90, document.documentElement.scrollWidth/document.documentElement.scrollHeight, 0.1, 1000 );
camera.position.z = 800;
var l1endpointx = 0.5*x, l1endpointy = 0.7*y;;
var l2endpointx = 0.25*x, l2endpointy = 0.665*y;
var l3endpointx = 0.25*x, l3endpointy = 0.55*y;
var l4endpointx = -0.05*x, l4endpointy = 0.35*y;
var l5endpointx = -0.05*x, l5endpointy = 0.35*y;
var l6endpointx = -0.05*x, l6endpointy = 0.35*y;
var l7endpointx = 0.15*x, l7endpointy = 0.1*y;
var l8endpointx = -0.2*x, l8endpointy = -0.1*y;
var l9endpointx = -0.2*x, l9endpointy = -0.1*y;
var l10endpointx = -0.2*x, l10endpointy = -0.1*y;
var l11endpointx = -0.2*x, l11endpointy = -0.1*y;
var renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(window.innerWidth, document.documentElement.scrollHeight);
document.getElementById("myScene").appendChild( renderer.domElement );

function imageBlaze() {
  THREE.ImageUtils.crossOrigin = '';
  image = new THREE.TextureLoader();
  material = new THREE.MeshLambertMaterial({
    map: image.load('https://blazeprotocol.io/wp-content/themes/blaze-new/images/logo-white.png')
  });
  geometry = new THREE.PlaneGeometry(262, 80);
  blazeIcon = new THREE.Mesh(geometry, material);
  blazeIcon.position.set(0.025*x, 0.7*y);
  console.log(blazeIcon);
  scene.add(blazeIcon);
}

imageBlaze();

function update() {
  console.log(scene, "palagus");
  geometry = new THREE.Geometry();
  console.log(endpoint , "endpoint", scroll);
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 10 });
  geometry.vertices.push(new THREE.Vector3(500, 800, 0)); //x, y, z//500
  geometry.vertices.push(new THREE.Vector3(500, endpoint, 0));
  line = new THREE.Line(geometry, material);
  line.geometry.verticesNeedUpdate = true;
  scene.add(line);
}

console.log(window.scrollY);

update();

function latus1() {
  console.log(scene, "latus1");
  console.log('latus1', l1endpointx, l1endpointy);
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(0.5*x, 0.7*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l1endpointx, l1endpointy, 0));
  line1 = new THREE.Line(geometry, material);
  line1.geometry.verticesNeedUpdate = true;
  scene.add(line1);
}

latus1();

function latus2() {
  console.log(scene, "latus2");
  console.log('latus2', l2endpointx, l2endpointy);
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(0.25*x, 0.665*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l2endpointx, l2endpointy, 0));
  line2 = new THREE.Line(geometry, material);
  line2.geometry.verticesNeedUpdate = true;
  scene.add(line2);
}

 latus2();

 function latus3() {
  console.log(scene, "latus3");
  console.log('latus3', l3endpointx, l3endpointy);
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(0.25*x, 0.55*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l3endpointx, l3endpointy, 0));
  line3 = new THREE.Line(geometry, material);
  line3.geometry.verticesNeedUpdate = true;
  scene.add(line3);
}

latus3();

function latus4() {
  console.log(scene, "latus4");
  console.log('latus4', l4endpointx, l4endpointy);
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.05*x, 0.35*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l4endpointx, l4endpointy, 0));
  line4 = new THREE.Line(geometry, material);
  line4.geometry.verticesNeedUpdate = true;
  scene.add(line4);
}

latus4();

function latus5() {
  console.log(scene, "latus5");
  console.log('latus5', l5endpointx, l5endpointy);
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.05*x, 0.35*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l5endpointx, l5endpointy, 0));
  line5 = new THREE.Line(geometry, material);
  line5.geometry.verticesNeedUpdate = true;
  scene.add(line5);
}

latus5();

function latus6() {
  console.log(scene, "latus6");
  console.log('latus6', l6endpointx, l6endpointy);
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.05*x, 0.35*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l6endpointx, l6endpointy, 0));
  line6 = new THREE.Line(geometry, material);
  line6.geometry.verticesNeedUpdate = true;
  scene.add(line6);
}

latus6();

function latus7() {
  console.log(scene, "latus7");
  console.log('latus7', l7endpointx, l7endpointy);
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(0.15*x, 0.1*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l7endpointx, l7endpointy, 0));
  line7 = new THREE.Line(geometry, material);
  line7.geometry.verticesNeedUpdate = true;
  scene.add(line7);
}

latus7();

function latus8() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.2*x, -0.1*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l8endpointx, l8endpointy, 0));
  line8 = new THREE.Line(geometry, material);
  line8.geometry.verticesNeedUpdate = true;
  scene.add(line8);
}

latus8();

function latus9() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.2*x, -0.1*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l9endpointx, l9endpointy, 0));
  line9 = new THREE.Line(geometry, material);
  line9.geometry.verticesNeedUpdate = true;
  scene.add(line9);
}

latus9();

function latus10() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.2*x, -0.1*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l10endpointx, l10endpointy, 0));
  line10 = new THREE.Line(geometry, material);
  line10.geometry.verticesNeedUpdate = true;
  scene.add(line10);
}

latus10();

function latus11() {
  geometry = new THREE.Geometry();
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 4 });
  geometry.vertices.push(new THREE.Vector3(-0.2*x, -0.1*y, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l11endpointx, l11endpointy, 0));
  line11 = new THREE.Line(geometry, material);
  line11.geometry.verticesNeedUpdate = true;
  scene.add(line11);
}

latus11();

function latus1scrolldown() {
  if (endpoint <= 0.7*y) { 
    if (l1endpointx <= -0.2*x || l1endpointy <= 0.6*y) {
      l1endpointx = -0.2*x;
      l1endpointy = 0.6*y;
      console.log(scroll, "LATUS 1 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7");
    } else {
      l1endpointx = l1endpointx - 10;
      l1endpointy = l1endpointy - 10;
    }
    latus2scrolldown();
    scene.remove(line1);
    latus1();
  }
 }

 function latus1scrollup() {
  if (l1endpointx >= 500 || l1endpointy >= 500) {
    l1endpointx = 500;
    l1endpointy = 500;
  } else {
    l1endpointx = l1endpointx + 0.098*x/8;
    l1endpointy = l1endpointy + 0.014*y/8;
  }
  scene.remove(line1);
  latus1();
 }

 function latus2scrolldown() {
  if (l1endpointy <= 400) {
    if (l2endpointy <= 200) {
      l2endpointy = 200;  
    } else {
      l2endpointy = l2endpointy - 10;
    }
    latus3scrolldown();
    scene.remove(line2);
    latus2();
  }
 }

 function latus2scrollup() {
  if (l2endpointy >= 400) {
    l2endpointy = 400;
    latus1scrollup();
    scene.remove(line2);
    latus2();  
  } else {
    l2endpointy = l2endpointy + 0.0075*y/4;
    scene.remove(line2);
    latus2();
  }
 }

 function latus3scrolldown() {
  if (l2endpointy <= 200) {
    if (l3endpointx <= 200 || l3endpointy <= -100) {
      l3endpointx = 200;
      l3endpointy = -100;  
    } else {
      l3endpointx = l3endpointx - 10;
      l3endpointy = l3endpointy - 15;
    }
    latus4scrolldown();
    latus5scrolldown();
    latus6scrolldown();
    scene.remove(line3);
    latus3();
  }
 }

function latus3scrollup() {
  if (l3endpointx <= 0.25*x || l3endpointy <= 0.55*y) {
    // console.log(l4endpointx, l5endpointx, l6endpointx, l4endpointy, l5endpointy, l6endpointy)
    if ((l4endpointx == -0.05*x) && (l4endpointy == 0.35*y) && (l5endpointx == -0.05*x) && (l5endpointy == 0.35*y) && (l6endpointx == -0.05*x) && (l6endpointy == 0.35*y) ) {
      if (l3endpointx >= 0.25*x || l3endpointy >= 0.55*y) {
        l3endpointx = 0.25*x;
        l3endpointy = 0.55*y;
        latus2scrollup();
        scene.remove(line3);
        latus3();  
      } else {
        l3endpointx = l3endpointx + 0.006*x/4;
        l3endpointy = l3endpointy + 0.004*y/4;
        scene.remove(line3);
        latus3();
      }
    }
  } else {
    l3endpointx = l3endpointx + 10;
    l3endpointy = l3endpointy + 15
    scene.remove(line3);
    latus3();
  }
 }

 function latus4scrolldown() {
  if (l3endpointx <= 200 || l3endpointy <= -100) {
    if (l4endpointx <= -400 || l4endpointy <= -300) {
      l4endpointx = -400;
      l4endpointy = -300;  
    } else {
      l4endpointx = l4endpointx - 30;
      l4endpointy = l4endpointy - 10;
    }
    scene.remove(line4);
    latus4();
  }
}

function latus4scrollup() {
  if (l4endpointx <= -0.05*x || l4endpointy <= 0.35*y) {
    // if ((l8endpointx == -0.2*x) && (l8endpointy == -0.1*y) && (l9endpointx == -0.2*x) && (l9endpointy == -0.1*y) && (l10endpointx == -0.2*x) && (l10endpointy == -0.1*y) && (l11endpointx == -0.2*x) && (l11endpointy == -0.1*y) ) {
      if (l4endpointx >= -0.05*x || l4endpointy >= 0.35*y) {
        l4endpointx = -0.05*x;
        l4endpointy = 0.35*y;
        scene.remove(line4);
        latus3scrollup();
        latus4();  
      } else {
        l4endpointx = l4endpointx + 0.007*x/4;
        l4endpointy = l4endpointy + 0.003*y/4;
        scene.remove(line4);
        latus4();
      }
    // }
  } else {
    l4endpointx = -0.05*x;
    l4endpointy = 0.35*y;
    scene.remove(line4);
    latus3scrollup();
    latus4();  
  }
}

 function latus5scrolldown() {
  if (l3endpointx <= 200 || l3endpointy <= -100) {
    if (l5endpointx <= -100 || l5endpointy <= -400) {
      l5endpointx = -100;
      l5endpointy = -400;  
    } else {
      l5endpointx = l5endpointx - 10;
      l5endpointy = l5endpointy - 10;
    }
    latus7scrolldown();
    scene.remove(line5);
    latus5();
  }
}

function latus5scrollup() {
  if (l5endpointx >= -0.05*x || l5endpointy <= 0.35*y) {
    // if ((l8endpointx == -0.2*x) && (l8endpointy == -0.1*y) && (l9endpointx == -0.2*x) && (l9endpointy == -0.1*y) && (l10endpointx == -0.2*x) && (l10endpointy == -0.1*y) && (l11endpointx == -0.2*x) && (l11endpointy == -0.1*y) ) {
      if (l5endpointx <= -0.05*x || l5endpointy >= 0.35*y) {
        l5endpointx = -0.05*x;
        l5endpointy = 0.35*y;
        scene.remove(line5);
        latus3scrollup();
        latus5();  
      } else {
        l5endpointx = l5endpointx - 0.004*x/4;
        l5endpointy = l5endpointy + 0.005*y/4;
        scene.remove(line5);
        latus5();
      }
    // }
  } else {
    l5endpointx = -0.05*x;
    l5endpointy = 0.35*y;
    scene.remove(line5);
    latus5();  
    latus3scrollup();
  }
}

 function latus6scrolldown() {
  if (l3endpointx <= 200 || l3endpointy <= -100) {
    if (l6endpointx <= 300 || l6endpointy <= -300) {
      l6endpointx = 300;
      l6endpointy = -300;  
    } else {
      l6endpointx = l6endpointx + 5;
      l6endpointy = l6endpointy - 10;
    }
    scene.remove(line6);
    latus6();
  }
 }

function latus6scrollup() {
  if (l6endpointx <= -0.05*x || l6endpointy >= 0.35*y) {
    l6endpointx = -0.05*x;
    l6endpointy = 0.35*y;
    scene.remove(line6);
    latus3scrollup();
    latus6();  
  } else {
    l6endpointx = l6endpointx - 0.0035*1.5*x/4;
    l6endpointy = l6endpointy + 0.001*1.5*y/4;
    scene.remove(line6);
    latus6();
  }
} 

function latus7scrolldown() {
  if (l5endpointx <= 0.15*x || l5endpointy <= 0.1*y) {
    if (l7endpointx <= -0.2*x || l7endpointy <= -0.1*y) {
      console.log(scroll, "L7 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      l7endpointx = -0.2*x;
      l7endpointy = -0.1*y;  
      latus8scrolldown();
      latus9scrolldown();
      latus10scrolldown();
      latus11scrolldown();
    } else {
      l7endpointx = l7endpointx - 10;
      l7endpointy = l7endpointy - 30;
    }
    scene.remove(line7);
    latus7();
  }
 }

function latus7scrollup() {
  if (l7endpointx <= 0.15*x || l7endpointy <= 0.1*y) {
    if ((l8endpointx == -0.2*x) && (l8endpointy == -0.1*y) && (l9endpointx == -0.2*x) && (l9endpointy == -0.1*y) && (l10endpointx == -0.2*x) && (l10endpointy == -0.1*y) && (l11endpointx == -0.2*x) && (l11endpointy == -0.1*y) ) {
      if (l7endpointx >= 0.15*x || l7endpointy >= 0.1*y) {
        l7endpointx = 0.15*x;
        l7endpointy = 0.1*y;
        latus4scrollup();
        latus5scrollup();
        latus6scrollup();
        scene.remove(line7);
        latus7();  
      } else {
        l7endpointx = l7endpointx + 0.007*x/4;
        l7endpointy = l7endpointy + 0.004*y/4;
        scene.remove(line7);
        latus7();
      }
    }
  } else {
    l7endpointx = 0.15*x;
    l7endpointy = 0.1*y;
    latus4scrollup();
    latus5scrollup();
    latus6scrollup();
    scene.remove(line7);
    latus7();  
  }
} 

function latus8scrolldown() {
  if (l7endpointx <= -0.2*x || l7endpointy <= -0.1*y) {
    if (l8endpointx <= -0.5*x || l8endpointy <= -0.2*y) {
      l8endpointx = -0.5*x;
      l8endpointy = -0.2*y;  
    } else {
      l8endpointx = l8endpointx - 0.012*x;
      l8endpointy = l8endpointy - 0.004*y;
    }
    scene.remove(line8);
    latus8();
  }
}

function latus8scrollup() {
  if (l7endpointx >= -0.2*x || l7endpointy <= -0.1*y) {
    if (l8endpointx >= -0.2*x || l8endpointy >= -0.1*y) {
      l8endpointx = -0.2*x;
      l8endpointy = -0.1*y;
      latus7scrollup();
      scene.remove(line9);
      latus9();  
    } else {
      l8endpointx = l8endpointx + 0.012*x/2;
      l8endpointy = l8endpointy + 0.004*y/2;
      scene.remove(line8);
      latus8();
    }    
  } else {
    l8endpointx = -0.2*x;
    l8endpointy = -0.1*y;
    latus7scrollup();
    scene.remove(line9);
    latus9();  
  }
} 

function latus9scrolldown() {
  if (l7endpointx <= -0.2*x || l7endpointy <= -0.1*y) {
    if (l9endpointx <= -0.25*x || l9endpointy <= -0.4*y) {
      console.log(scroll, "L9 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      l9endpointx = -0.25*x;
      l9endpointy = -0.4*y;  
    } else {
      l9endpointx = l9endpointx - 0.002*x;
      l9endpointy = l9endpointy - 0.012*y;
    }
    scene.remove(line9);
    latus9();
  }
}

function latus9scrollup() {
  if (l7endpointx >= -0.2*x || l7endpointy <= -0.1*y) {
    if (l9endpointx >= -0.2*x || l9endpointy >= -0.1*y) {
      l9endpointx = -0.2*x;
      l9endpointy = -0.1*y;
      latus7scrollup();
      scene.remove(line9);
      latus9();  
    } else {
      l9endpointx = l9endpointx + 0.002*x;
      l9endpointy = l9endpointy + 0.012*y;
      scene.remove(line9);
      latus9();
    }    
  } else {
    l9endpointx = -0.2*x/4;
    l9endpointy = -0.1*y/4;
    latus7scrollup();
    scene.remove(line9);
    latus9();  
  }
} 

function latus10scrolldown() {
  if (l7endpointx <= -0.2*x || l7endpointy <= -0.1*y) {
    if (l10endpointx >= 0.25*x || l10endpointy <= -0.35*y) {
      l10endpointx = 0.25*x;
      l10endpointy = -0.35*y;  
    } else {
      l10endpointx = l10endpointx + 0.009*x;
      l10endpointy = l10endpointy - 0.005*y;
    }
    scene.remove(line10);
    latus10();
  }
}

function latus10scrollup() {
  if (l7endpointx >= -0.2*x || l7endpointy <= -0.1*y) {
    if (l10endpointx <= -0.2*x || l10endpointy >= -0.1*y) {
      l10endpointx = -0.2*x;
      l10endpointy = -0.1*y;
      latus7scrollup();
      scene.remove(line10);
      latus10();  
    } else {
      l10endpointx = l10endpointx - 0.009*x;
      l10endpointy = l10endpointy + 0.005*y;
      scene.remove(line10);
      latus10();
    }    
  } else {
    l10endpointx = -0.2*x/4;
    l10endpointy = -0.1*y/4;
    latus7scrollup();
    scene.remove(line10);
    latus10();  
  }
} 

function latus11scrolldown() {
  if (l7endpointx <= -0.2*x || l7endpointy <= -0.1*y) {
    if (l11endpointx >= 0.35*x || l11endpointy <= -0.18*y) {
      l11endpointx = 0.35*x;
      l11endpointy = -0.18*y;  
    } else {
      l11endpointx = l11endpointx + 0.0275*x;
      l11endpointy = l11endpointy - 0.004*y;
    }
    scene.remove(line11);
    latus11();
  }
}

function latus11scrollup() {
  if (l7endpointx >= -0.2*x || l7endpointy <= -0.1*y) {
    if (l11endpointx <= -0.2*x || l11endpointy >= -0.1*y) {
      l11endpointx = -0.2*x;
      l11endpointy = -0.1*y;
      latus7scrollup();
      scene.remove(line11);
      latus11();  
    } else {
      l11endpointx = l11endpointx - 0.0275*x/2;
      l11endpointy = l11endpointy + 0.004*y/2;
      scene.remove(line11);
      latus11();
    }    
  } else {
    l11endpointx = -0.2*x;
    l11endpointy = -0.1*y;
    latus7scrollup();
    scene.remove(line11);
    latus11(); 
  }
} 

function updateDrawDown() {
  if (scroll > 190) {
    l1endpointx = -0.2*x;
    l1endpointy = 0.6*y;
    scene.remove(line1);
    latus1();
    if (endpoint > 0.6*y) {
      endpoint = 0.6*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 250) {
    l2endpointx = 0.25*x;
    l2endpointy = 0.55*y;
    scene.remove(line2);
    latus2();
    if (endpoint > 0.55*y) {
      endpoint = 0.55*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 320) {
    if (l3endpointx > 0.1*x && l3endpointy >  0.45*y) {
      l3endpointx = 0.1*x;
      l3endpointy = 0.45*y;
      scene.remove(line3);
      latus3();
      if (endpoint > 0.45*y) {
        endpoint = 0.45*y;
        scene.remove(line);
        update();
      }
    }
  }
  if (scroll > 370) {
    l3endpointx = -0.05*x;
    l3endpointy = 0.35*y;
    scene.remove(line3);
    latus3();
    if (endpoint > 0.35*y) {
      endpoint = 0.35*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 600) {
    if (l4endpointx > -0.225*x && l4endpointy > 0.275*y) {
      l4endpointx = -0.225*x;
      l4endpointy = 0.275*y;
      scene.remove(line4);
      latus4();
    }
    if (l5endpointx < 0.05*x && l5endpointy > 0.225*y) {
      l5endpointx = 0.05*x;
      l5endpointy = 0.225*y;
      scene.remove(line5);
      latus5();
    }
    if (l6endpointx < 0.125*x && l6endpointy > 0.3*y) {
      l6endpointx = 0.125*x;
      l6endpointy = 0.3*y;
      scene.remove(line6);
      latus6();
    }
    if (endpoint > 0.3*y) {
      endpoint = 0.3*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 800) {
    l4endpointx = -0.4*x, l4endpointy = 0.2*y, l5endpointx = 0.15*x, l5endpointy = 0.1*y, l6endpointx = 0.3*x, l6endpointy = 0.25*y;
    scene.remove(line4);
    scene.remove(line5);
    scene.remove(line6);
    latus4();
    latus5();
    latus6();
    if (endpoint > 0.1*y) {
      endpoint = 0.1*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 1000) {
    if (l7endpointx > -0.025*x && l7endpointy > 0) {
      l7endpointx = -0.025*x, l7endpointy = 0;
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
    l7endpointx = -0.2*x, l7endpointy = -0.1*y;
    scene.remove(line7);
    latus7();
    if (endpoint > -0.1*y) {
      endpoint = -0.1*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 1400) {
    if (l8endpointx > -0.35*x && l8endpointy > -0.15*y) {
      l8endpointx = -0.35*x, l8endpointy = -0.15*y;
      scene.remove(line8);
      latus8();
    }
    if (l9endpointx > -0.225*x && l9endpointy > -0.25*y) {
      l9endpointx = -0.225*x, l9endpointy = -0.25*y;
      scene.remove(line9);
      latus9();
    }
    if (l10endpointx < 0.025*x && l10endpointy > - 0.225) {
      l10endpointx = 0.025*x, l10endpointy = -0.225*y;
      scene.remove(line10);
      latus10();  
    }
    if (l11endpointx < 0.075*x && l11endpointy > -0.24*y) {
      l11endpointx = 0.075*x, l11endpointy = -0.24*y;
      scene.remove(line11);
      latus11();
    }
    if (endpoint > -0.25*y) {
      endpoint = -0.25*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll > 1600) {
    l8endpointx = -0.5*x, l8endpointy = -0.2*y, l9endpointx = -0.25*x, l9endpointy = -0.4*y, l10endpointx = 0.25*x, l10endpointy = -0.35*y, l11endpointx = 0.35*x, l11endpointy = -0.18*y;
    scene.remove(line8);
    scene.remove(line9);
    scene.remove(line10);
    scene.remove(line11);
    latus8();
    latus9();
    latus10();
    latus11();
    if (endpoint > -0.4*y) {
      endpoint = -0.6*y;
      scene.remove(line);
      update();
    }
  }
}

function updateDrawUp() {
  if (scroll < 100) {
    l1endpointx = 0.5*x, l1endpointy = 0.7*y, l2endpointx = 0.25*x, l2endpointy = 0.665*y;
    scene.remove(line1);
    scene.remove(line2);
    latus1();
    latus2();
    if (endpoint < 0.6*y) {
      endpoint = 0.6*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 150) {
    l3endpointx = 0.25*x;
    l3endpointy = 0.55*y;
    scene.remove(line3);
    latus3();
    if (endpoint < 0.55*y) {
      endpoint = 0.55*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 225) {
    if (l3endpointx < 0.1*x && l3endpointy <  0.45*y) {
      l3endpointx = 0.1*x;
      l3endpointy = 0.45*y;
      scene.remove(line3);
      latus3();
      if (endpoint < 0.45*y) {
        endpoint = 0.45*y;
        scene.remove(line);
        update();
      }
    }
  }
  if (scroll < 300) {
    l4endpointx = -0.05*x, l4endpointy = 0.35*y, l5endpointx = -0.05*x, l5endpointy = 0.35*y, l6endpointx = -0.05*x, l6endpointy = 0.35*y;
    scene.remove(line4);
    scene.remove(line5);
    scene.remove(line6);
    latus4();
    latus5();
    latus6();
    if (endpoint < 0.35*y) {
      endpoint = 0.35*y;
      scene.remove(line);
      update();
    } 
  }
  if (scroll < 380) {
    if (l4endpointx < -0.225*x && l4endpointy < 0.275*y) {
      l4endpointx = -0.225*x;
      l4endpointy = 0.275*y;
      scene.remove(line4);
      latus4();
    }
    if (l5endpointx > 0.05*x && l5endpointy < 0.225*y) {
      l5endpointx = 0.05*x;
      l5endpointy = 0.225*y;
      scene.remove(line5);
      latus5();
    }
    if (l6endpointx > 0.125*x && l6endpointy < 0.3*y) {
      l6endpointx = 0.125*x;
      l6endpointy = 0.3*y;
      scene.remove(line6);
      latus6();
    }
    if (endpoint < 0.3*y) {
      endpoint = 0.3*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 530) {
    l7endpointx = 0.15*x, l7endpointy = 0.1*y;
    scene.remove(line7);
    latus7();
    if (endpoint < 0.1*y) {
      endpoint = 0.1*y;
      scene.remove(line);
      update();
    }
  }
  if (scroll < 700) {
    if (l7endpointx < -0.025*x && l7endpointy < 0) {
      l7endpointx = -0.025*x;
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
    l8endpointx = -0.2*x, l8endpointy = -0.1*y, l9endpointx = -0.2*x, l9endpointy = -0.1*y, l10endpointx = -0.2*x, l10endpointy = -0.1*y, l11endpointx = -0.2*x, l11endpointy = -0.1*y;
    scene.remove(line8);
    scene.remove(line9);
    scene.remove(line10);
    scene.remove(line11);
    if (endpoint < -0.1*y) {
      endpoint = -0.1*y;
      scene.remove(line);
      update();
    } 
  }
}

function scrolldown() {
  // console.count('down');
  updateDrawDown();
  if ((l2endpointy > 0.6*y && endpoint > 0.6*y) || (l3endpointx < 0.25*x && endpoint > 0.35*y) || (l5endpointx > -0.05*x && endpoint > 0.1*y) ||(l7endpointx < 0.15*x && endpoint > -0.1*y) || (l9endpointy < -0.1*y && endpoint > -0.6*y)) {
    endpoint = endpoint - 0.008*y;
    console.log(endpoint);
  } 
  latus1scrolldown();
  console.log(endpoint);
  scene.remove(line)
  update();
}

function scrollup() {
  endpoint = endpoint + scroll/10;
  latus3scrollup();
  scene.remove(line)
  update();
}

window.addEventListener('scroll', function() {
  if (scroll < window.scrollY) {
    scroll = window.scrollY;
    scrolldown()
  } else if (scroll > window.scrollY) {
    scroll = window.scrollY;
    if (scroll == 0) {
      endpoint = 750;
      scene.remove(line)
      update();
    } else {
      scrollup()
    }
  }
});

var animate = function() {
  requestAnimationFrame( animate );
	renderer.render(scene, camera);
};

animate();











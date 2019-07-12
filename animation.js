var endpoint = 750;
var scroll = window.scrollY;  
console.log(scroll, "initial scroll");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 90, document.documentElement.scrollWidth/document.documentElement.scrollHeight, 0.1, 1000 );
camera.position.z = 800;
var l1endpointx = 500, l1endpointy = 500;;
var l2endpointx = 400, l2endpointy = 400;
var l3endpointx = 400, l3endpointy = 200;
var l4endpointx = 200, l4endpointy = -100;
var l5endpointx = 200, l5endpointy = -100;
var l6endpointx = 200, l6endpointy = -100;
var l7endpointx = -100, l7endpointy = -400;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(document.documentElement.scrollWidth, document.documentElement.scrollHeight);
document.body.appendChild( renderer.domElement );

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
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 1 });
  geometry.vertices.push(new THREE.Vector3(500, 500, 0)); //x, y, z
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
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 1 });
  geometry.vertices.push(new THREE.Vector3(400, 400, 0)); //x, y, z
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
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 1 });
  geometry.vertices.push(new THREE.Vector3(400, 200, 0)); //x, y, z
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
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 1 });
  geometry.vertices.push(new THREE.Vector3(200, -100, 0)); //x, y, z
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
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 1 });
  geometry.vertices.push(new THREE.Vector3(200, -100, 0)); //x, y, z
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
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 1 });
  geometry.vertices.push(new THREE.Vector3(200, -100, 0)); //x, y, z
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
  material = new THREE.LineBasicMaterial({ color: '#ff0000', linewidth: 1 });
  geometry.vertices.push(new THREE.Vector3(-100, -400, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(l7endpointx, l7endpointy, 0));
  line7 = new THREE.Line(geometry, material);
  line7.geometry.verticesNeedUpdate = true;
  scene.add(line7);
}

latus7();

 function latus1scrolldown() {
  if (endpoint <= 500) { 
    if (l1endpointx <= 300 || l1endpointy <= 300) {
      l1endpointx = 300;
      l1endpointy = 300;
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
    l1endpointx = l1endpointx + 10;
    l1endpointy = l1endpointy + 10;
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
    l2endpointy = l2endpointy + 10;
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
  if (l3endpointx >= 400 || l3endpointy >= 200) {
    l3endpointx = 400;
    l3endpointy = 200;
    latus2scrollup();
    scene.remove(line3);
    latus3();  
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

 function latus7scrolldown() {
  if (l5endpointx <= -100 || l5endpointy <= -400) {
    if (l7endpointx <= -200 || l7endpointy <= -700) {
      l7endpointx = -200;
      l7endpointy = -700;  
    } else {
      l7endpointx = l7endpointx - 10;
      l7endpointy = l7endpointy - 30;
    }
    scene.remove(line7);
    latus7();
  }
 }

 function latus7scrollup() {
  if (l7endpointx >= -100 || l7endpointy >= -400) {
    l7endpointx = -100;
    l7endpointy = -400;
    latus3scrollup();
    scene.remove(line7);
    latus7();  
  } else {
    l7endpointx = l7endpointx + 10;
    l7endpointy = l7endpointy + 30;
    scene.remove(line7);
    latus7();
  }
 } 

function scrolldown() {
  endpoint = endpoint - scroll/10;
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

// var _width = 800;
// var _height = 800;
// /* To display anything, need a scene, a camera, and renderer */
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 
//   90, //field of view
//   _width/_height, //aspect ratio width/height
//   0.1, //near
//   1000 //far
// );
// camera.position.z = _width;
// camera.position.y = - _width;
// camera.position.x = _width;

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( _width, _height );
// document.body.appendChild( renderer.domElement );

// geometry = new THREE.Geometry();
// geometry.vertices.push(new THREE.Vector3(0, 0, 0)); //x, y, z
// geometry.vertices.push(new THREE.Vector3(450, -800, 0));
// /* linewidth on windows will always be 1 */
// material = new THREE.LineBasicMaterial( { color: 0x0000ff, linewidth: 6 } );
// line = new THREE.Line(geometry, material);
// scene.add(line);

// var render = function() {
//   renderer.render(scene, camera);
// }

// var animate = function() {
//   requestAnimationFrame( animate );
// 	render();  
// };

// animate();



// var scene = new THREE.Scene();
// 			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// 			var renderer = new THREE.WebGLRenderer();
// 			renderer.setSize( window.innerWidth, window.innerHeight );
// 			document.body.appendChild( renderer.domElement );

// 			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 			var cube = new THREE.Mesh( geometry, material );
// 			scene.add( cube );

// 			camera.position.z = 5;

// 			var animate = function () {
// 				requestAnimationFrame( animate );

// 				cube.rotation.x += 0.01;
// 				cube.rotation.y += 0.01;

// 				renderer.render( scene, camera );
// 			};

// 			animate();













// var scene = new THREE.Scene();
// var renderer = new THREE.WebGLRenderer();

// var g = new THREE.CircleGeometry( 4, 16 );
// var m = new THREE.MeshBasicMaterial({color: 0x114949});
// var circle = new THREE.Mesh( g, m );

// circle.position.x = 2;
// circle.position.y = 2;
// circle.position.z = -1;
// scene.add( circle );

// var material = new THREE.LineBasicMaterial({color: 0xDF4949, linewidth: 5});

// var geometry = new THREE.Geometry();
// geometry.vertices.push(new THREE.Vector3(0, 0, 0));
// geometry.vertices.push(new THREE.Vector3(1, 1, 0));
// geometry.verticesNeedUpdate = true;
// geometry.dynamic = true;

// var line = new THREE.Line(geometry, material);
// scene.add(line);

// var update = function() {
//   circle.position.x += 0.01;
//   line.geometry.vertices[0].x = circle.position.x;
//   line.geometry.verticesNeedUpdate = true;
// };

// var render = function() {
//   renderer.render(scene, camera);
// };

// var loop = function() {
//   update();
//   render();
//   requestAnimationFrame(loop, renderer.canvas);
// };
// loop();






// function update() {
//   circle.position.x += 0.01;
//   line.geometry.vertices[ 0 ].x = circle.position.x;
//   line.geometry.verticesNeedUpdate = true;
// };
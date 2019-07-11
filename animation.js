var _width = window.innerWidth;
var _height = window.innerHeight;
var endpoint = 750;
var scroll = window.scrollY;  
console.log(scroll, "initial scroll");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 90, document.documentElement.scrollWidth/document.documentElement.scrollHeight, 0.1, 1000 );
camera.position.z = 800;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(document.documentElement.scrollWidth, document.documentElement.scrollHeight);
document.body.appendChild( renderer.domElement );

function update() {
 
  geometry = new THREE.Geometry();
  console.log(endpoint , "endpoint", scroll);
  material = new THREE.LineBasicMaterial( { color: '#ff0000', linewidth: 10 } );
  geometry.vertices.push(new THREE.Vector3(500, 800, 0)); //x, y, z
  geometry.vertices.push(new THREE.Vector3(500, endpoint, 0));
  
  line = new THREE.Line(geometry, material);
  line.geometry.verticesNeedUpdate = true;
  scene.add(line);
}

console.log(window.scrollY);

update();

var animate = function() {
  console.log(scroll > window.scrollY)
  requestAnimationFrame( animate );
	renderer.render(scene, camera);
};

animate();

function scrolldown() {
  console.count("up")
  endpoint = endpoint - scroll/10;
  console.log(endpoint);
  scene.remove(line)
  update();
}

function scrollup() {
  console.count("down")
  endpoint = endpoint + scroll/10;
  console.log(endpoint);
  scene.remove(line)
  update();
}

window.addEventListener('scroll', function() {
  if (scroll < window.scrollY) {
    console.log('222222')
    scroll = window.scrollY;
    scrolldown()
  } else if (scroll > window.scrollY) {
    console.log('1111111')
    scroll = window.scrollY;
    if (scroll == 0) {
      endpoint = 750;
      scene.remove(line)
      // update();
    } else {
      scrollup()
    }
  }
});

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
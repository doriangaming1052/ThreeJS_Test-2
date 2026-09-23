const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


camera.position.z = 20;
scene.background=new THREE.Color(0xfadcf9)


const boxgeometry = new THREE.BoxGeometry( 1, 1, 1 );
const boxmaterial = new THREE.MeshBasicMaterial( { color: 0xb434eb } );
// const boxmaterial = new THREE.MeshLambertMaterial( { color: 0xb434eb } );
// const boxmaterial = new THREE.MeshNormalMaterial( { color: 0xb434eb } );
const cube = new THREE.Mesh( boxgeometry, boxmaterial );
scene.add( cube );

const torusgeometry = new THREE.TorusGeometry( 2, 0.25, 16, 100 );
const torusmaterial = new THREE.MeshBasicMaterial( { color: 0xeb34e2 } );
const torus = new THREE.Mesh( torusgeometry, torusmaterial );
scene.add( torus );

const octageometry = new THREE.OctahedronGeometry();
const octamaterial = new THREE.MeshBasicMaterial( { color: 0x4257f5} );
// const octamaterial = new THREE.MeshNormalMaterial( { color: 0x4257f5} );
const octahedron = new THREE.Mesh( octageometry, octamaterial );
scene.add( octahedron );

octahedron.position.x = 10;
octahedron.position.y = 0;

const torus2geometry = new THREE.TorusGeometry( 2, 0.25, 16, 100 );
const torus2material = new THREE.MeshBasicMaterial( { color: 0x42e3f5 } );
const torus2 = new THREE.Mesh( torus2geometry, torus2material );
scene.add( torus2 );

torus2.position.x = 10;
torus2.position.y = 0;

const cylgeometry = new THREE.CylinderGeometry( 0.5, 0.5, 1, 32 );
const cylmaterial = new THREE.MeshBasicMaterial( { color: 0x54f542 } );
// const cylmaterial = new THREE.MeshNormalMaterial( { color: 0x54f542 } );
const cylinder = new THREE.Mesh( cylgeometry, cylmaterial );
scene.add( cylinder );

cylinder.position.x = -10;
cylinder.position.y = 0;

const torus3geometry = new THREE.TorusGeometry( 2, 0.25, 16, 100 );
const torus3material = new THREE.MeshBasicMaterial( { color: 0x42f5aa } );
const torus3 = new THREE.Mesh( torus3geometry, torus3material );
scene.add( torus3 );

torus3.position.x = -10;
torus3.position.y = 0;



function animate( time ) {

cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

torus.rotation.x += 0.01;
torus.rotation.y += 0.01;


octahedron.rotation.x += 0.01;
octahedron.rotation.y += 0.01;

torus2.rotation.x += 0.01;
torus2.rotation.y += 0.01;


cylinder.rotation.x += 0.01;
cylinder.rotation.y += 0.01;

torus3.rotation.x += 0.01;
torus3.rotation.y += 0.01;


  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
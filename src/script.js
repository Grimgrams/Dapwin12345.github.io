/////////////////////////////////////////////////////////////////////////
///// IMPORT 
import './main.css'
import * as THREE from 'three'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'


/////////////////////////////////////////////////////////////////////////
//// DRACO LOADER TO LOAD DRACO COMPRESSED MODELS FROM BLENDER
const dracoLoader = new DRACOLoader()
const loader = new GLTFLoader()
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
dracoLoader.setDecoderConfig({ type: 'js' })
loader.setDRACOLoader(dracoLoader)


/////////////////////////////////////////////////////////////////// //////
///// DIV CONTAINER CREATION TO HOLD THREEJS EXPERIENCE

const container = document.createElement('div');
container.classList.add('FirstCanvas');
const parentEl = document.querySelector('.intro');
parentEl.appendChild(container);

///// SCENE CREATION
const scene = new THREE.Scene()
scene.background = new THREE.Color('#c8f0f9')


///// RENDERER CONFIG
const renderer = new THREE.WebGLRenderer({ antialias: true}) // turn on antialias


renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //set pixel ratio
//renderer.setSize(640, 360);
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.outputEncoding = THREE.sRGBEncoding // set color encoding 

container.appendChild(renderer.domElement) // add the renderer to html div

// responsive canvas
window.addEventListener('resize', function(){

    var width = container.clientWidth;
    var height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

});


// CAMERAS CONFIG
const camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 1, 1000)
camera.position.set(34,16,50)
scene.add(camera)


/////////////////////////////////////////////////////////////////////////
///// CREATE ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement)

/////////////////////////////////////////////////////////////////////////
///// SCENE LIGHTS
const ambient = new THREE.AmbientLight(0xeb1512 , 0.82)
scene.add(ambient)

const sunLight = new THREE.DirectionalLight(0xe8c37b, 1.96)
sunLight.position.set(-69,44,14)
scene.add(sunLight)


/*
let Rocket;
loader.load('models/gltf/rocket2.glb', function (gltf) {

    let S = 2

    Rocket = gltf.scene;
    Rocket.scale.set(S,S,S);
    Rocket.position.set(5,-10,7);
    Rocket.rotation.set(0,1.2,0);
    //scene.add(Rocket);

}) */



let SNOW;
loader.load('models/gltf/snowyhouse22.glb', function (gltf) {

    let S = 4

    SNOW = gltf.scene;
    SNOW.scale.set(S,S,S);
    SNOW.position.set(5,0,7);
    SNOW.rotation.set(0,-0.3,0);
    //scene.add(SNOW);

}) 


/*
let Roomy;
loader.load('models/gltf/MyRoom.glb', function (gltf) {

    let S = 4.2

    Roomy = gltf.scene;
    Roomy.scale.set(S,S,S);
    Roomy.position.set(10,-6,7);
    Roomy.rotation.set(0,3,0);
    //scene.add(Roomy);

}) 


let Man;
loader.load('models/gltf/character2.glb', function (gltf) {

    let S = 9

    Man = gltf.scene;
    Man.scale.set(S,S,S);
    Man.position.set(6,-8,7);
    Man.rotation.set(0,12.4,0);
    //scene.add(Man);

}) */




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

        SECOND CANVAS

*///////////////////////////////////

const container2 = document.createElement('div');
container2.classList.add('SecondCanvas');
const parentEl2 = document.querySelector('.main');
parentEl2.appendChild(container2);

let tuxModel;
loader.load('models/gltf/linux-mascot-tux.glb', function (gltf) {

    let S = 14

    tuxModel = gltf.scene;
    tuxModel.scale.set(S,S,S);
    tuxModel.position.set(25,23,0);
    scene2.add(tuxModel);

}) 

let PyModel;
loader.load('models/gltf/python.glb', function (gltf) {

    let S = 0.04

    PyModel = gltf.scene;
    PyModel.scale.set(S,S,S);
    PyModel.position.set(25,19,0);
    scene2.add(PyModel);

}) 

let UnityModel;
loader.load('models/gltf/unity_logo.glb', function (gltf) {

    let S = 0.003;

    UnityModel = gltf.scene;
    UnityModel.scale.set(S,S,S);
    UnityModel.position.set(26,12,0);
    scene2.add(UnityModel);

}) 

let HtmlModel;
loader.load('models/gltf/html_logo_3d_model.glb', function (gltf) {

    let S = 0.015;

    HtmlModel = gltf.scene;
    HtmlModel.scale.set(S,S,S);
    HtmlModel.position.set(43,21.2,0);
    scene2.add(HtmlModel);

}) 

let JahasModel;
loader.load('models/gltf/JSLOGO444.glb', function (gltf) {

    let S = 0.4;

    JahasModel = gltf.scene;
    JahasModel.scale.set(S,S,S);
    JahasModel.position.set(43,17.3,0);
    scene2.add(JahasModel);

}) 

let BLENDERModel;
loader.load('models/gltf/blender_logo.glb', function (gltf) {

    let S = 4

    BLENDERModel = gltf.scene;
    BLENDERModel.scale.set(4,4,4);
    BLENDERModel.position.set(42,6,0);
    scene2.add(BLENDERModel);

}) 


///// SCENE CREATION
const scene2 = new THREE.Scene()
//scene2.background = new THREE.Color( 0xffffff, 5);


///// RENDERER CONFIG
const renderer2 = new THREE.WebGLRenderer({ antialias: true, alpha: true}) // turn on antialias


renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2)) //set pixel ratio
//renderer2.setSize(640, 360);
renderer2.setSize(container2.clientWidth, container2.clientHeight);
renderer2.outputEncoding = THREE.sRGBEncoding // set color encoding 

container2.appendChild(renderer2.domElement) // add the renderer2 to html div

//renderer2.setClearColorHex( 0xffffff, 0);
//renderer2.setClearColor( 0xffffff, 0);

// responsive canvas
window.addEventListener('resize', function(){

    var width2 = container2.clientWidth;
    var height2 = container2.clientHeight;
    renderer2.setSize(width2, height2);
    camera2.aspect = width2 / height2;
    camera2.updateProjectionMatrix();

});


// CAMERAS CONFIG
const camera2 = new THREE.PerspectiveCamera(35, container2.clientWidth / container2.clientHeight, 0.1, 1000);
camera2.position.set(34,16,50);
scene2.add(camera2);


/////////////////////////////////////////////////////////////////////////
///// CREATE ORBIT CONTROLS
//const controls2 = new OrbitControls(camera2, renderer2.domElement)

/////////////////////////////////////////////////////////////////////////
///// SCENE LIGHTS
const ambient2 = new THREE.AmbientLight(0xeb1512 , 0.82)
scene2.add(ambient2)

const sunlight2 = new THREE.DirectionalLight(0xe8c37b, 1.96);
sunlight2.position.set(-69,44,14);
scene2.add(sunlight2);


/*
const geometry2 = new THREE.BoxGeometry(3,3,3);
const material2 = new THREE.MeshBasicMaterial( { color: 0xdd133b} );

const cube2 = new THREE.Mesh(geometry2, material2);

cube2.position.set(5,0,20);
scene2.add(cube2); */

/*
const LinuxTexture = new THREE.TextureLoader().load('./tuxLinux.png');

const LinuxBlock = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3), 
    new THREE.MeshBasicMaterial({ map: LinuxTexture})
); 


scene2.add(LinuxBlock); */


/////////////////////////////////////////////////////////////////////////
//// RENDER LOOP FUNCTION
function rendeLoop() {

    //Rocket, SNOW, Roomy, Man
    
    let TheModel = SNOW;

    let Rspeed = 0.15;
    
    if (SNOW) {scene.add(TheModel);}
    

    if (tuxModel) { tuxModel.rotation.y += Rspeed;}
    if (PyModel) { PyModel.rotation.y += Rspeed; }
    if (UnityModel) { UnityModel.rotation.y += Rspeed; }
    if (HtmlModel) { HtmlModel.rotation.y += Rspeed; }
    if (JahasModel) { JahasModel.rotation.y += Rspeed; }
    if (BLENDERModel) { BLENDERModel.rotation.y += Rspeed; }


    TWEEN.update() // update animations

    controls.update() // update orbit controls

    renderer.render(scene, camera) // render the scene using the camera
    renderer2.render(scene2, camera2) // render the scene using the camera
    requestAnimationFrame(rendeLoop) //loop the render function
}

rendeLoop() //start rendering

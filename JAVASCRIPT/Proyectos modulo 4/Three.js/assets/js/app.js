import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0x000000, 0)
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


camera.position.z = 5;

const light = new THREE.AmbientLight(0xffffff)
scene.add(light)
const light2 = new THREE.DirectionalLight(0xffffff, .75);
light2.position.set(-1, 0, 2)
scene.add(light2)

const loader = new GLTFLoader();

loader.load(
    'assets/models/logo.glb',
    function( gltf ){
        gltf.scene.traverse((child)=>{
            if(child.isMesh){
                child.material.flatShading = false;
                child.geometry.computeVertexNormals();
            }
        })
        gltf.scene.rotation.x = 1.5;
        gltf.scene.position.x = -2.7;
        gltf.scene.position.y = -3.2;


        scene.add(gltf.scene)
    },
    function ( gltf ){
        console.log('Objeto cargado')
    },
    function ( error ){
        console.log('Error al cargar objeto')
    }
)
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener(window);
controls.target = new THREE.Vector3(0,0,0);
controls.enableZoom = false;
controls.enablePan = false;


window.addEventListener('resize', ()=>{
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight ;
    camera.updateProjectionMatrix();
});




function animate() {


	renderer.render( scene, camera );

}



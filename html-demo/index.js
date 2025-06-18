import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls'
// import mesh from './mesh.js'
// import mesh from './mesh2.js'
// import mesh from './mesh3.js'
// import mesh from './point.js' // 点
// import mesh from './line.js' // 线
// import mesh from './mesh4.js' // 圆柱
import mesh,{updatePosition} from './mesh5.js' // 平面
const scene = new THREE.Scene()

scene.add(mesh)

const pointLight=new THREE.PointLight(0xffffff,10000)
pointLight.position.set(80,80,80)
scene.add(pointLight)


// const axesHelper=new THREE.AxesHelper(200)
// scene.add(axesHelper)


const width= window.innerWidth;
const height=window.innerHeight;
const camera=new THREE.PerspectiveCamera(60,width/height,1,1000)
camera.position.set(450,150,100)
camera.lookAt(0,0,0)


const renderer=new THREE.WebGLRenderer()
renderer.setSize(width,height)

function render(){
    updatePosition()
    mesh.rotateZ(0.003)
    renderer.render(scene,camera)
    requestAnimationFrame(render)
}
   

render();

document.body.append(renderer.domElement)

const controls=new OrbitControls(camera,renderer.domElement)

controls.addEventListener('change',()=>{
    console.log(camera.position)
})

import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls'
// import mesh from './mesh.js'
// import mesh from './mesh2.js'
// import mesh from './mesh3.js'
// import mesh from './point.js' // 点
// import mesh from './line.js' // 线
// import mesh from './mesh4.js' // 圆柱
// import mesh,{updatePosition} from './mesh5.js' // 平面
// import mesh from './lineDashedMaterial.js' // 虚线材质
// import mesh from './mesh6.js'  // 纹理贴图：球体
// import mesh from './mesh7.js'  // 纹理贴图：砖
// import mesh from './mesh8.js'  // 纹理贴图：平面
// import mesh from './mesh9.js'  // 纹理贴图：木星
// import mesh from './mesh10.js'  // 点
// import mesh from './mesh11.js'  // 曲线
// import mesh from './mesh12.js'  // 二次贝塞尔曲线
// import mesh from './mesh13.js'  // 三次贝塞尔曲线
import mesh from './mesh14.js'  // 曲线
const scene = new THREE.Scene()

scene.add(mesh)

const pointLight=new THREE.PointLight(0xffffff,10000)
pointLight.position.set(80,80,80)
scene.add(pointLight)


const axesHelper=new THREE.AxesHelper(200)
scene.add(axesHelper)


const width= window.innerWidth;
const height=window.innerHeight;
const camera=new THREE.PerspectiveCamera(60,width/height,1,1000)
camera.position.set(0,100,200)
camera.lookAt(0,0,0)


const renderer=new THREE.WebGLRenderer()
renderer.setSize(width,height)

function render(){
    renderer.render(scene,camera)
    requestAnimationFrame(render)
}
   

render();

document.body.append(renderer.domElement)

const controls=new OrbitControls(camera,renderer.domElement)


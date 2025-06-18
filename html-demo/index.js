import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls'
import {GUI} from 'three/addons/libs/lil-gui.module.min.js'


const scene = new THREE.Scene()
// {
//     const geometry=new THREE.BoxGeometry(100,100,100);
//     const material= new THREE.MeshLambertMaterial(({
//         color:new THREE.Color('orange')
//     }))
//     const mesh=new THREE.Mesh(geometry,material)
//     mesh.position.set(0,0,0)
//     scene.add(mesh)
// }
// {
//     const pointLight=new THREE.PointLight(0xffffff,10000)
//     pointLight.position.set(80,80,80)
//     scene.add(pointLight)
// }
{
    const axesHelper=new THREE.AxesHelper(200)
    // scene.add(axesHelper)
}
{
    const width= window.innerWidth;
    const height=window.innerHeight;
    const camera=new THREE.PerspectiveCamera(60,width/height,1,1000)
    camera.position.set(200,200,200)
    camera.lookAt(0,0,0)

    const camera2=new THREE.PerspectiveCamera(20,16/9,100,300)
    const cameraHelper=new THREE.CameraHelper(camera2)
    scene.add(cameraHelper)
    const gui=new GUI();
    function onChange(){
        camera2.updateProjectionMatrix();
        cameraHelper.update();
    }
    gui.add(camera2,'fov',[30,60,10,90]).onChange(onChange);
    gui.add(camera2,'aspect',{
        '16/9':16/9,
        '4/3':4/3
    }).onChange(onChange)
    gui.add(camera2,'near',0,300).onChange(onChange)
    gui.add(camera2,'far',300,800).onChange(onChange)

    const renderer=new THREE.WebGLRenderer()
    renderer.setSize(width,height)

    function render(){
        renderer.render(scene,camera)
        requestAnimationFrame(render)
    }
   

    render();
    
    document.body.append(renderer.domElement)

    const controls=new OrbitControls(camera,renderer.domElement)
}
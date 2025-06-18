import * as THREE from 'three';




//1. 分段为10看效果
// const geometry=new THREE.PlaneGeometry(300,300,10,10);
//2. 分段为100看效果
const geometry=new THREE.PlaneGeometry(300,300,100,100);

const positions=geometry.attributes.position;

for(let i=0;i<positions.count;i++){
    positions.setZ(i,Math.random()*50)
}
const material=new THREE.MeshBasicMaterial({
    color:new THREE.Color('orange'),
    wireframe:true
})

const mesh=new THREE.Mesh(geometry,material)
mesh.rotateX(Math.PI/2)

export default mesh
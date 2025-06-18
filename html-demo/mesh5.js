import * as THREE from 'three';
import {createNoise2D} from 'simplex-noise'



//1. 分段为10看效果
// const geometry=new THREE.PlaneGeometry(300,300,10,10);
//2. 分段为100看效果
// const geometry=new THREE.PlaneGeometry(300,300,100,100);
const geometry=new THREE.PlaneGeometry(3000,3000,600,600);


export function updatePosition(){
    const positions=geometry.attributes.position;

    for(let i=0;i<positions.count;i++){
        const x=positions.getX(i);
        const y=positions.getY(i);
        const z=noise2D(x/300,y/300)*50;
        const sinNum=Math.sin(Date.now()*0.002+x*0.05)*10;
        // const sinNum=Math.sin(Date.now() * 0.002 + x * 0.5) * 5 + Math.cos(Date.now() * 0.002 + y * 0.5) * 5
        positions.setZ(i,z+sinNum)
    }
    positions.needsUpdate=true
}





const noise2D=createNoise2D();
const positions=geometry.attributes.position;

for(let i=0;i<positions.count;i++){
    const x=positions.getX(i);
    const y=positions.getY(i);
    // const z=noise2D(x/100,y/100)*50;
    const z=noise2D(x/300,y/300)*50;
    positions.setZ(i,z)
}
const material=new THREE.MeshBasicMaterial({
    color:new THREE.Color('green'),
    wireframe:true
})

const mesh=new THREE.Mesh(geometry,material)
mesh.rotateX(Math.PI/2)

export default mesh
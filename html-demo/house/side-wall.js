import * as THREE from 'three'

const shape=new THREE.Shape()

shape.moveTo(0.0)
shape.lineTo(0,2000)
shape.lineTo(-1500,3000)
shape.lineTo(-3000,2000)
shape.lineTo(-3000,0)

// shape.moveTo(0.0)
// shape.lineTo(3000,0)
// shape.lineTo(3000,2000)
// shape.lineTo(1500,3000)
// shape.lineTo(0,2000)

const windowPath=new THREE.Path();
windowPath.moveTo(-600, 600);
windowPath.lineTo(-600, 1600);
windowPath.lineTo(-2400, 1600);
windowPath.lineTo(-2400, 600);
shape.holes.push(windowPath);

const geometry=new THREE.ExtrudeGeometry(shape,{
    depth:100
})
const material=new THREE.MeshLambertMaterial({
    color:new THREE.Color('lightgrey'),
    side:THREE.DoubleSide
})

const sideWall=new THREE.Mesh(geometry,material)

export default sideWall
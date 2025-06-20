import * as THREE from 'three';

const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(200, 0);
shape.lineTo(200, -100);
shape.lineTo(400, -100);
shape.lineTo(400, -200);
shape.lineTo(600, -200);
shape.lineTo(600, -300);
shape.lineTo(0, -300);

const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 1000
});
const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color('grey')
});

const doorstep = new THREE.Mesh(geometry, material);
doorstep.rotateY(-Math.PI / 2);
doorstep.position.z = 1500;
doorstep.position.y = 150;

export default doorstep;
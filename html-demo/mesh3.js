import * as THREE from 'three';


// 直接使用BoxGeometry创建一个立方体
const geometry = new THREE.BoxGeometry(100, 100, 100);
// const material = new THREE.MeshLambertMaterial(({
//     color: new THREE.Color('orange')
// }));
const material = new THREE.MeshBasicMaterial(({
    color: new THREE.Color('orange'),
    wireframe: true
}));
const mesh = new THREE.Mesh(geometry, material);
console.log(mesh);

export default mesh;

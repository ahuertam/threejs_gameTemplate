import * as THREE from "three";

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
const box = new THREE.Mesh(geometry, material);
box.castShadow = true; //default is false
box.position.y = 1; //up
box.position.z = 1; //up
export default box;

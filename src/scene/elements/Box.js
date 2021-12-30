import * as THREE from "three";

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: "pink" });
const box = new THREE.Mesh(geometry, material);

export default box;

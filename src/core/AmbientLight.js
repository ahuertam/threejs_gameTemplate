import * as THREE from "three";
const ambientLight = new THREE.AmbientLight(0x404040);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 5, -5);
ambientLight.add(directionalLight);
export default ambientLight;

import * as THREE from "three";

const canvas = document.querySelector("#webgl01");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);

export default renderer;

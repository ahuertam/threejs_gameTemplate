import box from "./scene/box";
import camera from "./core/Camera";
import scene from "./core/Scene";
import ambientLight from "./core/AmbientLight";
import renderer from "./core/Renderer";
import game from "./core/GameLoop";
import resize from "./core/Resize";
import Xbot from "./characters/Xbot";
import model from "./core/BasicLoader";
import keyListener from "./core/KeyListener";
import Animator from "./core/Animator";
import soundHandler from "./core/sound/SoundHandler.js";
import AnimatorModeAdapter from "./core/character-controller/AnimatorModeAdapter";
import CharacterController from "./core/character-controller/CharacterController";
scene.add(box);
// Load 3d Elements
//BASIC LOAD
/*model.then((object) => {
  scene.add(object);
  let scale = 0.01;
  object.position.set(1, 1, 1);
  object.scale.set(scale, scale, scale);
});
*/

//COMPLEX LOAD and Manual Animation
/*Xbot.then((mesh) => {
  scene.add(mesh);
  let scale = 0.01;
  mesh.scale.set(scale, scale, scale);
  let anim = new Animator(mesh);
  anim.action(3, 1, false);
  anim.start();
  //play sound
  soundHandler.play("coin");
});*/

//Mode change sample
/*Xbot.then((mesh) => {
  scene.add(mesh);
  mesh.modes = Xbot.modes;
  let scale = 0.02;
  mesh.scale.set(scale, scale, scale);
  let animator = new AnimatorModeAdapter(mesh, mesh.modes);
  animator.start();
  animator.run("left");
  setTimeout(() => {
    animator.setMode("run");
    animator.run("left");
  }, 2000);
});*/

camera.position.set(9, 5, 3);
camera.lookAt(box.position);
scene.add(ambientLight);

resize.start(renderer);
keyListener.start();

game.addCallback(() => {
  if (keyListener.isPressed(38)) {
    box.rotation.y += 0.01;
  }
  if (characterController) characterController.run();
  //box.rotation.x += 0.01;
  renderer.render(scene, camera);
});

//MCharacter Controller sample
let characterController = null;
Xbot.then((mesh) => {
  scene.add(mesh);
  mesh.modes = Xbot.modes;
  let scale = 0.02;
  mesh.scale.set(scale, scale, scale);
  characterController = new CharacterController(mesh);
  characterController.start();
});

game.start();

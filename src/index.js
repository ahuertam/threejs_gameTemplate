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

scene.add(box);
// Load 3d Elements
//BASIC LOAD
model.then((object) => {
  scene.add(object);
  let scale = 0.01;
  object.position.set(1, 1, 1);
  object.scale.set(scale, scale, scale);
});
//COMPLEX LOAD
Xbot.then((mesh) => {
  console.log(mesh);
  scene.add(mesh);
  mesh.modes = Xbot.modes;
  let scale = 0.01;
  mesh.scale.set(scale, scale, scale);
  let anim = new Animator(mesh);
  anim.action(1, 1, false);
  anim.start();
});

camera.position.set(9, 5, 3);
camera.lookAt(box.position);
scene.add(ambientLight);

resize.start(renderer);

keyListener.start();
game.addCallback(() => {
  if (keyListener.isPressed(38)) {
    box.rotation.y += 0.01;
  }
  //box.rotation.x += 0.01;
  renderer.render(scene, camera);
});

game.start();

import box from "./scene/box";
import camera from "./core/Camera";
import scene from "./core/Scene";
import ambientLight from "./core/AmbientLight";
import renderer from "./core/Renderer";
import game from "./core/GameLoop";
import resize from "./core/Resize";
import Xbot from "./characters/Xbot";

scene.add(box);
// Load 3d Elements
Xbot.then((mesh) => {
  console.log(mesh);
  scene.add(mesh);
  mesh.modes = Xbot.modes;
});

camera.position.set(1, 4, 3);
camera.lookAt(box.position);
scene.add(ambientLight);
resize.start(renderer);

game.addCallback(() => {
  box.rotation.y += 0.01;
  renderer.render(scene, camera);
});

game.start();

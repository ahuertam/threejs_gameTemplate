import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const model = new Promise((res, rej) => {
  const loader = new FBXLoader();
  loader.load("src/characters/xbot.fbx", function (object) {
    object.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    res(object);
  });
});

export default model;

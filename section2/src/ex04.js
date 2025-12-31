import * as THREE from "three";

export default function example() {
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.x = 2;
  camera.position.z = 5;
  camera.position.y = 2;
  scene.add(camera);

  // 색상, 빛의 세기
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.z = 2;
  light.position.x = 1;
  scene.add(light);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  //   MeshBasicMaterial은 빛의 영향을 받지 않는다.
  //   const material = new THREE.MeshBasicMaterial({ color: "red" });
  const material = new THREE.MeshStandardMaterial({ color: "red" });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer.render(scene, camera);

  const setSize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  };

  window.addEventListener("resize", () => {
    setSize();
  });
}

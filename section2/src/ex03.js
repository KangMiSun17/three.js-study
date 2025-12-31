import * as THREE from "three";

export default function example() {
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true, // 투명도
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 고밀도 처리 2로 해도 충분히 괜찮다.
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  //   renderer.setClearAlpha(0.5); // 투명도 설정 0~1
  renderer.setClearColor("#fff000"); // 배경색 설정

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#0000ff"); // 배경색 설정하는 또 다른 방법
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = 5;
  camera.position.x = 2;
  camera.position.y = 2;
  scene.add(camera);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: "red" });
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

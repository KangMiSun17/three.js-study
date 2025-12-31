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

  camera.position.z = 5;
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

  function draw() {
    // 각도는 Radian을 사용
    // 360도는 2파이 = 6.28
    // mesh.rotation.y += 0.1
    mesh.rotation.y += THREE.MathUtils.degToRad(1);
    mesh.position.y += 0.01;
    if (mesh.position.y > 3) {
      mesh.position.y = 0;
    }
    renderer.render(scene, camera);

    window.requestAnimationFrame(draw);
  }

  const setSize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  };

  window.addEventListener("resize", () => {
    setSize();
  });

  draw();
}

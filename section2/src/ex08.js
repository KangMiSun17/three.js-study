import * as THREE from "three";
import gsap from "gsap";

export default function example() {
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog("black", 3, 7);
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.y = 1;
  camera.position.z = 5;
  scene.add(camera);

  renderer.render(scene, camera);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.x = 1;
  light.position.y = 3;
  light.position.z = 5;
  scene.add(light);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: "red" });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  let oldTime = Date.now();

  function draw() {
    const newTime = Date.now();
    const deltaTime = newTime - oldTime;
    oldTime = newTime;

    renderer.render(scene, camera);

    window.requestAnimationFrame(draw);
  }

  gsap.to(mesh.position, {
    duration: 1,
    y: 2,
    z: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });

  const setSize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  };

  draw();

  window.addEventListener("resize", () => {
    setSize();
  });
}

import * as THREE from "three";

// 동적으로 캔버스 조립하기
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// html에서 캔버스 가져와서 사용하기
const canvas = document.querySelector("#three-canvas");
// const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
// mesh가 near와 far 사이에 있고 시야각(fov) 안에 있어야 카메라에 보인다
const camera = new THREE.PerspectiveCamera(
  75, // 시야각
  window.innerWidth / window.innerHeight, // 종횡비
  0.1, // 얼마나 가까우면 안보이는지
  1000 // 얼마나 멀면 안보이는지
);

// 포지션 설정 안해주면 기본 0,0,0
camera.position.z = 5;
scene.add(camera);

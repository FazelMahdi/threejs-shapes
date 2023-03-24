import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const CubeComponent = () => {
	const canvasRef = useRef(null);
	const [cubeWidth, setCubeWidth] = useState(0);

	useEffect(() => {
		const canvas = canvasRef.current;
		const renderer = new THREE.WebGLRenderer({ canvas });
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 5;
		const scene = new THREE.Scene();
		scene.background = new THREE.Color("#ccc");

		const cubeGeometry = new THREE.BoxGeometry(
			cubeWidth,
			cubeWidth,
			cubeWidth
		);
		const texture = new THREE.TextureLoader().load("src/assets/logo.png");
		const cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
		const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
		scene.add(cubeMesh);

		const animate = (time) => {
			cubeMesh.rotation.x = time / 2000;
			cubeMesh.rotation.y = time / 1000;
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		};

		animate(0);
		return () => {
			// Clean up Three.js objects
			scene.remove(cubeMesh);
			cubeMaterial.dispose();
			texture.dispose();
			renderer.dispose();
		};
	}, [cubeWidth]);

	useEffect(() => {
		const randomWidth = Math.floor(Math.random() * 2) + 1;
		setCubeWidth(randomWidth);
	}, []);

	return <canvas ref={canvasRef} />;
};

export default CubeComponent;

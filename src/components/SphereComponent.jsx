import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const SphereComponent = () => {
	const canvasRef = useRef(null);
	const [sphereRadius, setSphereRadius] = useState(0);

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

		const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
		const texture = new THREE.TextureLoader().load("src/assets/logo.png");
		const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
		const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
		scene.add(sphereMesh);

		const animate = (time) => {
			sphereMesh.rotation.x = time / 2000;
			sphereMesh.rotation.y = time / 1000;
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		};

		animate(0);
		return () => {
			// Clean up Three.js objects
			scene.remove(sphereMesh);
			sphereMaterial.dispose();
			texture.dispose();
			renderer.dispose();
		};
	}, [sphereRadius]);

	useEffect(() => {
		const randomRadius = Math.floor(Math.random() * 2) + 1;
		setSphereRadius(randomRadius);
	}, []);

	return <canvas ref={canvasRef} />;
};

export default SphereComponent;

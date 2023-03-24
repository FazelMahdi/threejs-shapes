import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const CylinderComponent = () => {
	const canvasRef = useRef(null);
	const [cylinderHeight, setCylinderHeight] = useState(0);

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

		const cylinderGeometry = new THREE.CylinderGeometry(
			1,
			1,
			cylinderHeight,
			32
		);
		const texture = new THREE.TextureLoader().load("src/assets/logo.png");
		const cylinderMaterial = new THREE.MeshBasicMaterial({ map: texture });

		const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
		scene.add(cylinderMesh);

		const animate = (time) => {
			cylinderMesh.rotation.x = time / 2000;
			cylinderMesh.rotation.y = time / 1000;
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		};

		animate(0);
		return () => {
			// Clean up Three.js objects
			scene.remove(cylinderMesh);
			cylinderMaterial.dispose();
			texture.dispose();
			renderer.dispose();
		};
	}, [cylinderHeight]);

	useEffect(() => {
		const randomHeight = Math.floor(Math.random() * 2) + 1;
		setCylinderHeight(randomHeight);
	}, []);

	return <canvas ref={canvasRef} />;
};

export default CylinderComponent;

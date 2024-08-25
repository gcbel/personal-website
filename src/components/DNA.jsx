/* DEPENDENCIES */
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

/* VARIABLES */
const sequence = "ATGCGTTACCA";
const bpSequence = "TACGCAATGGT";
const colors = {
  A: 0x80a9b1, //
  T: 0x75aa8c, //
  G: 0x81aeaa, //
  C: 0x6f8f6c, //
  backbone: 0x66709b, // Purple
};
const numAtoms = {
  base: 50,
  backbone: 70,
};

/* Render DNA */
const DNA = () => {
  const mountRef = useRef(null);
  const groupRef = useRef(new THREE.Group());

  useEffect(() => {
    const mount = mountRef.current;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 0.8 / 2, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(225, 550);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);
    renderer.setClearColor(0x131313, 0); // Background color (clear)

    // Set up cube geometry and initial coordinates
    const geometry = new THREE.SphereGeometry(0.025, 8, 8);
    let startX = 0;
    let startY = -5;
    let startZ = 0;

    // Create double helix structure
    for (let i = 0; i < sequence.length; i++) {
      const angle = i * 0.9;
      const x = startX + Math.sin(angle) * 1.4;
      const y = startY + i * 0.9;
      const z = startZ + Math.cos(angle) * 1.4;

      const nextAngle = (i + 0.5) * 0.9;
      const nextX = startX - 0.05 + Math.sin(nextAngle) * 1.4;
      const nextY = startY + (i + 0.5) * 0.9;
      const nextZ = startZ - 0.05 + Math.cos(nextAngle) * 1.4;

      // Set up nucleotide and base pair
      const nucleotide = sequence[i];
      const bpNucleotide = bpSequence[i];
      const material = new THREE.MeshBasicMaterial({
        color: colors[nucleotide],
      });
      const bpMaterial = new THREE.MeshBasicMaterial({
        color: colors[bpNucleotide],
      });
      const backboneMaterial = new THREE.MeshBasicMaterial({
        color: colors["backbone"],
      });

      // Create nucleotide and base pair
      for (let j = 0; j < numAtoms["base"]; j++) {
        const molecule = new THREE.Mesh(geometry, material);
        const basepair = new THREE.Mesh(geometry, bpMaterial);

        molecule.position.set(
          x - (Math.random() - 1) * 0.15 - (Math.random() - 1.8) * (startX - x),
          y + (Math.random() - 0.5) * 0.3,
          z - (Math.random() - 1) * 0.15 - (Math.random() - 1.8) * (startZ - z)
        );
        basepair.position.set(
          x - (Math.random() - 1) * 0.15 - (Math.random() - 1) * (startX - x),
          y + (Math.random() - 0.5) * 0.3,
          z - (Math.random() - 1) * 0.15 - (Math.random() - 1) * (startZ - z)
        );
        molecule.userData.originalPosition = molecule.position.clone();
        basepair.userData.originalPosition = basepair.position.clone();
        groupRef.current.add(molecule);
        groupRef.current.add(basepair);
      }

      // Create sugar-phosphate backbone
      for (let j = 0; j < numAtoms["backbone"]; j += 2) {
        const moleculeBackbone = new THREE.Mesh(geometry, backboneMaterial);
        const basepairBackbone = new THREE.Mesh(geometry, backboneMaterial);
        const moleculeBackbone2 = new THREE.Mesh(geometry, backboneMaterial);
        const basepairBackbone2 = new THREE.Mesh(geometry, backboneMaterial);
        // const moleculeBackbone3 = new THREE.Mesh(geometry, backboneMaterial);
        // const basepairBackbone3 = new THREE.Mesh(geometry, backboneMaterial);
        // const moleculeBackbone4 = new THREE.Mesh(geometry, backboneMaterial);
        // const basepairBackbone4 = new THREE.Mesh(geometry, backboneMaterial);

        moleculeBackbone.position.set(
          x + (Math.random() - 0.5) * 0.5,
          y + (Math.random() - 0.5) * 0.8,
          z + (Math.random() - 0.5) * 0.5
        );
        moleculeBackbone2.position.set(
          nextX + (Math.random() - 0.5) * 0.5,
          nextY + (Math.random() - 0.5) * 0.8,
          nextZ + (Math.random() - 0.5) * 0.5
        );

        basepairBackbone.position.set(
          2 * startX - x + (Math.random() - 0.5) * 0.5,
          y + (Math.random() - 0.5) * 0.8,
          2 * startZ - z + (Math.random() - 0.5) * 0.5
        );
        basepairBackbone2.position.set(
          2 * startX - nextX + (Math.random() - 0.5) * 0.5,
          nextY + (Math.random() - 0.5) * 0.8,
          2 * startZ - nextZ + (Math.random() - 0.5) * 0.5
        );

        moleculeBackbone.userData.originalPosition =
          moleculeBackbone.position.clone();
        basepairBackbone.userData.originalPosition =
          basepairBackbone.position.clone();
        moleculeBackbone2.userData.originalPosition =
          moleculeBackbone2.position.clone();
        basepairBackbone2.userData.originalPosition =
          basepairBackbone2.position.clone();
        groupRef.current.add(moleculeBackbone);
        groupRef.current.add(basepairBackbone);
        groupRef.current.add(moleculeBackbone2);
        groupRef.current.add(basepairBackbone2);
      }
    }
    scene.add(groupRef.current);
    camera.position.z = 14;

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Handle animation for mouse rolling over molecules
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    /* EVENT LISTENERS */
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the DNA
      groupRef.current.rotation.y += 0.004;

      // Update the raycaster
      raycaster.setFromCamera(mouse, camera);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="DNA" ref={mountRef} />;
};

/* EXPORT */
export default DNA;
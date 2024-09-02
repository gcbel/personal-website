/* DEPENDENCIES */
import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

/* VARIABLES */
const sequence = "ATGCGTTACCA";
const bpSequence = "TACGCAATGGT";
const colors = {
  A: 0x2d333f,
  T: 0x2f4b4b,
  G: 0x2d4357,
  C: 0x415f51,
  backbone: 0x476374,
};
const numAtoms = {
  base: 70,
  backbone: 100,
};

/* Render DNA */
const DNA = () => {
  const mountRef = useRef(null);
  const groupRef = useRef(new THREE.Group());
  const [rotationSpeed, setRotationSpeed] = useState(0.004);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 0.8 / 2, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(225, 550);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);
    renderer.setClearColor(0x131313, 0); // Clear background

    // Set up cube geometry and initial coordinates
    const geometry = new THREE.SphereGeometry(0.03, 8, 8);
    let startY = -4.5;

    // Create double helix structure
    for (let i = 0; i < sequence.length; i++) {
      const angle = i * 0.9;
      const x = Math.sin(angle) * 1.4;
      const y = startY + i * 0.9;
      const z = Math.cos(angle) * 1.4;

      const lastAngle = (i - 0.5) * 0.9;
      const lastX = Math.sin(lastAngle) * 1.4;
      const lastY = startY + (i - 0.5) * 0.9;
      const lastZ = Math.cos(lastAngle) * 1.4;

      const nextAngle = (i + 0.5) * 0.9;
      const nextX = Math.sin(nextAngle) * 1.4;
      const nextY = startY + (i + 0.5) * 0.9;
      const nextZ = Math.cos(nextAngle) * 1.4;

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
          -(x * (j + 1)) / numAtoms["base"] + (Math.random() - 0.5) * 0.6,
          y + (Math.random() - 0.5) * 0.4,
          -(z * (j + 1)) / numAtoms["base"] + (Math.random() - 0.5) * 0.6
        );
        basepair.position.set(
          (x * (j + 1)) / numAtoms["base"] + (Math.random() - 0.5) * 0.6,
          y + (Math.random() - 0.5) * 0.4,
          (z * (j + 1)) / numAtoms["base"] + (Math.random() - 0.5) * 0.6
        );
        molecule.userData.originalPosition = molecule.position.clone();
        basepair.userData.originalPosition = basepair.position.clone();
        groupRef.current.add(molecule);
        groupRef.current.add(basepair);
      }

      // Create sugar-phosphate backbone
      for (let j = 0; j < numAtoms["backbone"]; j += 1) {
        const moleculeBackbone = new THREE.Mesh(geometry, backboneMaterial);
        const basepairBackbone = new THREE.Mesh(geometry, backboneMaterial);

        const ratio = (j + 1) / numAtoms["backbone"];
        moleculeBackbone.position.set(
          lastX * ratio + nextX * (1 - ratio) + (Math.random() - 0.5) * 0.5,
          lastY * ratio + nextY * (1 - ratio) + (Math.random() - 0.5) * 0.5,
          lastZ * ratio + nextZ * (1 - ratio) + (Math.random() - 0.5) * 0.5
        );

        basepairBackbone.position.set(
          -lastX * ratio - nextX * (1 - ratio) + (Math.random() - 0.5) * 0.5,
          lastY * ratio + nextY * (1 - ratio) + (Math.random() - 0.5) * 0.5,
          -lastZ * ratio - nextZ * (1 - ratio) + (Math.random() - 0.5) * 0.5
        );

        moleculeBackbone.userData.originalPosition =
          moleculeBackbone.position.clone();
        basepairBackbone.userData.originalPosition =
          basepairBackbone.position.clone();
        groupRef.current.add(moleculeBackbone);
        groupRef.current.add(basepairBackbone);
      }
    }
    scene.add(groupRef.current);
    camera.position.z = 14;

    /* ANIMATION */
    const animate = () => {
      requestAnimationFrame(animate);
      groupRef.current.rotation.y += rotationSpeed;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, [rotationSpeed]);

  return <div id="DNA" ref={mountRef} />;
};

/* EXPORT */
export default DNA;

/* DEPENDENCIES */
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

/* VARIABLES */
const sequence = "ATGCGTTACCAGATACAGATACGGGATACAGCCAATTTA";
const bpSequence = "TACGCAATGGTCTATGTCTATGCCCTATGTCGGTTAAAT";
// const sequence =
//   "ATGCGTTACCAGATACAGATACGGGATACAGCCAATTTAATGCGTTACCAGATACAGATACGGGATACAGCCAATTTA";
// const bpSequence =
//   "TACGCAATGGTCTATGTCTATGCCCTATGTCGGTTAAATTACGCAATGGTCTATGTCTATGCCCTATGTCGGTTAAAT";
const colors = {
  A: 0xda06db, // Pink
  T: 0xe4a101, // Orange
  G: 0x234add, // Blue
  C: 0xa547d7, // Purple
  backbone: 0xffffff, // White
};
const numAtoms = {
  base: 20,
  backbone: 40,
};

/* Render DNA */
const DNA = () => {
  const mountRef = useRef(null);
  const groupRef = useRef(new THREE.Group());

  useEffect(() => {
    const mount = mountRef.current;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);
    renderer.setClearColor(0x010714, 1); // Background color

    // Set up cube geometry and initial coordinates
    const geometry = new THREE.SphereGeometry(0.05, 4, 4);
    const startX = 0;
    const startY = -10;
    const startZ = 0;

    // Create double helix structure
    for (let i = 0; i < sequence.length; i++) {
      const angle = i * 0.9;
      const x = startX + Math.sin(angle) * 1.4;
      const y = startY + i * 0.9;
      const z = startZ + Math.cos(angle) * 1.4;

      const nextAngle = (i + 0.5) * 0.9;
      const nextX = startX + Math.sin(nextAngle) * 1.4;
      const nextY = startY + (i + 0.5) * 0.9;
      const nextZ = startZ + Math.cos(nextAngle) * 1.4;

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
          (Math.random() - 1) * 0.2 + (Math.random() - 1) * x,
          y + (Math.random() - 0.5) * 0.4,
          (Math.random() - 1) * 0.2 + (Math.random() - 1) * z
        );
        basepair.position.set(
          (Math.random() - 1) * 0.2 - (Math.random() - 1) * x,
          y + (Math.random() - 0.5) * 0.4,
          (Math.random() - 1) * 0.2 - (Math.random() - 1) * z
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
          -x + (Math.random() - 0.5) * 0.5,
          y + (Math.random() - 0.5) * 0.8,
          -z + (Math.random() - 0.5) * 0.5
        );
        basepairBackbone2.position.set(
          -nextX + (Math.random() - 0.5) * 0.5,
          nextY + (Math.random() - 0.5) * 0.8,
          -nextZ + (Math.random() - 0.5) * 0.5
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
    camera.position.z = 13;

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Handle animation for mouse rolling over molecules
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    /* EVENT LISTENERS */
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the DNA
      groupRef.current.rotation.y += 0.002;

      // Update the raycaster
      raycaster.setFromCamera(mouse, camera);
      // const intersects = raycaster.intersectObjects(groupRef.current.children);
      // const intersectedObjects = new Set(
      //   intersects.map((intersect) => intersect.object)
      // );

      // groupRef.current.children.forEach((object) => {
      //   if (intersectedObjects.has(object)) {
      //     // Scatter the object if it is intersected
      //     object.position.x += (Math.random() - 0.5) * 4;
      //     object.position.y += (Math.random() - 0.5) * 4;
      //     object.position.z += (Math.random() - 0.5) * 4;

      //     // Change color to indicate interaction
      //     object.material.color.set(0xff0000);
      //   } else {
      //     // Smoothly move the object back to its original position
      //     object.position.lerp(object.userData.originalPosition, 0.05); // Adjust the factor for slower return
      //   }
      // });

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default DNA;

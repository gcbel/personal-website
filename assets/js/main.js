import * as THREE from 'three';

// Set up camera and scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

// Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // DNA Helix Animation
    const canvas = document.getElementById('dnaCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 300;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const basePairHeight = 20;
    const helixHeight = 200;
    const helixWidth = 100;
    const basePairs = Math.floor(helixHeight / basePairHeight);

    let angle = 0;

    function drawHelix() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < basePairs; i++) {
            const y = centerY - helixHeight / 2 + i * basePairHeight;
            const xOffset = helixWidth / 2 * Math.sin(angle + i * Math.PI / basePairs);

            ctx.beginPath();
            ctx.moveTo(centerX - xOffset, y);
            ctx.lineTo(centerX + xOffset, y);
            ctx.strokeStyle = i % 2 === 0 ? '#ff6347' : '#4682b4';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(centerX - xOffset, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#ff6347';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(centerX + xOffset, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#4682b4';
            ctx.fill();
            ctx.closePath();
        }

        angle += 0.03;
        requestAnimationFrame(drawHelix);
    }

    drawHelix();
});
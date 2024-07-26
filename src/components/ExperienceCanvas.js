import React, { useEffect } from 'react';
import * as THREE from 'three';

const ExperienceCanvas = () => {
  useEffect(() => {
    const canvas = document.querySelector('.experience-canvas');
    // const renderer = new THREE.WebGLRenderer({ canvas });

    // Initialize your Three.js scene here

  }, []);
  return (
    <div class="experience">
      <canvas class="experience-canvas"></canvas>
    </div>
  );
};

export default ExperienceCanvas;
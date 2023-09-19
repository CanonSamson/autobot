import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


const ThreeDModel = () => {
    const containerRef = useRef();

    const modelObj = "https://pbxt.replicate.delivery/WQ7vkbnen72pDqjNRoe1ESw5VkLqwTxDYcuDoHp1jmRftZKjA/mesh_0.obj"
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const loader = new THREE.OBJLoader();

        loader.load(
            modelObj,
            function (object) {
                scene.add(object);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            function (error) {
                console.error(error);
            }
        );

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }, []);

    return <div ref={containerRef}></div>;
};

export default ThreeDModel;

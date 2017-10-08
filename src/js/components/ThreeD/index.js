import React, { Component } from 'react';
import { css } from 'aphrodite';

import * as Three from 'three';

import { styles } from './styles';

class ThreeD extends Component {
    state = {
        element: false,
    };

    componentDidMount () {
        /*
         * This has to be wrapped in a timeout
         * because clientWidth and clientHeight
         * are wrong unless in a timeout.
         * not sure why
         */
        setTimeout(() => {
            const width = this.canvas.clientWidth;
            const height = this.canvas.clientHeight;

            this.scene = new Three.Scene();
            this.camera = new Three.PerspectiveCamera(
                75,
                width / height,
                0.1,
                1000,
            );

            this.initRenderer(width, height);

            this.canvas.appendChild(this.renderer.domElement);

            this.camera.position.set(0, 1, -5);
            this.camera.lookAt(new Three.Vector3(0, 1));

            this.renderLights();
            this.loadElephant();
            this.renderElephant();

            this.animate();
        }, 1);
    }

    initRenderer (width, height) {
        this.renderer = new Three.WebGLRenderer({
            alpha: true,
            antialias: true,
        });

        this.renderer.setSize(width, height);

        this.renderer.setClearColor(0x000000, 0);
    }


    loadElephant () {
        const loader = new Three.ObjectLoader();
        loader.load('./elephant2.json', (obj) => {
            obj.scale.set(0.4, 0.4, 0.4);
            obj.position.y += 1;
            this.animal = obj;
            this.scene.add(this.animal);
        });
    }

    renderElephant = (geometry, materials) => {
        const material = new Three.MeshFaceMaterial(materials);
        this.animal = new Three.Mesh(geometry, material);
        this.animal.scale.set(0.4, 0.4, 0.4);
        this.animal.position.y += 1;
        this.scene.add(this.animal);
    }

    renderLights () {
        const spotlight = new Three.SpotLight(0xffffff, 1);
        spotlight.position.set(0, 8, -5);
        spotlight.angle = Math.PI / 4;
        spotlight.penumbra = 0.05;
        spotlight.decay = 2;
        spotlight.distance = 200;

        spotlight.castShadow = true;
        spotlight.shadow.mapSize.width = 1024;
        spotlight.shadow.mapSize.height = 1024;
        spotlight.shadow.camera.near = 10;
        spotlight.shadow.camera.far = 200;

        const ambientlight = new Three.AmbientLight(0xffffff, 0.1);

        this.scene.add(spotlight);
        this.scene.add(ambientlight);
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        if (this.animal) {
            this.animal.rotation.y += 0.01;
        }
        this.renderer.render(this.scene, this.camera);
    }

    render = () => (
        <div
            className={css(styles.canvas)}
            ref={r => this.canvas = r}
        />
    );
};

export default ThreeD;

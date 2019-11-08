import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.module.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r108/examples/jsm/loaders/GLTFLoader.js';



function main() {
    let model;


    const width = window.innerWidth;
    const height = window.innerHeight;

    const canvas = document.querySelector('#c');

    const fov = 90;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(1, 1, 1);
    camera.lookAt(0,0,0);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    const renderer = new THREE.WebGLRenderer({canvas});

    //lights
    lights();
    function lights() {
        {
            const skyColor = 0xB1E1FF;  // light blue
            const groundColor = 0xB97A20;  // brownish orange
            const intensity = 1;
            const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
            scene.add(light);
        }

        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(0, 10, 0);
            light.target.position.set(-5, 0, 0);
            scene.add(light);
            scene.add(light.target);
        }
    }



        const gltfLoader = new GLTFLoader();
        const url = './OBAMAPIRAMIDE.glb';
        gltfLoader.load(url, (gltf) => {
            model = gltf.scene;
            scene.add(model);
        });




    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render() {

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
        renderer.render(scene, camera);
        if (model) { model.rotation.y += 0.1;}
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

window.addEventListener('load', function () {
    main();
});

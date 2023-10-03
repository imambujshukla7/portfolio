<script lang="ts">
  import "../styles.css";
  import "@fontsource-variable/outfit";
  import Header from "$lib/components/header.svelte";
  import "@splidejs/svelte-splide/css";
  import Footer from "$lib/components/footer.svelte";

  // @ts-ignore
  import * as THREE from "three";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";

  onMount(() => {
    const container = document.getElementById("threejs-container");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // @ts-ignore
    container.appendChild(renderer.domElement);

    const particles = new THREE.Group();
    scene.add(particles);

    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 100, 100),
        new THREE.MeshBasicMaterial({
          color: Math.random() * 0xffffff,
        }) // Adjust shininess for brightness
      );

      particle.position.x = Math.random() * 10 - 5;
      particle.position.y = Math.random() * 10 - 5;
      particle.position.z = Math.random() * 10 - 5;

      particles.add(particle);
    }

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Adjust intensity for brightness
    directionalLight.position.set(0, 1, 0);

    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.002;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();
  });

  let favicon = $page.data.mainData.favicon;
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div
  id="threejs-container"
  style="pointer-events: none;"
  class="inset-0 z-0 fixed w-full h-full overflow-hidden"
/>

<div class="app z-30 scroll-smooth bg-black font-sans text-nwhite">
  <Header />
  <main>
    <slot />
  </main>

  <Footer />

  <div>
    <a
      href="https://linktr.ee/ambujshukla"
      class="fixed bottom-5 right-[15px] p-2 md:p-3.5 bg-slate-900 border border-nred shadow-2xl drop-shadow-xl z-50 text-white rounded-full hover:scale-110 transition-all duration-300"
      target="_blank"
    >
      <Icon
        icon="mingcute:message-4-fill"
        class=" text-3xl md:text-3xl text-white"
      />
    </a>
  </div>
</div>

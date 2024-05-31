<template>
    <div class="container demo">
        <div class="content">
            <div id="large-header" class="large-header" ref="headerRef">
                <canvas id="demo-canvas"></canvas>
                <h1 class="main-title">Portfolio</h1>
                <p><strong>By</strong>Sarus</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'HeaderAnimation',
    setup() {
        const headerRef = ref<HTMLDivElement | null>(null);

        onMounted(() => {
            if (headerRef.value) {
                const header = headerRef.value;
                const canvas = header.querySelector('#demo-canvas') as HTMLCanvasElement;
                const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
                let mouseX = 0;
                let mouseY = 0;

                // Update mouse coordinates
                header.addEventListener('mousemove', (event) => {
                    mouseX = event.clientX - header.offsetLeft;
                    mouseY = event.clientY - header.offsetTop;
                });

                // Animation loop
                const animate = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // Draw animated elements here, based on mouseX and mouseY

                    requestAnimationFrame(animate);
                };

                animate();
            }
        });

        return {
            headerRef
        };
    }
});
</script>

<style scoped>
.large-header {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #111;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    z-index: 1;
}

.demo .large-header {
    background-image: url("https://images.wallpaperscraft.com/image/single/code_programming_it_152538_1280x720.jpg");
    width: 100%;
}

.main-title {
    position: absolute;
    margin: 0;
    padding: 0;
    color: #F9F1E9;
    text-align: center;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    z-index: 2;
    /* Ensure title appears above canvas */
}

.demo .main-title {
    text-transform: uppercase;
    font-size: 4.2em;
    letter-spacing: 0.1em;
}

.main-title .thin {
    font-weight: 200;
}

@media only screen and (max-width: 768px) {
    .demo .main-title {
        font-size: 3em;
    }
}
</style>
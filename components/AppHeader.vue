<template>
    <div class="container">
        <div class="content">
            <div id="large-header" class="large-header" ref="headerRef">
                <div class="text-content">
                    <h1 class="main-title" data-aos="fade-up">Portfolio</h1>
                    <p data-aos="fade-up" data-aos-delay="200">
                        <strong>By </strong>Sarus
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount } from 'vue';
import AOS from 'aos';

export default defineComponent({
    setup() {
        const headerRef = ref<HTMLElement | null>(null);

        onMounted(() => {
            AOS.init();

            const handleResize = () => {
                AOS.refreshHard();
            };

            window.addEventListener('resize', handleResize);

            // Clean up event listener on unmount
            onBeforeUnmount(() => {
                window.removeEventListener('resize', handleResize);
            });
        });

        return { headerRef };
    },
});
</script>

<style scoped>
.large-header {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.text-content {
    position: absolute;
    top: 50%;
    right: -50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
}

.main-title,
p {
    color: #f9f1e9;
    margin: 0;
}

.main-title {
    font-size: 4.2em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

/* Responsive Styles */
@media only screen and (max-width: 768px) {
    .main-title {
        font-size: 2.5em;
    }

    p {
        font-size: 1em;
    }

    .text-content {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
}

</style>
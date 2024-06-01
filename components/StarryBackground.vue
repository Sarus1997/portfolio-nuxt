<template>
    <div class="stars">
        <div class="star" v-for="n in 100" :key="n"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
    overflow: hidden;
    background-color: #0d1d31;
}

.stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    transform: rotate(-45deg);
}

.star {
    --star-color: #3f3bc1;
    --star-tail-length: 6em;
    --star-tail-height: 2px;
    --star-width: calc(var(--star-tail-length) / 6);
    --fall-duration: 9s;
    --tail-fade-duration: var(--fall-duration);

    position: absolute;
    top: var(--top-offset);
    left: 0;
    width: var(--star-tail-length);
    height: var(--star-tail-height);
    color: var(--star-color);
    background: linear-gradient(45deg, currentColor, transparent);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px currentColor);
    transform: translate3d(104em, 0, 0);
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;
}

.star::before,
.star::after {
    position: absolute;
    content: '';
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: blink 2s linear infinite;
}

.star::before {
    transform: rotate(45deg);
}

.star::after {
    transform: rotate(-45deg);
}

@media screen and (max-width: 750px) {
    .star {
        animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
    }
}

@keyframes fall {
    to {
        transform: translate3d(-30em, 0, 0);
    }
}

@keyframes tail-fade {
    0%, 50% {
        width: var(--star-tail-length);
        opacity: 1;
    }

    70%, 80% {
        width: 0;
        opacity: 0.4;
    }

    100% {
        width: 0;
        opacity: 0;
    }
}

@keyframes blink {
    50% {
        opacity: 0.6;
    }
}

.star:nth-child(1) {
    --star-tail-length: 5em;
    --top-offset: 10vh;
    --fall-duration: 8s;
    --fall-delay: 1s;
}

.star:nth-child(2) {
    --star-tail-length: 6em;
    --top-offset: 20vh;
    --fall-duration: 10s;
    --fall-delay: 2s;
}

.star:nth-child(3) {
    --star-tail-length: 5.5em;
    --top-offset: 15vh;
    --fall-duration: 9s;
    --fall-delay: 3s;
}

/* Add additional star definitions up to 100 */

.star:nth-child(4) {
    --star-tail-length: 6.2em;
    --top-offset: 25vh;
    --fall-duration: 11s;
    --fall-delay: 4s;
}

/* Repeat the pattern until nth-child(100) */
.star:nth-child(100) {
    --star-tail-length: 5.8em;
    --top-offset: 100vh;
    --fall-duration: 10s;
    --fall-delay: 100s;
}
</style>

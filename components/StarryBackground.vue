<template>
    <div class="stars">
        <div class="star" v-for="n in 30" :key="n"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

function getRandomValue(min: number, max: number): string {
    return (Math.random() * (max - min) + min).toFixed(1);
}

onMounted(() => {
    let cssCode: string = '';

    for (let i = 1; i <= 30; i++) {
        let starTailLength: string = getRandomValue(5, 7) + 'em';
        let topOffset: string = getRandomValue(10, 30) + 'vh';
        let fallDuration: string = getRandomValue(6, 12) + 's';
        let fallDelay: string = getRandomValue(1, 10) + 's';

        cssCode += `
.star:nth-child(${i}) {
    --star-tail-length: ${starTailLength};
    --top-offset: ${topOffset};
    --fall-duration: ${fallDuration};
    --fall-delay: ${fallDelay};
}\n`;
    }

    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssCode;
    document.head.appendChild(style);
});
</script>


<style scoped>
.stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 110%; /* เพิ่มความกว้าง */
    height: 120%; /* เพิ่มความสูง */
    transform: rotate(-45deg);
}


.star {
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
    background: linear-gradient(10deg, currentColor, transparent);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px currentColor);
    transform: translate3d(104em, 0, 0);
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;
}

/* Specific star colors resembling real star colors */
.star:nth-child(1) {
    --star-color: #0a94c1;
    color: var(--star-color);
}

.star:nth-child(2) {
    --star-color: #1a75ba;
    color: var(--star-color);
}

.star:nth-child(3) {
    --star-color: #8e8aff;
    color: var(--star-color);
}

.star:nth-child(4) {
    --star-color: #3c67ff;
    color: var(--star-color);
}

.star:nth-child(5) {
    --star-color: #8484ff;
    color: var(--star-color);
}

/* Repeat colors for additional stars */
.star:nth-child(5n+1) {
    --star-color: #0a94c1;
    color: var(--star-color);
}

.star:nth-child(5n+2) {
    --star-color: #1a75ba;
    color: var(--star-color);
}

.star:nth-child(5n+3) {
    --star-color: #8e8aff;
    color: var(--star-color);
}

.star:nth-child(5n+4) {
    --star-color: #3c67ff;
    color: var(--star-color);
}

.star:nth-child(5n+5) {
    --star-color: #8484ff;
    color: var(--star-color);
}

/* Keyframes for animations */
@keyframes fall {
    to {
        transform: translate3d(-45em, 0, 0);
    }
}

@keyframes tail-fade {
    to {
        background: linear-gradient(10deg, transparent, transparent);
    }
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

    0%,
    50% {
        width: var(--star-tail-length);
        opacity: 1;
    }

    70%,
    80% {
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
</style>

<template>
    <div class="stars">
        <div class="star" v-for="n in 50" :key="n"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Stars'
});
</script>

<style lang="scss" scoped>
@function random_range($min, $max) {
    @return $min + floor(random() * ($max - $min + 1));
}

.stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    transform: rotate(-50deg);
    /* overflow: hidden;
    z-index: -1; */
}

.star {
    width: 10px;
    height: 10px;
    background-color: var(--star-color);
    position: absolute;
    top: var(--top-offset);
    left: 50%;
    transform: translateX(-50%);
    animation: fall var(--fall-duration) var(--fall-delay) linear forwards;
    opacity: 0.5;
    filter: blur(2px);
}

@keyframes fall {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translateX(-50%) translateY(calc(100vh + var(--star-tail-length)));
    }
}

.star {
    $star-count: 50;
    --star-color-1: #fff;
    --star-color-2: #ff9a9e;
    --star-color-3: #d7fac4;
    --star-color-4: #fbc2eb;
    --star-color-5: #a18cd1;
    --star-tail-length: 6em;
    --star-tail-height: 1px;
    --star-width: calc(var(--star-tail-length) / 6);
    --fall-duration: 9s;
    --tail-fade-duration: var(--fall-duration);

    position: absolute;
    top: var(--top-offset);
    left: 0;
    width: var(--star-tail-length);
    height: var(--star-tail-height);
    background: linear-gradient(45deg, var(--star-color), transparent);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px var(--star-color));
    transform: translate3d(104em, 0, 0);
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

    @for $i from 1 through $star-count {
        &:nth-child(#{$i}) {
            --star-tail-length: #{calc(random_range(500em, 750em) / 100)};
            --top-offset: #{calc(random_range(0vh, 10000vh) / 100)};
            --fall-duration: #{calc(random_range(6000, 12000) / 1000)}s;
            --fall-delay: #{calc(random(10000) / 1000)}s;
            --star-color: var(--star-color-#{random(5)});
        }
    }

    &::before,
    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: calc(var(--star-width) / -2);
        width: var(--star-width);
        height: 100%;
        background: linear-gradient(45deg, transparent, var(--star-color), transparent);
        border-radius: inherit;
        animation: blink 2s linear infinite;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
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

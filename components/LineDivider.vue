<template>
    <hr :class="classes" data-aos="fade-right" data-aos-duration="1000" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface LineDividerProps {
    color: 'success' | 'warning' | 'danger';
}

const props = defineProps<LineDividerProps>();

const classes = computed(() => {
    return ['line', 'line-' + props.color];
});
</script>

<style scoped>
.line-success {
    width: 250px;
    height: 2px;
    background: linear-gradient(90deg, #ff00dd, #00ffdd, #ddff00);
    background-size: 300% 100%;
    animation: gradientAnimation 3s infinite;
    margin-bottom: 20px;
    margin-left: auto; 
    margin-right: auto; 
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>

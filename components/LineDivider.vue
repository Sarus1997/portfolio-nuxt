<template>
    <hr :class="classes" />
</template>

<script lang="ts" setup>
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
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, #ff00dd, #00ffdd, #ddff00);
    background-size: 300% 100%;
    animation: gradientAnimation 3s infinite;
    margin-bottom: 20px;
    margin-left: 45px;
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

/* Media query for mobile devices */
@media (max-width: 768px) {
    .line-success {
        width: 80px; 
        margin-bottom: 30px; 
        margin-left: 30px;
    }
}

@media (max-width: 480px) {
    .line-success {
        width: 80px; 
        margin-bottom: 30px; 
        margin-left: 30px;
    }
}
</style>

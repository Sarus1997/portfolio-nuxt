<template>
    <div class="container demo">
        <div class="content">
            <div id="large-header" class="large-header" ref="headerRef">
                <canvas id="demo-canvas"></canvas>
                <h1 class="main-title">Portfolio</h1>
                <p><strong>By </strong>Sarus</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style scoped>
.large-header {
    position: relative;
    width: 100%;
    height: 100vh;
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
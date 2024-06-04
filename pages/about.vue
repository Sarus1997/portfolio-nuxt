<template>
    <div class="ccontainer">
        <button class="button">DDDDD</button>
    </div>

</template>

<style scoped>
.ccontainer {
    height: 50vh;
}
button {
    left: 50%;
    right: 50%;
    top: 50%;
    bottom: 50%;
    position: relative;
    display: inline-block;
    background-color: #29d2c4;
    border: 1px solid #000;
    border-radius: 4px;
    width: 150px;
    height: 50px;
}

button:hover .stars {
    display: block;
    filter: drop-shadow(0 0 10px #fffdef);
}
</style>

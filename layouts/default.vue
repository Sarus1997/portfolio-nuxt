<template>
    <StarryBackground />
    <AppNavbar />
    <slot />
    <AppFooter />
</template>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');


/* Importing Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');

/* Applying styles */
* {
    font-family: "IBM Plex Sans Thai", sans-serif;
    font-weight: 400;
    font-style: normal;
}

</style>
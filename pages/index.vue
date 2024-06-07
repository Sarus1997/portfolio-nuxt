<template>
    <AppHeader />
    <div>
        <PersonalInfo />
        <EducationalInfo />
    </div>
</template>

<script lang="ts">
import PersonalInfo from '~/components/content/PersonalInfo.vue';
import EducationalInfo from '~/components/content/EducationalInfo.vue';

export default {
    components: {
        PersonalInfo,
        EducationalInfo,
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "IBM Plex Sans Thai", sans-serif;
    font-weight: 300;
    font-style: normal;
}
</style>
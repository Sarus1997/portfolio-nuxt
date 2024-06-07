<template>
    <section id="profile" class="py-24">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold mb-8" data-aos="fade-up">
                ข้อมูลการศึกษา
            </h2>
            <LineDivider color="success" />
            <div class="container mx-auto">
                
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineComponent({
    name: 'ProfileSection',
    mounted() {
        this.$nextTick(() => {
            AOS.init();
        });
    },
});
</script>

<style lang="scss" scoped>
.profile-item {
    display: flex;
    align-items: center;
}

h2 {
    padding-left: 15px;
    margin-left: 30px;
}

.line-success {
    width: 150px;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .profile-item {
        margin-left: 30px;
    }

    h2 {
        padding-left: 30px;
    }
}

@media (max-width: 480px) {
    .profile-item {
        margin-left: 30px;
    }

    h2 {
        padding-left: 30px;
    }
}
</style>

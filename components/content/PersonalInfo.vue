<template>
    <section id="profile" class="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center" data-aos="fade-up">
                ข้อมูลส่วนตัว
            </h2>
            <LineDivider color="success" />
            <div class="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                <div class="bg-gray-800 rounded-xl shadow-xl overflow-hidden p-4 sm:p-6 lg:p-8">
                    <div class="border-2 border-emerald-200 rounded-lg p-4 sm:p-6 lg:p-8">
                        <div class="bg-gray-900 rounded-lg p-6 sm:p-8 lg:p-10">
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-4">
                                <div class="profile-item">
                                    <i class="mdi mdi-account-badge text-2xl sm:text-3xl text-teal-300 mr-4"></i>
                                    <span class="text-base sm:text-lg"><strong>ชื่อ : </strong>นายสหรัฐ สุวรรณภาพร</span>
                                </div>
                                <div class="profile-item">
                                    <i class="mdi mdi-link text-2xl sm:text-3xl text-teal-500 mr-4"></i>
                                    <span class="text-base sm:text-lg"><strong>ชื่อเล่น : </strong>รุส</span>
                                </div>
                                <div class="profile-item">
                                    <i class="mdi mdi-cake text-2xl sm:text-3xl text-teal-500 mr-4"></i>
                                    <span class="text-base sm:text-lg"><strong>วันเกิด : </strong>12/06/1997</span>
                                </div>
                                <div class="profile-item">
                                    <i class="mdi mdi-pencil text-2xl sm:text-3xl text-teal-500 mr-4"></i>
                                    <span class="text-base sm:text-lg"><strong>เชื้อชาติ : </strong>ไทย</span>
                                </div>
                                <div class="profile-item">
                                    <i class="mdi mdi-flag text-2xl sm:text-3xl text-teal-500 mr-4"></i>
                                    <span class="text-base sm:text-lg"><strong>สัญชาติ : </strong>ไทย</span>
                                </div>
                                <div class="profile-item">
                                    <i class="mdi mdi-star-crescent text-2xl sm:text-3xl text-teal-500 mr-4"></i>
                                    <span class="text-base sm:text-lg"><strong>ศาสนา : </strong>อิสลาม</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
#profile {
    height: 100vh; /* Adjusted height */
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
}

span {
    font-size: 14px;
}

</style>

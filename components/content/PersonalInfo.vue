<template>
    <section id="profile" class="py-24">
        <div class="container mx-auto">
            <h2 class="text-center text-4xl font-bold text-gray-800 mb-8" data-aos="fade-up">
                ข้อมูลส่วนตัว
            </h2>
            <div class="flex flex-col md:flex-row justify-center">
                <div class="md:w-10/12" data-aos="fade-up" data-aos-delay="100">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="profile-item">
                            <i class="tim-icons icon-badge text-2xl text-green-500 mr-4"></i>
                            <span class="text-lg text-gray-800">ชื่อ : นายสหรัฐ สุวรรณภาพร</span>
                        </div>
                        <div class="profile-item">
                            <i class="tim-icons icon-link-72 text-2xl text-green-500 mr-4"></i>
                            <span class="text-lg text-gray-800">ชื่อเล่น : รุส</span>
                        </div>
                        <div class="profile-item">
                            <i class="tim-icons icon-calendar-60 text-2xl text-green-500 mr-4"></i>
                            <span class="text-lg text-gray-800">วันเกิด : 12/06/1997</span>
                        </div>
                        <div class="profile-item">
                            <i class="tim-icons icon-pencil text-2xl text-green-500 mr-4"></i>
                            <span class="text-lg text-gray-800">เชื้อชาติ : ไทย</span>
                        </div>
                        <div class="profile-item">
                            <i class="tim-icons icon-caps-small text-2xl text-green-500 mr-4"></i>
                            <span class="text-lg text-gray-800">สัญชาติ : ไทย</span>
                        </div>
                        <div class="profile-item">
                            <i class="tim-icons icon-satisfied text-2xl text-green-500 mr-4"></i>
                            <span class="text-lg text-gray-800">ศาสนา : อิสลาม</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    mounted() {
        this.$nextTick(() => {
            import('aos/dist/aos.css');
            import('aos').then((AOS) => {
                AOS.default.init();
            });
        });
    },
});
</script>

<style lang="postcss" scoped>
.profile-item {
    @apply flex items-center px-4 py-4 rounded-md shadow-md;
}
</style>
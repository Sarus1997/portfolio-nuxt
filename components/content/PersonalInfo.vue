<template>
    <section id="profile" class="py-24">
        <div class="container mx-auto">
            <h2 class="text-center text-4xl font-bold text-gray-800 mb-8" data-aos="fade-up">
                ข้อมูลส่วนตัว
            </h2>
            <div class="container mx-auto">
                <div class="flex flex-col md:flex-row justify-center">
                    <div class="md:w-10/12" data-aos="fade-up" data-aos-delay="100">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="profile-item">
                                <ui-icon name="mdi-account-badge" class="text-2xl text-green-500 mr-4"></ui-icon>
                                <span class="text-lg text-gray-800">ชื่อ : นายสหรัฐ สุวรรณภาพร</span>
                            </div>
                            <div class="profile-item">
                                <ui-icon name="mdi-link" class="text-2xl text-green-500 mr-4"></ui-icon>
                                <span class="text-lg text-gray-800">ชื่อเล่น : รุส</span>
                            </div>
                            <div class="profile-item">
                                <ui-icon name="mdi-calendar" class="text-2xl text-green-500 mr-4"></ui-icon>
                                <span class="text-lg text-gray-800">วันเกิด : 12/06/1997</span>
                            </div>
                            <div class="profile-item">
                                <ui-icon name="mdi-pencil" class="text-2xl text-green-500 mr-4"></ui-icon>
                                <span class="text-lg text-gray-800">เชื้อชาติ : ไทย</span>
                            </div>
                            <div class="profile-item">
                                <ui-icon name="mdi-flag" class="text-2xl text-green-500 mr-4"></ui-icon>
                                <span class="text-lg text-gray-800">สัญชาติ : ไทย</span>
                            </div>
                            <div class="profile-item">
                                <ui-icon name="mdi-emoticon" class="text-2xl text-green-500 mr-4"></ui-icon>
                                <span class="text-lg text-gray-800">ศาสนา : อิสลาม</span>
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
.profile-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 0.375rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

span {
    font-size: 14px;
}


</style>

<template>
    <section id="profile" class="py-24">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold mb-8" data-aos="fade-up">
                ข้อมูลส่วนตัว
            </h2>
            <LineDivider color="success" />
            <div class="container mx-auto">
                <div class="flex flex-col md:flex-row justify-center">
                    <div class="md:w-10/12" data-aos="fade-up" data-aos-delay="100">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="profile-item">
                                <i class="mdi mdi-account-badge text-2xl text-green-500 mr-4"></i>
                                <span class="text-lg">ชื่อ : นายสหรัฐ สุวรรณภาพร</span>
                            </div>
                            <div class="profile-item">
                                <i class="mdi mdi-link text-2xl text-green-500 mr-4"></i>
                                <span class="text-lg">ชื่อเล่น : รุส</span>
                            </div>
                            <div class="profile-item">
                                <i class="mdi mdi-calendar text-2xl text-green-500 mr-4"></i>
                                <span class="text-lg">วันเกิด : 12/06/1997</span>
                            </div>
                            <div class="profile-item">
                                <i class="mdi mdi-pencil text-2xl text-green-500 mr-4"></i>
                                <span class="text-lg">เชื้อชาติ : ไทย</span>
                            </div>
                            <div class="profile-item">
                                <i class="mdi mdi-flag text-2xl text-green-500 mr-4"></i>
                                <span class="text-lg">สัญชาติ : ไทย</span>
                            </div>
                            <div class="profile-item">
                                <i class="mdi mdi-emoticon text-2xl text-green-500 mr-4"></i>
                                <span class="text-lg">ศาสนา : อิสลาม</span>
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
}

span {
    font-size: 14px;
}

h2 {
    padding-left: 15px;
}

.line-success {
    width: 150px;
    margin-top: 20px;
}
</style>

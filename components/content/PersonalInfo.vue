<template>
    <div class="title">
        <h3 class="mb-3">ข้อมูลส่วนตัว</h3>
        <hr class="line-success" style="width: 150px; margin-top: 20px;">
        <br>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 col-lg-4">
                    <div class="text-lift" data-aos="fade-up">
                        <p><i class="tim-icons icon-badge"></i>&nbsp; &nbsp; ชื่อ : นายสหรัฐ สุวรรณภาพร</p>
                        <p><i class="tim-icons icon-link-72"></i>&nbsp; &nbsp; เชื้อชาติ : ไทย </p>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="text-lift" data-aos="fade-up">
                        <p><i class="tim-icons icon-pencil"></i>&nbsp; &nbsp; ชื่อเล่น : รุส</p>
                        <p><i class="tim-icons icon-caps-small"></i>&nbsp; &nbsp; สัญชาติ : ไทย</p>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="text-lift" data-aos="fade-up">
                        <p><i class="tim-icons icon-calendar-60"></i>&nbsp; &nbsp; วันเกิด : 12/06/1997</p>
                        <p><i class="tim-icons icon-satisfied"></i>&nbsp; &nbsp; ศาสนา : อิสลาม</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    mounted() {
        this.$nextTick(() => {
            import('aos/dist/aos.css'); // Import AOS CSS
            import('aos').then((AOS) => {
                AOS.default.init(); // Initialize AOS
            });
        });
    },
});
</script>

<style scoped>
/* Default styles for the title and content */
.title {
    text-align: center;
    margin-bottom: 20px;
}

.container-fluid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.text-lift {
    margin-bottom: 20px;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
    .container-fluid {
        flex-direction: column;
        align-items: center;
    }

    .col-md-4,
    .col-lg-4 {
        width: 100%;
    }
}
</style>
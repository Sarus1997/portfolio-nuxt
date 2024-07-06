<template>
    <section id="profile" class="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
                ข้อมูลการศึกษา
            </h2>
            <LineDivider class="line-success mx-auto" color="success" />
            <div class="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                <div class="mb-16">
                    <h3 class="text-1xl font-semibold mb-6 flex items-center">
                        <i class="fas fa-graduation-cap mr-3 text-emerald-400"></i>
                        ระดับมัธยมตอนปลาย
                    </h3>
                    <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <UTabs :items="items" :default-index="0" class="education-tabs" />
                    </div>
                </div>
                <div>
                    <h3 class="text-1xl font-semibold mb-6 flex items-center">
                        <i class="fas fa-university mr-3 text-emerald-400"></i>
                        ระดับปริญญาบัณฑิต
                    </h3>
                    <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <UTabs :items="items2" :default-index="0" class="education-tabs" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LineDivider from '@/components/LineDivider.vue';

export default defineComponent({
    setup() {
        const items = ref([
            { label: 'โรงเรียน', icon: 'fas fa-school', content: 'โรงเรียนกำแพงวิทยา' },
            { label: 'สาขา', icon: 'fas fa-language', content: 'ศิลป์ภาษาจีน' },
            { label: 'เกรด', icon: 'fas fa-chart-bar', content: 'GPAX : 2.11' },
        ]);

        const items2 = ref([
            { label: 'มหาวิทยาลัย', icon: 'fas fa-university', content: 'มหาวิทยาลัยวลัยลักษณ์' },
            { label: 'สาขา', icon: 'fas fa-laptop-code', content: 'เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล' },
            { label: 'เกรด', icon: 'fas fa-chart-line', content: 'GPAX : 3.17' },
        ]);

        onMounted(() => {
            AOS.init({
                duration: 1000,
                once: true,
            });
        });

        return {
            items,
            items2,
        };
    },
});
</script>

<style lang="scss" scoped>
#profile {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.education-tabs {
    ::v-deep {
        .u-tabs__header {
            background-color: rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .u-tabs__item {
            color: #ffffff;
            opacity: 0.7;
            transition: all 0.3s ease;
            width: calc(100% / 3); /* Adjust the width to fit all items in one row */

            &:hover,
            &--active {
                opacity: 1;
                background-color: rgba(255, 255, 255, 0.1);
            }
        }

        .u-tabs__content {
            padding: 1.5rem;
            font-size: 1.1rem;
        }
    }

    .line-success {
        justify-content: center;
        width: 200px;
    }
}

@media (max-width: 640px) {
    h2 {
        font-size: 24px;
    }

    h3 {
        font-size: 16px;
    }
}
</style>

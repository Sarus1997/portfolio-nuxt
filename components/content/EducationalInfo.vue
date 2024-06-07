<template>
    <section id="profile" class="py-24" data-aos="fade-up">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold mb-8" data-aos="fade-up">
                ข้อมูลการศึกษา
            </h2>
            <LineDivider color="success" data-aos="fade-up" />
            <div class="container mx-auto" data-aos="fade-up">
                <br>
                <h3><strong>การศึกษา :</strong> ระดับมัธยมตอนปลาย</h3>
                <UTabs :items="items" :default-index="0" data-aos="fade-up" />
                <br>
                <h3><strong>การศึกษา :</strong> ระดับปริญญาบัณฑิต</h3>
                <UTabs :items="items2" :default-index="0" data-aos="fade-up" />
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
            { label: 'โรงเรียน', icon: 'i-heroicons-information-circle', content: 'โรงเรียนกำแพงวิทยา' },
            { label: 'สาขา', icon: 'i-heroicons-information-circle', content: 'ศิลป์ภาษาจีน' },
            { label: 'เกรด', icon: 'i-heroicons-information-circle', content: 'GPAX : 2.11' },
        ]);

        const items2 = ref([
            { label: 'มหาวิทยาลัย', icon: 'i-heroicons-information-circle', content: 'มหาวิทยาลัยวลัยลักษณ์' },
            { label: 'สาขา', icon: 'i-heroicons-information-circle', content: 'เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล' },
            { label: 'เกรด', icon: 'i-heroicons-information-circle', content: 'GPAX : 3.17' },
        ]);

        onMounted(() => {
            AOS.init();
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
    .container {
        padding: 0 10px;
    }

    .UTabs {
        margin: 20px 0;
    }
}

@media (max-width: 768px) {
    #profile {
        h2 {
            padding-left: 30px;
        }

        .container {
            padding: 0 10px;
        }

        .UTabs {
            margin: 20px 0;
        }
    }
}

@media (max-width: 480px) {
    #profile {
        h2 {
            padding-left: 30px;
        }

        .container {
            padding: 0 10px;
        }

        .UTabs {
            margin: 20px 0;
        }
    }
}
</style>

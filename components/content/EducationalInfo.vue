<template>
    <section id="profile" class="py-24">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold mb-8" data-aos="fade-up">
                ข้อมูลการศึกษา
            </h2>
            <LineDivider color="success" />
            <div class="container mx-auto" data-aos="fade-up">
                <br>
                <div class="content-wrapper">
                    <h3><strong>การศึกษา :</strong> ระดับมัธยมตอนปลาย</h3>
                    <UTabs :items="items" :default-index="0" class="blur-background content-wrapper" />
                    <br>
                    <h3><strong>การศึกษา :</strong> ระดับปริญญาบัณฑิต</h3>
                    <UTabs :items="items2" :default-index="0" class="blur-background content-wrapper" />
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
            { label: 'โรงเรียน', icon: 'mdi-school', content: 'โรงเรียนกำแพงวิทยา' },
            { label: 'สาขา', icon: 'mdi-language-chinese', content: 'ศิลป์ภาษาจีน' },
            { label: 'เกรด', icon: 'mdi-numeric-2-box', content: 'GPAX : 2.11' },
        ]);

        const items2 = ref([
            { label: 'มหาวิทยาลัย', icon: 'mdi-school', content: 'มหาวิทยาลัยวลัยลักษณ์' },
            { label: 'สาขา', icon: 'mdi-desktop-mac', content: 'เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล' },
            { label: 'เกรด', icon: 'mdi-numeric-3-box', content: 'GPAX : 3.17' },
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
.profile-item {
    display: flex;
    align-items: center;
}

h2 {
    padding-left: 15px;
    margin-left: 30px;
}

h3 {
    margin-bottom: 5px;
}

.line-success {
    width: 150px;
    margin-top: 20px;
}

.container {
    padding: 0 10px;
}

.UTabs {
    margin: 20px 0;
}

.blur-background {
    backdrop-filter: blur(10px); 
}

.content-wrapper {
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
}


@media (max-width: 768px) {
    .profile-item {
        margin-left: 30px;
    }

    h2 {
        padding-left: 30px;
    }

    .container {
        padding: 0 10px;
    }

    .UTabs {
        margin: 20px 0;
    }

    /* Change icons to 'mdi' for mobile */
    .mdi {
        display: inline-block;
        font-family: "Material Design Icons";
        font-size: 24px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
}

@media (max-width: 480px) {
    .profile-item {
        margin-left: 30px;
    }

    h2 {
        padding-left: 30px;
    }

    .container {
        padding: 0 10px;
    }

    .UTabs {
        margin: 20px 0;
    }

    /* Change icons to 'mdi' for mobile */
    .mdi {
        display: inline-block;
        font-family: "Material Design Icons";
        font-size: 24px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
}
</style>

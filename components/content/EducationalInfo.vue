<template>
    <section id="profile" class="py-24">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold mb-8" data-aos="fade-up">
                ข้อมูลการศึกษา
            </h2>
            <LineDivider color="success" />
            <div class="container mx-auto">
                <div class="pcss3t pcss3t-effect-scale pcss3t-theme-1">
                    <input v-for="(tab, index) in tabs" :key="index" type="radio" name="pcss3t" :id="`tab${index + 1}`" :checked="activeTab === index" @change="activeTab = index">
                    <label v-for="(tab, index) in tabs" :key="index" :for="`tab${index + 1}`"><i :class="tab.icon"></i> {{ tab.title }}</label>
                    <ul>
                        <li v-for="(tab, index) in tabs" :key="index" class="tab-content" :class="{ active: activeTab === index }">
                            <div class="typography">
                                <h1>{{ tab.title }}</h1>
                                <p>{{ tab.content }}</p>
                                <p class="text-right"><em>Find out more about {{ tab.title }} from <a :href="tab.link" target="_blank">Wikipedia</a>.</em></p>
                            </div>
                        </li>
                    </ul>
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
    data() {
        return {
            activeTab: 0,
            tabs: [
                { title: 'Tesla', icon: 'icon-bolt', content: 'Content about Tesla...', link: 'https://en.wikipedia.org/wiki/Nikola_Tesla' },
                { title: 'da Vinci', icon: 'icon-picture', content: 'Content about da Vinci...', link: 'https://en.wikipedia.org/wiki/Leonardo_da_Vinci' },
            ],
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

<template>
    <div class="container">
        <div class="faq-header">FAQ?</div>

        <div class="faq-content">
            <div class="faq-question" v-for="(faq, index) in faqs" :key="index">
                <input :id="'q' + index" type="checkbox" class="panel" v-model="faq.checked">
                <label :for="'q' + index" class="panel-title">
                    <div class="plus">+</div>
                    {{ faq.question }}
                </label>
                <div class="panel-content" v-html="faq.answer"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const faqs = ref([
    {
        question: 'เรียนจบจากมหาวิทยาลัยอะไร',
        answer: '<p>มหาวิทยาลัยวลัยลักษณ์</p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_MObYs_zIkmCVEdiFnqm_224eT42pZGEBw&s" style="width: 100px; height: auto;">',
        checked: false
    },
    {
        question: 'How much wood would a woodchuck chuck?',
        answer: 'A woodchuck would chuck all the wood he could chuck, if a woodchuck could chuck wood!',
        checked: false
    },
    {
        question: 'ชอบสัตว์เลี้ยงประเภทใด',
        answer: 'แมว',
        checked: false
    }
]);

// Watch for changes to faqs to verify reactivity
watch(faqs, (newFaqs) => {
    console.log("FAQs updated:", newFaqs);
}, { deep: true });
</script>

<style scoped>
body {
    color: #333;
    background: #fcfcfc;
    font-family: 'Raleway', sans-serif;
    overflow-x: hidden;
    box-sizing: border-box;
    display: flex;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.faq-header {
    font-size: 42px;
    border-bottom: 1px dotted #ccc;
    padding: 24px;
    text-align: center;
    height: 20vh;
}

.faq-question {
    padding: 20px 0;
    border-bottom: 1px dotted #ccc;
    position: relative;
}

.panel-title {
    font-size: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.panel-title:hover {
    color: rgb(118, 42, 165);
}

.panel-content {
    font-size: 20px;
    padding: 0px 14px;
    margin: 0 40px;
    height: 0;
    overflow: hidden;
    z-index: -1;
    opacity: 0;
    transition: all 0.4s ease;
    color: aqua;
}

.panel:checked~.panel-content {
    height: auto;
    opacity: 1;
    padding: 14px;
}

.plus {
    margin-right: 10px;
    font-size: 42px;
    line-height: 100%;
    user-select: none;
    transition: 0.2s ease;
}

.panel:checked~.panel-title .plus {
    transform: rotate(45deg);
}

.panel {
    display: none;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .faq-header {
        font-size: 36px;
        padding: 20px;
    }

    .panel-title {
        font-size: 22px;
        padding: 10px 10px 0 0;
    }

    .panel-content {
        font-size: 18px;
        margin: 0 30px;
    }

    .plus {
        font-size: 36px;
    }
}

@media (max-width: 480px) {
    .faq-header {
        font-size: 32px;
        padding: 16px;
    }

    .panel-title {
        font-size: 20px;
        padding: 8px 8px 0 0;
    }

    .panel-content {
        font-size: 16px;
        margin: 0 20px;
    }

    .plus {
        font-size: 32px;
    }
}
</style>

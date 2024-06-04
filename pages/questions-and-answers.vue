<template>
    <div class="container">
        <div class="faq-header" data-aos="fade-down">Q&A</div>

        <div class="faq-content">
            <div class="faq-question" v-for="(faq, index) in faqs" :key="index" data-aos="fade-up">
                <input :id="'q' + index" type="checkbox" class="panel" v-model="faq.checked">
                <label :for="'q' + index" class="panel-title">
                    <div class="plus">+</div>
                    {{ faq.question }}
                </label>
                <div class="panel-content" v-html="faq.answer"></div>
            </div>
        </div>
    </div>
    <br>
</template>


<script lang="ts" setup>
import { ref, watch } from 'vue';

const faqs = ref([
    {
        question: 'เรียนจบจากมหาวิทยาลัยอะไร',
        answer: '<p>มหาวิทยาลัยวลัยลักษณ์</p><img src="img/logo/Walailak_University_Logo.png" style="width: 100px; height: auto;">',
        checked: false
    },
    {
        question: 'ทำไมถึงเรียนสาย IT',
        answer: 'ได้รู้จักและทดลองใช้เทคโนโลยีใหม่ๆ รวมไปถึงได้ฝึกเขียน Programming Language และ Framework ใหม่ๆ ',
        checked: false
    },
    {
        question: 'Programming Language ที่ชอบ',
        answer: 'HTML5, CSS3, JavaScript, Python, Golang, C++, Java',
        checked: false
    },
    {
        question: 'JavaScript libraries และ avaScript Frameworks ที่ชอบ',
        answer: 'React.js, Vue.js, Node.js, Next.js, Nuxt.js',
        checked: false
    },
    {
        question: 'Tool Editor ที่ใช้ในการพัฒนาเว็บไซต์',
        answer: 'Visual Studio Code (VS Code)',
        checked: false
    },
    {
        question: 'Notebook brand ที่ชอบ',
        answer: 'MSI',
        checked: false
    },
    {
        question: 'อาชีพที่อยากทำ',
        answer: 'Programmer และ Data Analyst',
        checked: false
    },
    {
        question: 'สัตว์เลี้ยงที่ชอบ',
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
    color: #fcfcfc;
    border-bottom: 1px dotted #ccc;
    padding: 24px;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}


.faq-question {
    padding: 20px 0;
    border-bottom: 1px dotted #ccc;
    position: relative;
}

.panel-title {
    color: #fcfcfc;
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

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
      question: "What university did you graduate from?",
      answer:
        '<p>มหาวิทยาลัยวลัยลักษณ์</p><img src="img/logo/Walailak_University_Logo.png" style="width: 100px; height: auto;">',
      checked: false,
    },
    {
      question: "Why study Information and technology?",
      answer:
        "Get to know and experiment with new technologies, as well as practice writing new programming languages ​​and frameworks.",
      checked: false,
    },
    {
      question: "Favorite programming languages.",
      answer:
        "- HTML5 <br> - CSS3 <br> - JavaScript <br> - Python <br> - Golang <br> - C++ <br> - Java <br> - Dart",
      checked: false,
    },
    {
      question:
        "Favorite language used for database development or backend development.",
      answer: "- SQL <br> - NoSQL ",
      checked: false,
    },
    {
      question: "Favorite Frameworks.",
      answer:
        "- React.js <br> - Vue.js <br> - Node.js <br> - Next.js <br> - Nuxt.js <br> - Angular.js <br> - Laravel <br> - Flutter",
      checked: false,
    },
    {
      question: "Integrated Development Environment Used For Development.",
      answer:
        "- Visual Studio Code (VS Code) <br> - PyCharm <br> - Android Studio",
      checked: false,
    },
    {
      question: "Favorite notebook brand.",
      answer: " - MSI",
      checked: false,
    },
    {
      question: "A career that I like and want to do.",
      answer: "- Programmer <br> - Data Analyst",
      checked: false,
    },
    {
      question: "Favorite pets.",
      answer: "- Cat",
      checked: false,
    },
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

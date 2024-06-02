<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>Portfolio SR</h4>
                    <p>เว็บไซต์นี้จัดทำขึ้นเพื่อ รวบรวมประสบการณ์ทำงานและผลงานที่ได้สร้างสรรค์และออกแบบบไว้</p>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="/questions-and-answers">Q&A</a></li>
                        <li><a href="/policy">Policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>About Me</h4>
                    <ul>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/resume">Resume</a></li>
                        <li><a href="/about">About Me</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <NuxtLink to="https://www.facebook.com/saharat.suwannapapond.7/" class="facebook"><i class="fab fa-facebook-f"></i></NuxtLink>
                        <NuxtLink to="https://x.com/suwannapapond" class="twitter"><i class="fab fa-twitter"></i></NuxtLink>
                        <NuxtLink to="https://www.instagram.com/sr_sarus/" class="instagram"><i class="fab fa-instagram"></i></NuxtLink>
                        <NuxtLink to="https://www.linkedin.com/in/saharat-sarus/" class="linkedin"><i class="fab fa-linkedin-in"></i></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    max-width: 1170px;
    margin: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

ul {
    list-style: none;
}

p {
    color: #bbbbbb;
}

.footer {
    background-color: #24262b;
    padding: 70px 0;
}

.footer-col {
    width: 25%;
    padding: 0 15px;
}

.footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
}

.footer-col {
    position: relative;
}

.footer-col h4 {
    position: relative;
    padding-bottom: 20px;
    /* Adjust as needed to create space for the underline */
}

.footer-col h4::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 2px;
    box-sizing: border-box;
    width: 150px;
    background: linear-gradient(90deg, #ff00dd, #00ffdd, #ddff00);
    background-size: 300% 100%;
    animation: gradientAnimation 3s infinite;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}


.footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
}

.footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
}

.footer-col ul li a:hover {
    color: #3094b0;
    padding-left: 8px;
}

.footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
}

.footer-col .social-links a {
    transition: color 0.3s, background-color 0.3s;
}

.footer-col .social-links a.facebook:hover {
    color: #fff;
    background-color: #3b5998;
    /* Facebook สี */
}

.footer-col .social-links a.twitter:hover {
    color: #fff;
    background-color: #1da1f2;
    /* Twitter สี */
}

.footer-col .social-links a.instagram:hover {
    color: #fff;
    background-color: #e1306c;
    /* Instagram สี */
}

.footer-col .social-links a.linkedin:hover {
    color: #fff;
    background-color: #0077b5;
    /* LinkedIn สี */
}


/*responsive*/
@media(max-width: 767px) {
    .footer-col {
        width: 50%;
        margin-bottom: 30px;
    }
}

@media(max-width: 574px) {
    .footer-col {
        width: 100%;
    }
}
</style>
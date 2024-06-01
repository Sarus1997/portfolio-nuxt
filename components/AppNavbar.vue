<template>
    <header :class="['appbar', { 'appbar-sticky': isSticky }]">
        <div class="container">
            <div class="row">
                <div class="appbar-col logo color-changing-logo">
                    <h1><a href="/"><img src="/favicon.ico" alt="Logo" /></a></h1>
                </div>
                <div class="appbar-col">
                    <nav>
                        <ul class="menu">
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a href="/workings">Workings</a>
                            </li>
                            <li>
                                <a href="/tools">Tools Used</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="appbar-col hamburger">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </div>
    </header>
    <aside class="sidebar">
        <nav>
            <div class="appbar-col logo">
                <h1>SR</h1>
            </div>
            <ul>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/workings">Workings</a>
                </li>
                <li>
                    <a href="/tools">Tools Used</a>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
    name: "AppBar",
    setup() {
        const isSticky = ref(false);

        const handleScroll = () => {
            isSticky.value = window.scrollY > 0;
        };

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);

            const hamburgerElement = document.querySelector(".hamburger i");
            const sidebar = document.querySelector(".sidebar");
            let closeBtn: HTMLElement;

            const handleHamburgerClick = () => {
                if (sidebar && hamburgerElement) {
                    sidebar.classList.toggle("active");
                    if (!closeBtn) {
                        closeBtn = document.createElement("i");
                        closeBtn.classList.add("fas", "fa-times", "close-btn");
                        sidebar.appendChild(closeBtn);
                    }

                    closeBtn.addEventListener("click", handleCloseBtnClick);
                }
            };

            const handleCloseBtnClick = () => {
                if (sidebar) {
                    sidebar.classList.remove("active");
                }
            };

            const handleDocumentClick = (event: MouseEvent) => {
                if (
                    sidebar &&
                    !sidebar.contains(event.target as Node) &&
                    hamburgerElement &&
                    !hamburgerElement.contains(event.target as Node)
                ) {
                    sidebar.classList.remove("active");
                }
            };

            if (hamburgerElement) {
                hamburgerElement.addEventListener("click", handleHamburgerClick);
            }
            document.addEventListener("click", handleDocumentClick as EventListener);

            onUnmounted(() => {
                window.removeEventListener("scroll", handleScroll);
                if (hamburgerElement) {
                    hamburgerElement.removeEventListener("click", handleHamburgerClick);
                }
                document.removeEventListener(
                    "click",
                    handleDocumentClick as EventListener
                );
                if (closeBtn) {
                    closeBtn.removeEventListener("click", handleCloseBtnClick);
                }
            });
        });

        return {
            isSticky,
        };
    },
});

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

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
    align-items: center;
}

ul {
    list-style: none;
}

.appbar {
    padding: 20px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    background-color: transparent;
    transition: background-color 0.3s ease;
}

.appbar-sticky {
    background-color: rgba(6, 19, 53, 0.7);
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
}


.appbar-col {
    flex: 1;
    padding: 0 15px;
}

.appbar-col.logo h1 {
    font-size: 24px;
    color: #ffffff;
    margin: 0;
}

.color-changing-logo {
    width: 50px;
    height: auto;
    border: none;
    text-decoration: none;
    animation: colorChange 3s infinite;
}

@keyframes colorChange {
    0% {
        filter: hue-rotate(0deg);
    }
    33% {
        filter: hue-rotate(120deg);
    }
    66% {
        filter: hue-rotate(240deg);
    }
    100% {
        filter: hue-rotate(360deg);
    }
}

.appbar-col nav ul.menu {
    display: flex;
    justify-content: center;
}

.appbar-col nav ul li {
    margin: 0 15px;
}

.appbar-col nav ul li a {
    font-size: 16px;
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
}

.appbar-col nav ul li a:hover {
    color: #00ffdd;
}

.hamburger {
    display: none;
    cursor: pointer;
}

.hamburger i {
    font-size: 24px;
    color: #ffffff;
}

/* Sidebar styles */
.sidebar {
    position: fixed;
    top: 0;
    right: -250px;
    width: 250px;
    height: 100%;
    background-color: rgba(6, 19, 53, 0.7);
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
    transition: right 0.3s ease;
    z-index: 1001;
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
}

.sidebar.active {
    right: 0;
}

.sidebar nav ul {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
}

.sidebar nav ul li {
    margin: 15px 0;
}

.sidebar nav ul li a {
    color: #ffffff;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
}

.sidebar nav ul li a:hover {
    color: #a51fd2;
}

/* Close button styles */
.close-btn {
    font-size: 24px;
    color: #ffffff;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
}

/* Responsive */
@media(max-width: 990px) {
    .appbar-col {
        flex: 1;
        text-align: center;
    }

    .appbar-col.logo,
    .appbar-col.hamburger {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .appbar-col nav ul.menu {
        display: none;
    }

    .hamburger {
        display: block;
        text-align: right;
    }

    .appbar-col .social-links {
        justify-content: center;
        padding-top: 10px;
    }
}
</style>
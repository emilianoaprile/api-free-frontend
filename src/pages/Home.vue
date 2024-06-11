<script>
// import AppHero from '../components/AppHero.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            name: 'Home',
        }
    }
}
</script>

<template>
    <div class="home">
        <div class="container">
            <header class="home-header">
                <div class="header-logo">
                    <img class="logo" src="/logoGreen.png" alt="">
                </div>
                <router-link :to="{ name: 'AppLogin' }" class="login-link">
                    <button>Login</button>
                </router-link>
                
            </header>
            <section class="hero">
                <h1>Condividi le tue idee e esperienze con il mondo pubblicando i tuoi post in pochi semplici passaggi.</h1>
            </section>
        </div>
    </div>
</template>
<style scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
}

.home-header {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 200px;
    height: 140px;
    display: block;
}

.hero {
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>
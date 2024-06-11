<script>
import axios from 'axios';
import AppPostCard from '../components/AppPostCard.vue';

export default {
    components: {
        AppPostCard,
    },

    data() {
        return {
            posts: [],
            user: {},
            authToken: localStorage.getItem('authToken'),
        };
    },
    methods: {
        fetchPosts() {
            axios
                .get('http://localhost:3000/posts', {
                    headers: {
                        'Authorization': `Bearer ${this.authToken}`
                    }
                })
                .then(response => {
                    this.posts = response.data;

                })
        }
    },
    mounted() {
        this.fetchPosts();
        this.authToken = localStorage.getItem('authToken');
    }
};
</script>
<template>
    <div class="posts-page">
        <header class="home-header">
            <div class="header-logo">
                <img class="logo" src="/logoGreen.png" alt="">
            </div>
            <router-link :to="{ name: 'AppPostCreate' }" class="login-link">
                <button>Crea un post</button>
            </router-link>
        </header>
        <div class="container">
            <div v-if="posts.length > 0">
                <div class="cards">
                    <AppPostCard v-for="post in posts" :key="post.id" :post="post" />
                </div>
            </div>
            <div v-else>
                <p>Nessun post trovato.</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    width: 1000px;
    margin: 0 auto;
}

.home-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 200px;
    height: 140px;
    display: block;
}

.posts-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.posts-page h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.posts-page ul {
    list-style: none;
    padding: 0;
}

.posts-page li {
    margin-bottom: 20px;
}

.posts-page h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.posts-page p {
    margin-bottom: 5px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-items: center;
}
</style>
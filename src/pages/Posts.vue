<template>
    <div class="posts-page">
        <h1>Lista dei Posts</h1>
        <div v-if="posts.length > 0">
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.content }}</p>
                    <p v-if="post.tags.length > 0">
                        <span v-for="(tag, index) in post.tags" :key="index">
                            {{ tag.name }}
                            <!-- Aggiungo una virgola dopo ogni tag, eccetto per l'ultimo -->
                            <span v-if="index < post.tags.length - 1">, </span>
                        </span>
                    </p>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Nessun post trovato.</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            posts: [],
            user: {},
            authToken: localStorage.getItem('authToken'),
        };
    },
    mounted() {
        this.fetchPosts();
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
    created() {
        this.fetchPosts();
    },
    mounted() {
        this.authToken = localStorage.getItem('authToken');
    }
};
</script>

<style scoped>
.posts-page {
    max-width: 800px;
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
</style>
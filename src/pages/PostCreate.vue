<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      image: null,
      content: '',
      categories: [],
      categoryId: null,
      tags: [],
      tagsId: null,
      userId: 1,
      authToken: localStorage.getItem('authToken'),
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/categories', {
          headers: {
            'Authorization': `Bearer ${this.authToken}`
          }
        });
        console.log(response.data);
        this.categories = response.data;
      } catch (error) {
        console.error('Errore durante il recupero delle categorie:', error);
      }
    },

    async fetchTags() {
      try {
        const response = await axios.get('http://localhost:3000/tags', {
          headers: {
            'Authorization': `Bearer ${this.authToken}`
          }
        });
        console.log(response.data);
        this.tags = response.data;
      } catch (error) {
        console.error('Errore durante il recupero delle categorie:', error);
      }
    },

    async createPost() {
      try {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('image', this.image);
        formData.append('content', this.content);
        formData.append('published', true);
        formData.append('categoryId', this.categoryId);
        const selectedTags = [this.tagsId];
        formData.append('tags', JSON.stringify(selectedTags));
        formData.append('userId', this.userId);
        console.log('array tags:', selectedTags)

        const response = await axios.post('http://localhost:3000/posts', formData, {
          headers: {
            'Authorization': `Bearer ${this.authToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchTags();
    this.authToken = localStorage.getItem('authToken');

  }
};
</script>
<template>
  <div class="create-post">
    <h1>Crea un nuovo post</h1>
    <form class="post-form" @submit.prevent="createPost">
      <div class="form-group">
        <label for="title">Titolo:</label>
        <input type="text" id="title" v-model="title" class="form-control">
      </div>
      <div class="form-group">
        <label for="image">Immagine:</label>
        <input type="file" id="image" class="form-control">
      </div>
      <div class="form-group">
        <label for="content">Contenuto:</label>
        <textarea id="content" v-model="content" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="category">Categoria:</label>
        <select id="category" v-model="categoryId" class="form-control">
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="category">Tags:</label>
        <select id="category" v-model="tagsId" class="form-control">
          <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{ tag.name }}</option>
        </select>
      </div>
      <button type="submit">Crea Post</button>
    </form>
  </div>
</template>


<style scoped>
.create-post {
  max-width: 600px;
  margin: 0 auto;
}

.post-form {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
  color: black;
}

.form-group>input,
.form-group>select,
.form-group>textarea {
  background-color: white;
  color: black;
}

.label {
  display: block;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
<template>
    <div class="create-post">
      <h1>Crea un nuovo post</h1>
      <form class="post-form">
        <div class="form-group">
          <label for="title">Titolo:</label>
          <input type="text" id="title" v-model="title" class="form-control">
        </div>
        <div class="form-group">
          <label for="image">Immagine:</label>
          <input type="text" id="image" v-model="image" class="form-control">
        </div>
        <div class="form-group">
          <label for="content">Contenuto:</label>
          <textarea id="content" v-model="content" class="form-control"></textarea>
        </div>
        <div class="form-group">
          <label for="category">Categoria:</label>
          <select id="category" v-model="categoryId" class="form-control">
            <!-- ciclo for per le categorie -->
          </select>
        </div>
        <div class="form-group">
          <label for="tags">Tags:</label>
          <input type="text" id="tags" v-model="tags" class="form-control">
        </div>
        <button type="submit">Crea Post</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        title: '',
        image: '',
        content: '',
        categoryId: null,
        tags: ''
      };
    }
  };
  </script>
  
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

  .form-group > input,
  .form-group > select,
  .form-group > textarea {
    background-color: white;
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
  
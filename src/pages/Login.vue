<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
     data() {
          return {
               name: 'Login',
               email: '',
               password: '',
               authToken: localStorage.getItem('authToken'),
          }
     },
     methods: {
          fetchUser() {
               axios
                    .post('http://localhost:3000/auth/login', {
                         email: this.email,
                         password: this.password,
                    })
                    .then(response => {
                         console.log(response);
                         const token = response.data.token;
                         localStorage.setItem('authToken', token);
                         // reindirizzo alla pagina dei posts
                         this.$router.push({ name: 'AppPosts' });
                    })
                    .catch(error => {
                         console.log(error);
                    })
          }
     },
     created() {
          this.fetchUser(this.email, this.password);
     }
}
</script>

<template>
     <div class="login-page">
          <div class="login-form">
               <h2>Accedi</h2>
               <form @submit.prevent="fetchUser">
                    <div class="form-group">
                         <label for="email">Email:</label>
                         <input type="email" id="email" v-model="email" required>
                    </div>
                    <div class="form-group">
                         <label for="password">Password:</label>
                         <input type="password" id="password" v-model="password" required>
                    </div>
                    <button type="submit">Accedi</button>
               </form>
          </div>
     </div>
</template>
<style scoped>
.container {
     max-width: 1000px;
     margin: 0 auto;
}

.login-header {
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
</style>
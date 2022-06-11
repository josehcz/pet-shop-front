<template>
  <form @submit.prevent="login">  
    <h2>Login</h2>
    <p>
      <label for="username">Usuário</label>
      <input type="text" id="username" required autofocus v-model="nome">
    </p>
    <p>
      <label for="inputPassword">Senha</label>
      <input type="Password" id="inputPassword" required autofocus v-model="senha">
    </p>
    <button type="submit">OK</button>
  </form>
</template>


<script>
import router from '@/router';
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
  name: 'HomeView',
  data() {
    return {
      nome: '',
      senha: ''
    }
  },
  methods: {
    ...mapMutations([
      'setUsuario',
      'setSenha'
    ]),
    login() {
      axios.post('/login',
      { username: this.nome, password: this.senha, headers: {"Content-Type": 'application/json'}})
      .then(res => {
        this.sucesso(res);
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 403) {
          console.log('Usuario ou senha invalida');
        }
      });
    },
    sucesso(res) {
      let AAAAAAAA = res.data.username;
      localStorage.setItem("Authorization", res.data.token);
      console.log(res);
      axios.get('/usuario?nome='+res.data.username,
       {headers: {"Content-Type": 'application/json', "Authorization":res.data.token}})
      .then(res => {
        for (let i in res.data){
          if (res.data[i].nome === AAAAAAAA){
            if (res.data[i].autorizacoes[0].nome === 'ROLE_ADMIN'){
              router.push('/admin')
            }
            else if (res.data[i].autorizacoes[0].nome === 'ROLE_FUNCIONARIO')
            router.push('/funcionario')
          }
        }
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 403) {
          console.log('Usuario ou senha invalida');
        }
      });
    }
  }
}
</script>
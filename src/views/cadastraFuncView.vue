<template>
 <form @submit.prevent="cadastraFunc">  
    <h2>Cadastro do Funcionario</h2>
    <p>
      <label for="username">Usuário</label>
      <input type="text" id="username" required autofocus v-model="nome">
    </p>
    <p>
      <label for="inputPassword">Senha</label>
      <input type="text" id="inputPassword" required autofocus v-model="senha">
    </p>
    <button type="submit">Cadastrar Funcionario</button>
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
    cadastraFunc() {
      axios.post('/funcionario',
      { nome: this.nome, senha: this.senha, headers: {"Content-Type": 'application/json', "Authorization":localStorage.getItem("Authorization")}})
      .then(router.push('/admin'))
      .catch(error => {
        console.log(error);
        if (error.response.status === 403) {
          console.log('Erro no cadastro');
        }
      });
    },
    }
  }
</script>
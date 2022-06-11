<template>
 <form @submit.prevent="cadastraCliente">  
    <h2>Cadastro do Funcionario</h2>
    <p>
      <label for="username">Cliente</label>
      <input type="text" id="username" required autofocus v-model="nome">
    </p>
    <p>
      <label for="inputPassword">Pet</label>
      <input type="text" id="inputPassword" required autofocus v-model="pet">
    </p>
    <button type="submit">Cadastrar Cliente</button>
</form>
</template>


<script>
import router from '@/router';
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      'setUsuario',
      'setSenha'
    ]),
    cadastraCliente() {
      axios.post('/cliente',
      { nome: this.nome, pet: this.pet, headers: {"Content-Type": 'application/json', "Authorization":localStorage.getItem("Authorization")}})
      .then(router.push('/funcionario'))
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
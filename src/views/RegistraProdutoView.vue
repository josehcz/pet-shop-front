<template>
 <form @submit.prevent="cadastraFunc">  
    <h2>Cadastro do Funcionario</h2>
    <p>
      <label for="username">Produto</label>
      <input type="text" id="username" required autofocus v-model="produto">
    </p>
    <p>
      <label for="value">Valor</label>
      <input type="text" id="value" required autofocus v-model="valor">
    </p>
    <button type="submit">Registrar Produto</button>
</form>
</template>


<script>
import router from '@/router';
import axios from 'axios';

export default {
  methods: {
    cadastraFunc() {
      axios.post('/produto',
      { produto: this.produto, valor: this.valor, headers: {"Content-Type": 'application/json', "Authorization":localStorage.getItem("Authorization")}})
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
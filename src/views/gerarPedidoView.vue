<template>
 <form @submit.prevent="geraPedido">  
    <h2>Gerar Pedido</h2>
    <p>
      <label for="username">Cliente</label>
      <input type="text" id="username" required autofocus v-model="nome">
    </p>
    <p>
      <label for="text">Pedido</label>
      <input type="text" id="text" required autofocus v-model="pedido">
    </p>
    <p>
      <label for="text">Valor</label>
      <input type="text" id="text" required autofocus v-model="gasto">
    </p>
    <button type="submit">Gerar Pedido</button>
</form>
</template>


<script>
import router from '@/router';
import axios from 'axios';

export default {
  methods: {
    geraPedido() {
      axios.post('/pedido',
      { nome: this.nome, pedido: this.pedido, gasto: this.gasto, headers: {"Content-Type": 'application/json', "Authorization":localStorage.getItem("Authorization")}})
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
<template>
<h2>Bem vindo</h2>
 <form @submit.prevent="cadastraFunc">  
    <button type="submit" style = "margin-bottom: 20px">Cadastrar Cliente</button>
</form>
 <form @submit.prevent="gerarPedido">  
    <button type="submit" style = "margin-bottom: 20px">Gerar pedido</button>
</form>
<form @submit.prevent="venda">  
    <button type="submit" style = "margin-bottom: 20px">Realizar Venda de Produto</button>
</form>
 <form @submit.prevent="deslogar">  
    <button type="submit">Deslogar</button>
</form>
</template>


<script>
import router from '@/router';
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      'setUsuario',
      'setSenha'
    ]),
    cadastraFunc() {
      router.push('/cadastraCliente')
    },
    gerarPedido() {
        router.push('/gerarPedido')
    },
    venda() {
        router.push('/venda')
    },
    deslogar() {
        router.push('/login')
    }
    }
  }
</script>
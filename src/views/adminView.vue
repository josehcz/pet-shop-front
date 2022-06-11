<template>
<h2>Bem vindo</h2>
 <form @submit.prevent="cadastraFunc">  
    <button type="submit" style = "margin-bottom: 20px">Cadastrar Funcionario</button>
</form>
 <form @submit.prevent="deslogar">  
    <button type="submit">Deslogar</button>
</form>
</template>


<script>
import router from '@/router';
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
      router.push('/cadastraFunc')
    },
    deslogar() {
        router.push('/login')
    }
    }
  }
</script>
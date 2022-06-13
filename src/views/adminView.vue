<template>
<h2>Bem vindo</h2>
 <form @submit.prevent="cadastraFunc">  
    <button type="submit" style = "margin-bottom: 20px">Cadastrar Funcionario</button>
</form>
 <form @submit.prevent="registraProd">  
    <button type="submit" style = "margin-bottom: 20px">Registrar Produto</button>
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
      router.push('/cadastraFunc')
    },
    registraProd() {
      router.push('/registraProd')
    },
    deslogar() {
        router.push('/login')
    }
    }
  }
</script>
<template>
<h2>Realizar Vendas</h2>
<p>
<label >Cliente</label>
<select v-model="clientes" style = "margin-left: 20px">
  <option v-for = "cliente in clientes" :key="cliente">{{cliente}}</option>
</select>
</p>
<p>
<label >Produto</label>
<select v-model="produtos" style = "margin-left: 20px">
  <option v-for = "prod in produtos" :key="prod">{{prod}}</option>
</select>
</p>

 <form @submit.prevent="realizarVenda">  
    <button type="submit">Finalizar</button>
</form></template>

<script>
import axios from 'axios';

export default {
    data() {
  return {
  clientes:[],
  produtos:[]
  }
},
  created(){
    this.buscarClientes(),
    this.buscarProdutos()
  },
   methods: {
    realizarVenda(){

    },
    buscarClientes(){
    axios.get('/cliente/busca',
    {headers: {"Content-Type": 'application/json', "Authorization":localStorage.getItem("Authorization")}})
    .then(res => {
      for (let i of res.data){
      this.clientes.push(i.nome)
      }
    })
    .catch(error => {
        console.log(error);
        if (error.response.status === 403) {
          console.log('Usuario ou senha invalida');
        }
      });
    },
    buscarProdutos(){
    axios.get('/produto/busca',
    {headers: {"Content-Type": 'application/json', "Authorization":localStorage.getItem("Authorization")}})
    .then(res => {
        console.log(res.data)
      for (let i of res.data){
        let prod = i.produto + " " + i.valor
        this.produtos.push(prod)
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
import { createStore } from 'vuex'
import VuexPersist from'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

export default createStore({
  plugins: [
    vuexPersist.plugin
  ],

  state: {
    usuario: '',
    senha: ''
  },
  getters: {
    soma (state) {
      return state.numero1 * 1 + state.numero2 * 1
    },
    subtracao (state) {
      return state.numero1 -state.numero2
    },
    multiplicacao: state => {
      return state.numero1 * state.numero2
    }
  },
  mutations: {
    setUsuario (state, valor) {
      state.usuario = valor;
    },
    setSenha (state, valor) {
      state.senha = valor;
    }
  },
  actions: {
    setNumero2Delay (context, valor) {
      setTimeout(() => {
        context.commit('setNumero2', valor)
      }, 1000)
    }
  },
  modules: {
  }
})

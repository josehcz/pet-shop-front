import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import( '../views/adminView.vue')
  },
  {
    path: '/cadastraFunc',
    name: 'CadastraFunc',
    component: () => import( '../views/cadastraFuncView.vue')
  },
  {
    path: '/registraProd',
    name: 'RegistraProd',
    component: () => import( '../views/RegistraProdutoView.vue')
  },
  {
    path: '/venda',
    name: 'Venda',
    component: () => import( '../views/vendaView.vue')
  },
  {
    path: '/cadastraCliente',
    name: 'CadastraCliente',
    component: () => import( '../views/cadastraClienteView.vue')
  },
  {
    path: '/gerarPedido',
    name: 'GerarPedido',
    component: () => import( '../views/gerarPedidoView.vue')
  },
  {
    path: '/funcionario',
    name: 'Funcionario',
    component: () => import( '../views/funcionarioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    next()
  } 
)

export default router

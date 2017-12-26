import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'

const SecondComponent = () => import(/* webpackChunkName: 'SecondComponent' */ '../components/SecondComponent')
const ThirdComponent = () => import(/* webpackChunkName: 'ThirdComponent' */ '../components/ThirdComponent')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/second',
      name: 'SecondComponent',
      component: SecondComponent
    },
    {
      path: '/third',
      name: 'ThirdComponent',
      component: ThirdComponent
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import IndexMain from '@/components/main'
import diogCenter from '@/components/diogCenter'
import TabMain from '@/components/tabMain'
import partyList from '@/components/page/partyList'
import addParties from '@/components/parties/addParties'
import newParties from '@/components/parties/newAgent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabMain',
      component: TabMain,
      redirect:'/indexMain',
      children:[
        {
          path: '/indexMain',
          name: 'indexMain',
          component: IndexMain
        },{
          path: '/partyList',
          name: 'partyList',
          component: partyList,
        },{
          path: '/addParties',
          name: 'addParties',
          component: addParties,
          children: [
            {
              path: '/newParties',
              name: 'newParties',
              component: newParties,
            }
          ]
        }
      ]
    }
  ]
})

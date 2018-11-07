import Vue from 'vue'
import Router from 'vue-router'
import Classify from '@/view/Classify'
import ClassifyDetail from '@/view/Classify/detail.vue'
import ClassifySecond from '@/view/Classify/second.vue'
import ClassifyBook from '@/view/Classify/books.vue'
import Rank from '@/view/Rank'
import RankDetail from '@/view/Rank/detail.vue'
import RankSecond from '@/view/Rank/second.vue'
import RankRead from '@/view/Rank/read.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/Classify',
    },
    {
      path: '/Classify',
      component: Classify,
      children:[
        {
          path:'/Classify/:type/:name',
          component:ClassifyDetail,
          children:[
            {
              path:'/Classify/:type/:name/:_id',
              component:ClassifySecond,
              children:[
                {
                  path:'/Classify/:id',
                  component:ClassifyBook,
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/Rank',
      component: Rank,
      children:[
        {
          path:'/Rank/:_id',
          component:RankDetail,
          children:[
            {
              path:'/Rank/1/:_id',
              component:RankSecond,
            }
          ]
        }
      ]
    }
  ]
})

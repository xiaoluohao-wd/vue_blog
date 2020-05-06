import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Article from '../components/article.vue'
import ArticleDetail from '../components/articleDetail.vue'
import Shuoshuo from '../components/shuoshuolist.vue'
import SHuoshuoDetail from '../components/shuoshuoDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Index,
    redirect:'/index/article',
    children:[
      {path:'/index/article',component:Article},
      {path:'/index/articleDetail',component:ArticleDetail},
      {path:'/index/shuoshuo',component:Shuoshuo},
      {path:'/index/shuoshuoDetail',component:SHuoshuoDetail}
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router

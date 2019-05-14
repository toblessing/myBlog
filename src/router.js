import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home'
import catgory from './components/catgory'
import timeLine from './components/timeLine'
import about from './components/about'

Vue.use(Router)

var router =new Router({
    routes: [
        { 
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta:{
                title:'首页'
            }
        },
        {
            path: '/catgory',
            name: 'catgory',
            component: catgory,
            meta:{
                title:'分类'
            }
        },
        {
            path: '/timeLine',
            name: 'timeLine',
            component: timeLine,
            meta:{
                title:'时间线'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: about,
            meta:{
                title:'关于我'
            }
        }
        
    ]
    
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = "MyBlog • "+to.meta.title
    }
    next()
  })
export default router

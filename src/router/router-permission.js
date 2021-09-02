import router from './index'
import store  from '../store'
import Element from 'element-ui'
//全局守卫
router.beforeEach((to,from,next)=>{
    //1.进入守卫-判断是否有token
    if(!store.state.loginModule.token){
        if (to.matched.length > 0 && !to.matched.some(item => item.meta.isLogin)) { // 判断用户是否需要登陆
            // 不需要登陆直接跳转
            next();
        } else {
            // 未登陆
            // Maximum call stack size exceeded,越界
            next("/login")
        }
    }else{
        console.log('登陆了');
         if(store.state.routeModule.menuList.length <=0){
           console.log('没有导航数据--需要获取动态导航');
           store.dispatch('routeModule/getActionsRoutes').then(res=>{
             next({
               path:to.path
             })
           })
          // next()

         }else{
           console.log('有导航');
           //判断:进入的页面是否是登陆的界面 如果是登陆界面 返回首页
           if(to.path !=='/login'){
            next()
           }else{
             //进入登录界面
             console.log('element',Element);
             Element.Message.error('你错了')
             next(from.path)
           }    
         }
  
    }

   
  
  })
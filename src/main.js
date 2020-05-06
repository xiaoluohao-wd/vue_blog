import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
import axios from 'axios'
Vue.config.productionTip = false
//配置axios
Vue.prototype.$http=axios
axios.defaults.baseURL=`http://localhost:3000/`
//格式化时间的过滤器
Vue.filter('dateFormat',function(originVal){
  if(originVal){
    const index =originVal.indexOf('T')
    const ymd = originVal.slice(0,index)
    const index1 =originVal.indexOf('Z')
    const time =originVal.slice(index+1,index1-4)
    let hour=time.slice(0,2)*1+8
    let ms=time.slice(2)
    if(hour>=24){
    hour='0'+(hour-24)+''
    }
    return `${ymd}-${hour}${ms}`
  }
  
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

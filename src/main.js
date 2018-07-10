import "babel-polyfill";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
import './assets/reset.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import {tj} from '../src/utils/tj'
import api from '../src/api/index'

// axios.defaults.headers.common['Authorization'] = "Bearer 4aa7929b-843a-49aa-aac1-85fa536afcee";
axios.interceptors.request.use(  
    config => {  
        if(config.method=='post'){  
            config.data = {  
                ...config.data,  
                _t: Date.parse(new Date())/1000,  
            }  
        }else if(config.method=='get'){  
            config.params = {  
                _t: Date.parse(new Date())/1000,  
                ...config.params  
            }  
        }  
        return config  
    },function(error){  
        return Promise.reject(error)  
    }  
) 

Vue.prototype.$tj = tj
Vue.prototype.$api = api
Vue.prototype.$get = axios.get
Vue.prototype.$post = axios.post


Vue.use(VueAxios,axios);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

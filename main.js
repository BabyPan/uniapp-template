import Vue from 'vue'
import App from './App'
import requestConfig from "@/libs/config/request";
import "./libs/config/plugins";

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})

// uviex request请求配置
Vue.use(requestConfig, app);

app.$mount()

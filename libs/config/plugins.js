import Vue from "vue";
import rmgFormat from "../function/rmbFormat";
import getCurrentRoute from "../function/getCurrentRoute";
import mixin from "../mixin/mixin";
import store from "../../store";
import "../filter";
import { toast, success, loading, hideLoading } from "../function/toast";

Vue.filter("rmgFormat", (money) => {
  return rmgFormat(money);
});

Vue.prototype.$x = {
  rmgFormat,
  getCurrentRoute,
  toast,
  success,
  loading,
  hideLoading,
};

Vue.prototype.$store = store;
const app = new Vue({
  store,
});

Vue.mixin(mixin); // 注入全局混入

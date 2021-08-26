/**
 * @author Vex
 * @description uview request 自定义配置(uview request文档地址：https://www.uviewui.com/js/http.html)
 */

import { apiBaseURL } from "../config/setting";

const install = (Vue, vm) => {
  // 请求配置
  Vue.prototype.$u.http.setConfig({
    baseUrl: apiBaseURL,
    originalData: true,
    loadingTime: 500,
    header: {
      contentType: "application/json;charset=UTF-8",
    },
  });

  // 请求拦截
  Vue.prototype.$u.http.interceptor.request = (config) => {
    // 引用token
    config.header.Authorization = vm.$store.getters["user/accessToken"];
  };

  // 响应拦截
  Vue.prototype.$u.http.interceptor.response = (res) => {
    if (res.statusCode == 200) {
      if (res.data.OperationStatus) {
        // 是否操作成功
        return res.data;
      } else {
        // 操作失败提示
        vm.$x.toast(res.data.Msg || res.data.Message || "接口出错，请稍后重试");
        return false;
      }
    } else if (res.statusCode == 401) {
      vm.$x.toast("验证失败，请重新登录", 1500, () => {
        // 清空失效token
        vm.$store.dispatch("user/logout");
        // 判断是否当前路由是登录页面，防止两个同时请求鉴权失败时重复跳转登录页面
        // if (vm.$x.getCurrentRoute() != "pages/login/index") {
        //   vm.$u.route({
        //     url: "/pages/login/index",
        //     type: "reLaunch",
        //   }); // 跳转登录页面
        // }
      });
      // Vue.prototype.$store.dispatch("user/logout");
      return false;
    } else {
      console.log("服务器错误：", res);
      vm.$x.toast(`服务器错误，请稍后重试`);
      return false;
    }
  };
};

export default {
  install,
};

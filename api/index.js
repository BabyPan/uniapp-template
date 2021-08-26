import http from "../uview-ui/libs/request";

// 授权手机号码登录
export function weAppLogin(data = {}) {
  return http.post("User/WeAppLogin", data);
}
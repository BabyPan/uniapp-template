import { tokenName } from "@/libs/config/setting";

const state = {
  accessToken: uni.getStorageSync(tokenName),
}

const getters = {
  accessToken: (state) => state.accessToken
}

const mutations = {
  setAccessToken: (state, accessToken) => {
    uni.setStorageSync(tokenName, accessToken);
    state.accessToken = accessToken;
  }
}

const actions = {
  async login({ commit }, accessToken) {
    // 登录处理
    commit("setAccessToken", base64Token);
  }
}

export default { state, getters, mutations, actions }
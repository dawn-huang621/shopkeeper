import { createStore } from 'vuex';
import axios from 'axios';

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      test: 'ijijiji'
    }
  },
  mutations: {
    // 定义更改状态的方法
  },
  actions: {
    // 定义操作
    login(){
    }
  }
})
export default store;

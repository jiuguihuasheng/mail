import {ADD_CART, ADD_COUNTER} from './mutations-type';

const actions = {
  [ADD_CART]({state, commit}, payload) {
    console.log(payload);
    // 1.查看是否添加过
    const oldInfo = state.cartList.find(item => item.id === payload.id)

    // 2.+1或者新添加
    if (oldInfo) {
      commit(ADD_COUNTER, oldInfo)
    } else {
      payload.count = 1
      payload.checked = true
      commit(ADD_CART, payload)
    }
  }
}

export default actions


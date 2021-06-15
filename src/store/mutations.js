import {ADD_CART, ADD_COUNTER} from './mutations-type';

const mutations = {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_CART](state, payload) {
    state.cartList.push(payload)
  }
}

export default mutations


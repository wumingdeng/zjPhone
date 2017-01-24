import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
const initialState = {
  userinfo: {
      id:-1,
      Chips:-1,
      Rank:-1,
      left:0
  },
  mysubs:[],
  isLogged:false
}

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
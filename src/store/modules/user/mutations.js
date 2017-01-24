import {
  LOGIN,
  GETSUBS,
  ADDUSR,
  MODMONEY
} from './mutation-types'
import g from '../../../globals/global'
const mutations = {
  [LOGIN] (state, uuserinfo) {
    state.userinfo = uuserinfo
    state.isLogged = true
    g.isLogged = true
  },
  [GETSUBS] (state,subs){
    state.mysubs = subs.res
  },
  [ADDUSR] (state,newSub){
    var obj = {
      Id:newSub.Id,
      Chips:newSub.Chips,
      Username:newSub.Username
    }
    state.mysubs = state.mysubs.concat(obj)
    state.userinfo.Chips = newSub.Left
  },
  [MODMONEY] (state,data){
    state.userinfo.Chips = data.setter
    for(var i=0;i<state.mysubs.length;i++){
      if(state.mysubs[i].Id === data.receiverid){
        state.mysubs[i].Chips = data.receiver
        break
      }
    }
  }
}

export default mutations

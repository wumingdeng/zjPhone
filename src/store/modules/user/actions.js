import { http } from 'vue'
import {
  LOGIN,
  GETSUBS,
  ADDUSR,
  MODMONEY,
  GETTAX,
  RECVTAX
} from './mutation-types'

import g from '../../../globals/global'
export function getUserLogin ({commit, state},self) {
    self.$http.post(g.debugUrlPrefix+'/UserLogin',
        {"username":self.nameStr,"password":self.passStr}).then((response) => {
        // success callback
        self.$f7.hidePreloader()
        if(response.body.err){
          self.$f7.alert("wrong password","error")
        }else{
          commit(LOGIN, response.body)
          g.r.push('main')
        }       
      }, (response) => {
        // error callback
        self.$f7.hidePreloader()
        self.$f7.alert("error occur","error")
      });
}

export function getUserSubs ({commit, state},self) {
    self.$http.post(g.debugUrlPrefix+'/GetMySub',
        {"id":state.userinfo.id}).then((response) => {
        // success callback
        self.$f7.hidePreloader()
        if(response.body.err){
          self.$f7.alert("wrong data","error")
        }else{
          commit(GETSUBS, response.body)
        }
      }, (response) => {
        // error callback
        self.$f7.hidePreloader()
        self.$f7.alert("error occur","error")
    });
}

// 1.action函数除了{commit, state}，后面只有一个传入参数
export function onChangePass ({commit, state},self) {
    self.$http.post(g.debugUrlPrefix+'/ChangeUserPass',
        {"id":state.userinfo.id,"ori":self.oriPass,"newp":self.newPass}).then((response) => {
        // success callback
        self.$f7.hidePreloader()
        if(response.body.err){
          self.$f7.alert("wrong data","error")
        }else{
          self.$f7.addNotification({title:"done",hold:700}) 
        }
      }, (response) => {
        // error callback
        self.$f7.hidePreloader()
        self.$f7.alert("error occur","error")
    });
}

// 增加下线
export function onAddSub ({commit, state},self) {
  let money = parseInt(self.money) || 0
  self.$http.post(g.debugUrlPrefix+'/UserAdd',
        {"sourceId":state.userinfo.id,
        "rank":state.userinfo.Rank+1,
        "username":self.usrName,
        "password":self.newPass,"chips":money}).then((response) => {
        // success callback
        self.$f7.hidePreloader()
        if(response.body.err){
          if(response.body.err==2){
            self.$f7.alert("用户名已存在","error")
          }else{ 
            self.$f7.alert("其他数据错误","error")
          }
        }else{
          self.$f7.addNotification({title:"done",hold:700}) 
          commit(ADDUSR, response.body)
        }
      }, (response) => {
        // error callback
        self.$f7.hidePreloader()
        self.$f7.alert("error occur","error")
    });
}

// 修改下线钱
export function modSubMoney ({commit, state},self) {
  let money = parseInt(self.money) || 0
  if(money === 0){
      self.$f7.hidePreloader()
      return
  }
  self.$http.post(g.debugUrlPrefix+'/UserModChips',
        {"id":state.userinfo.id,
        "tarId":self.thissub_id,
        "chips":money}).then((response) => {
        // success callback
        self.$f7.hidePreloader()
        if(response.body.err){
          self.$f7.alert("数据错误","error")
        }else{
          self.$f7.addNotification({title:"done",hold:700}) 
          // self.money = ''
          commit(MODMONEY, response.body)
        }
      }, (response) => {
        // error callback
        self.$f7.hidePreloader()
        self.$f7.alert("error occur","error")
    });
}

// 查询抽水
export function queryTaxMoney ({commit, state},self) {
  self.$http.post(g.debugUrlPrefix+'/GetDailiTax',
        {"id":self.thissub_id}).then((response) => {
        // success callback
        self.$f7.hidePreloader()
        if(response.body.err){
          self.$f7.alert("数据错误","error")
        }else{
          self.backTax = response.body.d
        }
      }, (response) => {
        // error callback
        self.$f7.hidePreloader()
        self.$f7.alert("error occur","error")
    });
}

// 获取抽水
export function getTaxMoney ({commit, state},self) {
  self.$http.post(g.debugUrlPrefix+'/DailiGetChips',
        {"id":self.thissub_id}).then((response) => {
        // success callback
        self.$f7.hidePreloader()
        if(response.body.err){
          self.$f7.alert("数据错误","error")
        }else{
          self.backTax = 0
        }
      }, (response) => {
        // error callback
        self.$f7.hidePreloader()
        self.$f7.alert("error occur","error")
    });
}
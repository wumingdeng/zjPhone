const errorTitle='error'
const emptyInput='输入不能为空'
export const ERROR_EMPTY_INPUT = 1
export const ERROR_MSG = {
  1:emptyInput
}
export function fuckingUgly(self,page,done,url){
      self.$f7.showPreloader()
      self.$http.post(url,
        {"id":self.uid,
        "page":page}).then((response) => {
        // success callback
        self.$f7.hidePreloader()
        if(response.body.err){
          if(response.body.err==2){
            self.$f7.alert("错误发生了","error")
          }else{ 
            self.$f7.alert("其他数据错误","error")
          }
        }else{
            if(response.body.ok.length>0){
                self.page++
                self.records = self.records.concat(response.body.ok)
            }
            
            self.totalpay = response.body.total
        }
        if(done){
            done()
        }
      }, (response) => {
        // error callback
        if(done){
            done()
        }
        self.$f7.hidePreloader()
        self.$f7.alert("error occur","error")
    });
}
// GLOBAL ROUTER ACCESS DEFAULT
// 1.if you use import xx from thismodule,will use default
// 2.if you use import {xx} from this module,will use the varible have name of xx and will be read only
// 3.if you use import * as xx from thismoudele,will use all as one object name xx
export default {
  r:{},
  debugUrlPrefix:'http://localhost:3001/'
}
<template>
    <f7-page>
        <f7-navbar sliding>
            <f7-nav-left>
                <f7-link icon="icon-back" @click="onBack"></f7-link>
            </f7-nav-left>
            <f7-nav-center title="项目评价结果"></f7-nav-center>
        </f7-navbar>
        <f7-list>
            <f7-list-item
                v-for="_o in outs"
                :title="_o.n"
                :badge="_o.v"
                badge-color="red"
            ></f7-list-item>
        </f7-list>
        <f7-col style="width:70%;margin-left:50px"><f7-button big fill color="green" @click='modifyDetail'>调整指标</f7-button></f7-col>
    </f7-page>
</template>

<script>
    import g from '../../globals/global'
	export default {
        data(){
			return {
                projectName:"",
                outs:[]
            }
	    },
		methods:{
            getProjectByName:function(_pn){
                this.$http.post(g.debugUrlPrefix+'manageProject/getProjectByName',
                    {pn:_pn}).then((response) => {
                    // success callback
                    if(response.body.err){
                        this.$f7.alert("wrong password","error")
                    }else{
                       var _out = response.body.rows.out
                       this.sortDisplayData(_out)
                       
                    }       
                }, (response) => {
                    this.$f7.alert("error occur","error")
                });
            },
            cp:function(_v,isPer){
                if(isPer)   
                    return (Number(_v)*100).toFixed(2) + "%"
                else
                    return Number(_v).toFixed(2)
            },
            sortDisplayData:function(_out){
                this.outs.push({n:"地方补贴",v:this.cp(_out.localSubSum)})
                this.outs.push({n:"还清贷款年限",v:_out.loanYear})
                this.outs.push({n:"中交资本金",v:this.cp(_out.zbj30,true)})
                this.outs.push({n:"项目FIRR",v:this.cp(_out.firr30,true)})
                this.outs.push({n:"项目NPV",v:this.cp(_out.npv30,true)})
                this.outs.push({n:"项目PT",v:this.cp(_out.pt)})
            },
            onBack:function(){
                this.$router.go(-1);
            },
            modifyDetail:function(){
                this.$router.push({
					path:'/modifypro/',
					query:{
						pn:this.projectName
					}
				})
            }
		},
        mounted(){
            this.projectName = this.$route.query.pn;
      		this.getProjectByName(this.projectName);
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
    .bottomTitle {
        position: relative;
        display: block;
        height: 30px;
        line-height: 30px;
        margin-top: -37px;
        background: rgba(0, 0, 0, 0.4);
        color: #FFFFFF;
    }
    
    .fff {
        background-color: #FFFFFF;
        height: 50px;
        line-height: 52px;
        text-align: left;
        font-size: 20px;
    }
    
    .navFooter {
        height: 60px;
        line-height: 40px;
        background: #fff;
        position: fixed;
        width: 100%;
        min-width: 320px;
        bottom: 0;
        left: 0;
        z-index: 900;
        border-top: 1px solid #ddd;
    }
    
    .fb {
        width: 40%;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        border: none;
        color: #FFFFFF;
        font-size: 20px;
    }
    
    .mealitem {
        float: left;
        font-size: 14px;
    }
</style>
</style>
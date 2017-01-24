<template>
	<f7-page>
		 <f7-navbar sliding>
            <f7-nav-left>
                <f7-link icon="icon-back"  @click="onBack"></f7-link>
            </f7-nav-left>
            <f7-nav-center title="精简指标"></f7-nav-center>
			<f7-nav-right title="精简指标"></f7-nav-right>
        </f7-navbar>
		<f7-list form id="clform">
			<f7-list-item>
				<f7-label style="text-align:left;width:50%">运营期(年):</f7-label>
				<f7-input style="text-align:right;width:50%" v-model.number="age" type="number" placeholder="请输入数字" id="yyq"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label style="text-align:left;width:50%">总投资(万元):</f7-label>
				<f7-input style="text-align:right;width:50%" v-model.number="age" type="number" placeholder="请输入数字" id="ztz"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label style="text-align:left;width:50%">国内贷款(万元):</f7-label>
				<f7-input style="text-align:right;width:50%" v-model.number="age" type="number" placeholder="请输入数字" id="gndk"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label style="text-align:left;width:50%">国内贷款利率(%):</f7-label>
				<f7-input style="text-align:right;width:50%" v-model.number="age" type="number" placeholder="请输入数字" id="dklx5y"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label style="text-align:left;width:50%">贷款比例(%):</f7-label>
				<f7-input style="text-align:right;width:50%" v-model.number="age" type="number" placeholder="请输入数字" id="dkbl"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label style="text-align:left;width:50%">基准收益率(%):</f7-label>
				<f7-input style="text-align:right;width:50%" v-model.number="age" type="number" placeholder="请输入数字" id="jzsyl"></f7-input>
			</f7-list-item>
		</f7-list>
		<f7-col style="width:70%;margin-left:50px"><f7-button big fill color="green" @click='onSave'>计算</f7-button></f7-col>
	</f7-page>
</template>
<script>
	import g from '../../globals/global'
	export default {
        data(){
			return {
				projectName:""
			}
	    },
		methods:{
			onSave:function(){
				var yyq = document.getElementById('yyq').value
				var ztz = document.getElementById('ztz').value
				var gndk = document.getElementById('gndk').value
				var dklx5y = document.getElementById('dklx5y').value
				var dkbl = document.getElementById('dkbl').value
				var jzsyl = document.getElementById('jzsyl').value
				var postData = {}
				postData["pn"]=this.projectName
				postData["yyq"]=yyq
				postData["ztz"]=ztz
				postData["gndk"]=gndk
				postData["dklx5y"]=dklx5y
				postData["dkbl"]=dkbl
				postData["jzsyl"]=jzsyl
				this.$http.post(g.debugUrlPrefix+'manageProject/saveProjectByPhone',
                    postData).then((response) => {
                    if(response.body.err){
                        this.$f7.alert("wrong password","error")
                    }else{
                       var _out = response.body.rows.out
                       this.sortDisplayData(_out)
                       
                    }       
                }, (response) => {
                    this.$f7.alert("error occur","error")
                });
			}
		},
		mounted(){
            this.projectName = this.$route.query.pn;
		},
		computed:{
			inpNum:{
				get:function(){
					return this.oldNum;
				
				},
				set:function(newValue){
					this.oldNum=newValue.replace(/[^\d]/g,'');
				}
			}
		}
	}
</script>

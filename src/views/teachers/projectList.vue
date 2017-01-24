<template>
	<f7-page>
		 <f7-navbar sliding>
			<f7-nav-center sliding title="项目列表"></f7-nav-center>
			<f7-nav-right></f7-nav-right>
    	</f7-navbar>
		<f7-list>
				<f7-list-item v-for='pro in projects'
				:title=pro.pn 
				@click="onEnter(pro.pn)"
					>
				</f7-list-item>
		</f7-list>
		<navFooter></navFooter>
	</f7-page>
</template>

<script>
	import navFooter from '../navFooter'
	import { mapGetters } from 'vuex'
    export default {
        data(){
			return {
				projects:[],
				page:0,
				pageCount:10
			}
	    },
        methods: {
			onEnter:function(id){
				console.log(id)
				this.$router.push({
					path:'/displaypro/',
					query:{
						pn:id
					}
				})
			},
          	onChanged:function(){
				this.$f7.alert("yoyo")
          	},
			getProjects(done){
				this.$store.dispatch('getProjects',{
					self:this,
					info:{
						offset:(this.page)*this.pageCount,
						limit:this.pageCount
					},callback:function(self,res){
						console.log(res.body.total)
						self.projects = res.body.rows
					}
				})
			}
        },
		components:{
			'navFooter':navFooter
	    },
		mounted(){
      		// this.$f7.init();
      		this.getProjects();
		}
        
    }
</script>

<style>
	.labe_a span {
		padding: 3px 8px;
		text-align: center;
		color: #76a2a0;
		font-size: 12px;
		background: #e1faf6;
		margin-right: 5px;
		margin-top: 5px;
	}
	
	.label_bz {
		margin: 5px auto 0;
		width: 80%;
		height: 20px;
		line-height: 20px;
		text-align: center;
		border: 1px solid #90e8da;
		border-radius: 2px;
		-moz-border-radius: 2px;
		-webkit-border-radius: 2px;
		color: #999;
		font-size: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.div_head {
		float: left;
		width: 20%;
		height: 100px;
		margin-top: -10px;
		margin-left: -10px;
	}
	
	.div_name {
		text-align: left;
		float: left;
		width: 70%;
		height: 25px;
		color: black;
		font-size:16px
	}
	
	.div_name em {
		font-style: normal;
		text-align: center;
		padding: 0 5px;
		margin-left: 5px;
		vertical-align: 2px;
		font-size: 12px;
		background: #c66060;
		border: 1px solid #c46b7c;
		border-radius: 5px;
		color: #fff;
		overflow: hidden;
	}
	
	.div_content {
		text-align: left;
		color: black;
		float: left;
		width: 70%;
		text-overflow: ellipsis;
		height: 38px;
		overflow: hidden;
		font-size:13px
	}
</style>
<template>
	<div class='indexmenu'>
		<ul>
			<homeItem 
				v-for="item in sdatas" 
				v-bind:spic='item.img' 
			>{{item.name}}</homeItem>
		</ul>
	</div>
</template>

<script>
	import homeItem from "./homeItem";
	export default {
	    data () {
			return {
				sdatas:[
					{
						img:"static/home/item1.jpg",
						name:"泌乳"
					},
					{
						img:"static/home/item2.png",
						name:"产后塑性"
					},
					{
						img:"static/home/item1.jpg",
						name:"体质调理"
					},
					{
						img:"static/home/item2.png",
						name:"胸部护理"
					},
					{
						img:"static/home/item1.jpg",
						name:"小产特护"
					},
					{
						img:"static/home/item2.png",
						name:"备孕调理"
					},
					{
						img:"static/home/item2.png",
						name:"孕期护理"
					},
					{
						img:"static/home/item2.png",
						name:"私密养护"
					},
					{
						img:"static/home/item2.png",
						name:"小儿推拿"
					},
					{
						img:"static/home/item2.png",
						name:"泌乳套餐"
					},
					{
						img:"static/home/item2.png",
						name:"产后套餐"
					},
					{
						img:"static/home/item2.png",
						name:"妈咪商城"
					},
				]
			}
	    },
	    components:{
	    	"homeItem":homeItem,
	    }
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	.indexmenu {
	    border-radius: 5px;
	    -webkit-border-radius: 5px;
	    -moz-border-radius: 5px;
	    background: #fff;
	    min-width: 308px;
	    overflow: hidden;
	}
	.indexmenu ul {
	    margin: 10px 0 0;
	    overflow: hidden;
	}
</style>
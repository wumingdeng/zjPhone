<template>
	<li>
		<aside>
			<img :src="spic"></img>
		</aside>
		<span>
		<slot></slot>
		</span>
	</li>
</template>

<script>
	export default {
	    data () {
			return {
			}
	    },
	    props:{
	    	spic:{
	    		type:String,
	    		default:'static/home/item1.jpg'
	    	}
	    }
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	.indexmenu ul li {
	    width: 33.333%;
	    min-width: 102px;
	    overflow: hidden;
	    display: inline-block;
	    float: left;
	    text-align: center;
	    margin-bottom: 15px;
	}
	li {
	    list-style: none outside none;
	}
	.indexmenu ul li aside {
	    display: block;
	    width: 68px;
	    height: 68px;
	    border-radius: 50%;
	    -webkit-border-radius: 50%;
	    -moz-border-radius: 50%;
	    overflow: hidden;
	    margin: 0 auto 5px;
	}
	.indexmenu ul li aside img {
	    width: 100%;
	    height: 100%;
	    border: 0;
	}
</style>
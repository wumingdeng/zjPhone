<template>
	<f7-page>
	<div>
		<homeHeader></homeHeader>
		<homeSwipe></homeSwipe>
		<div class='homeMid'>
			<a href="#">
				<img src="static/home/taocan.png">
			</a>
			<a href="#">
				<img src="static/home/huiyuanka.png">
			</a>
		</div>
		<homeContent></homeContent>
	</div>
	<navFooter></navFooter>
	</f7-page>
</template>

<script>
	import homeHeader from "./homeHeader";
	import homeSwipe from "./homeSwipe";
	import homeContent from "./homeContent"
	import navFooter from '../navFooter'
	export default {
	    data () {
	      return {

	      }
	    },
	    components:{
	    	"homeHeader":homeHeader,
	    	"homeSwipe":homeSwipe,
			'navFooter':navFooter,
	    	"homeContent":homeContent
	    }
	}
</script>

<style lang="css" rel="stylesheet/css" scoped>
	.homeMid {
	    padding: .7rem .7rem;
	    overflow: hidden;
	}
	.homeMid a {
	    display: inline;
	    width: 47%;
	    height: auto;
	    float: left;
	    padding: 0 0.1rem 0 0;
	    overflow: hidden;
	}
	.homeMid a + a {
		float:right;
	    padding: 0 0 0 .1rem;
	}
	.homeMid a img {
		width: 100%;
	    display: block;
	    height: auto;
	    overflow: hidden;
	    border: 0;
	}



</style>
<template>
	<div class='homeHeader'>
		<a href="#">
			{{nowCity}}
			<i id='iconDown'></i>
		</a>
		<a href="tel:18950458431">
			<i id='iconTel'></i>
			电话预约
		</a>
	</div>
</template>

<script>
	export default {
	    data () {
	      return {
	      	nowCity:"厦门"
	      }
	    }
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	.homeHeader {
	    height: 45px;
	    line-height: 45px;
	    background: #fff;
	    position: fixed;
	    width: 100%;
	    min-width: 320px;
	    top: 0;
	    left: 0;
	    z-index: 900;
	    box-shadow: 1px 0 3px #aaa;
	    text-align: center;
	}
	#iconDown {
	    background-size: 109px 229px;
	    background-position: -88px 2px;
	}
	.homeHeader a i {
	    display: inline-block;
	    height: 15px;
	    width: 15px;
	    background: url('../../../static/home/headerIcon.png') no-repeat;
	    margin: 0 5px;
	}
	#iconTel {
		height: 20px;
		width: 20px;
		background-size: 120px 260px;
		background-position: -90px -92px;
		vertical-align: -4px;
	}
	.homeHeader > a:first-child {
	    left: 10px;
	    text-align: left;
	}
	.homeHeader > a + a {
		right: 10px;
		text-align: right;
		width: 100px;
	}
	.homeHeader a {
		width: 80px;
	    height: 45px;
	    display: block;
	    line-height: 45px;
	    color: #333;
	    font-size: 14px;
	    position: absolute;
	    top: 0;
	}
</style>
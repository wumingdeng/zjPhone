<template>
	<div class="navFooter">
		<ul>
	    	<router-link tag='li' to="/">
	    		<i class="homeIcon"></i>
	    		<p>首页</p>
	    	</router-link>
	    	<router-link tag='li' to="/teacherList">
	    		<i class="orderIcon"></i>
	    		<p>调理师预约</p>
	    	</router-link>
	    	<router-link tag='li' to="/user">
	    		<i class="userIcon"></i>
	    		<p>个人中心</p>
	    	</router-link>
		</ul>
	</div>
</template>

<script>
	
	export default {
	    data () {
	      return {
	      	
	      }
	    }
	}
</script>

<style lang="css" rel="stylesheet/css" scoped>
	.navFooter {
		height: 50px;
	    line-height: 50px;
	    background: #fff;
	    position: fixed;
	    width: 100%;
	    min-width: 320px;
	    bottom: 0;
	    left: 0;
	    z-index: 900;
	    border-top: 1px solid #ddd;
	}
    
    .navFooter ul li {
	    width: 33.33%;
	    min-width: 106px;
	    display: block;
	    float: left;
	    height: 50px;
	    text-align: center;
	}

	.navFooter ul li i {
	    display: block;
	    width: 25px;
	    height: 25px;
	    margin: 2px auto;
	    background: url(../../static/home/headerIcon.png) no-repeat;
	    background-size: 109px 229px;
	    background-position: -40px 5px;
	}

	.navFooter ul li i.homeIcon {
		background-position: 0 5px;
	}

	.navFooter ul li i.orderIcon {
		background-position: -40px -30px;
	}

	.navFooter ul li i.userIcon {
		background-position: -40px -70px;
	}

	.navFooter ul li p {
	    text-align: center;
	    font-size: 12px;
	    height: 17px;
	    color: #333;
	    line-height: 17px;
	}

</style>
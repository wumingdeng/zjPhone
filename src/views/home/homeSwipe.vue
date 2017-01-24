<template>
    <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../../assets/images/swipe1.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/images/swipe1.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/images/swipe1.jpg">
        </mt-swipe-item>
      </mt-swipe>
      <div style="clear:both"></div>
    </div>
</template>

<script>
	export default {
	    data () {
	      return {

	      }
	    },
	}
</script>

<style>
	.page-swipe, .slide1 {
		background-color: rgb(0, 137, 220);
		color: rgb(255, 255, 255);
    margin-top:45px;
	}
  mt-swipe{
    height:auto;
    width:100%;
    overflow:hidden;
  } 
  mt-swipe-item {
    height:100%;
    width:100%;
    overflow:hidden;
  }
  .page-swipe mt-swipe mt-swipe-item img {
    width: 100%;
    display: block;
    height: auto;
    overflow: hidden;
    border: 0;
  }
</style>
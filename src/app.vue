<!--suppress ALL -->
<template>
  <div id="app">
    <!-- <transition name='slide-fade' mode="out-in">
      <router-view></router-view>
    </transition> -->
    <router-view></router-view>
  </div>
</template>

<script>
    //import navFooter from './views/navFooter'
    export default {
        data () {
          return {

          }
        }

    }
</script>

<style lang="scss" rel="stylesheet/scss">

  html{color:#000;background:#FFF;} 
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form, 
  fieldset,input,textarea,p,blockquote,th,td { 
    margin:0; 
    padding:0; 
  } 
  html {
  }

  body {
    font-family: Helvetica;
    background: #f4f4f4;
    text-align:center;
  }

  #app {    
    min-width: 320px;
    max-width: 720px;
    margin: 0 auto;
  }
</style>

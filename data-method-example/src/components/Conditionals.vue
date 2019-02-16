<template>
  



  <div id="vue-app">



      <h2> 条件语句 </h2>

      <button v-on:click="error=!error"> 切换error </button>
      <button v-on:click="success =!success" > 切换success</button>

      <p v-show="error"> 这是错误消息</p>
      <p v-show="success"> 这是成功消息</p>
  </div>
</template>

<script>
export default {
    data(){
        return  {
            error:false,
            success:false
        }
    }
}
</script>

<style>

</style>

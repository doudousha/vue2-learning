<template>
  

  <div id="app-root">

    name <input type='text' v-on:keyup="loginName"  />

</br>
    keyup+ enter 修饰符<input type='text' v-on:keyup.enter="loginName()" />

    </br>

   keyup+ alt+enter修饰符<input type='text' v-on:keyup.alt.enter="loginName()" />

  </div>
  
</template>

<script>

//  键盘事件
// 键盘修饰符参考文档 https://cn.vuejs.org/v2/guide/events.html
export default {
   methods:{
       loginName(){
           console.log('loginName')
       }
   }
}
</script>

<style>

</style>

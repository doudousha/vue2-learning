<template>
  
  <div v-on:click="available = !available" v-bind:class="{availableClass:available}" >
    <span> 点击</span>
  </div>


</template>

<script>

//  v-bind:class 接收的值是一个键值对，available 是vue组件对象的属性。 
//     如果value 等值，将key值追加到元素的class 中
export default {

    data(){
        return {
            available:false
        }
    }
}
</script>

<style>
 
 span{
     background: red;
     display: inline-block;
     padding:10px;
     color:#fff;
     margin:10px 0;
 }
 .availableClass span{
     background:green;
 }

 .nearby span:after{
     content:'nearby';
     margin-left:10px;
 }
</style>

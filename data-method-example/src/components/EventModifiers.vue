<template>
 
   <div id="vue-app">

       <button v-on:click.once="add(1)" > 只能点一次 </button>
       <a v-on:click.prevent="showMe()" > 点击我，不会跳转 </a>
   </div>

</template>

<script>
/*事件装饰符号 **/
// 事件修饰符参考文档:https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6
export default {
    data(){
        return {
            age: 10
        }
    },
    methods:{
        add(age){
           alert('被点击了')
        },
        showMe(){
            alert('hello world vue.js ')
        }
    },
    
}
</script>

<style>
#canvas{
    width:600px;
    padding:200px 20px;
    text-align:center;
    border:1px solid #333;
}
</style>

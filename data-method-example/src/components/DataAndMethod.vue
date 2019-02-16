<template>
  

   <div class="root">
        <h1>{{ sayHello('xiaoming') }}</h1>
        <p>my name is {{ name }} </p>
   </div>
</template>

<script>
// #一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：
export default {

    data(){

        return {
            name: '相约1998'
        }
    },
    methods:{
        sayHello(name){
            return "hello! "+ name  
        }
    }
}
</script>

<style>

</style>

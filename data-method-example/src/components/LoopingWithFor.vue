<template>
  

  <div id="vue-app">

      循环字符串数组
      <ul>
        <li v-for="(val,index) in fruits" v-bind:key="index" >
            {{index}} - {{val}}
        </li>

      </ul>

      循环对象数组
      <template v-for="(item,index) in  students">
         <h3 v-bind:key="item.name"> {{item.name}}  - {{item.age }} </h3>
         <p  v-bind:key="item.index"> {{index}} </p>
      </template>
  </div>

</template>

<script>
export default {



    data(){
        return {
            fruits:['香蕉','苹果','葡萄'],
            students:[
                {
                    name:'xiaoming',
                    age:12
                },
                {
                    name:'小红',
                    age:20
                },
                {
                    name:'李四',
                    age:40
                }
            ]

        }
    }
}
</script>

<style>

</style>

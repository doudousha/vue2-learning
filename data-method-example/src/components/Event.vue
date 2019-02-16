<template>
 
   <div id="vue-app">

       <button @click="add(1)" > 加一年 </button>
       <button v-on:click="subtract(1)"> 减一年 </button> 
       <button v-on:dblclick="add(10)"> 双击加10年 </button>
       <button @dblclick="subtract(10)"> 双击减10年</button>
       <p> 我的年龄是{{ age }} </p>
         <div id="canvas" v-on:mousemove="updateXY">
            {{ x }} {{ y }}
        </div>
   </div>





</template>

<script>
/*事件装饰符号 **/
export default {
    data(){
        return {
            age: 10,
            x:0,
            y:0
        }
    },
    methods:{
        add(age){
            this.age += age ;
        },
        subtract(age){
            this.age-= age ;
        },
        updateXY(event){
            this.x  = event.offsetX ;
            this.y  = event.offsetY ;
        }
    }
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

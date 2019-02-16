<template>
  
  <div id="root-app">


      <h2> 计算属性 </h2>

      <!--<button v-on:click="a++"> 数字a 加加 </button>
      <button v-on:click="b++"> 数字b 加加 </button>


      <p>a: {{ a }} </p>
      <p>b: {{ b}}  </p>


      <p>  {{ methodA() }} </p>
      <p>  {{ methodB() }} </p>-->


      <button v-on:click="a++"> 数字a 加加 </button>
      <button v-on:click="b++"> 数字b 加加 </button>


      <p>a: {{ computedA }} </p>
      <p>b: {{ computedB }}  </p>


  </div>

</template>

<script>
/** computed 计算属性 
 * 
 * 计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
 * 
 * 
 * 
 * ue使用的是虚拟DOM，当与真实DOM结构不同是才会触发相应方法，method每次都会执行，每点击一个都会执行所有方法。 
计算属性只有在相关依赖发生改变时才会重新求值，当页面重新渲染（不是刷新）的时候，计算属性不会变化，直接读取缓存使用。在相关依赖发生改变时才会重新求值。
 
 使用计算属性后: 比如是改变a的值，那么只会执行computedA 但是不会执行 computedB
 */
export default {
    data(){
        return {
            a:1,
            b:1,
            c:1
        }
    },
    methods:{
        methodA(){
            return this.a + ' , ' +Date.now() 
        },
         methodB(){
            return this.a +' , ' +Date.now()
        }
    },
    computed:{
        computedA(){
            return this.a + ' , ' +Date.now() 
        },
         computedB(){
            return this.b +' , ' +Date.now()
        }
    }
}
</script>

<style>

</style>

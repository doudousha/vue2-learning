<template>
  

  <div id="vue-body">
  
        <!-- bad 写法  <a href='{{webSite }}' >百度 </a> -->
        <a v-bind:href="webSite" > 百度 </a>
     <div>

        <!-- 单项绑定   -->
        <input type='input' v-bind:value="name" /><strong> {{ name }} </strong>
     </div>
        <div>
        <!-- 双向绑定   -->
        <input type='input' v-model="job" /><strong> {{ job }} </strong>
        </div>
     <div>
        <!-- vue HTML自动编码 -->
        {{tag}}
      </div>
     <div>
        <!-- vue html 原始输出 -->
        <p v-html="tag" />
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            webSite:'http://www.baidu.com',
            name:'小明',
            job:'写代码',
            tag:'<a href="http://www.sina.com"> 新浪 </a>'
        }
    }
}
</script>

<style>

</style>

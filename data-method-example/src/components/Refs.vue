<template>
  

  <div id="app-root" >

    <input type="input" ref="age" />
    <button @click="submit" >点击</button>


    <div>
        输出年龄{{age}}
    </div>
  </div>
</template>

<script>

// 使用ref 属性 修饰的input 标签，可以通this.$refs 获取input标签
export default {
    data(){
        return {
            age:1
        }
    },
    methods:{
        submit(){
            console.log( this.$refs.age.value)
            this.age = this.$refs.age.value
        }
    }

}
</script>

<style>

</style>

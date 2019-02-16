<template>
  
    <div >
        姓名:<input type='text' v-model="name"  /> 

        </br>
        输出姓名{{name}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'xiaoming'
        }
    }
}
</script>

<style>

</style>

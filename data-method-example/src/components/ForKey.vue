<template>
  

    <div>
    <input type='text' v-model="name" />
    <button  @click="add()" >添加</button>

    <ul v-for="(item,index) in students" v-bind:key="index">
            <li >
                <input type="checkbox" name="sl" />
                {{item.name}}
            </li>
    </ul>
    </div>
</template>

<script>

// 当选中第一个’xiaoming'后，添加一个名为'aaa'的，此时选中的不是’xiaoming'，而是刚才添加的aaa.
// 我们总结一下当v-bind:key 等于index ，选中小明是vue就只知道为’1‘是选中的，所以当添加’xiaoming‘的时候选中的是’aaa’，而不是xiaoming
// 解决方案: v-bind:key 需要设置一个唯一不变化的key。这里可以设置为id
export default {
    data(){
        return {
            id:10,
            students:[
                {
                    id:1 ,
                    name:'xiaoming'
                },
                 {
                    id:2 ,
                    name:'小明'
                },
                 {
                    id:3 ,
                    name:'王老师'
                }
            ]
        }
    },
    methods:{
        add(){
            this.id++;
            this.students.unshift({
                id: this.id ,
                name:this.name
            })
        }
    }
}
</script>

<style>

</style>

<template>
  <div style="border:3px solid #000; margin:10px;">
    我是后代组件{{ title }}
    <button @click="handleClick">修改title</button>

  </div>
</template>

<script>
export default {
    props:['title'],
    methods:{
        handleClick(){
            this.$emit('changeTitle', 'who are you？？');
            // 或者使用 this.$emit('changeTitle', this.title + ' - 修改后');
            // 这取决于你想要如何修改标题
        }
    }

}
</script>

<style>

</style>
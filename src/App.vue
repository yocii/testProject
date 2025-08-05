<template>
  <div>
    <h1>自定义指令</h1>
    <input v-focus ref="inp"  type="text">
    <h1 v-color="color1">指令的值1</h1>
    <h1 v-color="color2">指令的值2</h1>
    <div v-loading="isLoading" element-loading-text="加载中，请稍候...">这部分内容正在加载...</div>
  </div>
</template>

<script>


export default {
  data(){
    return {
      color1: 'red',
      color2: 'blue',
      isLoading: true
    }


  },
  // mounted(){
  //   this.$refs.inp.focus(); // 组件挂载后，自动聚焦到输入框
  // }
  //局部注册在当前组件下写。
  directives:{
    focus:{
      inserted(el) {
        el.focus(); // 元素插入到 DOM 后，自动聚焦
      }
    },
    color:{
      inserted(el,binding){
        el.style.color = binding.value; 
        console.log(binding.value); // 输出指令的值
        // 元素插入到 DOM 后，设置文本颜色
        // el.style.color = 'red'; // 元素插入到 DOM 后，设置文本颜色为红色
      }
    },
    mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  }
}
</script>

<style>
/* 父组件样式 */
</style>

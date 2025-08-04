<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">点击改变消息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '你好，子组件！',
    };
  },
  methods: {
    changeMessage() {
      this.message = '消息已更新！';
    },
    greet() {
      console.log('Hello from the ChildComponent!');
    }
  }
}
</script>

<style scoped>
.baseA {
  width: 200px;
  height: 150px;
  padding-top: 10px;
  background-color: lightgreen;
}
</style>

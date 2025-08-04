<template>
  <div>
    <ChildComponent ref="childComponent" />
    <button @click="callChildMethod">调用子组件方法1</button>
    <button @click="$refs.childComponent.greet()">调用子组件方法2</button>

  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  methods: {
    callChildMethod() {
      // 通过 $refs 访问子组件实例，并调用方法
      this.$refs.childComponent.greet();
    }
  }
}
</script>

<style>
/* 父组件样式 */
</style>

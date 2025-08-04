<template>
  <div style="border:3px solid blue; margin:10px;">
    我是App组件
    <HouDai :title="myTitle" @changeTitle="changeFn"></HouDai>
  </div>
</template>

<script>
import HouDai from './components/HouDai.vue';

export default {
  name: 'App',
  data() {
    return {
      myTitle:"HelloWorld!!"
    };

  },
  methods: {
    changeFn(newTitle) {
      this.myTitle = newTitle;
    }
  },
  components: {
    HouDai
  }
  
}
</script>

<style>

</style>
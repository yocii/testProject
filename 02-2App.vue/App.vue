<template>
  <div class="app">
    <input v-model="msg1" type="text">
    <br>
    <input :value="msg2" @input="msg2=$event.target.value" type="text">
    <br>
    <BaseA></BaseA>
    <br>
    <BaseB></BaseB>
    <BaseC></BaseC>
    <br>


    <BaseInput v-model="inputValue" placeholder="请输入内容" />
    <p>当前输入值: {{ inputValue }}</p>

  </div>


</template>

<script>  
import BaseA from './components/BaseA.vue';
import BaseB from './components/BaseB.vue';
import BaseC from './components/BaseC.vue';
import { ref } from 'vue';
import BaseInput from './components/BaseInput.vue';

export default {
  components:{
    BaseA,
    BaseB,
    BaseC,
    BaseInput
  },
  data(){
    return {
      msg1: '',
      msg2: ''
    }
  },
  setup() {
    const inputValue = ref(''); // 存储输入框的值
    return {
      inputValue
    };
}}
</script>

<style> 

</style>
<template>
<div class="baseB">
    我是B组件
    <button @click="sendEvent">发送事件到A组件</button>
      
</div>
  
</template>
  
<script>  

import Bus from '../utils/EventBus.js'
  
export default{
    methods:{
        sendEvent(){
            Bus.$emit('eventFromB', '今天天气不错');
            // 触发事件总线，发送数据到BaseA组件
            console.log('Event sent from BaseB');
        }
    }
}
</script>
  
<style>
  
  .baseB{
    width:200px;
    height: 150px;
    padding-top: 10px;
    background-color: rgb(94, 175, 175);
    
  }
</style>
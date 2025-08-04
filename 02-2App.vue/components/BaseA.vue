<template>
    <div class="baseA">
      我是A组件
      <p>{{ data }}</p>
    </div>
  
</template>
  
<script>  

import Bus from '../utils/EventBus.js'
  
export default{
  created() {
      // 使用事件总线监听事件
      Bus.$on('eventFromB', (data) => {
        console.log('Received in BaseA:', data);
        // 处理从BaseB发送过来的数据
        this.data = data;
      });


},

    data(){
        return {
            data: ''
        }
    }
}
</script>
  
<style scoped>
  
.baseA{
    width:200px;
    height: 150px;
    padding-top: 10px;
    background-color: lightgreen;
}
</style>
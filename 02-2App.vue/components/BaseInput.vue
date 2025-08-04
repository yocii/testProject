<template>
    <div>
      <input 
        :value="value" 
        @input="$emit('input', $event.target.value)" 
        :placeholder="placeholder" 
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: { // 绑定 v-model 时的 prop
        type: String,
        default: ''
      },
      placeholder: { // 接收 placeholder 的 prop
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  /* 样式 */
  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }
  </style>
  
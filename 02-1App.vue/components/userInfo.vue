<template>
    <div class="user-info">
        <h2>用户信息</h2>
        <p>用户名: {{ username }}</p>
        <p>年龄: {{ age }}</p>
        <p>地址: {{ address }}</p>
        <p>电话: {{ phone }}</p>
        <p>爱好: {{ hobby.join('，') }}</p>
        <p>车：{{car.brand }}</p>

    </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    username: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    hobby: {
      type: Array,
      required: true
    },
    car: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.user-info{
    border: 2px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
}
</style>
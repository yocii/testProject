<template>
  <div>
      
    <UserInfo :username = "username"
    :age="age"
    :address="address"
    :phone="phone"
    :hobby="hobby"
    :car="car"
    >

    </UserInfo>
  </div>
</template>

<script>
import UserInfo from './components/userInfo.vue';


export default {
  
  data() {
    return {
      username: "张三",
      age: 18,
      address: "北京市海淀区", 
      phone: "1234567890",
      hobby:['打篮球', '看电影', '旅游'],
      car:{
        brand: 'Toyota',
        model: 'Camry',
        year: 2020
      }
    };

  },
  
  components: {
    UserInfo
  }
  
}
</script>

<style>

</style>
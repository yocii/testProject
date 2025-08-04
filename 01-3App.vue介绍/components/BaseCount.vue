<template>
  <div>
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>

  </div>
</template>

<script>
export default {
    data(){
        return {
            count: 999
        }
    }

}
</script>

<style>

</style>
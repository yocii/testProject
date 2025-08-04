<template>
  <div class="app"> 
    <HmHeader></HmHeader>
    <HmMain></HmMain>
    <HmFonter></HmFonter>
  </div>
</template>

<script>
import HmHeader from './components/HmHeader.vue';
import HmMain from './components/HmMain.vue';
import HmFonter from './components/HmFonter.vue';


export default {
  components: {
    HmHeader: HmHeader,
    HmMain, HmFonter,
  }
}
</script>

<style>
.app{
  width: 400px;
  height: 550px;
  background-color: aquamarine;
  margin: 0 auto;
  padding: 20px;
}
</style>
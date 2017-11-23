<template>
  <div id="app">
    <div id="header">
      <navbar></navbar>
    </div>
    <div id="carousel-component">
      <carousel></carousel>
    </div>
    <div id="featurettes-component">
      <featurettes></featurettes>
    </div>
    <div id="bonus">
      <bonus></bonus>
    </div>
    <div id="DFooter">
      <DFooter></DFooter>
    </div>

  </div>
</template>

<script>
import navbar from '@/components/navbar'
import carousel from '@/components/carousel'
import DFooter from '@/components/DFooter'
import featurettes from '@/components/featurettes'
import bonus from '@/components/bonus'
export default {
  name: 'app',
  babel: {
        presets: ['es2015']
    },
  components: {
    navbar,
    carousel,
    DFooter,
    featurettes,
    bonus
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
 }
 #carousel-component{
   margin:0px;
 }
 #bonus {
   margin: 50px
 }
</style>

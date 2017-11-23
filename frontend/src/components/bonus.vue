<template>
  <div id=container>
  <div id="getPassword">
    <p>这是一个小小的bonus!</p>
    <buttton @click="btnClick" type="button" class="btn btn-success">获取密码</buttton>
    <p>Password: {{ password }}</p>
    <input v-model="anumber">
    <p v-if="anumber == password">欢迎来到我的第二个vue！玩得开心！</p>
    <p v-if="anumber == password">（为啥是第二个呢，因为第一个被智障的我删了T T）</p>

  </div>
</div>
</template>

<script>
export default {
  name: 'bonus',
  data () {
    return {
      password: 0,
      anumber:'请输入密码'
    }
  },
  methods: {
    btnClick: function(){
      this.password = Math.round(Math.random()*100000)
    }
  }

}
</script>

<style>

</style>

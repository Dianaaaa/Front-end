<template>
<div id="navbar">
  <div id="container">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">欧洲名画拼图</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li onclick="prompt('请输入用户名(确认后什么都不会发生……)','')"><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
          <li onclick="alert('你没有账号，因为你注册不了23333')"><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  name: 'navbar'

}
</script>

<style>

</style>

<template>
  <div id="featurettes">
    <div id="container">
  <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">这是一个 <span class="text-muted">拼图游戏</span></h2>
          <p class="lead">点击“开始游戏”即可！如果出现点不动的方块的话，请刷新几次。</p>
          <p class="lead">点击拼图下方按钮切换拼图(尝试了很多种语句，但背景图片还是没能换成功，如果你有好的方法，请联系我。)</p>
        </div>
        <div class="col-md-5">
          <gamep id="game1"></gamep>
        </div>
      </div>

      <hr class="featurette-divider">


    </div>
  </div>

</template>

<script>
    import gamep from '@/components/gamep'
    export default {
      name: 'featurettes',
      babel: {
            presets: ['es2015']
        },
      components: {
        gamep,
      }
    }
</script>

    <style>

    </style>

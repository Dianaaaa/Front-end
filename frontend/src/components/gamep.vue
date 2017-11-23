<template>
<div>
  <div id="piclist1">
    <div id="gamee" class="litem" v-bind:class="{'remove':index == 0}" v-for="(item,index) in itemlist" v-bind:style="'background-position:-'+px(index)+'px -'+py(index)+'px;'" v-bind:index="index">{{ index }}</div>
    <div id="startgame1">
    <button id="startp" type="button" class="btn btn-lg btn-default">开始游戏</button>
    <button id="css1" type="button" class="btn btn-lg btn-default">拼图一</button>
    <button id="css2" type="button" class="btn btn-lg btn-default">拼图二</button>
    <button id="css3" type="button" class="btn btn-lg btn-default">拼图三</button>
    </div>
  </div>
</div>
</template>

<script>
var olen2=0;
var oi2=0;
var cindex2=0;
var oa2=new Array();
var oindex2=0;
var listarray2=new Array();
var items= new Array(0,1,2,3,4,5,6,7,8);

export default {
  name: 'gamep',
  data() {
    return {
      itemlist: [0,1,2,3,4,5,6,7,8],
      rows: 3,
      cols: 3,
    }
  },
  methods: {
    px: function(index) {
      return (index%3)*160;
    },
    py: function(index) {
      return Math.floor(index/3)*160
    }
  }
};

function getrow(index) {
  return Math.floor(index/3);
}
function getcol(index) {
  return index%3;
}
function getBound(index) {
  var left = index - 1;
  var right = index + 1;
  var top = index - 3;
  var bottom = index + 3;
  var len = 9;
  var row = getrow(index);
  var col = getcol(index);
  var ra = new Array();
  if(left>=0 && left<len && getrow(left)==row){
    ra.push(left);
  }
  if(right>0 && right<len && getrow(right)==row){
    ra.push(right);
  }
  if(top >= 0 && top<len && getcol(top)==col){
    ra.push(top);
  }
  if(bottom>=0 && bottom<len && getcol(bottom)==col){
    ra.push(bottom);
  }
  return ra;
}
function box_swap(i,j){
  var iobj=$("#piclist1 .litem").eq(i);
  var jobj=$("#piclist1 .litem").eq(j);
  var tobj= iobj.clone();
  jobj.after(tobj);
  iobj.replaceWith(jobj)
}

function box_rand(times){
  for(var i=0;i<times;i++){
    oindex2=$(".remove").index();
    oa2=getBound(oindex2);
    olen2=oa2.length;
    oi2=Math.floor(Math.random()*olen2);
    cindex2=oa2[oi2];
    box_swap(cindex2,oindex2);
  }
  listarray2.length=0;
  $.each($(".litem"),function (i,item){
    listarray2.push($(item).attr("index"));
  });
  if(listarray2.join(',')==items.join(',')){
    box_rand(times);
  }
}

$(function(){
  $("#startp").on("click",function(){
    box_rand(60);

  $(".litem").on("click", function () {
    var cindex2=$(this).index();
    var oindex2=$(".remove").index();
    var oa2=getBound(oindex2);
    var items = new Array(0,1,2,3,4,5,6,7,8);
    if($.inArray(cindex2,oa2)<0){
      return false;
    }
    box_swap(oindex2,cindex2)
    var listarray2 = new Array();
    $.each($(".litem"),function(i,item){
      listarray2.push($(item).attr("index"));
    });
    if(listarray2.join(',')==items.join(',')){
      alert("成功！")
    }
  });
  $("#css1").on("click",function(){
    if(listarray2.join(',') == items.join(',')){
      $(".litem").css('background-image','url(../assets/philo1s.jpg)')
      }
    else{
      alert("请先完成拼图！")
    }
  });
  $("#css2").on("click",function(){
    if(listarray2.join(',') == items.join(',')){
      $(".litem").css('background-image','url(../assets/philo2s.jpg)')
      }
    else{
      alert("请先完成拼图！")
    }
  });
  $("#css3").on("click",function(){
    if(listarray2.join(',') == items.join(',')){
      $(".litem").css('background-image','url(../assets/philo3s.jpg)')
      }
    else{
      alert("请先完成拼图！")
    }
  });

})


})
</script>

<style>
#piclist1 {
  width: 480px;
  height: 480px;
  background-color: #e8da6d;
}
.litem {
  width: 160px;
  height: 160px;
  float: left;
  background-image: url('../assets/philo1s.jpg');
  background-repeat: no-repeat;
  background-size: 480px 480px;
  font-size:33px;
  color: #e8da6d;
  font-weight: bold;
  cursor: pointer;
}

.remove {
  background: none;
  background-color: #e8da6d

}
#start {
  margin-top: 10px;

}
</style>

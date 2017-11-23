<template>
<div>
  <div id="piclist">
    <div class="nitem" v-bind:class="{'remove':index == 0}" v-for="(item,index) in itemlist" v-bind:style="'background-position:-'+px(index)+'px -'+py(index)+'px;'" v-bind:index="index">{{ index }}</div>
    <div class="fn-clear"></div>
    <button id="start" type="button" class="btn btn-lg btn-default">开始游戏</button>
  </div>
</div>
</template>

<script>
var olen=0;
var oi=0;
var cindex=0;
var oa=new Array();
var oindex=0;
var listarray=new Array();
var items= new Array(0,1,2,3,4,5,6,7,8);

export default {
  name: 'game',
  data() {
    return {
      itemlist: [0,1,2,3,4,5,6,7,8],
      rows: 3,
      cols: 3,
    }
  },
  methods: {
    px: function(index) {
      return (index%3)*200;
    },
    py: function(index) {
      return Math.floor(index/3)*200
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
  var iobj=$("#piclist .nitem").eq(i);
  var jobj=$("#piclist .nitem").eq(j);
  var tobj= iobj.clone();
  jobj.after(tobj);
  iobj.replaceWith(jobj)
}

function box_rand(times){
  for(var i=0;i<times;i++){
    oindex=$(".remove").index();
    oa=getBound(oindex);
    olen=oa.length;
    oi=Math.floor(Math.random()*olen);
    cindex=oa[oi];
    box_swap(cindex,oindex);
  }
  listarray.length=0;
  $.each($(".nitem"),function (i,item){
    listarray.push($(item).attr("index"));
  });
  if(listarray.join(',')==items.join(',')){
    box_rand(times);
  }
}

$(function(){
  $("#start").on("click",function(){
    box_rand(20);

  $(".nitem").on("click", function () {
    var cindex=$(this).index();
    var oindex=$(".remove").index();
    var oa=getBound(oindex);
    var items = new Array(0,1,2,3,4,5,6,7,8);
    if($.inArray(cindex,oa)<0){
      return false;
    }
    box_swap(oindex,cindex)
    var listarray = new Array();
    $.each($(".nitem"),function(i,item){
      listarray.push($(item).attr("index"));
    });
    if(listarray.join(',')==items.join(',')){
      alert("成功！")
    }
  });
})
})
</script>

<style>
#piclist {
  width: 600px;
  height: 600px;
  background-color: #e8da6d;
}
.nitem {
  width: 200px;
  height: 200px;
  float: left;
  background: url(../assets/philo1s.jpg) 0px 0px no-repeat;
  background-size: 600px 600px;
  font-size:33px;
  color: #e8da6d;
  font-weight: bold;
  cursor: pointer;
}
.fnclear {
  clear: both;
  height: 0px;
  line-height: 0px;
  font-size: 0px
}
.remove {
  background: none;
  background-color: #e8da6d

}
#start {
  margin-top: 10px;
  
}
</style>

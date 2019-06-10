<template>
  <div class="item-center-vh" style="height:-webkit-fill-available">
    <meTimeLine style="width:400px" isCard :data="pointList"></meTimeLine>
  </div>
</template>

<script>
import meTimeLine from "./meTimeLine.vue";

export default {
  data: function() {
    return {
      pointList: [
        {
          color: "blue",
          time: "2018年9月13",
          content: "服务器配置"
        },
        {
          color: "blue",
          time: "2018年9月4",
          content: "初学shell脚本的那些坑"
        },
        {
          color: "blue",
          time: "2018年9月3",
          content: "go语言编译器的安装"
        },
        {
          color: "blue",
          time: "2018年9月3",
          content: "hugo-静态博客管理的安装"
        }
      ]
    };
  },
  components: {
    meTimeLine
  }
};
</script>
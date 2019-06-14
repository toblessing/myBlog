<style>
.avatar {
  width: 150px;
  height: 150px;
  /* margin: 10px 300px; */
}
.item-center-h {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  margin: 10px auto;
}
.head-card {
  padding: 0px;
  border-radius: 20px;
  z-index: 0;
}
</style>


<template>
  <div>

    <!-- 个人基本资料 -->
    <div class="item-center-h">
      <Card class="head-card">
        <Avatar class="avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
      </Card>
    </div>
    <div class="item-center-h">
      <h1>宋家庚</h1>
    </div>
    <div class="item-center-h">
      <el-popover trigger="hover" placement="right" width="400">
        <Map lat="118.087873" lng="24.624047"></Map>
        <h3 class="el-icon-map-location" slot="reference">软件工程 - 厦门理工学院</h3>
      </el-popover>
    </div>

    <div class="item-center-h">
      <h3>snailrend@163.com</h3>
    </div>

    <!-- 事件线组件 -->
    <div class="item-center-h" style="marginTop:50px">
      <meTimeLine :data="pointList"></meTimeLine>
    </div>

    <!-- 知识分布图 -->
    <ForceImg class="item-center-h"></ForceImg>
  </div>
</template>

<script>
import meTimeLine from "./meTimeLine.vue";
import ForceImg from "./ForceImg.vue";
import Map from "./map";
export default {
  data: function() {
    return {
      pointList: [
        {
          color: "purple",
          time: "2019年6月",
          content: "团队合作完成：自动排课系统"
        },
        {
          color: "blue",
          time: "2019年5月下旬",
          content: "独立完成：Android新闻应用"
        },
        {
          color: "blue",
          time: "2019年5月中旬",
          content: "独立完成：个人博客"
        },
        {
          color: "blue",
          time: "2019年1月",
          content: "团队合作完成：图片分享收集网站"
        }
      ]
    };
  },
  components: {
    meTimeLine,
    ForceImg,
    Map
  }
};
</script>
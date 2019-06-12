
<template>
  <div class="m-map">
    <div id="js-container" class="map">正在加载数据 ...</div>
  </div>
</template>

<script>
import remoteLoad from "@/utils/remoteLoad.js";
import { MapKey, MapCityName } from "../config/config";
export default {
  props: ["lat", "lng"],
  data() {
    return {
      AMap: null
    };
  },
  methods: {
    // 实例化地图
    initMap() {
      let AMap = (this.AMap = window.AMap);
        //创建一个地图，并表明位置
      let map = new AMap.Map("js-container", {
        center: this.center,
        zoom: 13
      });

      //创建一个标记，并指定标记位置
      var marker = new AMap.Marker({
        position:this.center
    })
    //将标记添加到地图
    map.add(marker);
    }
  },
  computed:{
      center:function(){
        return [this.lat,this.lng];
      },
  },
  async created() {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap) {
      this.initMap();
      // 未载入高德地图API，则先载入API再初始化
    } else {
      await remoteLoad(`https://webapi.amap.com/maps?v=1.4.15&key=${MapKey}`);
      this.initMap();
    }
  }
};
</script>

<style lang="css">
.m-map {
  min-width: 500px;
  min-height: 300px;
  position: relative;
}
.m-map .map {
  width: 600px;
  height: 600px;
}
.m-map .search {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 285px;
  z-index: 1;
}
.m-map .search input {
  width: 180px;
  border: 1px solid #ccc;
  line-height: 20px;
  padding: 5px;
  outline: none;
}
.m-map .search button {
  line-height: 26px;
  background: #fff;
  border: 1px solid #ccc;
  width: 50px;
  text-align: center;
}
.m-map .result {
  max-height: 300px;
  overflow: auto;
  margin-top: 10px;
}
</style>
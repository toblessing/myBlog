<style>
.img-carousel {
  width: 500px;
}
.carousel {
  width: 496px;
  margin: 0px auto;
}
</style>

<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card">
      <el-carousel-item>
        <img class="img-carousel" src="img/1.jpeg">
      </el-carousel-item>
      <el-carousel-item>
        <img class="img-carousel" src="img/2.jpeg">
      </el-carousel-item>
      <el-carousel-item>
        <img class="img-carousel" src="img/3.jpeg">
      </el-carousel-item>
      <el-carousel-item>
        <img class="img-carousel" src="img/4.jpeg">
      </el-carousel-item>
      <el-carousel-item>
        <img class="img-carousel" src="img/5.jpeg">
      </el-carousel-item>
    </el-carousel>

    <!-- 视频 -->
    <video
      preload="metadata"
      conrtols="true"
      src="http://ykugc.cp31.ott.cibntv.net/69743D8870B31713D7ADB3AFC/03000801005A5363DACB5F514325B374AA7AD2-A907-FA33-56CC-816DF163E3B6.mp4?ccode=0512&amp;duration=344&amp;expire=18000&amp;psid=1cef5e675a9bf8624c28f20bd55da93e&amp;ups_client_netip=d3618052&amp;ups_ts=1560477239&amp;ups_userid=&amp;utid=17T9FH9uaTUCAXAwDkrfKxIs&amp;vid=XMzMwMTYyODMyNA&amp;vkey=Ae25134c00d21eff38df47941b9075b49&amp;sp=&amp;bc=2"
      style="width: 100%; height: 100%; background-color: rgb(0, 0, 0);"
    ></video>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: 0
    };
  }
};
</script>

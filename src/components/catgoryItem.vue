<style>
.item-center-vh {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: -webkit-fill-available;
}
.card {
  display: flex;
  height: 100px;
  width: -webkit-fill-available;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</style>

<template>
  <div class="item-center-vh" style="min-height:800px">
    <h1>此分类暂时无内容</h1>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>
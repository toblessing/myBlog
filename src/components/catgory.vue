<style>
.item-center-v {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width:-webkit-fill-available;
}
.card {
  display: flex;
  height: 100px;
  width:-webkit-fill-available;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</style>

<template>
  <div  class="item-center-v" style="min-height:800px">
    <router-link class="item-center-v" to="catgory/Linux">
    <Card class="card">
      <h1>Linux</h1>
    </Card>
    </router-link>
    <router-link class="item-center-v" to="catgory/Java">
    <Card class="card">
      <h1>Java</h1>
    </Card>
    </router-link>
    <router-link class="item-center-v" to="catgory/Android">
    <Card class="card">
      <h1>Android</h1>
    </Card>
    </router-link>
    <router-link class="item-center-v" to="catgory/MySql">
    <Card class="card">
      <h1>MySql</h1>
    </Card>
    
    </router-link>
  </div>
</template>

<script>
export default {
};
</script>
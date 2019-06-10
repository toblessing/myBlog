<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  /* background: #5b6270; */
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%',zIndex:'999'}">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img src="favicon.ico">
          </div>

          <div class="layout-nav">
            <MenuItem name="1" to="/home">
              <Icon type="ios-navigate"></Icon>首页
            </MenuItem>
            <MenuItem name="2" to="/catgory">
              <Icon type="ios-keypad"></Icon>分类
            </MenuItem>
            <MenuItem name="3" to="/timeLine">
              <Icon type="ios-analytics"></Icon>时间线
            </MenuItem>
            <MenuItem name="4" to="/about">
              <Icon type="ios-paper"></Icon>关于我
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content
        :style="{margin: '88px 20px 0', minHeight: '800px',width:'1200px',marginLeft:'auto',marginRight:'auto'}"
      >
        <!-- <Breadcrumb separator='->' :style="{margin: '20px 0'}">
          <template v-for="item in BreadcrumbItemList">
            <BreadcrumbItem :key="item" :to="{name:item}" >{{ currentTitle }}</BreadcrumbItem>
          </template>
        </Breadcrumb> -->
          <router-view/>
      </Content>
      <Footer class="layout-footer-center">2019-2019 &copy; song</Footer>
    </Layout>
  </div>
</template>
<script>

export default {
  data() {
    return {
      message: "jjj"
    };
  },
  computed: {
    currentTitle(){
      return this.$route.meta.title
    },
    BreadcrumbItemList() {
      var pathList = this.$route.path.split("/");
      var result = [];
      pathList.forEach(element => {
        if (element && element.length != 0) {
          result.push(element);
        }
      });
      return result;
    }
  }
};
</script>



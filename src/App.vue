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
      <!-- 头部导航栏 -->
      <Header :style="{position: 'fixed', width: '100%',zIndex:'999'}">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            
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

      <!-- 内容 -->
      <Content
        :style="{margin: '88px 20px 0', minHeight: '800px',width:'1200px',marginLeft:'auto',marginRight:'auto'}"
      >
        <router-view/>
      </Content>
      <Footer class="layout-footer-center">2019-2019 &copy; song</Footer>
    </Layout>

    <!-- 反馈按钮 -->
    <question @onclick="question"></question>

    <!-- 反馈弹窗 -->
    <el-dialog title="反馈意见" :visible.sync="questionVisible">
      <!-- 反馈表单 -->
      <el-form :model="form" :rules="rules" ref="questionFrom">
        <el-form-item label="邮箱" prop="email" >
          <el-input v-model="form.email" :style="{width:'300px'}" type="email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="你的意见" prop="content" >
          <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="form.content"></el-input>
        </el-form-item>
      </el-form>

      <!-- 文件上传 -->
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-remove="handleRemove"
        :before-upload="beforeAvatarUpload"
        ref="upload"
      >
        <i class="el-icon-plus"></i>
      </el-upload>

      <!-- 操作按钮 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="querestore">恢复上次提交的反馈</el-button>
        <el-button @click="queCancel">取 消</el-button>
        <el-button type="primary" @click="queOk">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import question from "./components/question";
export default {
  //组件需要的变量
  data() {
    return {
      questionVisible: false,
      form: {
        email: "",
        content: ""
      },
      //表单校验规则
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "请输入正确的邮箱格式",
            trigger: "blur"
          }
        ],
        content: [
          { required: true, message: "请输入您的反馈", trigger: "blur" }
        ]
      },
      dialogImageUrl: ""
    };
  },
  computed: {
    //当前页面的标题
    currentTitle() {
      return this.$route.meta.title;
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
  },
  methods: {
    //弹出反馈窗口
    question() {
      this.questionVisible = true;
    },
    // 反馈取消
    queCancel() {
      this.questionVisible = false;
      this.$refs["questionFrom"].resetFields();
    },
    // 反馈确认
    queOk() {
      this.$refs["questionFrom"].validate(valid => {
        if (valid) {
          //本地存储
          localStorage.email = this.form.email;
          localStorage.content = this.form.content;
          //关闭弹窗
          this.questionVisible = false;
          //清空表单
          this.$refs["questionFrom"].resetFields();
          //清空文件上传
          this.$refs.upload.clearFiles();
        } else {
          return false;
        }
      });
    },
    //删除上传的文件
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    //反馈恢复
    querestore() {
      this.form.email = localStorage.email;
      this.form.content = localStorage.content;
    },
    //文件上传的类型与大小验证
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" ||file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  //声明所使用的组件
  components: {
    question
  }
};
</script>



<!-- footer -->
<template>
  <div class="footer">
    <div class="footerinfo">
      公司地址：北京市朝阳区三里屯街道工人体育场北侧世联文创5层516
      <br />联系电话：010-85659201
      <br />联系邮箱：wenye.zuo@pandacredit.co
    </div>
    <img class="footerimg" src="../assets/img/2.png" alt />
    <h2 class="copyright">&copy {{display}} <a href="http://www.beian.miit.gov.cn">京ICP备19039662号</a></h2>
  </div>
</template>
<script>
export default {
  name: "pinjaFooter",
  data() {
    return {
      display: ""
    };
  },
  mounted() {
    let myDate = new Date();
    let year = myDate.getFullYear();
    this.display = `${year}. 北京小信分信息技术有限公司`;
  }
};
</script>
<style lang='less' scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background: rgba(240, 240, 240, 1);
  padding: 60px 100px;
  box-sizing: border-box;
  .footerinfo {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 48, 1);
    line-height: 40px;
  }
  .footerimg {
    margin-top: 61px;
    margin-bottom: 10px;
    display: block;
    width: 181px;
    height: 26px;
  }
  .copyright {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(85, 85, 80, 1);
    line-height: 25px;
  }
}
</style>
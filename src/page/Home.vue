<!-- home -->
<template>
  <div class="contanier">
    <div class="header">
      <div class="headercontent">
        <div class="logoarea">
          <img class="logo" src="../assets/img/2.png" alt />
        </div>
        <ul class="nav">
          <li @click="selectedParam = 0" class="navitem">
            <a
              class="navitem0"
              ref="navlink0"
              :class="{navlink:true, selected:selectedParam == 0}"
              href="#qiyejieshao"
            >企业介绍</a>
          </li>
          <li @click="selectedParam = 1" class="navitem">
            <a
              class="navitem1"
              ref="navlink1"
              :class="{navlink:true, selected:selectedParam == 1}"
              href="#yuangongfuli"
            >员工福利</a>
          </li>
          <li @click="selectedParam = 2" class="navitem">
            <a
              class="navitem2"
              ref="navlink2"
              :class="{navlink:true, selected:selectedParam == 2}"
              href="#rencaizhaopin"
            >人才招聘</a>
          </li>
          <li @click="selectedParam = 3" class="navitem">
            <a
              class="navitem2"
              ref="navlink2"
              :class="{navlink:true, selected:selectedParam == 3}"
              href="#footer"
            >联系我们</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="maincontent">
      <div class="banner">
        <p>
          JOIN US
          <br />CREATE THE
          <br />FUTURE
        </p>
      </div>
      <!--企业介绍-->
      <div class="qiyejieshao" id="qiyejieshao">
        <div class="topText">
          <div class="title">企业介绍</div>
          <p>北京小信分信息技术有限公司（PandaCredit）是运用大数据和人工智能实现精准的风控管理的互联网金融企业。是一家覆盖全球的金融科技公司，迄今为止我们将眼光聚焦于海外新兴市场。目前业务已经覆盖印尼、菲律宾、越南、印度等国家，主要服务于当地消费场景和金融机构。</p>
          <p>由量化派QuantGroup于2017年12月孵化，2018年12月入选微软加速器·北京第13期。</p>
          <p>我们综合了国际高精尖的技术团队和本地的实战运营团队，运用当地电商、出行等互联网平台资源，定制线上信用评分体系。帮助当地金融机构对接资产，提供全线上聚合支付，信用支付与金融服务，为客户提供高质量全方位的产品及客户服务。</p>
        </div>
      </div>
      <!--员工福利-->
      <div class="yuangongfuli" id="yuangongfuli">
        <div class="title">员工福利</div>
        <div class="itemrow">
          <div class="child">
            <img class="img" src="../assets/img/fuli/fuli1.png" alt />
            <div class="detail">
              <div class="detailtitle">五险一金</div>
              <div class="detailcontent">缴纳养老保险、医疗保险、失业保险、工伤保险、生育保险和住房公积金</div>
            </div>
          </div>
          <div class="child">
            <img class="img" src="../assets/img/fuli/fuli2.png" alt />
            <div class="detail">
              <div class="detailtitle">定期体检</div>
              <div class="detailcontent">阶段性职业健康检查</div>
            </div>
          </div>
          <div class="child">
            <img class="img" src="../assets/img/fuli/fuli3.png" alt />
            <div class="detail">
              <div class="detailtitle">加班补助</div>
              <div class="detailcontent">正常工作时间之外的工资报酬</div>
            </div>
          </div>
        </div>

        <div class="itemrow">
          <div class="child">
            <img class="img" src="../assets/img/fuli/fuli4.png" alt />
            <div class="detail">
              <div class="detailtitle">年终奖</div>
              <div class="detailcontent">年末给予员工年终奖励，对一年来的工作业绩给予肯定</div>
            </div>
          </div>
          <div class="child">
            <img class="img" src="../assets/img/fuli/fuli5.png" alt />
            <div class="detail">
              <div class="detailtitle">带薪年假</div>
              <div class="detailcontent">为员工提供带薪休假</div>
            </div>
          </div>
          <div class="child">
            <img class="img" src="../assets/img/fuli/fuli6.png" alt />
            <div class="detail">
              <div class="detailtitle">员工旅游</div>
              <div class="detailcontent">组织员工旅游活动</div>
            </div>
          </div>
        </div>

        <div class="itemrow">
          <div class="child">
            <img class="img" src="../assets/img/fuli/fuli7.png" alt />
            <div class="detail">
              <div class="detailtitle">餐补</div>
              <div class="detailcontent">工作餐的额外补贴</div>
            </div>
          </div>
          <div class="child">
            <img class="img" src="../assets/img/fuli/fuli8.png" alt />
            <div class="detail">
              <div class="detailtitle">节日福利</div>
              <div class="detailcontent">法定或者特定节日时提供礼物</div>
            </div>
          </div>
          <div class="child">
            <img class="img" src="../assets/img/fuli/fuli9.png" alt />
            <div class="detail">
              <div class="detailtitle">零食下午茶</div>
              <div class="detailcontent">为员工提供零食、饮料、水果作为下午茶</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 加入我们 -->
      <div class="introduction" id="rencaizhaopin">
        <div class="title">人才招聘</div>
        <Collapse v-model="value1">
          <Panel name="1">
            高级Java开发工程师
            <span>
              <img src="../assets/img/companyimg/8.png" alt class="addressImg" />
              Beijing
            </span>
            <div slot="content">
              <p class="responsibilities">岗位职责:</p>
              <span>1. 负责参与全球市场消费金融、支付业务、产品需求分析与技术方案设计.</span>
              <span>2. 负责前端数据服务、资金平台服务、数据平台服务的开发交付.</span>
              <span>3. 系统的详细设计和部分核心编码工作.</span>
              <span>4. 负责合作渠道接口设计、研发、联调上线</span>
              <span>5. 不断提升服务响应、稳定性、并发性能，解决线上问题</span>
              <span>6. 与产品、业务方协同，高效保质的交付业务功能</span>
              <p class="requirements">任职要求:</p>
              <span>1. 计算机及相关专业专科及以上学历，2-5年及以上工作经验.</span>
              <span>2. 对高并发、多线程、缓存等技术和业务场景有实际操作经验.</span>
              <span>3. 熟悉互联网产品架构，有大型分布式、高并发、高负载、高可用性系统设计开发经验者优先.</span>
              <span>4. 扎实的java编程基础，精通Java EE、微服务、消息中间件等相关技术；5. 对各种开源的框架如Spring、mybatis、spring cloud、dubbo等有深入的了解，精通其原理者优先.</span>
              <span>5. 精通分布式技术架构和分布式应用设计思想，熟悉主流分布式技术组件或框架，如Dubbo、spring cloud、Zookeeper、redis等.</span>
              <span>6. 具有互联网金融开发经验者优先</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse v-model="value2">
          <Panel name="1">
            测试工程师
            <span>
              <img src="../assets/img/companyimg/8.png" alt class="addressImg" />
              Beijing
            </span>
            <div slot="content">
              <p class="responsibilities">岗位职责:</p>
              <span>1. 设计、编写和执行测试用例，全面开展产品测试工作.</span>
              <span>2. 根据产品架构设计测试策略.</span>
              <span>3. 开发测试框架与工具，定期技术分享.</span>
              <span>4. 指导初级测试工程师开展测试工作.</span>
                <span>5. 参与和推进自动化测试工作</span>
                <span>6. 调研并开展新的测试技术</span>

              <p class="requirements">岗位要求:</p>
              <span>1. 精通软件测试流程、测试策略、测试方法等.</span>
              <span>2. 具有优秀的编写测试用例和测试方案的能力.</span>
              <span>3. 能够阅读Java代码，掌握相关测试框架使用：Junit、TestNG.</span>
              <span>4. 具有3年以上测试经验.</span>
              <span>5. 具有一定的分析查看日志、定位问题的能力，掌握相关工具使用：kibana.</span>
              <span>6. 掌握持续集成相关工具的使用，如：Jenkins.</span>
              <span>7. 至少熟练掌握一门脚本语言（Python/Ruby/Shell）</span>
              <span>8. 以下领域有经验者优先考虑：Java开发经验、安全测试相关经验（sql注入、渗透、跨站）、容器相关经验（Docker及K8S）</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse v-model="value3">
          <Panel name="1">
            高级产品经理
            <span>
              <img src="../assets/img/companyimg/8.png" alt class="addressImg" />
              Beijing
            </span>
            <div slot="content">
              <p class="responsibilities">职位描述:</p>
              <span>1. 负责海外信贷核心业务（前端、中后台）以及创新业务的产品规划和产品设计.</span>
              <span>2. 统筹项目，把控项目进度，协调各方资源，推动项目落地.</span>
              <span>3. 跨部门协调和沟通，推动商务、研发、运营等人员紧密合作，负责追踪产品开发、测试&上线进度.</span>
              <span>4. 负责行业产品发展趋势研究，研究行业、竞争对手及产品发展趋势，推动相应的产品落地</span>
              <span>5. 对日常数据进行跟踪和研究，定期分析产品上线效果，掌握平台运行状况，不断完善产品</span>
              <p class="requirements">任职要求:</p>
              <span>1. 本科以上学历，有3年以上产品设计经验，有互联网金融行业经验优先.</span>
              <span>2. 有完整产品或多个独立业务模块产品设计经历，能够独立进行产品设计、并推动落地.</span>
              <span>3. 具备优秀的产品设计能力、文档撰写能力、项目管理能力.</span>
              <span>4. 具有强烈的自驱力、责任心、执行力，良好的协调沟通能力.</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse v-model="value4">
          <Panel name="1">
            风控建模
            <span class="adress">
              <img src="../assets/img/companyimg/8.png" alt class="addressImg" />
              Beijing
            </span>
            <div slot="content">
              <p class="responsibilities">岗位职责:</p>
              <span>1. 掌握业务流程，支持基于数据和模型的风险管理策略报表需求制定、开发，维护和解读，监控模型和策略有效性，及时上报异常情况并分析原因.</span>
              <span>2. 监控各类业务指标分布及变化情况，通过历史数据整理及分析，提出改进建议.</span>
              <span>3. 跟进产品资产质量变化情况，完成Vintage、Rollrate等数据指标计算，并分析变化原因.</span>
              <span>4. 完成外部数据测试评估工作，包括参与前期与数据供应商的约谈、测试样本提取、测试结果评估、测试报告撰写等.</span>
              <p class="requirements">岗位要求:</p>
              <span>1. 本科及以上学历，数学/统计/金融相关专业优先，有风控数据分析与建模的实际工作经验, 熟悉模型生命周期的全流程优先.</span>
              <span>2. 熟悉Python语言，了解numpy，sicpy以及熟悉MySQL、Oracle等数据库者优先.</span>
              <span>3. 从事过信用评分模型等相关项目，有互联网金融行业、消费金融行业、银行风控项目经验者优先.</span>
              <span>4. 熟悉常用算法，LR，DT，RF，gbdt，xgboost和神经网络等，对机器学习算法的理解和应用，有一定的认知和经验.</span>
              <span>5. 三年以上风控或金融行业大数据建模工作经验，了解建模背后原理，能创造性的通过建模解决业务问题</span>
              <span>6. 工作积极主动，抗压能力强；能够熟练阅读英文专业资料优先</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse v-model="value5">
          <Panel name="1">
            Audit manager
            <span>
              <img src="../assets/img/companyimg/8.png" alt class="addressImg" />
              Djakarta
            </span>
            <div slot="content">
              <p class="responsibilities">Responsibilities:</p>
              <span>1. Contact, evaluate, screen and eliminate users.</span>
              <span>2. Completed the monthly audit target.</span>
              <span>3. Complete other tasks assigned by leaders.</span>
              <span>4. Adapt to short-term business trips.</span>
              <p class="requirements">Requirements:</p>
              <span>1. More than two years of experience in government audit, familiar with the loan industry, excellent channel development and market development ability.</span>
              <span>2. Strong sense of enterprise and responsibility, good interpersonal communication, social activity ability and public relations negotiation ability.</span>
              <span>3. Passionate, persistent and dedicated to work, with clear and active thinking.</span>
              <span>4. better conversation, good image, good temperament.</span>
              <span>5. Good team spirit, good coordination, communication and overall grasp of the ability.</span>
              <span>6. sharp thinking, highly innovative spirit, strong adaptability to the environment, strong ability to resist pressure.</span>
            </div>
          </Panel>
        </Collapse>
        <Collapse v-model="value6">
          <Panel name="1">
            HR Specialist
            <span>
              <img src="../assets/img/companyimg/8.png" alt class="addressImg" />
              India
            </span>
            <div slot="content">
              <p class="responsibilities">Responsibilities:</p>
              <span>1. Select high-quality talents for the company: responsible for answering recruitment calls, screening resumes and interviewing.</span>
              <span>2. Assisting the work of the directly affiliated leadership management department.</span>
              <span>3. Supervise and assist department employees to complete related work matters.</span>
              <span>4. Responsible for the use of copying, fax and printing equipment.</span>
              <span>5. Responsible for sorting out, classifying and keeping common forms of the company and updating them according to the actual situation.</span>
              <span>6. Make good preparations before the meeting, arrange meeting minutes and contents after the meeting</span>
              <span>7. Responsible for material collection and archive management.</span>
              <span>8. Assisted the superior to complete the administrative affairs of the company and the daily affairs of the department.</span>
            </div>
          </Panel>
        </Collapse>
      </div>
      <pinja-footer id="footer"></pinja-footer>
    </div>
  </div>
</template>

<script>
import pinjaService from "../components/pinja-service";
import pinjaFooter from "../components/footer.vue";
export default {
  data() {
    return {
      selectedParam: 0
    };
  },

  components: {
    pinjaService,
    pinjaFooter
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
.contanier {
  width: 100%;
  font-family: PingFangSC-Semibold, PingFang SC;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1204px;
    height: 82px;
    background: #fff;
    box-shadow: 3px 3px 7px #ddd;
    z-index: 5;
    .headercontent {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 60%;
      height: 100%;
      margin: 0 auto;
      .logoarea {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #797979;
        letter-spacing: -0.39px;
        text-align: center;
        .logo {
          width: 256px;
          height: 35px;
        }
        .logocontent {
          width: 210px;
        }
      }

      .nav {
        .navitem {
          float: left;
          a {
            display: inline-block;
            line-height: 70px;
            margin-right: 41px;
            font-family: PingFangSC-Semibold;
            font-size: 16px;
            color: #797979;
            letter-spacing: -0.39px;
            text-align: center;
          }
        }
      }
    }
  }
  .maincontent {
    width: 100%;
    height: 736px;
    margin: auto;
    background-image: url("../assets/img/companyimg/1.png");
    background-size: 100% 100%;
    .banner {
      width: 100%;
      height: 100%;
      display: block;
      box-sizing: border-box;
      padding-top: 240px;
      p {
        width: 50%;
        font-size: 64px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 80px;
        margin-left: 228px;
        text-align: left;
      }
    }

    .qiyejieshao {
      width: 100%;
      margin: auto;
      color: rgba(51, 51, 51, 1);
      font-family: PingFangSC-Regular, PingFang SC;
      box-sizing: border-box;
      padding-top: 90px;
      .topText {
        width: 70%;
        margin: auto;
        .title {
          font-size: 32px;
          font-weight: 400;
          line-height: 45px;
          text-align: center;
          margin-bottom: 60px;
        }
        p {
          text-indent: 2em;
          font-size: 18px;
          font-weight: 400;
          line-height: 25px;
          margin-bottom: 28px;
          text-align: left;
        }
      }
    }
    .yuangongfuli {
      color: rgba(51, 51, 51, 1);
      font-family: PingFangSC-Regular, PingFang SC;
      box-sizing: border-box;
      padding-top: 90px;
      margin: auto;
      .title {
        font-size: 32px;
        font-weight: 400;
        line-height: 45px;
        text-align: center;
        margin-bottom: 60px;
      }
      .itemrow {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 46px;
        .child {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 377px;
          height: 120px;
          margin-right: 34px;
          border-radius: 11px;
          border: 2px solid rgba(228, 232, 239, 1);
          .img {
            display: block;
            width: 34px;
            height: 36px;
            margin-right: 30px;
          }
          .detail {
            .detailtitle {
              margin-bottom: 10px;
              font-size: 16px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              line-height: 22px;
              text-align: left;
            }
            .detailcontent {
              width: 252px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(153, 153, 153, 1);
              line-height: 20px;
              text-align: left;
            }
          }
        }
      }
    }
    .introduction {
      width: 80%;
      margin: auto;
      text-align: center;
      padding-top: 90px;
      .title {
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 48, 1);
        line-height: 45px;
        margin-bottom: 60px;
      }
      .responsibilities {
        color: #333;
        margin-bottom: 20px;
      }
      .requirements {
        margin: 25px 0 20px 0;
        color: #333;
      }
    }
  }
  .maincontent /deep/ .ivu-collapse {
    padding: 5px 15px;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 22px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 30px;
    .ivu-collapse-item {
      text-align: left;
      .ivu-collapse-header {
        color: rgba(0, 0, 0, 1);
        height: 70px;
        line-height: 70px;
      }
      .ivu-collapse-header > span {
        float: right;
        margin-right: 10px;
        font-size: 18px;
      }
      .ivu-collapse-header > i {
        float: right;
        line-height: 70px;
        color: #419bfc;
      }
      .addressImg {
        width: 23px;
        height: 30px;
        vertical-align: middle;
      }
    }
    .ivu-collapse-content-box {
      text-align: left;
      p {
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        line-height: 25px;
        margin-bottom: 8px;
      }
      span {
        display: block;
        width: 80%;
        font-size: 16px;
        color: #666;
        font-family: PingFangSC-Medium, PingFang SC;
        line-height: 25px;
      }
    }
  }
  .maincontent /deep/ .ivu-collapse:last-child {
    margin-bottom: 130px;
  }
}
.selected {
  border-bottom: 3px solid #333333;
}
</style>

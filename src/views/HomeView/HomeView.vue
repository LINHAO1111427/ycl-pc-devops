<script setup>
import Header from '../../components/Header/Header.vue'
import Footer from '../../components/Footer/Footer.vue'
import {onMounted} from "vue";
import {freelancerCountPage} from "@/api/home";
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const isLogin = ref(!!localStorage.getItem('token'))
const userList = ref([])
onMounted(async () => {
  const res = await freelancerCountPage({
    pageNo: 1,
    pageSize: 10
  })
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  userList.value = res.data.list
})
</script>
<style>
.part01 {
  height: 593px;
  background: url(../../assets/img/home5.png);
  background-size: 100%;
  overflow: hidden;

  .container1 {
    height: 100%;
    padding-top: 60px;
    padding-bottom: 108px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .t1 {
      font-weight: 600;
      font-size: 36px;
      color: #FFFFFF;
      line-height: 50px;
      text-align: center;
      font-style: normal;
    }

    .part05List {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .part05Item {
        width: 400px;
        height: 330px;
        background-size: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: url(../../assets/img/bg1.png);
        background-size: 100%;;

        img {
          width: 75px;
          height: 64px;
        }

        .bgText1 {
          font-weight: 500;
          font-size: 36px;
          color: #FFFFFF;
          line-height: 50px;
          text-align: left;
          font-style: normal;
        }

        .bgText2 {
          width: 280px;
          height: 64px;
          font-weight: 400;
          font-size: 20px;
          color: #FFFFFF;
          line-height: 32px;
          text-align: center;
          font-style: normal;
        }
      }

      .part05Item:nth-child(even) {
        margin: 0px 30px;
      }
    }
  }
}

.title3 {
  margin-bottom: 0px !important;
  color: #ddfff9 !important;
}

.box1 {
  margin: 10px 638px 21px 0px;
  color: #ffffff;
  font-size: 16px;
  line-height: 26px;
}

.part2 {
  padding: 0px !important;
}

.container {
  .part02 {
    height: 500px;
    background: url(../../assets/img/home6.png);
    background-size: 100%;
    overflow: hidden;
    margin: 80px 0px 100px 0px;
    padding: 68px 0px 55px 45px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .t1 {
      width: 560px;
      height: 74px;
      line-height: 74px;
      display: flex;
      flex-direction: row;
      align-items: center;

      .text {
        font-weight: 500;
        font-size: 31px;
        text-align: left;
        font-style: normal;
      }

      .text:nth-child(add) {
        color: #000000;
      }

      .text:nth-child(even) {
        color: #36D4D8;
      }
    }

    .t2 {
      height: 26px;
      font-weight: 400;
      font-size: 16px;
      color: #000000;
      line-height: 26px;
      text-align: left;
      font-style: normal;
    }

    .t3 {
      width: 342px;
      height: 180px;
      font-weight: 400;
      font-size: 18px;
      color: #000000;
      text-align: left;
      font-style: normal;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-left: #D8D8D8 solid 1px;
      padding-left: 20px; /* 让文字有间距 */
      position: relative;

      div {
        position: relative;
      }

      div::before {
        content: "";
        position: absolute;
        left: -23px; /* 调整圆点位置 */
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background-color: #39C1C8; /* 你图上的蓝绿色 */
        border-radius: 50%;
      }
    }

    .btn {
      background: #3BC8B4;
      box-shadow: 0px 2px 4px 0px rgba(48, 145, 131, 0.2);
      border-radius: 20px;
      display: block;
      width: 142px;
      height: 42px;
      text-align: center;
      line-height: 42px;
      font-size: 16px;
      color: #ffffff;

      a {
        color: #ffffff;
      }
    }
  }

  .ctlineText {
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
    line-height: 28px;
    text-align: left;
    font-style: normal;
  }

  .ctLine {
    .ctLine2 {
      font-weight: 500;
      font-size: 56px;
      color: #FFFFFF;
      line-height: 74px;
      text-align: left;
      font-style: normal;
    }

    .ctLine1 {
      font-weight: 400;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 26px;
      text-align: left;
      font-style: normal;
    }

    .ctLineItemList {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .ctLineItem {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        width: 360px;
        height: 110px;
        border-radius: 10px;

        div {
          font-weight: 500;
          font-size: 24px;
          line-height: 33px;
          text-align: left;
          font-style: normal;
        }

        a {
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: left;
          font-style: normal
        }
      }

      .ctLineItem:nth-child(odd) {
        a {
          color: #FFFFFF;
        }

        color: #FFFFFF;
        background: #0A7BFF;
      }

      .ctLineItem:nth-child(even) {
        a {
          color: #0A7BFF;
        }

        color: #0A7BFF;
        background: #FFFFFF;
      }
    }
  }

  .part {
    display: flex;
    flex-direction: row;
    align-content: center;
    height: 600px;
    align-items: center;

    .letfContent {
      display: flex;
      height: 365px;
      margin-left: 70px;
      flex-direction: column;
      justify-content: space-between;

      .tx1 {
        font-weight: 600;
        font-size: 40px;
        color: #000000;
        line-height: 56px;
        text-align: left;
        font-style: normal;
      }

      .contentItem {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        img {
          width: 25px;
        }

        .ct {
          margin-left: 20px;

          .ct1 {
            font-weight: 500;
            font-size: 20px;
            color: #000000;
            line-height: 28px;
            text-align: left;
            font-style: normal;
          }

          .ct2 {
            font-weight: 400;
            font-size: 16px;
            color: #666666;
            line-height: 24px;
            text-align: left;
            font-style: normal;
          }
        }
      }

      .btn {
        background: #3BC8B4;
        box-shadow: 0px 2px 4px 0px rgba(48, 145, 131, 0.2);
        border-radius: 20px;
        display: block;
        width: 142px;
        height: 42px;
        text-align: center;
        line-height: 42px;
        font-size: 16px;
        color: #ffffff;

        a {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
<template>
  <main class="home-main">
    <Header :isLogin="isLogin"/>
    <div style="cursor: pointer;">
      <img src="../../assets/img/home1.png" alt="logo" style="width: 100%" @click="$router.push('/login')"/>
    </div>
    <div class="container">
      <div class="part">
        <div>
          <img src="../../assets/img/home3.png" alt="logo" style="width: 540px"/>
        </div>
        <div class="letfContent">
          <div class="tx1">
            让寻找工作与雇佣更加简单
          </div>
          <div class="contentItem">
            <img src="../../assets/img/homeicon1.png"/>
            <div class="ct">
              <div class="ct1">
                即可体验
              </div>
              <div class="ct2">
                秒配行业专家，定制商业咨询，探索新项目
              </div>
            </div>
          </div>
          <div class="contentItem">
            <img src="../../assets/img/homeicon3.png"/>
            <div class="ct">
              <div class="ct1">
                发布工作，雇佣专业化人才
              </div>
              <div class="ct2">
                大模型算法30秒智能匹配，精准链接项目与专家，降低决策风险
              </div>
            </div>
          </div>
          <div class="contentItem">
            <img src="../../assets/img/homeicon2.png"/>
            <div class="ct">
              <div class="ct1">
                纯线上工作流程，汇集行业精英
              </div>
              <div class="ct2">
                单刻达平台人才认证，项目无忧推进
              </div>
            </div>
          </div>
          <div class="contentItem">
            <img src="../../assets/img/homeicon3.png"/>
            <div class="ct">
              <div class="ct1">
                资金安全保障
              </div>
              <div class="ct2">
                资金银行级托管，7天免费售后，交易0风险
              </div>
            </div>
          </div>
          <div>
            <div class="btn">
              <RouterLink to="/register">开始使用</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="wrapper">
        <div class="container">
          <div class="title">按类别寻找人才</div>
          <div class="title2">
            正在寻找专业人才?
            <RouterLink to="/client/search-talents">浏览人才</RouterLink>
          </div>
          <div class="box">
            <div class="item" v-for="(item,index) in userList">
              <div class="tit">{{ item.jobName }}</div>
              <div class="info">
                <div class="star">
                  <img src="../../assets/img/star.png"/>
                  {{ item.assess }}
                </div>
                <div class="num">{{ item.number }}人</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part3">
      <div class="wrapper">
        <div class="container">
          <div class="title1">关于企业</div>
          <div class="title2" style="color: #ffffff;">顶尖人才矩阵</div>
          <div class="title3">成就项目宏图</div>
          <div class="box1">
            访问单刻达上最优秀的的专业化人才，为项目方精准赋能，真正降本增效
          </div>
          <div class="box">
            <div class="item">
              <div class="icon"><img src="../../assets/img/jisuxunren.png"/></div>
              寻找专业化人才，纯线上高效协作
            </div>
            <!--            <div class="item">-->
            <!--              <div class="icon"><img src="../../assets/img/gongzuo.png"/></div>-->
            <!--              掌握您的工作流程:雇佣、分类、支付您的人才-->
            <!--            </div>-->
            <div class="item">
              <div class="icon"><img src="../../assets/img/hezuo.png"/></div>
              自由筛选高质量自由职业者，避免无效招聘，快速找到专业化人才
            </div>
          </div>

          <div class="btn">
            <!-- <RouterLink to="/">了解更多</RouterLink> -->
          </div>
        </div>
      </div>
    </div>
    <div class="part4">
      <div class="container">
        <div class="ctlineText">
          <!--          关于委托人-->
        </div>
        <div class="ctLine">
          <div class="ctLine1">
            与自由职业者线上沟通协作，共同完成目标任务
            <br/>
            <!--            从快速转型到重大变量-->
          </div>
          <div class="ctLine2">
            用自己的方式雇佣人才
          </div>
          <div class="ctLineItemList">
            <div class="ctLineItem">
              <div>发布工作，并且雇佣人才</div>
              <div @click="$router.push('/login')" style="cursor: pointer;">
                <a>前往人才市场</a>
              </div>
            </div>
            <div class="ctLineItem">
              <div>浏览工作，应聘一个职位</div>
              <div @click="$router.push('/login')" style="cursor: pointer;">
                <a>前往项目市场</a>
              </div>
            </div>
            <div class="ctLineItem">
              <div>获得专家的行业建议</div>
              <div @click="$router.push('/login')" style="cursor: pointer;">
                <a>前往协商</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part01">
      <div class="container1">
        <div class="t1">为什么选择在单刻达雇佣人才</div>
        <div class="part05List">
          <div class="part05Item">
            <img src="../../assets/img/bgIcon1.png"/>
            <div class="bgText1">人才严选</div>
            <div class="bgText2">
              单刻达人才经过层层筛选，只准入行业内30%的精英，作为平台的自由职业者，为项目方项目保驾护航。
            </div>
          </div>
          <div class="part05Item">
            <img src="../../assets/img/bgIcon2.png"/>
            <div class="bgText1">无忧售后</div>
            <div class="bgText2">
              专业化客服团队为项目方提供全天候支持，项目成果7天内免费修改。
            </div>
          </div>
          <div class="part05Item">
            <img src="../../assets/img/bgIcon3.png"/>
            <div class="bgText1">隐私保护</div>
            <div class="bgText2">
              全方位保护项目方数据与隐私，平台不留存任何项目成果，支付交易安全无忧，银行级资金托管。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="part02">
        <div class="t1">
          <div class="text">为人才匹配和展示优秀的项目，</div>
          <div class="text">人尽其才</div>
        </div>
        <div class="t2">
          在单刻达平台，与顶级项目方远程高效联动，拓宽职业边界，塑造行业影响力。
        </div>
        <div class="t3">
          <div> 自由掌握您的工作时间、地点和方式</div>
          <div> 探索不同的方式来增加收入</div>
          <div> 单刻达平台帮你寻找职业生涯中的每个机会</div>
        </div>
        <div>
          <div class="btn">
            <RouterLink to="/register">开始使用</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <!--    <Footer/>-->
  </main>
</template>

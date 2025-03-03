<script setup>
import Header from '../../components/Header/Header.vue'
import Footer from '../../components/Footer/Footer.vue'
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
        padding: 60px 50px 30px 50px;
        width: 360px;
        height: 300px;
        background: url(../../assets/img/bg1.png);
        background-size: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

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
        font-size: 56px;
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
      width: 464px;
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
    <Header/>
    <div>
      <img src="../../assets/img/home1.png" alt="logo" style="width: 100%"/>
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
                免费使用
              </div>
              <div class="ct2">
                注册与寻找专业人士。探索项目，以及预定咨
              </div>
            </div>
          </div>
          <div class="contentItem">
            <img src="../../assets/img/homeicon2.png"/>
            <div class="ct">
              <div class="ct1">
                发布工作，雇佣人才
              </div>
              <div class="ct2">
                寻找人才并不一定是件苦差事。发布工作后，
              </div>
            </div>
          </div>
          <div class="contentItem">
            <img src="../../assets/img/homeicon3.png"/>
            <div class="ct">
              <div class="ct1">
                严格的安全保障
              </div>
              <div class="ct2">
                资金托管平台的方式。交易无风险。
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
    <!--    <div class="banner">-->
    <!--      <div class="container">-->
    <!--        <div class="info">-->
    <!--          <div class="txt">-->
    <!--            <div class="big">让天下没有难找的工作</div>-->
    <!--            <div class="small">随时随地实现自己的价值</div>-->
    <!--          </div>-->
    <!--          <div class="btn">-->
    <!--            <RouterLink to="/register">开始使用</RouterLink>-->
    <!--          </div>-->
    <!--          <div class="icons">-->
    <!--            <div class="icon">-->
    <!--              <img src="../../assets/img/quanliuchengtiyan.png" />-->
    <!--              线上全流程-->
    <!--            </div>-->
    <!--            <div class="icon">-->
    <!--              <img src="../../assets/img/pipei.png" />-->
    <!--              高效智能匹配-->
    <!--            </div>-->
    <!--            <div class="icon">-->
    <!--              <img src="../../assets/img/renzhengdunpaianquanbaozhangzhibao.png" />-->
    <!--              严格的安全保障-->
    <!--            </div>-->
    <!--            <div class="icon">-->
    <!--              <img src="../../assets/img/dingdantouminghua.png" />-->
    <!--              透明化反馈和交易体系-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="img">-->
    <!--          <img src="../../assets/img/banner_img.png" />-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="part1">-->
    <!--      <div class="wrapper">-->
    <!--        <div class="container">-->
    <!--          <div class="title">让寻找工作与雇佣更加简单</div>-->
    <!--          <div class="box">-->
    <!--            <div class="left">-->
    <!--              <div class="item">-->
    <!--                <div class="icon"><img src="../../assets/img/Frame8.png" /></div>-->
    <!--                <div class="info">-->
    <!--                  <div class="tit">免费使用</div>-->
    <!--                  <div class="des">-->
    <!--                    注册与寻找专业人士.-->
    <!--                    <br />-->
    <!--                    探索项目，以及预定咨询。-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="item">-->
    <!--                <div class="icon"><img src="../../assets/img/Frame6.png" /></div>-->
    <!--                <div class="info">-->
    <!--                  <div class="tit">发布工作，雇佣人才</div>-->
    <!--                  <div class="des">-->
    <!--                    寻找人才并不一定是件苦差事。-->
    <!--                    <br />-->
    <!--                    发布工作后，或许我们可以帮你找到。-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="item">-->
    <!--                <div class="icon"><img src="../../assets/img/Frame7.png" /></div>-->
    <!--                <div class="info">-->
    <!--                  <div class="tit">严格的安全保障</div>-->
    <!--                  <div class="des">-->
    <!--                    资金托管平台的方式。-->
    <!--                    <br />-->
    <!--                    交易无风险。-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="right">-->
    <!--              <ul>-->
    <!--                <li class="reg">-->
    <!--                  <RouterLink to="/register">注册使用</RouterLink>-->
    <!--                </li>-->
    <!--                &lt;!&ndash; <li class="lj">-->
    <!--                  <RouterLink to="/">了解如何雇用</RouterLink>-->
    <!--                </li> &ndash;&gt;-->
    <!--              </ul>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="part2">
      <div class="wrapper">
        <div class="container">
          <div class="title">按类别寻找人才</div>
          <div class="title2">
            正在寻找专业人才?
            <RouterLink to="/client/search-talents">浏览人才</RouterLink>
          </div>
          <div class="box">
            <div class="item">
              <div class="tit">UI设计师</div>
              <div class="info">
                <div class="star">
                  <img src="../../assets/img/star.png"/>
                  4.85
                </div>
                <div class="num">1086人</div>
              </div>
            </div>

            <div class="item">
              <div class="tit">前端工程师</div>
              <div class="info">
                <div class="star">
                  <img src="../../assets/img/star.png"/>
                  4.85
                </div>
                <div class="num">1086人</div>
              </div>
            </div>

            <div class="item">
              <div class="tit">平面设计师</div>
              <div class="info">
                <div class="star">
                  <img src="../../assets/img/star.png"/>
                  4.85
                </div>
                <div class="num">1086人</div>
              </div>
            </div>

            <div class="item">
              <div class="tit">3D建模师</div>
              <div class="info">
                <div class="star">
                  <img src="../../assets/img/star.png"/>
                  4.85
                </div>
                <div class="num">1086人</div>
              </div>
            </div>

            <div class="item">
              <div class="tit">摄影师</div>
              <div class="info">
                <div class="star">
                  <img src="../../assets/img/star.png"/>
                  4.85
                </div>
                <div class="num">1086人</div>
              </div>
            </div>

            <div class="item">
              <div class="tit">人力资源</div>
              <div class="info">
                <div class="star">
                  <img src="../../assets/img/star.png"/>
                  4.85
                </div>
                <div class="num">1086人</div>
              </div>
            </div>

            <div class="item">
              <div class="tit">视频剪辑师</div>
              <div class="info">
                <div class="star">
                  <img src="../../assets/img/star.png"/>
                  4.85
                </div>
                <div class="num">1086人</div>
              </div>
            </div>

            <div class="item">
              <div class="tit">3D动画师</div>
              <div class="info">
                <div class="star">
                  <img src="../../assets/img/star.png"/>
                  4.85
                </div>
                <div class="num">1086人</div>
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
          <div class="title2" style="color: #ffffff;">这就是好企业</div>
          <div class="title3">雇佣合适人才的方式</div>
          <div class="box1">
            访问原创力上最优秀的1%的人才，以及一套完整的混合劳动力管理工具，这就是现在创新的运作方式
          </div>
          <div class="box">
            <div class="item">
              <div class="icon"><img src="../../assets/img/jisuxunren.png"/></div>
              寻找合适人才，填补技能缺口
            </div>
            <div class="item">
              <div class="icon"><img src="../../assets/img/gongzuo.png"/></div>
              掌握您的工作流程:雇佣、分类、支付您的人才
            </div>
            <div class="item">
              <div class="icon"><img src="../../assets/img/hezuo.png"/></div>
              雇佣合适人才的方式
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
          关于委托人
        </div>
        <div class="ctLine">
          <div class="ctLine1">
            与自由工作者线上合作完成工作
            <br/>
            从快速转型到重大变量
          </div>
          <div class="ctLine2">
            用自己的方式雇佣人才
          </div>
          <div class="ctLineItemList">
            <div class="ctLineItem">
              <div>发布工作，并且雇佣人才</div>
              <div>
                <a>前往人才市场</a>
              </div>
            </div>
            <div class="ctLineItem">
              <div>浏览工作，应聘一个职位</div>
              <div>
                <a>前往项目市场</a>
              </div>
            </div>
            <div class="ctLineItem">
              <div>获得专家的行业建议</div>
              <div>
                <a>前往协商</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part01">
      <div class="container1">
        <div class="t1">为什么选择在原创力雇佣人才</div>
        <div class="part05List">
          <div class="part05Item">
            <img src="../../assets/img/bgIcon1.png"/>
            <div class="bgText1">质量证明</div>
            <div class="bgText2">
              检查任何专业人士的工作样本。 客户评论和身份验证。
            </div>
          </div>
          <div class="part05Item">
            <img src="../../assets/img/bgIcon2.png"/>
            <div class="bgText1">放心雇佣</div>
            <div class="bgText2">
              寻找适合你的工作，谈价格。 只支付你批准的工作。
            </div>
          </div>
          <div class="part05Item">
            <img src="../../assets/img/bgIcon3.png"/>
            <div class="bgText1">安全可靠</div>
            <div class="bgText2">
              保护您的数据和隐私。 随时为您提供全天候支持。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="part02">
        <div class="t1">
          <div class="text">让人才找到</div>
          <div class="text">合适的工作</div>
        </div>
        <div class="t2">
          与您乐于合作的客户会面，并将您的事业或业务提升到新的高度。
        </div>
        <div class="t3">
          <div>  自由掌握您的工作时间、地点和方式</div>
          <div>  探索不同的方式来增加收入</div>
          <div>  为你的自由职业生涯的每一个阶段寻找机会</div>
        </div>
        <div>
          <div class="btn">
            <RouterLink to="/register">开始使用</RouterLink>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="part4">-->
<!--      <div class="wrapper">-->
<!--        <div class="container">-->
<!--          <div class="left">-->
<!--            <div class="title1">关于委托人</div>-->
<!--            <div class="title2">-->
<!--              用自己的方式-->
<!--              <br/>-->
<!--              雇佣人才-->
<!--            </div>-->
<!--            <div class="title3">-->
<!--              与自由工作者线上合作完成工作-->
<!--              <br/>-->
<!--              从快速转型到重大变量-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="right">-->
<!--            <div class="item">-->
<!--              <div class="tit">-->
<!--                发布一个工作-->
<!--                <br/>-->
<!--                并且雇佣人才-->
<!--              </div>-->
<!--              <div class="link">-->
<!--                <RouterLink to="/client/search-talents">前往人才市场</RouterLink>-->
<!--                <img src="../../assets/img/qianjin.png"/>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="item">-->
<!--              <div class="tit">-->
<!--                浏览工作-->
<!--                <br/>-->
<!--                并且应聘一个职位-->
<!--              </div>-->
<!--              <div class="link">-->
<!--                <RouterLink to="/search/position">前往项目市场</RouterLink>-->
<!--                <img src="../../assets/img/qianjin.png"/>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="item">-->
<!--              <div class="tit">-->
<!--                获得专家的-->
<!--                <br/>-->
<!--                行业建议-->
<!--              </div>-->
<!--              <div class="link">-->
<!--                <RouterLink to="/client/search-talents?is_consult=1">前往协商</RouterLink>-->
<!--                <img src="../../assets/img/qianjin.png"/>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="part5">-->
<!--      <div class="wrapper">-->
<!--        <div class="container">-->
<!--          <div class="left">-->
<!--            <div class="title1">-->
<!--              为什么选择-->
<!--              <br/>-->
<!--              在原创力雇佣人才-->
<!--            </div>-->
<!--            <div class="box">-->
<!--              <div class="item">-->
<!--                <div class="icon">-->
<!--                  <img src="../../assets/img/zhenshikekao.png" alt=""/>-->
<!--                </div>-->
<!--                <div class="info">-->
<!--                  <div class="tit">质量证明</div>-->
<!--                  <div class="des">-->
<!--                    检查任何专业人士的工作样本。-->
<!--                    <br/>-->
<!--                    客户评论和身份验证。-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="item">-->
<!--                <div class="icon">-->
<!--                  <img src="../../assets/img/zhaopin-qiyeziliao.png" alt=""/>-->
<!--                </div>-->
<!--                <div class="info">-->
<!--                  <div class="tit">放心雇佣</div>-->
<!--                  <div class="des">-->
<!--                    寻找适合你的工作，谈价格.-->
<!--                    <br/>-->
<!--                    只支付你批准的工作。-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="item">-->
<!--                <div class="icon">-->
<!--                  <img src="../../assets/img/zhenshikekao.png" alt=""/>-->
<!--                </div>-->
<!--                <div class="info">-->
<!--                  <div class="tit">安全可靠</div>-->
<!--                  <div class="des">-->
<!--                    专注于您的工作，了解我们帮助保护您的数据和隐私。-->
<!--                    <br/>-->
<!--                    如果您需要，我们随时为您提供全天候支持.-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="right">-->
<!--            <div class="box">-->
<!--              <div class="tit1">原创力</div>-->
<!--              <div class="tit2">随时随地实现</div>-->
<!--              <div class="tit3">自己的价值</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="part6">-->
<!--      <div class="wrapper">-->
<!--        <div class="container">-->
<!--          <div class="left">-->
<!--            <div class="title1">关于人才</div>-->
<!--          </div>-->
<!--          <div class="right">-->
<!--            <div class="tit1">-->
<!--              让人才找到合适的-->
<!--              <br/>-->
<!--              工作-->
<!--            </div>-->
<!--            <div class="tit2">-->
<!--              与您乐于合作的客户会面，并将您的事业或业务提升到新的高度。-->
<!--            </div>-->
<!--            <div class="box">-->
<!--              <div class="item">-->
<!--                <span></span>-->
<!--                自由掌握您的工作时间、地点和方式-->
<!--              </div>-->
<!--              <div class="item">-->
<!--                <span></span>-->
<!--                探索不同的方式来增加收入-->
<!--              </div>-->
<!--              <div class="item">-->
<!--                <span></span>-->
<!--                为你的自由职业生涯的每一个阶段寻找机会-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="btn">-->
<!--              <RouterLink to="/register">注册使用</RouterLink>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="part7">-->
<!--      <div class="wrapper">-->
<!--        <div class="container">-->
<!--          <div class="title1">受到领先品牌和创业公司的信赖</div>-->
<!--          <div class="box">-->
<!--            <div class="item">-->
<!--              “我们全流程把控各个运营环节的潜在风险，使我们能够从竞争对手中脱颖而出。”-->
<!--              <span>原创力运营总监</span>-->
<!--            </div>-->
<!--            <div class="item">-->
<!--              “做一个有灵魂有温度的互联网用工平台，力求为自由职业者和客户提供一个纯粹的交易环境。”-->
<!--              <span>原创力CEO</span>-->
<!--            </div>-->
<!--            <div class="item">-->
<!--              “我们不断收集来自自由职业者和客户的意见，全天候客服团队的支持，让所有的问题在最短时间内得到解决。”-->
<!--              <span>原创力客户支持总监</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <Footer/>
  </main>
</template>

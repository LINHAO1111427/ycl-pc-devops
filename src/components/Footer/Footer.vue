<template>
  <footer>
    <div class="wrapper">
      <div class="container">
        <div class="footer_nav">
          <ul>
            <li>
              <div class="tit">对于委托人</div>
              <div class="link">
                <RouterLink to="/">怎么雇佣</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">人才市场</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">项目目录</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">代理商</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">企业</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">所有雇用</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">在当前地区雇佣</RouterLink>
              </div>
            </li>
            <li>
              <div class="tit">对于人才</div>
              <div class="link">
                <RouterLink to="/">怎么找到工作</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">合同</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">在当前地区寻找工作</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">在所有地区寻找工作</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">广告获得工作</RouterLink>
              </div>
            </li>

            <li>
              <div class="tit">资源</div>
              <div class="link">
                <RouterLink to="/">帮助&支持</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">成功案例</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">博客</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">社区</RouterLink>
              </div>
            </li>

            <li>
              <div class="tit">企业</div>
              <div class="link">
                <RouterLink to="/">关于我们</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">公司架构</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">投资者关系</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">职业</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">我们的成就</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">联系我们</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">新闻</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">合作伙伴</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">信任、安全与保障</RouterLink>
              </div>
              <div class="link">
                <RouterLink to="/">用户使用协议</RouterLink>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer_copy">
          <div class="info">
            <span>原创力 © 2024</span><span>京ICO备18053355号-2</span><span>京公网安备</span><span>11001402047559号</span>
            <RouterLink to="/">版权声明</RouterLink>
            <RouterLink to="/">问题反馈</RouterLink>
            <RouterLink to="/">在线沟通</RouterLink>
          </div>
          <div class="share">
            <a href="">
              <img src="../../assets/img/weibo.png" alt="" />
            </a>
            <a href="">
              <img src="../../assets/img/weixin-copy.png" alt="" />
            </a>
            <a href="">
              <img src="../../assets/img/douyin.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #181818;
  color: #ffffff;
  padding: 50px 0 30px;;
}

.footer_nav ul {
  display: flex;
  justify-content: space-between;;
  margin-bottom: 80px;;
}

.footer_nav .tit {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 16px;;
}

.footer_nav .link a {
  font-size: 14px;
  color: #ffffff;
  opacity: 0.8;
  line-height: 28px;
}

.footer_nav .link a:hover {
  text-decoration: underline;
}

.footer_copy {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer_copy .share {
  display: flex
}

.footer_copy .share a {
  margin-left: 12px;
}

.footer_copy .info span {
  margin-left: 28px;;
}

.footer_copy .info {
  opacity: 0.2;
}

.footer_copy .info a {
  color: #ffffff;
  margin-left: 26px;
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="maodan-navbar">

    <div class="content">
      <div class="logo">
        <span>儿童科普游戏</span>
      </div>
      <div class="tabs">
        <RouterLink class="tab" to="/"><span>首页</span></RouterLink>
        <RouterLink class="tab" to="/game"><span>游戏页面</span></RouterLink>
        <RouterLink class="tab" to="/ps"><span>科普知识页面</span></RouterLink>
        <RouterLink class="tab" to="/group"><span>团队页面</span></RouterLink>
        <RouterLink class="tab" to="/contect"><span>联系页面</span></RouterLink>
      </div>
    </div>
    <div class="nav-action">
      <div class="nav-search-bar">
        <img src="./assets/icon/scearch-1.png">
        <input type="text" placeholder="搜索">
      </div>
      <div class="nav-action-content">
        <div class="login">登录/注册</div>
        <div class="menu"><img src="./assets/icon/menu-1.png"></div>
      </div>
    </div>


  </div>
  <RouterView />

  <footer>
    <div class="footer-1">
      <div class="footer-1-big">
        <div class="footer-logo">
          <img src="./assets/icon/glable.png">
          <span>儿童科普游戏</span>
        </div>
        <div class="footer-social-media">
          <img src="./assets/icon/basketball.png">
          <img src="./assets/icon/instragram.png">
          <img src="./assets/icon/twitter.png">
          <img src="./assets/icon/wechat.png">
          <img src="./assets/icon/weibo.png">
        </div>
      </div>
      <div class="footer-1-lists">
        <div class="footer-1-list">
          <div class="footer-1-list-head">
            产品
          </div>
          <div class="footer-1-list-item">游戏介绍</div>
          <div class="footer-1-list-item">下载</div>
          <div class="footer-1-list-item">新闻</div>
        </div>
        <div class="footer-1-list">
          <div class="footer-1-list-head">
            资源
          </div>
          <div class="footer-1-list-item">知识库</div>
          <div class="footer-1-list-item">教育资源</div>
          <div class="footer-1-list-item">活动</div>
        </div>
        <div class="footer-1-list">
          <div class="footer-1-list-head">
            社区
          </div>
          <div class="footer-1-list-item">论坛</div>
          <div class="footer-1-list-item">问答</div>
          <div class="footer-1-list-item">分享</div>
        </div>
      </div>
    </div>
    <div class="divider">
    </div>
    <div class="footer-2">
      <div class="footer-2-left">
        ©2023 产品版权所有。保留所有权利。
      </div>
      <div class="footer-2-right">
        <div class="footer-2-right-item">隐私政策</div>
        <div class="footer-2-right-item">服务条款</div>
        <div class="footer-2-right-item">Cookie设置</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>


/* 导航栏 */
.maodan-navbar {
  left: 0px;
  top: 0px;
  height: auto;
  min-width: 1076px;
  opacity: 1;
  background: rgba(255, 255, 255, 1);
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  align-items: center;
  padding: 16px 80px 16px 80px;
  

}

.maodan-navbar .content {
  display: flex;
}

.maodan-navbar .logo {
  font-size: 22px;
  padding-right: 60px;
  font-weight: 700;

  font-family: 'Kalam';
}

.maodan-navbar .tabs {
  display: flex;

  align-items: center;

}

.maodan-navbar .tab {
  margin-right: 32px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'HarmonyOS Sans SC';
  color: black;
  text-decoration: none;
}

.nav-action {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.nav-search-bar {
  width: 200px;
  height: 40px;
  background-color: #f2f3f5;
  border-radius: 292px;
  display: flex;
  align-items: center;

}

.nav-search-bar img {
  height: 20px;
  width: 20px;
  margin-left: 16px;
}

.nav-search-bar input {
  margin-left: 16px;
  margin-left: 16px;
  border: none;
  outline: none;
  padding: 0;
  border-radius: 0;
  background: none;
  color: #575757;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 24px;
  font-family: 'HarmonyOS Sans SC';
}

.nav-action-content {
  margin-left: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-action-content .login {
  border-radius: 10px;
  border: none;
  height: 40px;
  padding: 0px 24px 0px 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 255, 1);
  color: #fff;
  font-family: 'HarmonyOS Sans SC';
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 24px;


}

.nav-action-content .menu {
  width: 40px;
  height: 40px;
  margin-left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;


}

.nav-action-content .menu img {
  width: 21px;
  height: 18px;
  opacity: 1;
}

/* 页脚 */

footer {
  position: relative;
  height: auto;
  mix-blend-mode: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 80px 80px 80px 80px;
  background: rgba(255, 255, 255, 1);
  overflow: hidden;
  box-sizing: border-box;
  min-height: auto;
  align-self: stretch;
}

.footer-1 {
  position: relative;
  height: auto;
  display: flex;
  min-height: auto;
  align-self: stretch;
  justify-content: space-between;
}

.footer-1-big {
  left: 0px;
  top: 0px;
  min-width: 220px;
  height: 80px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

}

.footer-logo span {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 22px;
  color: rgba(29, 33, 41, 1);
  font-family: 'HarmonyOS Sans SC';
  text-align: left;
  margin-left: 5px;
  vertical-align: top;
}

.footer-logo img {
  width: 24px;
  height: 24px;

}

.footer-social-media {
  position: relative;
  margin-top: 30px;
  height: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  align-self: stretch;

}

.footer-social-media img {
  width: 19.38px;
  height: 19.38px;
}

.footer-1-lists {
  /* 列容器 */
  position: relative;
  height: auto;
  min-width: 620px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  flex-shrink: 0;
}

.footer-1-list {
  /* 单列的容器 */
  left: 0px;
  top: 0px;
  width: 180px;
  height: 148px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-right: 40px;
}

.footer-1-list-head {
  /* 标题 */
  left: 0px;
  top: 0px;
  width: 180px;
  height: 24px;
  opacity: 1;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 24px;
  color: rgba(29, 33, 41, 1);
  text-align: left;
  vertical-align: top;
  font-family: 'HarmonyOS Sans SC';
  /* 为下面的条目留出空虚 */
  margin-bottom: 16px;
}

.footer-1-list-item {
  /* 条目 */
  left: 0px;
  top: 0px;
  width: 180px;
  height: 36px;
  opacity: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 0px 8px 0px;
  /** 文本 */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 20px;
  color: rgba(29, 33, 41, 1);
  text-align: left;
  vertical-align: top;
  font-family: "HarmonyOS Sans SC";
}

.divider {
  position: relative;
  z-index: 0;
  height: 1px;
  mix-blend-mode: normal;
  display: flex;
  background: rgba(201, 205, 212, 1);
  flex-shrink: 0;
  align-self: stretch;
  margin-top: 60px;
}

.footer-2 {
  position: relative;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: auto;
  align-self: stretch;
  margin-top: 33px;
}

.footer-2-left {
  /** 文本1 */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 20px;
  color: rgba(29, 33, 41, 1);
  text-align: left;
  vertical-align: top;
  font-family: 'HarmonyOS Sans SC';
}

.footer-2-right {
  left: 935px;
  top: 0px;
  width: 345px;
  height: 20px;
  opacity: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

}

.footer-2-right-item{
  margin-left: 24px;
  font-size: 14px;
font-weight: 400;
letter-spacing: 0px;
line-height: 20px;
color: rgba(29, 33, 41, 1);
text-align: left;
vertical-align: top;
font-family: 'HarmonyOS Sans SC';

}

</style>

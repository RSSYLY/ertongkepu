<script>
import HeaderBar from '../components/HeaderBar.vue';
import FeatherBar from '../components/FeatherBar.vue';
import imgUrl1 from '../assets/img/children.png'
export default {
  components: {
    HeaderBar, FeatherBar
  },
  data(){
    return{
      imgUrl1
    }
  }
};
</script>

<template>
  <HeaderBar title="儿童科普游戏" describe="欢迎来到儿童科普游戏世界，让孩子们在游戏中学习知识，快乐成长！" :imgurl="imgUrl1" />
  <FeatherBar title="丰富的内容" describe="我们提供丰富多样的内容，覆盖科学、自然、艺术等多个领域，让孩子们能够广泛学习和探索。" :infodata="[
    { 'etitle': '科学实验', 'edescribe': '通过有趣的实验，激发孩子们的好奇心，培养科学思维和实验能力。', 'imgurl': 'src/assets/img/earth.png' },
    { 'etitle': '自然探索', 'edescribe': '带领孩子们走进大自然，认识动植物，学习保护环境的重要性。', 'imgurl': 'src/assets/img/starsfield.png' },
    { 'etitle': '艺术创作', 'edescribe': '培养孩子们的艺术天赋，通过绘画、手工等活动，激发创造力和想象力。', 'imgurl': 'src/assets/img/plants.png' },
    { 'etitle': '音乐乐园', 'edescribe': '让孩子们感受音乐的魅力，学习乐器演奏，培养音乐鉴赏能力。', 'imgurl': 'src/assets/img/microphone.png' },
    { 'etitle': '编程学堂', 'edescribe': '通过编程游戏，培养孩子们的逻辑思维和计算机技术，为未来打下坚实基础。', 'imgurl': 'src/assets/img/corporation.png' },
    { 'etitle': '运动乐园', 'edescribe': '在欢乐的运动中，锻炼孩子们的身体素质，培养团队合作和竞技精神。', 'imgurl': 'src/assets/img/sports.png' }]" />
  <!-- Logos -->
  <div class="logos">
    <div class="logos-title">
      儿童科普游戏
    </div>
    <div class="logos-title-content">
      <div class="logos-title-content-line-1">
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-img">
            <img src="../assets/icon/rocket.png">
          </div>
          <div class="logos-title-content-item-text" style="font-family: 'SourceHanSansCN-Bold';font-size: 16px;">
            太空探险
          </div>
        </div>
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-text" style="font-family: 'kalam';">
            实验室
          </div>
        </div>
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-img">
            <img src="../assets/icon/book.png">
          </div>
          <div class="logos-title-content-item-text" style="font-family: 'PTSerif'; font-style: italic;">
            科学知识
          </div>
        </div>
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-img">
            <img src="../assets/icon/plug.png">
          </div>
          <div class="logos-title-content-item-text" style="font-family: 'SourceHanSerifSC';">
            智力拼图
          </div>
        </div>
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-img">
            <img src="../assets/icon/artpint.png">
          </div>
          <div class="logos-title-content-item-text" style="font-family: 'Kingsoft-Cloud-Font';">
            创意艺术
          </div>
        </div>
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-img">
            <img src="../assets/icon/spader.png">
          </div>
          <div class="logos-title-content-item-text" style="font-family: 'TaipeiSansTCBeta-Bold';">
            昆虫世界
          </div>
        </div>


      </div>
      <div class="logos-title-content-line-1">
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-img">
            <img src="../assets/icon/tree.png">
          </div>
          <div class="logos-title-content-item-text" style="font-family: 'BoldSourceHanSerifSC';">
            自然探索
          </div>
        </div>
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-img">
            <img src="../assets/icon/glable.png">
          </div>
          <div class="logos-title-content-item-text" style="font-family: 'kalam';">
            地理知识
          </div>
        </div>
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-img">
            <img src="../assets/icon/microscope.png">
          </div>
          <div class="logos-title-content-item-text" style="font-family: 'BoldSourceHanSerifSC';font-weight: 500;">
            微观世界
          </div>
        </div>
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-text" style="font-family: 'BoldSourceHanSerifSC';font-weight: 400;">
            动物王国
          </div>
        </div>
        <div class="logos-title-content-item">
          <div class="logos-title-content-item-img">
            <img src="../assets/icon/robot.png">
          </div>
          <div class="logos-title-content-item-text" style="font-family: 'BoldSourceHanSerifSC';font-weight: 500;">
            科技未来
          </div>
        </div>


      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="cta">
    <div class="cta-content">
      <div class="cta-content-left">
        <div class="cta-content-left-theader">
          <div class="cta-content-left-header-title">了解更多关于儿童科普游戏的信息
          </div>
          <div class="cta-content-left-header-describe">欢迎来到儿童科普游戏世界，这里有丰富多样的科学知识和有趣的游戏等待着你，让我们一起探索奇妙的科学世界吧！
          </div>
        </div>
        <div class="cta-content-left-content">
          <div class="cta-content-left-content-1">
            <input type="email" placeholder="搜索">
            <div class="cta-content-left-content-1-submit">
              <div class="cta-content-left-content-1-submit-text">
                立即加入
              </div>
            </div>
          </div>
          <div class="cta-content-left-content-2">点击注册，即表示您确认同意我们的条款和条件。
          </div>
        </div>
      </div>
      <div class="frame-Aoe-2">
        <div class="vec-rectangle-Nza-1"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Logos */
.logos {
  position: relative;
  z-index: 4;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 80px 64px 80px 64px;
  background: rgba(255, 255, 255, 1);
  overflow: hidden;
  box-sizing: border-box;
  gap: 40px;
  min-height: auto;
  align-self: stretch;
}

.logos-title {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 0;
  justify-content: start;
  height: auto;
  color: rgba(29, 33, 41, 1);
  font-size: 32px;
  line-height: 42px;
  font-weight: 700;
  opacity: 1;
  letter-spacing: 0px;
  white-space: nowrap;
  min-height: 42px;
}

.logos-title-content {
  position: relative;
  z-index: 2;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  min-height: auto;
  align-self: stretch;
}

.logos-title-content-line-1 {
  position: relative;
  z-index: 1;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-shrink: 0;
  align-self: stretch;
}

.logos-title-content-item {
  position: relative;
  z-index: 1;
  border-radius: 6px;
  width: auto;
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px 0px 20px;
  box-sizing: border-box;
  gap: 4px;
  min-width: auto;
}

.logos-title-content-item-img {
  position: relative;
  z-index: 1;
  width: 32px;
  height: 32px;
  display: flex;
  overflow: hidden;
  flex-shrink: 0;
}



.logos-title-content-item-text {
  margin-left: 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  justify-content: start;
  height: 27px;
  color: rgba(29, 33, 41, 1);
  font-size: 18px;
  font-weight: 700;
  opacity: 1;
  letter-spacing: 0px;
  white-space: nowrap;
  width: auto;
}

/* CTA */
.cta {
  position: relative;
  z-index: 5;
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
  gap: 80px;
  min-height: auto;
  align-self: stretch;
  font-family: 'HarmonyOS Sans SC';
}

.cta-content {
  position: relative;
  z-index: 1;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
  min-height: auto;
  align-self: stretch;
}

.cta-content-left {
  position: relative;
  z-index: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
}

.cta-content-left-theader {
  position: relative;
  z-index: 1;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  min-height: auto;
  align-self: stretch;
}

.cta-content-left-header-title {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 0;
  justify-content: start;
  mix-blend-mode: normal;
  color: rgba(29, 33, 41, 1);
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  opacity: 1;
  letter-spacing: 0px;
  white-space: pre-wrap;
  height: auto;
  align-self: stretch;
}

.cta-content-left-header-describe {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  justify-content: start;
  mix-blend-mode: normal;
  color: rgba(29, 33, 41, 1);
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  opacity: 1;
  letter-spacing: 0px;
  white-space: pre-wrap;
  height: auto;
  align-self: stretch;
}

.cta-content-left-content {
  position: relative;
  z-index: 2;
  width: 513px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 0px 0px 0px;
  box-sizing: border-box;
  gap: 16px;
  min-height: auto;
}

.cta-content-left-content-1 {
  position: relative;
  z-index: 1;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  min-height: auto;
  align-self: stretch;
}

.cta-content-left-content-1 input {
  border: none;
  outline: none;
  position: relative;
  z-index: 1;
  border-radius: 12px;
  height: 52px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 12px 0px 12px;
  background: rgba(242, 243, 245, 1);
  box-sizing: border-box;
  gap: 8px;
  flex: 1;
}


.cta-content-left-content-1-submit {
  position: relative;
  z-index: 2;
  border-radius: 12px;
  width: auto;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 24px 0px 24px;
  background: rgba(0, 0, 255, 1);
  box-sizing: border-box;
  gap: 8px;
  min-width: auto;
}

.cta-content-left-content-1-submit-text {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 0;
  justify-content: start;
  height: 32px;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  opacity: 1;
  letter-spacing: 0px;
  white-space: nowrap;
  width: auto;
}

.cta-content-left-content-2 {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  justify-content: start;
  color: rgba(29, 33, 41, 1);
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  opacity: 1;
  letter-spacing: 0px;
  white-space: pre-wrap;
  height: auto;
  align-self: stretch;
}

.frame-Aoe-2 {
  position: relative;
  z-index: 2;
  border-radius: 16px;
  height: 400px;
  display: flex;
  flex: 1;
}

.vec-rectangle-Nza-1 {
  position: absolute;
  z-index: 0;
  left: 0px;
  top: 0px;
  width: 600px;
  height: 400px;
  border-radius: 16px;
  mix-blend-mode: normal;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.vec-rectangle-Nza-1::before {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  opacity: 1;
  background-image: url(../assets/img/undefined.png);
  border-radius: 16px;
}
</style>

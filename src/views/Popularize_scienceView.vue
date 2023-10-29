<script>
// import TheWelcome from '../components/TheWelcome.vue'
import Header2Bar from '../components/Header2Bar.vue';
export default {
    components: {
        Header2Bar
    }
};
</script>

<template>
    <Header2Bar title="探索自然奥秘" describe="通过科普知识游戏，了解大自然的神奇之处" imgurl="../assets/img/coach.png" title1="探索奇妙动物"
        describe1="通过游戏了解世界上一些奇妙的动物，它们的生活习性和特点" title2="揭秘自然现象" describe2="发现并了解一些奇异的自然现象，如彩虹、闪电等" />
    <div class="fcontent-1">
        <div class="content-1-sub">
            <div class="content-1-title">自然科学知识
            </div>
            <div class="content-1-content">
                <div class="content-1-content-title">学习自然科学知识，拓宽视野
                </div>
                <div class="content-1-content-items">
                    <div class="content-1-content-item">
                        <div class="content-1-content-item-left">
                            <div class="content-1-content-item-left-logo">
                                <div class="content-1-content-item-left-logo-sub">
                                    <img class="img-IlX-1" src="../assets/icon/leaf.png">
                                </div>
                            </div>
                            <div class="content-1-content-item-left-text"><span>植物是地球上最重要的生物</span></div>
                        </div>
                        <div class="content-1-content-item-right">了解更多
                        </div>
                    </div>
                    <div class="content-1-content-item">
                        <div class="content-1-content-item-left">
                            <div class="content-1-content-item-left-logo">
                                <div class="content-1-content-item-left-logo-sub">
                                    <img class="img-IlX-1" src="../assets/icon/dogpad.png">
                                </div>
                            </div>
                            <div class="content-1-content-item-left-text"><span>动物世界的奇妙之旅</span></div>
                        </div>
                        <div class="content-1-content-item-right">了解更多
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.fcontent-1 {
    position: relative;
    z-index: 3;
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
    /* 字体 */
    font-family: 'HarmonyOS Sans SC';
}

.content-1-sub {
    position: relative;
    z-index: 1;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 80px;
    min-height: auto;
    align-self: stretch;
}

.content-1-title {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 0;
    justify-content: start;
    color: rgba(29, 33, 41, 1);
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    opacity: 1;
    font-family: 'HarmonyOSSansSC-Bold';
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex: 1;
}

.content-1-content {
    position: relative;
    z-index: 2;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    flex: 1;
}

.content-1-content-title {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 0;
    justify-content: start;
    color: rgba(29, 33, 41, 1);
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    opacity: 1;
    font-family: 'HarmonyOSSansSC-Regular';
    letter-spacing: 0px;
    white-space: pre-wrap;
    height: auto;
    align-self: stretch;
}

.content-1-content-items {
    position: relative;
    z-index: 2;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
    min-height: auto;
    align-self: stretch;
}

.content-1-content-item {
    position: relative;
    z-index: 1;
    border-radius: 8px;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 24px 16px 16px;
    background: rgba(242, 243, 245, 1);
    box-sizing: border-box;
    gap: 24px;
    min-height: auto;
    align-self: stretch;
}

.content-1-content-item-left {
    position: relative;
    z-index: 1;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    flex: 1;
}

.content-1-content-item-left-logo {
    position: relative;
    z-index: 1;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    background: rgba(0, 0, 255, 1);
    overflow: hidden;
    flex-shrink: 0;
}

.content-1-content-item-left-logo-sub {
    position: absolute;
    z-index: 1;
    left: 8px;
    top: 8px;
    width: 24px;
    height: 24px;
    display: flex;
    overflow: hidden;
}

.content-1-content-item-left-logo-sub img {

    width: 24px;
    height: 24px;
}

.content-1-content-item-left-text {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    justify-content: start;
    height: 24px;
    color: rgba(29, 33, 41, 1);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    opacity: 1;
    font-family: 'HarmonyOSSansSC-Medium';
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex: 1;
}

.content-1-content-item-left-text span {
    margin: 0px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.content-1-content-item-right {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    justify-content: start;
    height: 24px;
    color: rgba(0, 0, 255, 1);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    opacity: 1;
    font-family: 'HarmonyOSSansSC-Medium';
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex: 1;
    text-align: right;
}
</style>

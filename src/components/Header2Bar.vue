<script>
export default {
    props: ['title', 'describe', 'imgurl', 'title1', 'describe1', 'title2', 'describe2']
};
</script>
<template>
    <div class="header-2">
        <div class="fheader-2-sub">
            <div class="header-2-img" :style="{ backgroundImage: 'url(' + imgurl + ')' }">
            </div>
            <div class="header-2-text">
                <div class="header-2-text-1">
                    <div class="header-2-text-1-title">{{ title }}
                    </div>
                    <div class="header-2-text-1-describe">{{ describe }}
                    </div>
                </div>
                <div class="header-2-text-2">
                    <div class="header-2-text-2-title">{{ title1 }}
                    </div>
                    <div class="header-2-text-2-describe">{{ describe1 }}
                    </div>
                </div>
                <div class="header-2-text-3">
                    <div class="header-2-text-3-title">{{ title2 }}
                    </div>
                    <div class="header-2-text-3-describe">{{ describe2 }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.header-2 {
    position: relative;
    z-index: 2;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 80px 120px 80px;
    background: rgba(247, 248, 250, 1);
    overflow: hidden;
    box-sizing: border-box;
    gap: 60px;
    min-height: auto;
    align-self: stretch;
    /* 字体 */
    font-family: 'HarmonyOS Sans SC';
}

.fheader-2-sub {
    position: relative;
    z-index: 1;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 60px;
    min-height: auto;
    align-self: stretch;
}

.header-2-text {
    position: relative;
    z-index: 2;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 49px;
    min-width: auto;
}

.header-2-img {
    position: relative;
    z-index: 0;
    height: 460px;
    border-radius: 16px;
    mix-blend-mode: normal;
    display: flex;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    flex: 1;
}

.header-2-img::before {
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
    /* background-image: url('../assets/img/tide.png'); */
    border-radius: 16px;
}

.header-2-text-1 {
    position: relative;
    z-index: 1;
    width: 610px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    min-height: auto;
}

.header-2-text-1-title {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 0;
    justify-content: start;
    height: 66px;
    mix-blend-mode: normal;
    color: rgba(29, 33, 41, 1);
    font-size: 56px;
    line-height: 66px;
    font-weight: 700;
    opacity: 1;
    font-family: 'HarmonyOSSansSC-Bold';
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex-shrink: 0;
    align-self: stretch;
}

.header-2-text-1-describe {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    justify-content: start;
    height: 84px;
    mix-blend-mode: normal;
    color: rgba(29, 33, 41, 1);
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    opacity: 1;
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex-shrink: 0;
    align-self: stretch;
}

.header-2-text-2 {
    position: relative;
    z-index: 2;
    width: 610px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    min-height: auto;
}

.header-2-text-2-title {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 0;
    justify-content: start;
    height: 28px;
    mix-blend-mode: normal;
    color: rgba(0, 0, 255, 1);
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    opacity: 1;
    font-family: 'HarmonyOSSansSC-Bold';
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex-shrink: 0;
    align-self: stretch;
}

.header-2-text-2-describe {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    justify-content: start;
    height: 48px;
    mix-blend-mode: normal;
    color: rgba(29, 33, 41, 1);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    opacity: 1;
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex-shrink: 0;
    align-self: stretch;
}

.header-2-text-3 {
    position: relative;
    z-index: 3;
    width: 610px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    min-height: auto;
}

.header-2-text-3-title {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 0;
    justify-content: start;
    height: 28px;
    mix-blend-mode: normal;
    color: rgba(0, 0, 255, 1);
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    opacity: 1;
    font-family: 'HarmonyOSSansSC-Bold';
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex-shrink: 0;
    align-self: stretch;
}

.header-2-text-3-describe {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    justify-content: start;
    height: 48px;
    mix-blend-mode: normal;
    color: rgba(29, 33, 41, 1);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    opacity: 1;
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex-shrink: 0;
    align-self: stretch;
}
</style>
  
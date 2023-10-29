<script>
export default {
    props: {
        title: String, // 声明title为字符串类型的prop
        describe: String, // 声明describe为字符串类型的prop
        infodata: Array // 声明infodata为数组类型的prop，用于传递JSON数组
    }
};
</script>

<template>
    <div class="feature">
        <div class="feature-header">
            <div class="feature-header-sub">
                <div class="feature-header-left">
                    <div class="feature-header-left-text">{{ title }}</div>
                </div>
                <div class="feature-header-right">
                    <div class="feature-header-right-text">{{ describe }}</div>
                </div>
            </div>
        </div>
        <div class="feature-content">
            <div class="feature-content-item" v-for="item in infodata" :key="item">
                <img class="feature-content-item-img" :src="item.imgurl">
                <div class="feature-content-item-text">
                    <div class="feature-content-item-text-header">
                        {{ item.etitle }}
                    </div>
                    <div class="feature-content-item-text-describe">
                        {{ item.edescribe }}
                    </div>
                </div>
                <div skip-event="" class="feature-content-item-logo">
                    <img>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.feature {
    position: relative;
    z-index: 3;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 80px 0px 80px 0px;
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
    box-sizing: border-box;
    gap: 80px;
    min-height: auto;
    align-self: stretch;
    font-family: 'HarmonyOS Sans SC';
}

/* .feature-content {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  min-height: auto;
  align-self: stretch;
}

.feature-content-item {

} */

.feature-content {
    display: flex;
    flex-wrap: wrap;
    gap: 10%;
    justify-content: center;

}

.feature-content-item {
    width: 400px;
    height: 406px;
    margin: 0 0 40px 0;
    box-sizing: border-box;
}

.feature-content-item-img {
    width: 400px;
    height: 280px;
    border-radius: 12px;
}

.feature-content-item-text {

    margin-top: 20px;
}

/* 如果需要垂直排列图片、头部和描述，可以使用Flex布局 */
.feature-content-item-text-header {
    /** 文本1 */
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 42px;
    color: rgba(29, 33, 41, 1);
    text-align: left;

}

.feature-content-item-text-describe {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(134, 144, 156, 1);
    text-align: left;
    vertical-align: top;
}

/* 这会使文本垂直排列在图片下方 */






/* 头部 */
.feature-header {
    padding: 0px 80px 0px 80px;
    position: relative;
    z-index: 1;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;
    min-height: auto;
    align-self: stretch;
}

.feature-header-sub {
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

.feature-header-left {
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
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex: 1;
}

.feature-header-left-text {
    display: inline;
    margin: 0px;
    width: 100%;
    text-align: left;
}



.feature-header-right {
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
    flex: 1;
}

.feature-header-right-text {
    margin: 0px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>
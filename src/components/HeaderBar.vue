<script>
export default {
    props: ['title', 'describe', 'imgurl']
};
</script>

<template>
    <div class="header">
        <div class="header-text">
            <div>{{ title }}</div>
            <p>{{ describe }}
            </p>
        </div>
        <div class="header-img">
            <div class="header-img-img" :style="{
                backgroundImage: 'url(' + imgurl + ')'
            }"></div>
        </div>
    </div>
</template>

<style>
.header {
    position: relative;
    z-index: 2;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 200px 0px 160px;
    background: rgba(29, 33, 41, 1);
    overflow: hidden;
    box-sizing: border-box;
    gap: 200px;
    flex-shrink: 0;
    align-self: stretch;
    /* 字体 */
    font-family: 'HarmonyOS Sans SC';
}

.header-text {
    position: relative;
    z-index: 1;
    width: 1080px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;
}

.header-text div {
    left: 0px;
    top: 0px;
    width: 1040px;
    height: 56px;
    opacity: 1;
    display: flex;

    /** 文本1 */
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 56px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;

}

.header-text p {
    left: 0px;
    top: 72px;
    width: 1080px;
    height: 28px;
    opacity: 1;
    display: flex;

    /** 文本1 */
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;

}

.header-img {
    position: absolute;
    z-index: 2;
    left: calc(50% - 800px/2 + 253px);
    top: calc(50% - 400px/2 + 0px);
    width: 800px;
    height: 400px;
    display: flex;
}

.header-img-img {
    position: absolute;
    z-index: 0;
    border: unset !important;
    box-shadow: unset;
    left: 0px;
    top: 0px;
    width: 800px;
    height: 400px;
    background-size: cover;
}
</style>

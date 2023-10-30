<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <div class="frame-Iec-2">
        <div class="vec-rectangle-qNe-1"></div>
        <div class="frame-wkF-2">
            <div class="frame-jJO-1">
                <div class="text-jPS-1">欢迎来到儿童科普游戏
                </div>
                <div class="frame-AlW-2">
                    <div class="text-Bsm-1">在这里，你将会有很多有趣的科学知识和游戏等着你，快来加入我们吧！</div>
                    <div class="frame-vsr-2">
                        <div class="frame-nva-1">
                            <div class="frame-Cck-1">
                                <input class="text-rjR-1" placeholder="请输入您的邮箱地址">
                            </div>
                            <div class="frame-ouW-2">
                                <div class="text-QZd-1">
                                    <div class="p-text-QZd-1">发送</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-ziW-2">如果您有任何问题或建议，欢迎随时与我们联系！
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="com">
        <div class="com-header">
            <div class="com-header-title">联系我们</div>
            <div class="com-header-describe">如果您对我们的游戏有任何疑问、建议，或者需要帮助，可以通过以下方式联系我们：</div>
        </div>
        <div class="com-content">
            <div class="com-content-left">
                <div class="com-input-label">姓名</div>
                <input class="com-input-content" type="text" placeholder="输入您的姓名">
                <div class="com-input-label">邮箱</div>
                <input class="com-input-content" type="email" placeholder="输入您的邮箱">
                <div class="com-input-label">电话</div>
                <input class="com-input-content" type="number" placeholder="输入您的电话">
                <div class="com-input-label">留言</div>
                <textarea class="com-input-content" placeholder="输入内容..."
                    style="width: 100%; height: 100px; resize: none;padding: 20px 10px 20px 13px;"></textarea>
                <div class="com-input-checkbox"> <input type="checkbox" id="customCheckbox">
                    <label for="customCheckbox"></label>
                    <div class="com-checkbox-text">同意协议</div>
                </div>
                <div class="com-submit">发送</div>

                <div class="com-content-right"></div>

            </div>
            <div class="com-content-right">
                <div class="com-content-right-item">
                    <img class="com-content-item-logo" src="../assets/icon/mail.png" style="width: 32px;height: 24px;">
                    <div class="com-content-item-title">邮箱</div>
                    <div class="com-content-item-describe">support@chiyu.moe</div>
                </div>
                <div class="com-content-right-item">
                    <img class="com-content-item-logo" src="../assets/icon/phone.png" style="width: 22px;height: 32px;">
                    <div class="com-content-item-title" style="margin-top:19px;">电话</div>
                    <div class="com-content-item-describe">+86 10000</div>
                </div>
                <div class="com-content-right-item">
                    <img class="com-content-item-logo" src="../assets/icon/location.png" style="width: 19.32px;height: 26.67px;">
                    <div class="com-content-item-title">地址</div>
                    <div class="com-content-item-describe">陕西省 - 西安市 - 学府大街1号</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.com {
    left: 0px;
    top: 974px;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 80px 80px 80px 80px;
    font-family: 'HarmonyOS Sans SC';

}

.com-header {
    left: 0px;
    top: 0px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

}

.com-header-title {
    left: 0px;
    top: 0px;
    opacity: 1;
    display: flex;

    /** 文本1 */
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 56px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;

}

.com-header-describe {
    margin-top: 16px;
    width: 1280px;
    height: 28px;
    opacity: 1;
    display: flex;

    /** 文本1 */
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;

}

.com-content {
    margin-top: 80px;
    width: 100%;
    display: flex;
}

.com-content-left {
    width: 40%;
}

.com-input-label {
    left: 0px;
    top: 0px;
    margin-top: 24px;
    opacity: 1;
    display: flex;

    /** 文本1 */
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;

}

.com-input-content {
    border: none;
    outline: none;
    left: 0px;
    margin-top: 8px;
    width: 100%;
    height: 52px;
    opacity: 1;
    border-radius: 12px;
    background: rgba(242, 243, 245, 1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 12px 0px 12px;

    font-family: 'HarmonyOS Sans SC';

}

.com-input-checkbox {
    margin-top: 24px;
    display: flex;
}

/* 隐藏默认的checkbox */
.com-input-checkbox input[type="checkbox"] {
    display: none;
}

/* 创建自定义的checkbox外观 */
.com-input-checkbox input[type="checkbox"]+label::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(242, 243, 245, 1);
    border-radius: 4px;
    background-color: rgba(242, 243, 245, 1);
    margin-right: 10px;
}

/* 标记选中的checkbox */
.com-input-checkbox input[type="checkbox"]:checked+label::before {
    background-color: #4100ff;
    /* 选中后的颜色，你可以替换为自己喜欢的颜色 */
}

/* 标签样式，这里的"for"属性要与checkbox的id对应 */
.com-input-checkbox label {
    cursor: pointer;
}

/* 为label添加样式，使其看起来更美观 */
.com-input-checkbox label {
    display: flex;
    align-items: center;
}

.com-submit {
    margin-top: 24px;
    width: 88px;
    height: 52px;
    opacity: 1;
    border-radius: 12px;
    background: rgba(0, 0, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 24px 0px 24px;
    color: #fff;

}

.com-content-right {
    display: flex;
    flex: inherit;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: row;
    align-content: flex-start;
    margin-left: 150px;
    margin-top: 50px;
    gap: 24px;
}

.com-content-right-item {
    left: 0px;
    top: 0px;
    width: 278px;
    height: 124px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

}

.com-content-item-logo {
    width: 48px;
    height: 48px;
}

.com-content-item-title {
    margin-top: 28px;

    opacity: 1;
    display: flex;

    /** 文本1 */
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 28px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;

}

.com-content-item-describe {
    left: 0px;
    top: 36px;
    width: 278px;
    height: 24px;
    opacity: 1;
    display: flex;

    /** 文本1 */
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(29, 33, 41, 1);
    text-align: left;
    vertical-align: top;

}


/*  */
.frame-Iec-2 {
    position: relative;
    z-index: 2;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
    min-height: auto;
    align-self: stretch;
    /* 字体 */
    font-family: 'HarmonyOS Sans SC';
}

.vec-rectangle-qNe-1 {
    position: relative;
    z-index: 0;
    height: 600px;
    display: flex;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    flex-shrink: 0;
    align-self: stretch;
}

.vec-rectangle-qNe-1::before {
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
    background-image: url(https://img.jsdesign2.com/assets/img/64422a39df52c534476d7969.png#80f02a594568b3090357ca63a4246620);
}

.frame-wkF-2 {
    position: relative;
    z-index: 2;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 80px 80px 80px 80px;
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
    box-sizing: border-box;
    gap: 60px;
    min-height: auto;
    align-self: stretch;
}

.frame-jJO-1 {
    position: relative;
    z-index: 1;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 80px;
    min-height: auto;
    align-self: stretch;
}

.text-jPS-1 {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 0;
    justify-content: start;
    mix-blend-mode: normal;
    color: rgba(29, 33, 41, 1);
    font-size: 56px;
    line-height: 66px;
    font-weight: 700;
    opacity: 1;
    font-family: 'HarmonyOSSansSC-Bold';
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex: 1;
}

.frame-AlW-2 {
    position: relative;
    z-index: 2;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    flex: 1;
}

.text-Bsm-1 {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 0;
    justify-content: start;
    mix-blend-mode: normal;
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

.frame-vsr-2 {
    position: relative;
    z-index: 2;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 16px 0px 0px 0px;
    box-sizing: border-box;
    gap: 16px;
    min-height: auto;
    align-self: stretch;
}

.frame-nva-1 {
    position: relative;
    z-index: 1;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    min-height: auto;
    align-self: stretch;
}

.frame-Cck-1 {
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

.frame-Cck-1 input {
    border: none;
    outline: none;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 0;
    justify-content: center;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    background: rgba(242, 243, 245, 1);
    font-family: 'HarmonyOSSansSC-Regular';
    letter-spacing: 0px;
    white-space: pre-wrap;
    flex: 1;
}

.frame-ouW-2 {
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

.text-QZd-1 {
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
    font-family: 'HarmonyOSSansSC-Regular';
    letter-spacing: 0px;
    white-space: nowrap;
    width: auto;
}

.text-ziW-2 {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    justify-content: start;
    mix-blend-mode: normal;
    color: rgba(134, 144, 156, 1);
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    opacity: 1;
    font-family: 'HarmonyOSSansSC-Regular';
    letter-spacing: 0px;
    white-space: pre-wrap;
    height: auto;
    align-self: stretch;
}

/* #2 */
</style>

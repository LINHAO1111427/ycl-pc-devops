<template>
    <div class="easy">
        <div class="talents-container">
            <div class="open-img">
                <img src="../../assets/client/9.png" alt="">
            </div>
            <h1>欢迎，郑颖！ </h1>
            <h1>让我们开始发布你的第一个工作吧</h1>
            <div class="open-cn">原创力平台有各种领域的专业人才，随时随地高质量的交付工作成果！</div>
            <n-button type="primary" class="open-btn" size="large">
                开始发布
            </n-button>
        </div>
    </div>
</template>

<style scoped>
.easy {
    width: 100%;
    background-color: #F4FBFA;
    position: relative;
}

.talents-container {
    width: 1360px;
    margin: 0 auto;
    padding: 20px 0;
    max-width: 100%;
}

@media screen and (max-width: 1360px) {

    /* 在此处添加适用于宽度小于1360像素的设备的样式 */
    .talents-container {
        width: 1200px;
        margin: 0 auto;
        padding: 20px 0;
        max-width: 100%;
    }
}

.open-img {
    width: 180px;
    height: 180px;
}

h1 {
    font-weight: 300;
    font-size: 32px;
    color: #333333;
    padding: 10px 0;
}

.open-cn {
    font-size: 14px;
    color: #808080;
    padding: 30px 0;
}

.open-btn {
    margin-bottom: 100px;
    padding: 0 40px;
}
</style>
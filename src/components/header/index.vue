<template>
    <div>
        <!-- 头部公共组件 -->
        <div class="title">
            <div class="title-left">
               <a class="man">男</a>
               <a class="woman">女</a>
            </div>
            <div class="logo"></div>
            <!-- <h2>追书神器</h2> -->
            <div class="title-right"><i class="iconfont">&#xe629;</i></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped >
    .title{
        display: flex;
        justify-content:space-around;
        color:#B93321;
        padding-bottom:.11rem;
    }
    .title-left{
        margin-top:0.16rem;
        font-size:.12rem;
        width: .4rem;
        height: .2rem;
        display: flex;
        justify-content: space-around;
        background: #f5f5f5;
        border-radius: .2rem;
    }
    .man{
      text-decoration: none;
      font-size: .12rem;
      line-height: .2rem;
      color: #9a9a9a;
      width: .2rem;
      height: .2rem;
      text-align: center;
    }
    .logo{
        width: .66rem;
        height: .16rem;
        margin-top:.16rem;
        margin-left: -0.16rem;
        background: url(data:image/png;base64,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) no-repeat;
        background-size: 100% 100%;
    }
    h2{
        margin-left: -0.13px;
    }
    .title-left a:hover{
        background: #B93321;
        border-radius: 50%;
        color: white;
    }
    .title-left a:active{
        background: #B93321;
        border-radius: 50%;
        color: white;
    }
    .woman{
      text-decoration: none;
      font-size: .12rem;
      line-height: .2rem;
      color: #9a9a9a;
      width: .2rem;
      height: .2rem;
      text-align: center;
    }
    .title-right{
        margin-top: .16rem;
        font-size: .12rem;
    }
    @font-face {
        font-family: 'iconfont';  /* project id 891165 */
        src: url('//at.alicdn.com/t/font_891165_2crbg7heqm.eot');
        src: url('//at.alicdn.com/t/font_891165_2crbg7heqm.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_891165_2crbg7heqm.woff') format('woff'),
        url('//at.alicdn.com/t/font_891165_2crbg7heqm.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_891165_2crbg7heqm.svg#iconfont') format('svg');
    }

    .iconfont{
        font-family:"iconfont" !important;
        font-size:22px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
</style>

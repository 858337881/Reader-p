<template lang="html">
  <div class="bottom">
    <div class="bottomSearch">
      <input type="text" name="" placeholder="总裁">
      <mt-button type="default">搜索</mt-button>
    </div>
    <div class="navigation">
      <a href="#"><span>首页</span></a>
      <a href="#"><span>分类</span></a>
      <a href="#"><span>排行</span></a>
      <a href="#"><span>书单</span></a>
      <a href="#"><span>我的</span></a>
    </div>
    <div class="address">
      <a href="#">沪公网安备 31011202006103号</a>
    </div>
    <p>上海元聚网络科技有限公司 增值电信业务经营许可证沪B2-20170022 网络文化经营许可证沪网文（2016）3206-227号 出版物经营许可证新出发沪批字第U7659号</p>
    <h5>客服电话：021-54393188-8048</h5>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.bottom{
  background: #f4f4f4;
  .bottomSearch{
    position: relative;
    padding: 0 10%;
    margin-bottom: .2rem;
    display: inline-block;
    width: 80%;
    input{
      float: left;
      width: 72%;
      height: .3rem;
      padding-left: .1rem;
      border: 1px solid #ebebeb;
      border-radius: 2px;
      -webkit-appearance: none;
      line-height: .3rem;
      text-decoration: none;
    }
    button{
      float: right;
      width: 20%;
      height: .3rem;
      font-size: 0.12rem;
      background: white;
      outline: none;
      -webkit-appearance: none;
      line-height: .3rem;
    }
  }
  .navigation{
    display: flex;
    justify-content: space-around;
    height: 0.26rem;
    a{
      width: 20%;
      font-size: 0.14rem;
      text-align: center;
      span{
        background-size: 1px 100%;
        background-image: linear-gradient(90deg,transparent 50%,#ccc 0);
        background-repeat: no-repeat;
        background-position: 100%;
        width: 100%;
        display: inline-block;
      }
    }
  }
  .address{
    height: 0.2rem;
    display: flex;
    justify-content: center;
    margin-top: 0.2rem;
    a{
      font-size: 0.12rem;
    }
  }
  p{
    padding: 0.1rem 0.1rem;
    font-size: 0.12rem;
    color: #999;
  }
  h5{
    width: 100%;
    font-size: 0.12rem;
    margin-top: 0.1rem;
    color:#999;
    text-align: center;
  }
}
</style>

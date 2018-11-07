<template lang="html">
  <div class="tabs">
    <router-link to="/Classify">
      <span>分类</span>
    </router-link>
    <router-link to="/Rank">
      <span>排行</span>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.tabs{
  background: #9b2b1d;
  display: flex;
  justify-content: space-around;
  align-items:center;
  height:0.36rem;
  a{
    width: 25%;
    height: 0.2rem;
    color: #ddada9;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: space-around;
    span{
      font-size: 0.16rem;
      line-height: 0.2rem;
    }
  }
  .active{
    color:white;
  }
}
</style>

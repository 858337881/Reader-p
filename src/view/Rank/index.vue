<template lang="html">
  <div class="rank">
    <div class="rankType" v-for="i in list" :key="i.key">
      <p>{{i.title}}</p>
      <div class="rankdiff">
        <div class="rankList" v-for="(j,index) in i.data" :key="index" @click="detail(j._id)">
          <img :src="'http://statics.zhuishushenqi.com'+j.cover" alt="">
          <span>{{j.title}}</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      list:[]
    }
  },
  methods: {
    detail:function(_id){
      this.$router.push({
        path:`/Rank/${_id}`
      })
    }
  },
  created(){
      axios.get('/api/ranking/gender').then((res)=>{
        console.log(res);
        this.list=[
          {
            type:"male",
            title:"男生",
            data:res.data.male
          },
          {
            type:"female",
            title:"女生",
            data:res.data.female
          }
        ]
      }).catch((err)=>{
        console.log(err);
      })
  }
}
</script>

<style lang="less">
.rank{
  display: block;
  .rankType{

    p{
      padding: 0 .2rem;
      height: 0.5rem;
      font-size: 0.14rem;
      line-height: 0.5rem;
      font-weight: 400;
      background: #e6e6e6;
      color: #999;
    }
    .rankdiff{
      width: 100%;
      .rankList{
        height:0.5rem;
        display: flex;
        img{
          height: .3rem;
          width: .3rem;
          padding: 0.1rem 0.1rem;
        }
        span{
          display: block;
          color: #333;
          width: 100%;
          font-size: 0.14rem;
          font-weight: 500;
          height: 100%;
          line-height: 0.5rem;
          background-size: 100% 1px;
          background-image: linear-gradient(180deg,transparent 50%,#ebebeb 0);
          background-repeat: no-repeat;
          background-position: bottom;
        }
      }
    }
  }
}
</style>

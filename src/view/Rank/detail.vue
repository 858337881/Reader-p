<template lang="html">
  <div class="type">

      <div class="">
        <mt-header :title="this.title">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="typeWord">
          <div class="typeDetail">
            <div class="inner">
              <span>热门</span>
              <span>新书</span>
              <span>好评</span>
              <span>完结</span>
              <span>包月</span>
            </div>
          </div>
          <div class="typeDetail">
            <div class="inner">
              <span  v-for="a in types" :key="a.key">{{a}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="typeBook" v-for="(i,index) in books" :key="index"  @click="detail(i._id)">
        <img :src="'http://statics.zhuishushenqi.com'+i.cover">
        <div class="bookDet">
          <h2>{{i.title}}</h2>
          <p>{{i.author}}<span>|</span>{{i.majorCate}}</p>
          <p>{{i.shortIntro}}</p>
          <h4>{{i.latelyFollower}}<span>人气</span><span>|<span class="odds">{{i.retentionRatio}}%</span>读者留存</span></h4>
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
      title:"",
      books:[],
      types:[
          "周榜",
          "月榜",
          "总榜",
      ]
    }
  },
  created(){
    this.getrankDetail();
  },
  methods:{
    getrankDetail(){
      let _id=this.$route.params._id
      axios.get(`/api/ranking/${_id}`).then((res)=>{
        console.log(res);
        this.books=res.data.ranking.books
        this.title=res.data.ranking.title
      }).catch((err)=>{
        console.log(err);
      })
    },
    detail:function(_id){
      this.$router.push({
        path:`/Rank/1/${_id}`
      })
    }
  }
}
</script>

<style lang="less">
.slide-enter-active,.slide-leave-active{
  transition: all 0.5s;
}
.slide-enter,.slide-leave-to{
  transition: transalate3d(100%,0,0);
}
.type{
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background: white;
  .mint-header{
    background: #b93321;
  }
  .typeWord{
    .typeDetail{
      height: 0.38rem;
      overflow-x: scroll;
      overflow-y: hidden;
      width: 100%;
      border-bottom: 1px solid #999;
      .inner{
        width: auto;
        height: 100%;
        display: flex;
        white-space: nowrap;
        text-overflow: ellipsis;
        span{
          font-size: 0.12rem;
          padding: 0 0.1rem;
          line-height: 0.38rem;
          color: #666;
        }&.active{
          color:#b93321;
        }
      }
    }
  }
  .typeBook{
    background-size: 100% 1px;
    background-image: linear-gradient(180deg,transparent 50%,#ddd 0);
    background-repeat: no-repeat;
    background-position: bottom;
    padding: 0.1rem 0.1rem 0.2rem 0.2rem;
    display: flex;
    background: #f5f2ed;
    img{
      height: 0.7rem;
      width: 0.5rem;
    }
    .bookDet{
       margin-left: 0.2rem;
       h2{
         font-size: 0.14rem;
       }
       p{
         width:1.8rem;
         font-size: 0.12rem;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         color: #999;
         span{
           padding: 0.1rem;
         }
       }
       h4{
         color: #b93321;
         font-size: 0.12rem;
         span{
           color: #999;
         }
         .odds{
           color: #b93321;
         }
       }
    }
  }
}
</style>

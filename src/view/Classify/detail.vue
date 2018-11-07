<template lang="html">
<div class="type">
    <div class="">
      <mt-header :title="title">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <div class="typeWord">
        <div class="typeDetail">
          <div class="inner">
            <span :class='{active:"hot" == type}' @click="changeType('hot')">热门</span>
            <span :class='{active:"new" == type}' @click="changeType('new')">新书</span>
            <span :class='{active:"repulation" == type}' @click="changeType('repulation')">好评</span>
            <span :class='{active:"over" == type}' @click="changeType('over')">完结</span>
            <span :class='{active:"month" == type}' @click="changeType('month')">包月</span>
            <!-- <div class='toggle'  @click='toggle' v-show='types.length!=0'><span ref='toggle'>&lt</span></div> -->
          </div>
        </div>
        <div class="typeDetail">
          <div class="inner">
            <span  v-for="a in types" :key="a.key" :class='{active:a == min}' @click="changeMinor(a)">{{a}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="list"  ref='list' v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10">
      <div class="typeBook" v-for="(i,index) in books" :key="index"  @click="detail(i._id)">
        <img :src="'http://statics.zhuishushenqi.com'+i.cover">
        <div class="bookDet">
          <h2>{{i.title}}</h2>
          <p>{{i.author}}<span>|</span>{{i.majorCate}}</p>
          <p>{{i.shortIntro}}</p>
          <h4>{{i.latelyFollower}}<span>人气</span><span>|<span class="odds">{{i.retentionRatio}}%</span>读者留存</span></h4>
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
      type:'hot',
      start:0,
      min:'全部',
      title:"",
      maxP:0,
      books:[],
      types:[],
    }
  },
  created(){
    this.getclassifyDetail();
    this.getDataClassifyMinor();
  },
  methods:{
    getclassifyDetail(){
      let min = ''
      if(this.min!='全部'){
        min = this.min
      }
      let name=encodeURI(this.$route.params.name)
      axios.get(`/api/book/by-categories?&limit=20&major=${this.$route.params.name}&gender=${this.$route.params.type}&type=${this.type}&start=${this.start}&minor=${min}`).then((res)=>{
        console.log(res);
        this.books=res.data.books
        this.title=this.$route.params.name
        this.maxP = res.data.total/res.data.total.length;
      }).catch((err)=>{
        console.log(err);
      })
    },
    changeType(type){
      this.list = []
      this.type = type;
      this.loadingBottom = true;
      this.getclassifyDetail()
    },
    getDataClassifyMinor(){
      let url = `/api/cats/lv2`
      axios(url).then((res)=>{
        console.log(res);
        let name=this.$route.params.name
        let type=this.$route.params.type
        this.types = res.data[type].filter(x=>x.major===name)[0].mins
        this.types.unshift('全部')
      })
    },
    toggle(){
      this.isShow = ! this.isShow
      this.$refs.toggle.style.transform = this.isShow ? 'rotate(90deg)':'rotate(-90deg)'
      this.$refs.list.style.transform = this.isShow ? 'translateY(40px)':'translateY(0)'
    },
    changeMinor(a){
      this.list = []
      this.min = a
      this.loadingBottom = true;
      this.getclassifyDetail()
    },
    loadMore() {
      if(this.books.length){
        this.loading = true;
      }
      setTimeout(() => {
        // if(this.start >= this.maxP){
        //   this.loading = false;
        //   return
        // }
        this.start += 20
        this.getclassifyDetail()
      }, 3000);
    },
    detail:function(_id){
      this.$router.push({
        path:`/Classify/${this.$route.params.type}/${this.$route.params.name}/${_id}`
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
  z-index:12;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  width: 100%;
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
        .toggle{
          text-align: center;
          position: absolute;
          box-shadow: 0 0 4px #aaa;
          top:50%;
          right:8px;
          transform: translate(0,-50%);
          font-family: '宋体';
          font-size: 18px;
          width: 31px;
          height:18px;
          line-height: 18px;
          background: #46C6BE;
          color:#fff;
          border-radius: 10px;
          span{
            transition: all 0.5s;
            transform: rotate(-90deg);
            display: inline-block;
          }
        }
        span{
          font-size: 0.12rem;
          padding: 0 0.1rem;
          line-height: 0.38rem;
          color: #666;
          &.active{
            color:#b93321;
          }
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

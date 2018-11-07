<template lang="html">
  <div class="book">
    <mt-header title="书籍详情">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="bookTitle">
      <img :src="'http://statics.zhuishushenqi.com'+data.cover" alt="">
      <div class="bookDetail">
        <h2>{{data.title}}</h2>
        <p>{{data.author}}<span>|</span>{{data.minorCate}}<span>|</span>{{data.wordCount}}</p>
        <span></span>
      </div>
    </div>
    <div class="bookButton">
      <p>开始阅读</p>
    </div>
    <div class="bookState">
      <div class="bookBox">
        <p>追人气</p>
        <h2>{{data.latelyFollower}}</h2>
      </div>
      <div class="bookBox">
        <p>读者留存率</p>
        <h2>{{data.retentionRatio}}</h2>
      </div>
      <div class="bookBox">
        <p>日更新字数/天</p>
        <h2>{{data.serializeWordCount}}</h2>
      </div>
    </div>
    <div class="synopsis">
      <p>{{data.longIntro}}</p>
      <span class="arrow"></span>
    </div>
    <div class="catalog">
      <p>目录</p>
      <a>{{data.lastChapter}}</a>
    </div>
    <div class="chapter">
      <p v-for="(i,index) in list" :key="i.key"><span>{{index+1}}</span>{{i.title}}</p>
    </div>
    <!-- <div class="">
    <p v-for="(i,index) in book" :key="i.key">{{i.title}}</p>
  </div> -->
</div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      default:{}
    },
    list:{
      type:Array,
      default:[]
    },
    // book:{
    //   type:Array,
    //   default:[]
    // },
  },
  methods:{
    back(){
      this.$router.back()
    },
  }
}
</script>

<style lang="less">
.book{
  position: absolute;
  width: 100%;
  top: 0;
  background: white;
  .mint-header{
    background: #b93321;
  }
  .bookTitle{
    margin-top: .2rem;
    display: flex;
    justify-content: space-around;
    img{
      width: .56rem;
      height: .74rem;
    }
    .bookDetail{
      margin-left: .05rem;
      height: .74rem;
      h2{
        font-size: .18rem;
        line-height: .2rem;
        height: .2rem;
        padding: .04rem 0;
      }
      p{
        padding: .04rem 0;
        font-size: .12rem;
        span{
          height: .2rem;
          color: #999;
        }
      }
      span{
        font-size: .12rem;
        height: .2rem;
        padding:0 .04rem;
        color: #999;
      }
    }
  }
  .bookButton{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: .2rem;
    p{
      width:80%;
      margin: 0 10%;
      height: .36rem;
      line-height: .36rem;
      border-radius: 5px;
      border: 1px solid #b93321;
      color: #999;
      font-size: .16rem;
      text-align: center;
      border-radius: 3px;
    }
  }
  .bookState{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .2rem;
    .bookBox{
      text-align: center;
      width: 33%;
      p{
        color: #999;
        font-size: .12rem;
      }
      h2{
        font-size: .18rem;
      }
    }
  }
  .synopsis{
    padding: .2rem;
    position: relative;
    p{
      color:#999;
      font-size: .12rem;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height: .2rem;
      -webkit-transition: all .4s ease;
    }
    .arrow{
      position: absolute;
      width: .18rem;
      height: .18rem;
      bottom: .16rem;
      right: .1rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAENklEQ…wY2nEBQCtqnEcAjAtDOy4AaEWN8wiAcWFoxwUArahxnr+aEMOu5NitsQAAAABJRU5ErkJggg==) 50% no-repeat;
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: 50%;
      -webkit-transition: all .1s ease;
    }
    .active{
      height: auto!important;
      overflow: auto!important;
      display: block!important;
    }
    .up{
      webkit-transform: rotate(180deg);
    }
  }
  .catalog{
    height: .5rem;
    display: flex;
    width: 90%;
    padding: 0 5%;
    justify-content: space-between;
    align-items: center;
    p{
      font-size: .14rem;
    }
    a{
      max-width: 60%;
      color: #999;
      font-size: .14rem;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .chapter{
    font-size: .14rem;
    color: #999;
    p{
      padding: .05rem 0;
      margin: 0 5%;
      width: 90%;
      span{
        font-size: .14rem;
        padding: 0 .05rem;
      }
    }
  }
}
</style>

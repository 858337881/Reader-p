
<template lang="html">
  <div class="book">
    <div class="">
      <mt-header title="书籍详情">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <div class="bookTitle">
        <img :src="'http://statics.zhuishushenqi.com'+list.cover" alt="">
        <div class="bookDetail">
          <h2>{{list.title}}</h2>
          <p>{{list.author}}<span>|</span>{{list.minorCate}}<span>|</span>{{list.wordCount}}</p>
          <span></span>
        </div>
      </div>
      <div class="bookButton" @click='read'>
        <p>开始阅读</p>
      </div>
      <div class="bookState">
        <div class="bookBox">
          <p>追人气</p>
          <h2>{{list.latelyFollower}}</h2>
        </div>
        <div class="bookBox">
          <p>读者留存率</p>
          <h2>{{list.retentionRatio}}</h2>
        </div>
        <div class="bookBox">
          <p>日更新字数/天</p>
          <h2>{{list.serializeWordCount}}</h2>
        </div>
      </div>
      <div class="longIntro">
        <div class="txt">
          <p class='active' ref='txt'>{{list.longIntro}}</p>
        </div>
        <div class='toggle'  @click='toggle'><span ref='toggle'>&lt</span></div>
      </div>
      <div class="catalog">
        <p>目录</p>
        <a @click='listShow' >{{list.lastChapter}}</a>
      </div>
      <div class="chapter" v-show='isListShow' @click='listShow'>
        <p v-for="(i,index) in chapters" :key="i.key" @click='getChapterDetail(index)'><span>{{index+1}}</span>{{i.title}}</p>
      </div>
      <!-- <div class="wwored">
        <p>{{book.cpContent}}</p>
      </div> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return{
      list:{},
      isShow:false,
      chapters:[],
      isListShow:false,
      sourceId:'',
    }
  },
  created() {
    this.getData()
    this.changeSource()
  },
  methods: {
    back(){
      this.$router.back(-1)
    },
    getData(){
      let url = `/api/book/${this.$route.params._id}`
      axios(url).then((res)=>{
      // console.log(res)
        this.list = res.data
      })
    },
    changeSource(){
      let url = `/api/atoc?view=summary&book=${this.$route.params._id}`
      axios(url).then((res)=>{
        this.sourceId = res.data[0]._id
        this.getChapter()
      })
    },
    getChapter(){
      let url = `/api/atoc/${this.sourceId}?view=chapters`
      axios(url).then((res)=>{
      //  console.log(res.data)
        this.chapters = res.data.chapters
      })
    },
    toggle(){
      if(this.isShow){
        this.$refs.txt.classList.add('active')
      }else{
        this.$refs.txt.classList.remove('active')
      }
      this.isShow = ! this.isShow
      this.$refs.toggle.style.transform = this.isShow ? 'rotate(90deg)':'rotate(-90deg)'
    },
    listShow(){
      this.isListShow = !this.isListShow
    },
    read(){
      this.addChapterDetail()
    },
    getChapterDetail(index){
      this.addChapterDetail()
      this.changeChapterIndex(index)
    },
    addChapterDetail(){
      if(this.currentBookList.filter(x=>x.id===this.currentId).length===0){
        let book = {
          id:this.sourceId,
          name:this.list.title,
          cover:`http://statics.zhuishushenqi.com${this.list.cover}`,
          chapters:this.chapters
        }
        this.addBookList(book)
      }
        this.changeShow(true)
        this.changeId(this.sourceId)
    },
    ...mapActions(['addBookList','addBookshelf']),
    ...mapMutations([,'changeShow','changeId','changeChapterIndex'])
  },
  computed:{
    ...mapGetters(['currentBookList','currentBookshelf','currentId'])
  }
  // created(){
  //   this.getclassifyChapters1();
  //   this.getclassifySecond();
  //   // this.getclassifyTxt();
  // },
  // methods:{
  //   getclassifySecond(){
  //     let _id=this.$route.params._id
  //     axios.get(`/api/book/${_id}`).then((res)=>{
  //       this.data=res.data
  //     })
  //   },
  //   getclassifyChapters(){
  //     axios.get(`/api/atoc/${this.sourceid}?view=chapters`).then((res)=>{
  //       console.log(res.data);
  //       this.list=res.data.chapters
  //     })
  //   },
  //   getclassifyChapters1(){
  //     let _id=this.$route.params._id
  //     axios.get(`/api//atoc?view=summary&book=${_id}`).then((res)=>{
  //       this.sourceid=res.data[0]._id
  //       this.getclassifyChapters();
  //     })
  //   },
  //   getChapterDetail(index){
  //     this.changeChapters(this.chapters)
  //     this.changeChapterIndex(index)
  //     this.changeShow(true)
  //   },
  //   ...mapMutations(['changeChapterIndex','changeChapters','changeChapterIndex','changeShow'])
  //   // getclassifyTxt(link){
  //   //   let url = `/juhe/chapters/${encodeURIComponent(link)}`
  //   //   console.log(url);
  //   //   axios.get(url).then((res)=>{
  //   //     this.book=res.data.chapter
  //   //     console.log(this.book);
  //   //   }).catch((err)=>{
  //   //     console.log(err);
  //   //   })
  //   // },
  //   // addplayer(link){
  //   //   console.log(link);
  //   //   this.addPlayer({
  //   //     list:this.list,
  //   //     link:link
  //   //   })
  //   // },
  //   // ...mapActions([
  //   //   'addPlayer'
  //   // ]),
  //   detail:function(link){
  //     this.$router.push({
  //       path:`/Classify/${this.$route.params.type}/${this.$route.params.name}/${this.$route.params._id}/${encodeURIComponent(link)}`
  //     })
  //   },
  //   // bookstore:function(id){
  //   //   let this.id=this.$route.params._id
  //   //   this.$router.push({
  //   //     path:`/Classify/${id}`
  //   //   })
  //   // },
  //   back(){
  //     this.$router.back()
  //   },
  // }
}
</script>

<style lang="less">
.slide-enter-active,.slide-leave-active{
  transition: all 0.5s;
}
.slide-enter,.slide-leave-to{
  transition: transalate3d(100%,0,0);
}
.book{
  z-index: 15;
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
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
  .longIntro{
    position: relative;
    box-shadow: 0 0 4px #aaa;
    padding-bottom: 10px;
    .txt{
      padding: 10px 20px;
      p{
        margin: 0;
        font-size: 14px;
        color:#333;
        &.active{
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    .toggle{
      text-align: center;
      position: absolute;
      box-shadow: 0 0 4px #aaa;
      bottom:2px;
      left:50%;
      transform: translate(-50%,0);
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
  .wwored{
    font-size: .12rem;
  }
}
</style>

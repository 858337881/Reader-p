<template lang="html">
  <div class="classify">
    <div class="name" v-for="i in list" :key="i.key">
      <h4>{{i.title}}</h4>
      <div class="category">
        <a  v-for="(j,index) in i.data" :key="index.key" @click="detail(j.name,i.type)"><span class="wordName">{{j.name}}</span><span class="wordCount">{{j.bookCount}}</span></a>
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
    detail:function(name,type){
      this.$router.push({
        path:`/Classify/${type}/${name}`
      })
    }
  },
  created(){
      axios.get('/api/cats/lv2/statistics').then((res)=>{
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
          },
          {
            type:"picture",
            title:"漫画",
            data:res.data.picture
          },
          {
            type:"press",
            title:"出版",
            data:res.data.press
          }
        ]
        console.log(list);
      }).catch((err)=>{
        console.log(err);
      })
  }
}
</script>

<style lang="less">
.classify{
  display: block;
  width: 100%;
  .name{
    height: auto;
    width: 100%;
    h4{
      padding: 0 .2rem;
      height: 0.5rem;
      font-size: 0.14rem;
      line-height: 0.5rem;
      font-weight: 400;
      color:#999;
    }
    .category{
      font-size: 0;
      a{
        display: inline-block;
        vertical-align: middle;
        width: 29%;
        padding: .05rem;
        text-align: center;
        border-top: 1px solid #f8f8f8;
        border-right: 1px solid #f8f8f8;
        border-bottom: 1px solid #f8f8f8;
        .wordName{
          display: block;
          line-height: 0.2rem;
          font-size: 0.15rem;
          font-weight: 700;
          color: #333;
        }
        .wordCount{
          display: block;
          line-height: 0.2rem;
          font-size: 0.12rem;
          color: #ccc;
        }
      }
    }
  }
}
</style>

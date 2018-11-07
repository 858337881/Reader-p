<template>
  <div id="app">
    <Header></Header>
    <Tabs></Tabs>
    <router-view/>
    <Bottom></Bottom>
    <List v-show="currentShow()"></List>
  </div>
</template>

<script>
import Header from '@/components/header'
import Tabs from '@/components/tabs'
import {mapGetters,mapMutations,mapActions} from 'vuex'
import Bottom from '@/components/bottom'
import List from '@/components/list'
export default {
  components:{
    Header,
    Tabs,
    Bottom,
    List
  },
  methods:{
    ...mapGetters(['currentShow']),
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
*{
  margin:0;
  padding:0;
}
html,body{
  width:100%;
  height:100%;
  font-size: calc(100vw/3.2);
}
ul{list-style:none}
a{text-decoration: none;}
img{vertical-align:top;border:none}

.clearf:after,
.clearf:before{
    content:"";
    display:block;
    clear:both;
}
</style>

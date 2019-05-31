<template>
  <div class="wrapper">
    <header></header>
    <div class="content">
      <Detail :data="data.categoryList" />
      <!-- <History v-if='isShow.isHistory' />
    <Without v-if='isShow.isWithout' /> -->
    </div>
  </div>
</template>

<script>
// Use Vuex
import {mapState} from 'vuex';
import Detail from '@/components/detail'
export default {
  state: {
   
  },
  modules: {
    Detail
  },
  computed: {
    ...mapState({
      data:state=>state.data
    })
  },
  onLoad(){
    wx.setNavigationBarTitle({ title: '搜索' });
  }
}
</script>

<style lang="scss" scoped>
 .wrapper{
   width:100%;
   height:100%;
   display:flex;
   flex-direction: column;
   flex-shrink: 0;
 }
 header{
   display:flex;
   flex-shrink: 0;
   width:100%;
   height:128rpx;
   background: blue;
 }
 .content{
  

  display:flex;
  flex:1;
 
 }
</style>

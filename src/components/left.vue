<!-- Left页面 -->
<template>
    <ul class="left">
        <li 
        v-for="(item,index) in dataLeft" 
        :key="index"
        @click="changeTab(index)"
        :class="active==index?'active':''">
          {{item.categoryName}}
        </li>
    </ul>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  props: ['dataLeft','active'],
  methods: {
      ...mapMutations({
          updateState:'updateState'
      }),
      changeTab(index){
          this.updateState({
              active:index,
          })
      }
  }
}

</script>
<style lang='scss' scoped>
.left{
  width:20%;
  display: flex;
  flex-direction: column;
  li{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:26rpx;
      border-bottom:1px solid #ccc;
  }
  li.active{
      background: #fff;
  }
}
</style>
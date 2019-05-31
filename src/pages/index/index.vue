<template>
  <div class="wrap">
    <dl class="title">
      <dt>
        <image
          src="/static/images/1.png"
          mode="widthFix"
          lazy-load="false">
        </image>
      </dt>
      <dd>
        <h3>胜井寿司吧</h3>
        <p>Gusto Maki & Sushibar</p>
      </dd>
    </dl>
    <div class="content">
      <Left :dataLeft="data.categoryList" :active="active"></Left>
      <Right :dataRight="data.categoryList" :active="active"></Right>
    </div>
    <div class="bottom">
      <div>
        <p>总价：${{summary}}</p>
        <p>数量：{{total}}</p>
      </div>
      <button>继续</button>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import Left from '@/components/left'
import Right from '@/components/right'

// import data from '../../assets/data/data.js';
import {mapState} from 'vuex';
export default {
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState({
      data:state=>state.data,
      active:state=>state.active,
      total:state=>state.total,
      summary:state=>state.summary
    })
  },
  components: {
    card,
    Left,
    Right
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.title{
  width:100%;
  display: flex;
  padding: 20rpx;
  box-sizing: border-box;
  dt image{
    width:220rpx;
    height:80rpx;
  }
  dd{
    padding: 20rpx;
    box-sizing: border-box;
    h2,p{
      line-height: 70rpx;
    }
  }
}
.content{
  display: flex;
  flex:1;
}
.bottom{
  width:100%;
  height:100rpx;
  position: fixed;
  bottom:0;
  left:0;
  background: #3A3A3A;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  font-size:28rpx;
  color:#fff;
  div{
    display:flex;
  }
  button{
    margin-right:0;
    background:#FF9114;
    color:#fff;
  }
  p{
    margin:0 40rpx;
  }
}
</style>

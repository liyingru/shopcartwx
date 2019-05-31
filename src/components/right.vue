<!-- Right页面 -->
<template>
  <scroll-view
    class="right"
    scroll-y
    style="height: 100%;"
  >
    <view v-show="active==index" v-for="(item,index) in dataRight" :key="index" :id="'a'+item.tag">
        <view v-for="(item,ind) in item.spuList" :key="ind">
            <dl class="every">
                <dt>
                    <image
                    :src="item.littleImageUrl"
                    mode="widthFix">
                    </image>
                </dt>
                <dd>
                    <h5>{{item.spuName}}</h5>
                    <p>{{item.spuDesc}}</p>
                    <div class="bottom">
                        <p>${{item.currentPrice}}</p>
                        <div class="countbot">
                            <span @click="changeCount(item,'minus')">-</span>
                            <span>{{item.activityType}}</span>
                            <span @click="changeCount(item,'plus')">+</span>
                        </div>
                    </div>
                </dd>
            </dl>
        </view>
    </view>
  </scroll-view>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  props: ['dataRight','active'],
  methods:{
      ...mapMutations({
          changeCout:'changeCout',
          changeAllNumber:'changeAllNumber'
      }),
      changeCount(itemData,type){
          this.changeCout({
              itemData,
              type
          });
          this.changeAllNumber()
      }
  }
}

</script>
<style lang='scss' scoped>
.right{
  width:80%;
  background: #fff;
}
.every{
    width:100%;
    display: flex;
    padding: 20rpx;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    dt image{
        width: 150rpx;
        height:150rpx;
    }
    dd{
        padding: 0 20rpx;
        box-sizing: border-box;
    }
    dd h5{
        font-size:30rpx;
    }
    dd p{
        font-size:26rpx;
        color:#666;
    }
}
.bottom{
    width:100%;
    display: flex;
    justify-content: space-between;
    p{
        color:#FF9114!important;
        font-size:30rpx!important;
    }
    .countbot{
        padding: 7rpx;
        box-sizing: border-box;
        span{
            font-size:26rpx;
            border:1px solid #000;
            padding: 5rpx 10rpx;
            box-sizing: border-box;
            margin:0 7rpx;
        }
    }
}
</style>
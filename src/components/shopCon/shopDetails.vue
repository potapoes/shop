<template>
  <div>
    <div v-title data-title="商品列表">商品列表</div>
    <shop-header :text="text"></shop-header>
     <!-- 店铺信息 -->
      <div class="shopTitle">
        <div>
          <img src="" alt="">
          <p>和田玉元分店</p>
        </div>
        <div>
          <p>51.5万<br><span>粉丝数</span></p>
          <div class="btn">关注</div>
        </div>
      </div>
      <!-- tab切换 -->
      <title-tab :sortData ="sortData" v-on:sortCon ="sortindex" :tabdata ="-1"></title-tab>
      <!-- 描述 -->
      <div class="description">
          <p><span>商品描述</span> <span>9.57分</span><span>高于同行14.2%</span></p>
          <p><span>服务态度</span> <span>9.57分</span><span>高于同行14.2%</span></p>
          <p><span>发货速度</span> <span>9.57分</span><span>高于同行14.2%</span></p>
      </div>
      <ul class="aboutShop">
          <li>
                  <p>联系卖家</p>
                  <img :src="aboutShopImg" alt="">
          </li>
          <li  @click="phoneMsg">
                  <p>商家电话<span>400-610-1360&nbsp;转&nbsp;674058</span></p>
                  <img :src="phoneimg" alt="">
          </li>
          <li @click="codeMsg">
                  <p>店铺二维码</p>
                  <img :src="codeImg" alt="">
          </li>
          <li @click="paperwork">
                  <p>证照信息</p>
                  <img :src="paperworkImg" alt="">
          </li>
      </ul>
      <ul class="aboutShop">
            <!-- <li>
                  <p>店铺简介<span>15年用心，常遭您的美丽王国</span></p>
            </li> -->
            <li>
                  <p>所在地区<span>上海市徐汇区</span></p>
            </li>

            <li>
                <p>开店时间<span>2016-10-28</span></p>
            </li>
      </ul>
  </div>
</template>
<script>
import shopHeader from '@/components/page/children/header.vue';
import titleTab from './child/tabHeader.vue' //切换
import { MessageBox } from 'mint-ui'
export default {
  data () {
      return {
          aboutShopImg:require("@/assets/images/Smiley.png"),
          codeImg:require("@/assets/images/code_icon.png"),
          phoneimg:require("@/assets/images/phone_icon.png"),
          paperworkImg:require("@/assets/images/paperwork_icon.png"),
          text:'店铺详情',
          sortData:['店铺首页','全部宝贝','店铺动态']
      }
  },
  components:{
      shopHeader,
      titleTab
  },
  methods:{
      sortindex(index){
        this.$router.push({name:"shopHome",params:{id:this.$route.params.id,index:index}})
      },
        // 拨打电话
        phoneMsg(){
            MessageBox({
                title: '',
                message: '131454657665',
                confirmButtonText:'呼叫',
                showCancelButton: true
            }).then(action => {
                if(action =="confirm")window.location.href ="tel:111111111"
            })
        },
    //   店铺二维码
        codeMsg(){
            MessageBox({
                    title: '和田余元分店',
                    showConfirmButton: false,
                    cancelButtonClass:false,
                    message: `<p><img style="width:5.6rem;height:5.6rem;margin-bottom:.3rem;" src="http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg"></img></p><p>邀请好友来扫一扫分享店铺给TA</p>`,
                })
        },
        //   证照信息
        paperwork(){
            this.$router.push({name:"paperwork",params:{id:this.$route.params.id}})
        }
  }
}
</script>
<style lang="less" scoped>
// 标题
.shopTitle{
//   color: #fff;
  overflow: hidden;
  padding: 20/100rem;
  height: 125/100rem;
  background-color:#fff;
  display: flex;
  justify-content: space-between;
  div{
    display: flex;
    align-items: center;
  }
  img{
    width: 80/100rem;
    height: 80/100rem;
    margin-right: 20/100rem;
  }
  p{
    font-size: 28/100rem;
  }
  span{
    font-size: 20/100rem
  }
  .btn{
    margin-left: 15/100rem;
    width: 120/100rem;
    height: 50/100rem;
    border-radius: 50/100rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #C49A0A;
  }
}
.description{
    background-color: #fff;
    padding: .1rem .2rem;
    p{
        line-height: .55rem;
        span{
            font-size: 28/100rem;
            &:nth-child(1){
                margin-right: .7rem;
            }
             &:nth-child(2){
                color: #CF7171;
                margin-right: .35rem
            }
             &:nth-child(3){
                color: #CF7171;
            }

        }
    }
}
.aboutShop{
    border-top: .01rem solid #D1D1D1;
    margin-top: .2rem;
    background-color: #fff;
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .2rem;
        border-bottom:.01rem solid #D1D1D1;
        height: 1.1rem;
        p{
            float: left;
            font-size: .28rem;

        }
        img{
            float: right;
            width: .45rem;
            height: .45rem;
        }
        span{
            font-size: .28rem;
            margin-left: .25rem;
            color: #686868;
        }
    }
}
</style>

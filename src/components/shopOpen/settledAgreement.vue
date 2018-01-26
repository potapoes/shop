<template>
  <div class="box">
      <div v-title data-title="我要开店">我要开店</div>
      <top-header :text = "title"></top-header>
      <div class="boxChild">
          <h4>《诚信经营承若书》</h4>
         <p>本公司的服务仅向适用法律下能够签订具有法律约束的合同的个人提供并仅由其使用。在不限制前述规定的前提下，
             本公司的服务不向18周岁以下或被临时或无限期中止的用户提供。如您不合格，请勿使用本公司的服务。
             此外，您的账户（包括信用评价）和用户名不得向其他方转让或出售</p>
      </div>
      <header>
            <img v-if="promise" class="okPng" @click="promiseClick" :src="xuanzhong" alt="">
            <div v-if="!promise"  class="noPng" @click="promiseClick"></div>
          <div>查看详情<img class="rightImg" :src="rightImgs" alt=""></div>
      </header>
       <div class="boxChild">
          <h4>《入驻协议》</h4>
          <p>本公司的服务仅向适用法律下能够签订具有法律约束的合同的个人提供并仅由其使用。在不限制前述规定的前提下，
             本公司的服务不向18周岁以下或被临时或无限期中止的用户提供。如您不合格，请勿使用本公司的服务。
             此外，您的账户（包括信用评价）和用户名不得向其他方转让或出售</p>
      </div>
       <header>
            <img v-if="settled" class="okPng" @click="settledClick" :src="xuanzhong" alt="">
            <div v-if="!settled" @click="settledClick"  class="noPng"></div>
          <div>查看详情<img class="rightImg" :src="rightImgs" alt=""></div>
      </header>
      <button class="btnOk button1"  @click="checkCompanyadd">企业入驻</button>
      <button class="btnNo button2" @click="checkProadd">个人入驻</button>
  </div>
</template>
<script>
import topHeader from '@/components/page/children/header.vue';
export default {
  data () {
      return {
          title:'入驻协议',
          rightImgs:require('@/assets/images/right-icon.png'),
          xuanzhong:require('@/assets/images/ok.png'),
          promise:false,
          settled:false
      }
  },
  methods:{
      settledClick:function(){
          this.settled = !this.settled;
          
      },
      promiseClick: function(){
          this.promise = !this.promise;
      },
      checkProadd(){
          this.$router.push({name:'checkProadd'})
      },
      checkCompanyadd(){
          this.$router.push({name:'checkCompanyadd'})
      }
  },
  components:{
      topHeader
  }
}
</script>
<style lang="less" scoped>
.box{
    .boxChild{
        padding: 10/100rem 25/100rem;
        background-color: #fff;
        h4{
            font-size: 34/100rem;
            padding: 20/100rem 10/100rem;
        }
        p{
            font-size: 28/100rem;
            line-height: 32/100rem;
            color: #545454
        }
    }
}
 .rightImg{
    width: 24/100rem;
    height: 44/100rem;
    margin: 0 10/100rem;
}
header{
    background-color: #F8F8F8;
    height: 90/100rem;
    display: flex;
    padding: 0 30/100rem;
    justify-content: space-between;
    align-items: center;
    color: #999;
    div{
        font-size: 36/100rem;
    }
}
.okPng{
    width: 50/100rem;
    height: 50/100rem;
}
.noPng{
    width: 50/100rem;
    height: 50/100rem;
    border:1/100rem solid #CDCDCD;
    border-radius: 50/100rem;
}
.button1{
    margin-top: 80/100rem;
}
.button2{
    margin-top: 80/100rem;
}
</style>

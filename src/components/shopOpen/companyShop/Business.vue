<template>
  <div>
    <div v-title data-title="我要开店">我要开店</div>
    <top-header :text="title"></top-header>
    <con-header :text ="text[0]"></con-header>
     <ul class="per-center">
       <li>
        <span> 商家账号：</span><input type="text" placeholder="请输入商家账号...">
       </li>
       <li>
         <a href="javascript:;">
            <span> 店铺等级:</span><img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
         </a>
       </li>
        <li>
         <a href="javascript:;">
            <span> 开店时长:</span><img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
         </a>
       </li>
    </ul>
    <con-header :text ="text[1]"></con-header>
      <ul class="per-center">
        <li class="listHead">
         <a href="javascript:;">
            <span> 店铺分类:</span><img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
         </a>
       </li>
        <li>
         <a href="javascript:;">
            <span> 一级经营类目:</span><img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
         </a>
       </li>
        <li>
         <a href="javascript:;">
            <span> 二级经营类目:</span><img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
         </a>
       </li>
        <li>
         <a href="javascript:;">
            <span> 三级经营类目:</span><img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
         </a>
       </li>
       <li class="addList">
           <div>选择添加类目</div>
       </li>
        <li>
         <a href="javascript:;">
            <span> 一级经营类目:</span><img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
         </a>
       </li>
        <li>
         <a href="javascript:;">
            <span> 二级经营类目:</span><img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
         </a>
       </li>
        <li>
         <a href="javascript:;">
            <span> 三级经营类目:</span><img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
         </a>
       </li>
    </ul>
    <button @click="nextinfor">提交申请</button>
    <p>店铺经营类目为商城产品分类，请根据实际运营情况添加一个或多个经营类目</p>
  </div>
</template>
<script>
import topHeader from '@/components/page/children/header.vue';
import conHeader from '@/com/conHeader'; // 内容头
export default {
  data () {
      return {
          title:'填写入住资料',
          text:['店铺经营信息','店铺分类']
      }
  },
  components:{
    topHeader,
    conHeader
  },
  methods: {
    nextinfor:function(){
      this.$router.push({name:"settledAgreementSuc"})
    }
  }
}
</script>
<style lang="less" scoped>

.per-center{
    
    li{
        background-color: #fff;
        border-bottom: 1px solid #F1F1F1;
        height: 100/100rem;
        display: flex;
        align-items: center;
        font-size: 28/100rem;
        padding: 0 20/100rem;
        span{
          width: 300px;
          font-size: 32/100rem;
          color: #BDBDBD
        }
        input{
          width: 520/100rem;
          height: 90/100rem;
          border:0;
          font-size: 28/100rem;
          padding-left: 30/100rem;
          box-sizing: border-box
        }
    }
    .listHead{
        margin-bottom: 10/100rem;
    }
    .addList{
        height: 150/100rem;
       
        background-color: #F1F1F1;
        div{
             margin: 20/100rem 0 50/100rem;
            border:1/100rem solid #C2C2C2;
            width: 100%;
            height: 75/100rem;
            font-size: 32/100rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #7C7C7C
        }
    }
    a{
      width: 100%;height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .rightImg{
        width: 24/100rem;
        height: 44/100rem;
    }
   
}
 button{
      margin: 75/100rem 20/100rem 0;
      height: 90/100rem;
      color:#fff;
      background-color: #D19E29;
      border-radius: 90/100rem;
      border:0;
      width:710/100rem;
      outline:none;
      font-size: 32/100rem
    }
 p{   padding: 20/100rem;
       margin: 30/100rem 0 40/100rem;
        font-size: 24/100rem;
        color: #959595;
        text-align: left;
       }
</style>


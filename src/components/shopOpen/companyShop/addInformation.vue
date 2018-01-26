<template>
  <div>
    <div v-title data-title="我要开店">我要开店</div>
    <top-header :text="title"></top-header>
    <con-header :text ="text[0]"></con-header>
     <ul class="per-center">
        <li>
        <span> 公司名称</span><input type="text" placeholder="请输入公司名称...">
        </li>
        <li>
         <a href="javascript:;">
            <span> 所在地区:</span><img class="rightImg" src="../../../assets/images/right-icon.png" alt="">
         </a>
        </li>
        <li>
            <span> 详细地址:</span><input type="text" placeholder="请输入详细地址...">
        </li>
        <li>
            <span> 公司电话:</span><input type="text"  placeholder="请输入公司电话...">
        </li>
        <li>
            <span> 注册资金:</span><input type="text"  placeholder="请输入注册资金...">
        </li>
        <li>
            <span> 联系人姓名:</span><input type="text"  placeholder="请输入联系人姓名...">
        </li>
         <li>
            <span> 联系人手机:</span><input type="text"  placeholder="请输入联系人电话...">
        </li>
    </ul>

    <button @click="nextinfor">提交以上信息，并填写下一页</button>
  </div>
</template>
<script>
import topHeader from '@/components/page/children/header.vue';
import conHeader from '@/com/conHeader'; // 内容头
export default {
  data () {
      return {
          title:'填写入住资料',
          text:['开户银行信息']
      }
  },
  components:{
    topHeader,
    conHeader
  },
  methods: {
    nextinfor:function(){
      this.$router.push({name:"companyPhotos"})
    }
  }
}
</script>
<style lang="less" scoped>

.per-center{
    
    li{
        background-color: #fff;
        border-bottom: 1px solid #F1F1F1;
        height: 90/100rem;
        display: flex;
        align-items: center;
        font-size: 28/100rem;
        padding: 0 20/100rem;
        span{
          width: 100px;
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
</style>


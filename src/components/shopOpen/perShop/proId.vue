<template>
  <div>
    <div v-title data-title="我要开店">我要开店</div>
    <top-header :text="title"></top-header>
    <con-header :text ="text[0]"></con-header>
     <ul class="per-center">
       <li>
         <a href="javascript:;">
            <span> 身份证类型:</span><div>二代身份证<img class="rightImg" src="../../../assets/images/right-icon.png" alt=""></div>
         </a>
       </li>
    </ul>
    <div class="idPhotos">
        <h4>身份证正面：</h4>
        <div>
            <div></div>
            <h6>示例</h6>
            <div></div>
        </div>
        <p>图片建议使用4：3比例尺寸建议为1200*900像素jpg,gif,png格式的图片，并且图片大小不可超过2M</p>
    </div>
    <div class="idPhotos">
        <h4>身份证反面：</h4>
         <div>
            <div></div>
            <h6>示例</h6>
            <div></div>
        </div>
        <p>图片建议使用4：3比例尺寸建议为1200*900像素jpg,gif,png格式的图片，并且图片大小不可超过2M</p>
    </div>
    <button @click="nextinfor">下一步</button>
    <p><span class="reds">*</span> 您提供的身份信息，网站将予以保护，不会挪作他用</p>
  </div>
</template>
<script>
import topHeader from '@/components/page/children/header.vue';
import conHeader from '@/com/conHeader'; // 内容头
export default {
  data () {
      return {
          title:'填写入住资料',
          text:['身份证信息']
      }
  },
  methods:{
       nextinfor:function(){
      this.$router.push({name:"checkProBankInfor"})
    }
  },
  components:{
    topHeader,
    conHeader
  }
}
</script>
<style lang="less" scoped>
.idPhotos{
    border-bottom: 1/100rem solid #BDBDBD;
    padding: 0 27/100rem;
    h4{
        padding: 30/100rem 0 25/100rem;
        color:#BDBDBD;
        font-size: 32/100rem;
    }
  background-color: #fff;
  div{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 32/100rem;
        color:#959595;
        h6{
            padding:0  30/100rem;
        }
       div{
            width: 280/100rem;
            height: 210/100rem;
            border: 1/100rem solid #BDBDBD;
       }
       div:last-child{
           border: 1/100rem dashed  #BDBDBD;
       }
      
  }
   p{   
       margin: 30/100rem 0 40/100rem;
        font-size: 24/100rem;
        color: #959595;
        text-align: left;
       }
}

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
        div{
            font-size: 32/100rem;
            display: flex;
            align-items: center;
             color: #BDBDBD
        }
    }
    a{
      width: 100%;height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .rightImg{
        margin-left: 20/100rem;
        width: 24/100rem;
        height: 44/100rem;
    }
   
}
 button{
    margin: 45/100rem 20/100rem 25/100rem;
    height: 90/100rem;
    color:#fff;
    background-color: #D19E29;
    border-radius: 90/100rem;
    border:0;
    width:710/100rem;
    outline:none;
    font-size: 32/100rem
}
p{
    text-align: center;
    .reds{
        color:#FE0100
    }
}
</style>


<template>
  <div>
    <div v-title data-title="我要开店">我要开店</div>
    <top-header :text="title"></top-header>
    <con-header :text ="text[0]" :prompt = "prompt"></con-header>
     <ul class="per-center">
         <li>
            <span> 营业执照号:</span><input type="text" placeholder="请输入营业执照号...">
        </li>
        <li>
            <span> 执照有效期:</span><input type="text" placeholder="请输入执照有效期...">
        </li>
         <li class="businessScope">
            <span> 法定经营范围:</span><textarea type="text" placeholder="请输入法定经营范围..."></textarea>
        </li>
    </ul>
    <div class="idPhotos">
        <h4>法人代表姓名</h4>
        <div>
            <div></div>
            <h6>示例</h6>
            <div></div>
        </div>
        <p>营业执照、组织机构代码证、税务登记证三证合一；<br/>
        图片建议使用4：3的jpg、gif、png格式的图片，并且图片大小不得超过2M营业执照、住址机构代码证、税务登记证三证合一jpg、gif、png格式的图片，
        并且图片大小不得超过2M</p>
    </div>
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
          text:['企业营业执照'],
          prompt:"(按照证书上的内容逐字填写)"
      }
  },
  methods:{
       nextinfor:function(){
      this.$router.push({name:"organizationPhotos"})
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
    border-bottom: 1/100rem solid #fff;
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
    .businessScope{
         margin-bottom:10/100rem;
          height: 260/100rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        span{
            width: 100%;
            height: 90/100rem;
            display: flex;
            align-items: center;
            text-align: left;
        }
       
        textarea{
            width: 700/100rem;
            height: 160/100rem;
            resize: none;
            border:0;
            padding:10/100rem;
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
    line-height:normal;
    .reds{
        color:#FE0100
    }
}
</style>


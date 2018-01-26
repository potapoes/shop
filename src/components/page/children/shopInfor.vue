<template>
  <div class="box">
    <div class="header">
        <img :src="img" alt="">
        <div>
            <h4>{{shopData.shop_name}}</h4>
            <h6>与胡岩忍，已于结缘</h6>
        </div>
    </div>
    <ul class="cotent">
        <li>
            <h4>{{shopData.goodsNumber}}</h4>
            <p>全部宝贝</p>
        </li>
         <li>
            <h4>{{shopData.store_collect}}</h4>
            <p>关注人数</p>
        </li>
         <li>
            <p>描述相符: <span>4.80</span></p>
            <p>服务态度: <span>4.80</span></p>
            <p>发货速度:<span>4.80</span></p>
        </li>
    </ul>
    <div class="footer">
        <div @click="toShopList">查看分类</div>
        <div>进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
      return {
          img:require("@/assets/1.jpg")
      }
  },
  props:{
      shopData:''
  },
  created () {
    
  },
  methods: {
      toShopList(){
          this.$router.push({name:'shoplist',params:{
              id:this.shopData.id
          }})
      }
  }
}
</script>
<style lang="less" scoped>
    .box{
        .header{
            display: flex;
            border-top:1/100rem solid #F1F1F1;
            padding:25/100rem 0 20/100rem 0;
            img{
                margin: 0 25/100rem 0 20/100rem;
                width: 95/100rem;
                height: 95/100rem;
                border:1/100rem solid #F1F1F1;
            }
            h4{
                font-size: 36/100rem;
                margin-bottom: 10/100rem;
            }
            h6{
                color:#989898
            }
        }
        .cotent{
            display: flex;
           li{
                width: 254/100rem;
                height: 115/100rem;
                border-right: 1/100rem solid #F1F1F1;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
           }
           h4{
               font-size: 32/100rem;
               margin-bottom:7/100rem;
           }
           p{
               font-size: 18/100rem;
               color:#989898;
               line-height: 30/100rem;
           }
            span{
                color:#D8AC3F;
            }
        }
        .footer{
                padding: 50/100rem 0;
                display: flex;
                justify-content: center;
                align-items: center;
            div{
                margin: 0 30/100rem;
                width: 150/100rem;
                height: 50/100rem;
                border:1/100rem solid #D8AC3F;
                color: #D8AC3F;
                border-radius: 50/100rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>

<template>
  <div class="box">
      <div v-title data-title="搭配套餐">搭配套餐</div>
      <Pr-header :text="title"></Pr-header>
      <ul class="header">
            <li :class="{active:titleIndex == index}" @click="tabList(index)" v-for="(item,index) in tablist" :key = 'index'><p>{{item}}</p></li>
      </ul>
      <div class="content">
          <img :src="img" alt="">
          <div class="con">
              <p>碧玉尊 双面金镶玉吊坠女款玉坠子租金黄金</p>
               <div class="con">
                <select>
                    <option value="">已选组装，2.0五抽电视柜+差贵司的</option>
                    <option value="">已选组装，2.0五抽电视柜+差贵司的</option>
                    <option value="">已选组装，2.0五抽电视柜+差贵司的</option>
                </select>
            </div>
          </div>
          <div class="pri">
              <p>123222.00 - 20000</p>
              <span>x1</span>
          </div>
      </div>
      <ul>
          <li class="content">
              
            <img class="check" :src="checkImg" alt="">
            <img :src="img" alt="">
            <div class="con">
                <p>碧玉尊 双面金镶玉吊坠女款玉坠子租金黄金</p>
                <div></div>
            </div>
            <div class="pri">
                <p>123222.00</p>
                <span>x1</span>
            </div>
          </li>
          <li class="content">
            <div class="checkDiv"></div>
            <!-- <img class="check" :src="checkImg" alt=""> -->
            <img :src="img" alt="">
            <div class="con">
                <p>碧玉尊 双面金镶玉吊坠女款玉坠子租金黄金</p>
                <select>
                    <option value="">已选组装，2.0五抽电视柜+差贵司的</option>
                    <option value="">已选组装，2.0五抽电视柜+差贵司的</option>
                    <option value="">已选组装，2.0五抽电视柜+差贵司的</option>
                </select>
            </div>
            <div class="pri">
                <p>123222.00</p>
                <span>x1</span>
            </div>
          </li>
      </ul>
      <div class="fixedBtm">
          <div class="shopbtn buyShop">立即购买</div>
          <div class="shopbtn addShop">加入购物车</div>
          <div class="con">
              <p class="title">套餐价：<span class="reds">￥197.09</span> </p>
              <p>总额：￥1999.09 套餐优惠：<span>￥2.00</span></p>
          </div>
      </div>
  </div>
</template>
<script>
    import PrHeader from './children/header.vue';
    export default {
        data () {
            return {
                img:require("@/assets/images/agreementSuc.jpg"),
                checkImg:require("@/assets/images/ok.png"),
                title:'搭配套餐',
                tablist:['套餐一',"套餐二","套餐三"],
                titleIndex:0
            }
        },
        methods:{
            tabList(index){
                this.titleIndex = index
            }
        }
        ,
        components:{
            PrHeader
        }
    }
</script>
<style lang="less" scoped>
// 底部购物
.fixedBtm{
    	width: 100%;
	// height: 200px;
	clear: both;
	display: inline-block;
    // display: flex;
    background-color: #fff;
    // justify-content: flex-end;
    position: fixed;
    bottom: 0;
    div{
        float: right;
    }
    .con{
        text-align: right;
        padding-right:20/100rem;
        .title{
            margin:15/100rem 0;
            line-height: 32/100rem;
            font-size: 32/100rem;
            span{
                color: #DF2E28;
                font-size: 32/100rem;
            }
        }
        p{
            font-size: 20/100rem;
            span{
                color: #DF2E28;
                font-size: 20/100rem;
            }
        }
    }
    .shopbtn{
        padding: 35/100rem 30/100rem;
        color: #fff;
    }
    .addShop{
        background-color: #E9C440;
    }
    .buyShop{
        background-color: #D19E29;
    }
}
.box{
    background-color: #fff;
    .header{
        display: flex;
        li{
            height: 50/100rem;
            flex:1;
            text-align: center;
            border-bottom: 2/100rem solid #E0E0E0;
            padding:20/100rem 0 ;
            p{
                font-size: 32/100rem;
                border-right: 1/100rem solid #E0E0E0;
                height: 100%;
                line-height: 50/100rem;
            }
        }
        li:last-child{
            p{
                border-right:0;
            }
        }
        .active{
            color:#C79B00;
            border-bottom: 3/100rem solid #C79B00;
        }
    }
    .content{
        height: 230/100rem;
        box-sizing: border-box;
        padding: 30/100rem 20/100rem 40/100rem;
        display:flex;
        border-bottom: 1/100rem solid #E0E0E0;
        .check{
            margin-top: 55/100rem;
            width: 40/100rem;
            height: 40/100rem;
            margin-right: 25/100rem;
        }
        .checkDiv{
             width: 35/100rem;
            height: 35/100rem;
             margin-top: 55/100rem;
             margin-right: 25/100rem;
            border:2/100rem solid #ccc;
            border-radius: 35/100rem;
        }
        img{
            width: 155/100rem;
        }
        .con{
             display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start-end;
            width: 300/100rem;
            margin:0 30/100rem;
            p{
                font-size: 24/100rem;
            }
            select{
                width: 240/100rem;
                height: 60/100rem;
                border-color:#DEDEDE;
            }
        }
        .pri{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            p{
                font-size: 18/100rem;
            }
        }
    }
}
    
</style>

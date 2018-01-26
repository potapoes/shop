<template>
  <div class="box">
    <div class="headMain">
      <!-- 顶部头 -->
      <shop-header></shop-header>
      <!-- 店铺信息 -->
      <div class="shopTitle">
        <div>
          <img :src="shopImg" alt="">
          <p>{{shophomedata.title}}</p>
        </div>
        <div>
          <p>{{shophomedata.storeFans}}万<br><span>粉丝数</span></p>
          <div @click="attenStoreAjax" class="btn">关注</div>
        </div>
      </div>
      <!-- tab切换 -->
      <title-tab :sortData ="sortData" v-on:sortCon ="sortindex"  :tabdata ="tabIndex"></title-tab>
      <!-- 全部宝贝的列表排序 -->
      <ul class="babylistSort" v-if="titleData == 1">
        <li v-for="(item,index) in babyList" :key="index" @click = "proSortTab(index)" :class="{active:proSortindex ==index && proSortindex !=1}">
          {{item}}
          <div class="sorts" v-if="index ==1">
            <div :class="{sortActiveTop:proSortindex ==1&& prosortUpDown}"></div>
            <div :class="{sortActivebtm:proSortindex ==1&& !prosortUpDown}"></div>
          </div>
        </li>
      </ul>
    </div>
   <div class="content">
      <!-- 店铺首页 -->
    <div v-if="titleData == 0">
      <!-- 轮播图 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img :src="shopImg">
        </mt-swipe-item>
        <mt-swipe-item >
          <img :src="shopImg">
        </mt-swipe-item>
      </mt-swipe>
      <!-- 广告部分 -->
      <div class="advertImg">
        <img :src="advert" alt="">
        <img :src="advert" alt="">
        <img :src="advert" alt="">
      </div>
      <div class="advertList">
        <div>
          <img :src="advert" alt="">
          <div>
            <h4>玉手镯</h4>
            <h6>全能帮贡书写家族</h6>
          </div>
        </div>
        <div>
          <img :src="advert" alt="">
          <div>
            <h4>玉手镯</h4>
            <h6>全能帮贡书写家族</h6>
          </div>
        </div>
        <div>
          <img :src="advert" alt="">
          <div>
            <h4>玉手镯</h4>
            <h6>全能帮贡书写家族</h6>
          </div>
        </div>
        <div>
          <img :src="advert" alt="">
          <div>
            <h4>玉手镯</h4>
            <h6>全能帮贡书写家族</h6>
          </div>
        </div>
      </div>
      <!-- 推荐商品部分 -->
      <div class="recommend">
        <img :src="recommendImg">推荐商品
      </div>
      <!-- 店铺首页的热门商品 -->
      <article-list :temList ="0" :hotList ="shophomedata.storeGoods"></article-list>
    </div>
    <div v-if="titleData == 1" class="contentBabyList">
      <article-list :temList ="1"></article-list>
    </div>
    <div v-if="titleData == 2">
      <article-list :temList ="2"></article-list>
    </div>
   </div>
    <!-- 底部内容 -->
      <ul class="btm">
        <li @click="details">店铺详情</li>
        <li @click="alertHotList">
          <img :src="hotlist" alt="">热门分类
           <div class="alert" ref="boxMessage"  v-show="alertShow &&alertData.length !=0">
            <div>
              <p @click="alertclick(index)" v-for="(item,index) in alertData" :key="index">{{item.class_name}}</p>
            </div>
            <div class="jiantou"></div>
            <div class="smallJiantou"></div>
          </div>
        </li>
        <li><img :src="Smiley" alt="">联系卖家</li>
      </ul>
      <!-- tan框 -->
     
  </div>
</template>
<script>
import shopHeader from './child/shopHeader.vue' // 引入请求头
import titleTab from './child/tabHeader.vue' //切换
import articleList from './child/article.vue' //物品列表
import qs from 'qs'
export default {
  data () {
      return {
        recommendImg:require("@/assets/images/hot.png"),
        Smiley:require("@/assets/images/Smiley.png"),
        hotlist:require("@/assets/images/hotlist.png"),
        sortData:['店铺首页','全部宝贝','店铺动态'],
        babyList:['按销量','价格','按人气'],
        alertShow:false,
        titleData:0,
        proSortindex:-1,
        prosortUpDown:false,
        tabIndex:this.$route.params.index,
        // 临时图片
        advert:require("@/assets/1.jpg"),
        advertlist:require("@/assets/2.jpg"),
        
        shopImg:require("@/assets/images/Detailed_shop.png"),
        // 临时数据
        alertData:[],
        shophomedata:''
      }
  },
  created(){
    this.storeHomeAjax()
    this.storeDynamicAjax()
    this.storeHotClassAjax();
  },
  mounted () {
      this.$refs.boxMessage.style.height = 0.9*this.alertData.length +"rem"
  },
  methods:{
    details(){
      this.$router.push({name:"shopDetails",params:{id:this.$route.params.id}})
    },
    // 全部宝贝的排序
    proSortTab(index){

      this.proSortindex = index;
      if(index ==1){
        this.prosortUpDown = !this.prosortUpDown
      }else{
        this.prosortUpDown = false;
      }
    },
    // 店铺首页请求
    storeHomeAjax(){
      this.axios({
        method:'post',
        url: this.$httpConfig.storeHome,
        data:qs.stringify({
          id:parseFloat(this.$route.params.id)
        })
      }).then(res=>{
        console.log(res,"店铺首页")
        this.shophomedata = res.data.data
      })
    },
    // 店铺动态请求
    storeDynamicAjax(){
      this.axios({
        method:'post',
        url: this.$httpConfig.storeDynamic,
        data:qs.stringify({
          store_id:parseFloat(this.$route.params.id)
        })
      }).then(res=>{
        console.log(res,"店铺动态")
      })
    },
    // 店铺热门分类请求
     storeHotClassAjax(){
      this.axios({
        method:'get',
        url: this.$httpConfig.storeHotClass,
        params:{
          store_id:parseFloat(this.$route.params.id)
        }
      }).then(res=>{
        console.log(res,"热门分类")
          this.alertShow = true;
          this.alertData = res.data.data.records;
      })
    },
    //  // 店铺详情请求
    // storeDynamicAjax(){
    //   this.axios({
    //     method:'post',
    //     url: this.$httpConfig.storeDynamic,
    //     data: qs.stringify({
    //       store_id:parseFloat(this.$route.params.id)
    //     })
    //   }).then(res=>{
    //     console.log(res,"店铺详情")
    //   })
    // },
    // 关注店铺请求
    attenStoreAjax(){
      this.axios({
        method:'post',
        url: this.$httpConfig.attenStore,
        data:qs.stringify({
          token:localStorage.getItem("user_ID"),
          store_id:parseFloat(this.$route.params.id)
        })
      }).then(res=>{
        console.log(res,"关注店铺")
      })
    },
    // tab切换
    sortindex(data){
      this.titleData = data
    },
    // 热门分类显示隐藏
    alertHotList(){
      this.alertShow = !this.alertShow;
    },
    // 热门分类点击
    alertclick(index){
      // this.alertShow = false;
      // alert(index)
    }
  },
  components:{
    shopHeader,
    titleTab,
    articleList
  }
}
</script>
<style lang="less" scoped>
.box{
  margin-bottom: 1.1rem
}
// 整个头部分
.headMain{
  width: 100%;
  position: fixed;
  top:0;
  z-index: 199;
}
// 主体
.content{
  margin-top:348/100rem
}
.contentBabyList{
  margin-top:430/100rem
}
// 轮播图样式
.mint-swipe{
    width:100%;
    height:3.28rem;
    img{
        width:100%;
        height:100%;
    }
    .mint-swipe-indicators{
        .mint-swipe-indicator{
            width:20px;
            height:20px;
        }
    }
}
// 广告图片
.advertImg{
  overflow: hidden;
  img{
    float: left;
    width:493/100rem;
    height: 199/100rem;
  }
  img:nth-child(1){
    width:255/100rem;
    height: 400/100rem;
    margin-right:2/100rem;
  }
  img:nth-child(2){
    margin-bottom: 2/100rem;
  }
}
// 广告列表
.advertList{

  overflow: hidden;
  margin-top: 20/100rem;
  border-top: 1/100rem solid #E0E0E0;
  border-bottom: 1/100rem solid #E0E0E0;
  div{
    background-color: #fff;
    box-sizing: border-box;
    width:374/100rem;
    height:150/100rem;
    float: left;
    padding: .2rem .3rem;
    display: flex;
    margin-bottom:.01rem;
    &:nth-child(n){
      margin-right:.01rem;
    }
    img{
      width: .9rem;
      height: 1.15rem;
      margin-right:.3rem;
    }
    div{
      padding: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h4{
        font-size: .28rem;
        margin-bottom:.03rem;
      }
      h6{
        font-size: .24rem;
        color: #767676;
      }
    }
  }
}
// 推荐商品
.recommend{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90/100rem;
  font-size: 28/100rem;
  color:#D09A04;
  img{
    width: .3rem;
    height: .3rem;
    margin-right:15/100rem
  }

}

// 底部
.btm{
  position: fixed;
  bottom: 0;
  background-color: #fff;
  height: 90/100rem;
  width: 7.5rem;
  border-top:.01rem solid #E6E6E8;
  li{
    float: left;
    width: 33%;
    height: 50/100rem;
    border-right: .01rem solid #E7E7E7;
    text-align: center;
    line-height: .5rem;
    font-size: 28/100rem;
    margin:.2rem 0;
    img{
      margin-right: .15rem;
       margin-top: .05rem;
        width: .4rem;
        height: .4rem;
    }
     &:nth-child(2){
      position: relative;
      img{
        margin-top: .03rem;
        width: 27/100rem
      }
    }
    &:last-child{
      border: 0;
    }
  }
  // 热门弹框
  .alert{
    z-index:99;
    position: absolute;
    background-color: #fff;
    width: 1.8rem;
    padding: 0 .2rem;
    bottom:90/100rem;
    border-radius: 10/100rem;
    border: 1/100rem solid #E6E6E8;
    p{
      height: 90/100rem;
      text-align: center;
      line-height: 90/100rem;
      border-bottom: 1/100rem solid #E6E6E8;
      &:last-child{
        border:0
      }
    }
    .jiantou{
      width: 0;
      height: 0;
      border-top: 20/100rem solid #E5E5E5;
      border-left: 20/100rem solid transparent;
      border-right: 20/100rem solid transparent;
      border-bottom: 20/100rem solid transparent;
      z-index: 100;
      position: absolute;
      bottom: -38/100rem;
      left: 80/100rem;
    }
    .smallJiantou{
      width: 0;
      height: 0;
      border-top: 18/100rem solid #fff;
      border-left: 18/100rem solid transparent;
      border-right: 18/100rem solid transparent;
      border-bottom:18/100rem solid transparent;
      z-index: 100;
      position: absolute;
      bottom: -33/100rem;
      left: 82/100rem;
    }
  }
} 
// 全部宝贝的列表排序
.babylistSort{
  background-color: #fff;
  height: 80/100rem;
  border-bottom: 1/100rem solid #CBCBCB;
  display: flex;
  li{
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    color: #636363;
    font-size: 28/100rem;
    
    .sorts{
      margin-left: .1rem;
      div{
        width: 0;
        height: 0;
        border-top: .09rem solid transparent;
        border-left:.09rem solid transparent;
        border-right:.09rem solid transparent;
        border-bottom: .09rem solid transparent;
        &:first-child{
          margin-bottom: .04rem;
          border-bottom: .09rem solid #757577;
        }
        &:last-child{
          
          border-top: .09rem solid #757577;
        }
        &:first-child.sortActiveTop{
          border-bottom-color:#C49A0A;
        }
        &:last-child.sortActivebtm{
          border-top-color: #C49A0A;
        }
      }
    }
  
  }
  .active{
        color: #DBB274;
      }
}
// 标题
.shopTitle{
  color: #fff;
  overflow: hidden;
  padding: 20/100rem;
  height: 125/100rem;
  background-color:#003d34;
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
    background-color: #C49A0A;
  }
}

</style>

<template>
  <div class="box">
      <div v-title data-title="商品列表">商品列表</div>
      <list-header :set="true" :text="text"></list-header>
      <div class="head">
            <ul :style="{width:headerWidth}"  class="headers" ref="headers">
                <li :class="{avtive:titleIndex == index}" @click="proTab(index)" v-for = "(item, index) in titleData" :key ="index">
                    {{item}}
                </li>
            </ul>
      </div>
      <!-- 排序切换 -->
      <title-header :sortData = "sortData" v-on:sortCon = "titleTab"  :tabdata ="tabIndex"></title-header>
      <!-- 列表展示 -->
      <shop-list :shoplist = "shoplist"></shop-list>
       <div class="load-wrap" v-show="$store.state.class_load" @touchmove.prevent><mt-spinner type="triple-bounce" color="rgb(38, 162, 255)"></mt-spinner></div>
  </div>
</template>
<script>
import titleHeader from './child/tabHeader.vue'; //tab切换
import shopList from './child/shoplist.vue'; //店铺列表
import listHeader from '@/components/page/children/header.vue'; //头部
export default {
  data () {
        return {
            headerWidth:'',
            titleIndex:0,
            sortHead:-1,
            text:"店铺",
            titleData:['热门店铺', '御贡膳品','滋补养身','珠宝玉器','翡翠店',"嘎嘎嘎"],
            sortData:['综合排序','销量优先','按信誉'],
            sortType:['store_sort','store_sales','grade_id '],
            page:1,
            shoplist:'',
            sortObj:{
                token: localStorage.getItem('user_ID'),
                goodClass_id:'',
                sort_types:'',
                page:this.page
            },
            tabIndex:-1,
        }
    },
  created(){
    //   setTimeout(() =>{
        this.$store.state.class_load = false;
    //   },2000);
      this.overflowAuto()
      this.getStoreListAjax()
  },
  methods:{
        //   首页店铺列表请求
        getStoreListAjax(){
            this.axios({
                method:'post',
                url:this.$httpConfig.getStoreList,
                params:this.sortObj,
            })
            .then((res) => {
                console.log(res)
                this.shoplist = res.data.data;
            }).catch((err) => {
                console.log(err)
            });
        },
        overflowAuto:function(){
            this.headerWidth = 10*1.30 +"rem"
            console.log(this.headerWidth)
        },
        titleTab(index){
             this.sortObj.sort_types = this.sortType[index];
            this.getStoreListAjax()
        },
        proTab(index){
            this.titleIndex =index;
           
        },
  },
  components:{
      listHeader,
      shopList,
      titleHeader
  }
}
</script>
<style lang="less" scoped>
.box{
    
}
.head{
    width: 100%;
   overflow-x:auto;
    height:90/100rem;
}
.headers{
    background-color: #fff;
    display: flex;
    border-bottom: 1/100rem solid #CBCBCB;
    li{
        padding:30/100rem 0 25/100rem;
        box-sizing: border-box;
        margin:0 20/100rem;
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .avtive{
        color: #D4B660;
        border-bottom: 4/100rem solid #C19D07;
    }
}

</style>

<template>
    <div class="product">
        <div v-title data-title="商品详情">商品详情</div>
        <pr-header :text="title"></pr-header>
        <mt-swipe :auto="0">
            <mt-swipe-item v-for="item in $store.state.commodity_data.goods_img || $store.state.commodity_data.images" :key="item.id">
                <img v-lazy="URL + item.pic_url">
            </mt-swipe-item>
        </mt-swipe>
        <div class="describe" v-if="$store.state.commodity_data">
            <p class="fn">{{$store.state.commodity_data.title}}</p>
            <!--<p class="timer">促销剩余时间:365天12小时50分钟23秒</p>-->
            <p class="price" v-if="$route.params.status == 1">
                <span class="orc">￥<em>{{$store.state.commodity_data.price_member}}</em></span>
                <span class="new">原价 ：￥<s>{{$store.state.commodity_data.price_market}}</s></span>
            </p>
            <div class="price active" v-if="$route.params.status == 2">
                <p class="orc clearfix"><em class="icon fl"></em><em class="fl">{{$store.state.commodity_data.integral}}</em></p>
                <p class="new">市场参考价：<s>{{$store.state.commodity_data.price_market}}</s>元</p>
            </div>
            <div class="share"> 
                <i class="icon"></i>
                <p>分享</p>
            </div>
        </div>
        <!-- 促销 -->
        <div class="Promotions" v-if="$store.state.commodity_data.promotion">
            <h4>促销</h4>
            <div>
               <div class="promotionsDiv" v-for="(item,index) in $store.state.commodity_data.promotion" :key="index">
                   <span>{{item.name}}</span>
                   <p> {{item.description}}</p>
               </div>
            </div>
        </div>
        <!-- 已选 -->
        <div class="selected" @click="theSon">已选<span v-if = "item" v-for = "(item, index) in $store.state.guigeidname" :key="index" class="number">{{$store.state.guigeName[index]}}&nbsp;{{item}}</span><span class="btn-right"></span></div>
        <div class="fenge"></div>
        <!-- 店铺 -->
        <shop-infor v-if="$route.params.status == 1" :shopData ="shopData"></shop-infor>
        <!-- 搭配套餐推荐 -->
        <pr-list :conItem="conItemRe" :val ="1" :data="$store.state.matchGood" v-if="$route.params.status ==1"></pr-list>
        <!-- 猜你喜欢 -->
        <pr-list :conItem="conItem"  :val ="2" :data="$store.state.dataLeave" v-if="$route.params.status ==1"></pr-list>
        
        <div class="prompt" @click="toTab">点击查看更多商品信息</div>
        <detail-option v-if = 'guige'></detail-option>
        <Shopsn></Shopsn>
        <foot-btn :state="sonState" :data="$store.state.commodity_data" @reduce="reduce" @plus="plus"></foot-btn>
        <div class="load-wrap" v-show="load_wrap" @touchmove.prevent><mt-spinner type="triple-bounce" color="rgb(38, 162, 255)"></mt-spinner></div>
    </div>
</template>
<script>
    import PrHeader from './children/shop_header.vue'; // 头部
    import prList from './children/list.vue'; //猜你喜欢和搭配套餐
    import FootBtn from './children/footBtn.vue'; // 底部按钮
    // import PageOption from './children/pageOption.vue';
    import shopInfor from './children/shopInfor.vue'; // 店铺信息
    import detailOption from './children/detailOptions.vue'; // 立即购买 || 加入购物车 弹框
    import Shopsn from '@/components/page/Shopsn.vue';
    import qs from 'qs';
    
    export default {
        name : 'product',
        data(){
            return {
                swiperImg:[require('@/assets/con16.jpg'),require('@/assets/con17.jpg'),require('@/assets/con18.jpg')],
                //是否显示状态条
                showIndicators:true,
                //初始轮播切换索引
                defaultIndex:0,
                //轮播是否循环播放
                continuous:true,
                number:1,
                conItem:{
                    title:'猜你喜欢'
                },
                conItemRe:{
                    title:'搭配套餐推荐'
                },
                scrollWatch:true,
                topStatus: '',
                loadTop:{},
                sonState:false,
                data:'',
                title:'商品详情',
                dataLeave:'',
                load_wrap:true,
                link_id:this.$route.params.id,
                guige:false,
                shopData:'',
                
            }
        },
        created () {
            this.$store.state.const_join = false;
        },
        methods:{
            toTab(){
                this.$router.push({
                    name:'tab',
                    params:{
                        id:this.link_id
                    }
                });
            },
            theSon(){
                this.$store.state.const_join = true;
            },
            myLove(){
                this.axios({//猜你喜欢
                    url:this.$httpConfig.guessLove,
                    method:'get',
                    params:{
                        token:localStorage.getItem('user_ID')
                    }
                }).then((res) => {
                    this.$store.state.dataLeave = res.data.data;
                }).catch((err) => {
                    console.log(err);
                });
            },
              matchGood(id){
                this.axios({//套餐
                    url:this.$httpConfig.matchGood,
                    method:'get',
                    params:{
                        goods_id:id
                    }
                }).then((res) => {
                    console.log(res,"套餐")
                    this.$store.state.matchGood = res.data.data;
                }).catch((err) => {
                    console.log(err);
                })
              },
             shopInfo(id){
                this.axios({
                    url:this.$httpConfig.shopInfo,
                    method:'get',
                    params:{
                        store_id:id
                    }
                }).then((res) => {

                    this.shopData = res.data.data;
                }).catch((err) => {
                    console.log(err);
                });
            },
            // 套餐
            ax(){
                this.axios({
                    url:this.$httpConfig.goodInfo,
                    method:'get',
                    params:{
                        id:this.$route.params.id,
                    }
                }).then((res) => {
                    
                    this.$store.state.commodity_data = res.data.data;
                    this.$store.state.commodity_val = 1
                    this.matchGood(this.$store.state.commodity_data.id)
                    this.shopInfo(this.$store.state.commodity_data.store_id)
                    this.guige = true
                    this.load_wrap = false; 
                }).catch((err) => {
                    console.log(err);
                });
            },
            reduce(){
                if(this.number <= 1)return;
                this.number--;
            },
            plus(){
                if(this.number >= this.data.minStock) 
                return;
                this.number++;
            }
        },
        updated(){

        },
        mounted() {
            document.body.scrollTop = 0;
            if(this.$route.params.status == 2){
                this.axios.post(this.$httpConfig.integralGoodInfo, qs.stringify({
                    good_id:this.link_id,
                    token:localStorage.getItem('user_ID')
                })).then((res) => {
                    console.log(res,"积分商品详情")
                    this.$store.state.commodity_data = res.data.data;
                    this.load_wrap = false;
                }).catch((err) => {
                    console.log(err);
                });
            }else{
                // 列表进入详情页
                this.ax();
                this.myLove();        
            }
        },
        destroyed(){
            this.scrollWatch = false;
        },
        components:{
            PrHeader,
            Shopsn,
            prList,
            FootBtn,
            shopInfor,
            // PageOption,
            detailOption
        }
    }
</script>
<style>
    .mint-swipe-indicator.is-active{
        background:#a1410b;
    }
</style>
<style lang="less" scoped>
    .Promotions{
        display: flex;
        padding: 15/100rem 20/100rem;
        h4{
            color:#A2A2A2;
            font-size: 32/100rem;
            margin-right:20/100rem;
        }
        .promotionsDiv{
            display: flex;
            padding: 10/100rem;
             align-items: center;
            span{
                padding: 8/100rem;
                color:#E2252B;
                border:1/100rem solid #E2252B;
                font-size: 24/100rem;
                // width: 100/100rem ;
                height: 25/100rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            p{
                margin-left:20/100rem;
                font-size: 24/100rem;
                color: #656565;
            }
        }
        
    }
    .fenge{
        height: 20/100rem;
        background-color: #F1F1F1;
    }
    .product{
        background:#fff;
    }
    .describe{
        width:6.3rem;
        padding:0 1rem .35rem .2rem;
        position:relative;
        background-color: #F1F1F1;
        .fn{
            font-size:.36rem;
            color:#333;
            padding-top:.3rem;
            line-height:.5rem;
        }
        .timer{
            font-size:.25rem;
            color:#e02828;
            padding:.3rem 0;
        }
        .price.active{
            .orc{
                line-height: .4rem;
                padding-bottom: .2rem;
                .icon{
                    width: .4rem;
                    height: .4rem;
                    background:url(../../assets/integral.png) no-repeat;
                    background-size:100% 100%;
                    margin-right:.2rem;
                }
            }
            .new{
                padding:0;
            }
        }
        .price{
            padding-top:.2rem;
            .orc{
                color:#e02828;
                font-size:.32rem;
                em{
                    font-style:normal;
                    font-size:.48rem;
                }
            }
            .new{
                color:#757575;
                font-size:.25rem;
                padding-left:.2rem;
                s{
                    font-size:.24rem;
                }
            }
        }
        .share{
            position:absolute;
            right:.2rem;
            top:.3rem;
            text-align:center;
            .icon{
                display:block;
                width:.39rem;
                height:.42rem;
                background:url(../../assets/share.png) no-repeat;
                background-size:100% 100%;
            }
            p{
                font-size:.24rem;
                color:#555;
                line-height:.5rem;
            }
        }
    }
    .selected{
        padding:0 .5rem 0 .2rem;
        min-height:.8rem;
        line-height:.6rem;
        font-size:.3rem;
        color:#777;
        position:relative;
        background:#fff;
        border-top:1px solid #f1f1f1;
        .number{
            font-size:.28rem;
            color:#333;
            padding-left:.55rem;
        }
        .btn-right{
            position:absolute;
            right:.3rem;
            top:50%;
            margin-top:-.12rem;
            width:.14rem;
            height:.24rem;
            background:url(../../assets/btn-right.png) no-repeat;
            background-size:100% 100%;
        }
    }
    
    .mint-swipe{
            height:6.22rem;
        .mint-swipe-items-wrap{
            div{
                width:100%;
                height:6.22rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
    .prompt{
        width:100%;
        height:.9rem;
        background:#f1f1f1;
        line-height:.9rem;
        text-align:center;
        font-size:.26rem;
        color:#999;
    }
</style>
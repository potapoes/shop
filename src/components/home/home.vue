<template>
    <div class="home">
        <div v-title data-title="主页">主页</div>
        <home-header :userName="getData"></home-header>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in $store.state.home_data.banner" :key="item.id">
                <img v-lazy="URL + item.pic_url">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 快捷链接加快讯 -->
        <news-flash :nav="$store.state.home_data.nav"    :data="$store.state.home_data.announcement" v-if="$store.state.home_data.announcement"></news-flash>
        <!-- 店铺街 -->
        <limited-hd :text="text[0]" :toLink="'/brandList'"></limited-hd>
        <brand-mus :data="$store.state.home_data.brand" :banner="$store.state.home_data.brand_img"></brand-mus>

        <limited-hd :text="text[1]" :toLink="'/latestProm'"></limited-hd>
        <div class="banner-3"><img v-for="item in $store.state.home_data.appliances_img" :key="item.id" v-lazy="URL + item.pic_url"></div>
        <hot-goods :data="$store.state.home_data.appliances"></hot-goods>

        <limited-hd :text="text[2]" :toLink="'/latestProm'"></limited-hd>
        <div class="banner-3"><img v-for="item in $store.state.home_data.appliances_img" :key="item.id" v-lazy="URL + item.pic_url"></div>
        <hot-goods :data="$store.state.home_data.appliances"></hot-goods>

        <limited-hd :text="text[3]" :toLink="'/latestProm'"></limited-hd>
        <div class="banner-3"><img v-for="item in $store.state.home_data.appliances_img" :key="item.id" v-lazy="URL + item.pic_url"></div>
        <hot-goods :data="$store.state.home_data.appliances"></hot-goods>

        <limited-hd :text="text[4]" :toLink="'/latestProm'"></limited-hd>
        <div class="banner-3"><img v-for="item in $store.state.home_data.appliances_img" :key="item.id" v-lazy="URL + item.pic_url"></div>
        <hot-goods :data="$store.state.home_data.appliances"></hot-goods>

        <limited-hd :text="text[5]" :toLink="'/latestProm'"></limited-hd>
        <div class="banner-3"><img v-for="item in $store.state.home_data.appliances_img" :key="item.id" v-lazy="URL + item.pic_url"></div>
        <hot-goods :data="$store.state.home_data.appliances"></hot-goods>

        <limited-hd :text="text[6]" :toLink="'/latestProm'"></limited-hd>
        <div class="banner-3"><img v-for="item in $store.state.home_data.appliances_img" :key="item.id" v-lazy="URL + item.pic_url"></div>
        <hot-goods :data="$store.state.home_data.appliances"></hot-goods>
        <Shopsn></Shopsn>

        <div class="load-wrap" v-show="$store.state.load_wrap" @touchmove.prevent><mt-spinner type="triple-bounce" color="rgb(38, 162, 255)"></mt-spinner></div>
    </div>
</template>
<script>
    
    import HomeHeader from './children/Header'; //头部内容
    import NewsFlash from './children/newsFlash';//快捷链接加快讯
    import limitedHd from './children/conHeader'; // 内容头
    import hotGoods from './children/hotGoods'; // 内容列表
    import Shopsn from '@/components/page/Shopsn.vue'; //列表底部内容

    import limitedActivity from './children/limitedActivity';
    import limitedDd from '@/components/Widget/moveCon';
    import brandMus from './children/BrandMus';
    import lateMall from './children/lateMall';
    import mallCon from '@/components/Widget/mallCon';
    
    import { Indicator } from 'mint-ui';
    import QS from 'qs';
    export default {
        name: 'home',
        data() {
            return {
                continuous:true,
                defaultIndex:0,
                showIndicators:true,
                prevent:true,
                stopPropagation:true,
                data:'',
                getData:'',
                newsData:null,
                endtime:'',
                text:['店铺街','烧造工艺','皇家御饮','滋补养身','御贡膳品','珠宝玉器','红木家具'],
                promotions:''
            }
        },
        created() {
            var userName = this.$route.params.userName;
            var HOME_URL_SASD = '';
            this.getData = userName;
            // if(localStorage.getItem('user_ID')){
            //     HOME_URL_SASD = 'http://api.shopsn.net/?SDKFJSD='+localStorage.getItem('user_ID');
            // }else{
                HOME_URL_SASD = "http://api.shopsn.net/Home/Index/home"
            // }
            this.axios({
                url:HOME_URL_SASD,
                method:'post'
            }).then((res) => {
                var json_wx = JSON.parse(res.request.response);
                if(json_wx.status == 999){
                    window.location.href = json_wx.msg;
                    return;
                }
                this.$store.state.home_data = res.data.data;
            }).catch((err) => {
                console.log(err)
            });
        },
        // watch(){

        // },
        mounted() {

        },
        destroyed(){

        },
        updated(){
            var that = this;
            setTimeout(function(){
                that.$store.state.load_wrap = false;
            },1000);
        },
        components: {
            HomeHeader,
            NewsFlash,
            limitedActivity,
            hotGoods,
            Shopsn,
            limitedDd,
            limitedHd,
            brandMus,
            lateMall,
            mallCon
        }
    }
</script>
<style lang="less">
    .home{
        .mint-swipe-indicators{
            width: 100%;
            text-align: center;
        }
    }
</style>
<style lang="less" scoped>
.home{
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
    .entranch-main{
        width:100%;
        height:2rem;
    }
    .home-banner{
        padding:.2rem;
        img{
            width: 100%;
        }
    }
    .banner{
        img{
            width: 100%;
        }
    }
    .banner-3{
        img{
            width: 7.5rem;
            height: 3.75rem;
        }
    }
    .limit-banner{
        padding:.2rem;
        img{
            width: 7.1rem;
            height: 1.66rem;
            border-radius:5px;
        }
    }
}
</style>
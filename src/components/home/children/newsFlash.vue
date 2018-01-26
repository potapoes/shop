<template>
    <div class="flash-wrap">
       
         <!-- 快讯 -->
        <div class="index_flash">
            <div class="index_flash_logo">
                <span class="i_f_l_text" id="title_name">{{title_name}}</span>
                <span class="i_f_l_img">快讯</span>    
            </div>
            <div class="box-wrap">
                <ul class="scroll_box" ref="scroll_box">
                    <li  v-for="item in data" :key="item.id">{{item.title}}</li>
                </ul>
            </div>
            <router-link to="Notice" class="More">更多</router-link>
        </div>
           <!-- 快捷链接 -->
        <div class="index_Ctrl">
            <div class="index_Ctrl_auto">
                <router-link :to="item.link" v-for="(item, index) in menuCon" :key="index">
                    <img :src="item.img" >
                    <span>{{item.name}}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'newsflash',
        data() {
            return {
                title_name:'贡品网',
                  menuCon:[
                    {img:require('@/assets/images/index_Panic.png'),name:'抢购',link:''},
                    {img:require('@/assets/images/index_Brand.png'),name:'品牌',link:''},
                    {img:require('@/assets/images/index_Shop.png'),name:'店铺',link:'/shopHomeList'},
                    {img:require('@/assets/images/index_Integral.png'),name:'积分商城',link:'IntegralMall'},
                    {img:require('@/assets/images/index_Drink.png'),name:'皇家御饮',link:''},
                    {img:require('@/assets/images/index_Food.png'),name:'御贡膳品',link:''},
                    {img:require('@/assets/images/index_Health.png'),name:'滋补养生',link:''},
                    {img:require('@/assets/images/index_Jade.png'),name:'珠宝玉器',link:''},   
                    {img:require('@/assets/images/index_Festiva.png'),name:'喜庆物品',link:''},
                    {img:require('@/assets/images/index_Help.png'),name:'帮助中心',link:''},  
                ],
            }
        },
        props:{
            data:null,
            nav:null
        },
        mounted(){
            // console.log(this.data, this.nav,"列表")
            this.scroll_box();
            // console.log(this.menuCon,"123123")
        },
        methods: {
            scroll_box(){
                var count = 0,
                    clear = null;
                clear = setInterval(() => {
                    count ++;
                    if(count >= this.$store.state.home_data.announcement.length){
                        count = 0;
                    }
                    if(this.$refs.scroll_box){
                        this.$refs.scroll_box.style.top = -count * 0.55 +'rem';
                    }
                    
                },2000);
            }, 
            // link(index){
            //     switch(index){
            //         case 0:
            //             this.$router.push({
            //                 path:'/latestProm'
            //             });
            //             break;
            //         case 1:
            //             this.$router.push({
            //                 path:'/poopClearance'
            //             });
            //             break;
            //         case 2:
            //             this.$router.push({
            //                 path:'/brandList'
            //             });
            //             break;
            //         case 3:
            //             this.$router.push({
            //                 path:'/IntegralMall'
            //             });
            //             break;
            //         case 4:
            //             this.$router.push({
            //                 name:'comList',
            //                 params:{
            //                     status:'appliance'
            //                 }
            //             });
            //             break;
            //         case 5:
            //             this.$router.push({
            //                 name:'comList',
            //                 params:{
            //                     status:'mobile'
            //                 }
            //             });
            //             break;
            //         case 6:
            //             this.$router.push({
            //                 name:'comList',
            //                 params:{
            //                     status:'office'
            //                 }
            //             });
            //             break;
            //         case 7:
            //             this.$router.push('/class');
            //             break;
            //     }
            // }
        }
    }
</script>
<style lang="less" scoped>
    .flash-wrap{
        background:#f2f2f2;
        .flash-dt{
            width:100%;
            height:.59rem;
            padding:.1rem 0;
            border-bottom:1px solid #eaf0f4;
            background:#fff;
            .flash-news{
                width:1.3rem;
                height:100%;
                position:relative;
                border-right:2px dotted #ccc;
                line-height: .59rem;
                font-size:.32rem;
                color:#111;
            }
            .flash-content{
                position: relative;
                width:4.8rem;
                height:100%;
                padding:0 .2rem;
                line-height:.59rem;
                font-size:.28rem;
                color:#333;
                white-space:nowrap; 
                overflow:hidden; 
                text-overflow:ellipsis; 
                border-right:1px dotted #ccc;
                em{
                    display:inline-block;
                    width: .28rem;
                    height: .28rem;
                    background:url(../../../assets/icon1.png) no-repeat;
                    background-size:100% 100%;
                    margin-right:.2rem;
                    margin-top: .16rem; 
                }
                .scroll_box{
                    width: 4.5rem;
                    height: .59rem;
                    position: absolute;
                    left:.7rem;
                    top:-.1rem;
                    transition: 1s all ease;
                    li{
                        font-size: .2rem;
                        line-height: .59rem;
                    }
                }
            }
            .flash-more{
                width:.8rem;
                height:.59rem;
                text-align:center;
                line-height:.59rem;
                font-size:.28rem;
                color:#797979;
            }
        }
        .flash-dd{
            width:100%;
            padding-top:.27rem;
            background:#fff;
            border-bottom:1px solid #eaf0f4;
            li{
                width:25%;
                text-align:center;
                img{
                    width:1.26rem;
                    height:1.26rem;
                }
                p{
                    font-size:.28rem;
                    color:#333;
                    padding:.2rem 0;
                    line-height:100%;
                    font-weight:400;
                    font-size:.28rem;
                    color:#333;
                }
            }
        }
        .container-main{
            width:100%;
            height:2.33rem;
            background:#fff;
        }
    }
         .index_Ctrl{
           width: 100%;
           overflow: hidden;
           background-color: #fff;
           border-top:1px solid #DEDEDE;
           padding-bottom: 0.35rem;
         .index_Ctrl_auto{
            width: 7.1rem;
            overflow: hidden;
            margin: auto;
         }
         .index_Ctrl_auto a{
            display: block;
            width:1.15rem;
            height: 1.6rem;
            float: left;
            margin-right: 0.33rem;
            margin-top: 0.3rem;
            overflow: hidden;
        }
        .index_Ctrl_auto a:nth-child(5n){
            margin-right: 0;
        }
        .index_Ctrl_auto a img{
            width: 1.15rem;
            height: 1.15rem;
            display: block;
           
        }
        .index_Ctrl_auto a span{
            width: 100%;
            height: 0.45rem;
            display: block;
            color: #333;
            font-size: 0.26rem;
            text-align: center;
            line-height: 0.55rem;
            font-weight: 500;
        }  
    }
    .index_flash{
        width: 100%;
        height: 0.8rem;
        background-color: #fff;
        overflow: hidden;
        .index_flash_logo{
            width: 2rem;
            height: 0.55rem;
            border-right:1px dashed #DEDEDE;
            margin-top: 0.12rem;
            float: left;
            margin-left: 0.2rem
        }
        .i_f_l_text{
            width: 0.9rem;
            height: 0.55rem;
            display: block;
            float: left;
            font-size: 0.3rem;
            line-height: 0.55rem;
        }
        .i_f_l_img{
            width: 0.87rem;
            height: 0.45rem;
            display: block;
            float: left;
            margin-top: 0.05rem;
            background-image: url("../../../assets/images/index_flash.png");
            background-size: 100% 100%;
            text-indent: 0.24rem;
            font-size: 0.27rem;
            color: #fff;
            line-height: 0.43rem;
        }
        .box-wrap{
            position: relative;
            width: 4.05rem;
            height: 0.55rem;
            margin-top: 0.12rem;
            float: left;
            margin-left: 0.2rem;
            overflow: hidden;
            .scroll_box{
                position: absolute;
                left:0;
                top:0;
                transition: 1s all ease;
            }
        }
        .scroll_box li{
            width: 4.05rem;
            height: 0.55rem;
            line-height: 0.55rem;
            font-size: 0.28rem;
            color: #333;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            display: block;
            cursor: pointer;
        }
        .More{
            width: 0.75rem;
            height: 0.55rem;
            display: block;
            float: right;
            margin-top: 0.12rem;
            border-left:1px dashed #DEDEDE;
            text-align: right;
            line-height: 0.55rem;
            color:#797979;
            font-size: 0.28rem;
            margin-right: 0.2rem
        }
    }
</style>
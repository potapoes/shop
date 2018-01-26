<template>
    <div class="pick-wrap">
        <div v-title :data-title="title">{{title}}</div>
        <pick-header :text="title"></pick-header>
        <div class="teacher-wrap clearfix">
            <img v-lazy="dataImg" class="fl">
            <div class="text-main fl">
                <p class="int">爱股轩名师</p>
                <h3 class="name">廖英强</h3>
                <p class="brif">用技术打开股市财富之门</p>
            </div>
            <div class="icon fl"></div>
            </div>
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">培训课程</mt-tab-item>
                    <mt-tab-item id="2">股票书籍</mt-tab-item>
                </mt-navbar>
                <!-- tab-container -->
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                       <ul class="tab-con-wrap clearfix">
                            <li class="fl" v-for="index in conData.dataImg.length" :key="index.id">
                                <img v-lazy="conData.dataImg[index-1]">
                                <p class="inf">{{conData.dataInf[index-1]}}</p>
                                <p class="price">￥<span>{{conData.dataprice[index-1]}}</span>.00</p>
                            </li>
                       </ul>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                       <ul class="tab-con-wrap clearfix">
                            <li class="fl" v-for="index in conData.dataImg.length" :key="index.id">
                                <img v-lazy="conData.dataImg[index-1]">
                                <p class="inf">{{conData.dataInf[index-1]}}</p>
                                <p class="price">￥<span>{{conData.dataprice[index-1]}}</span>.00</p>
                            </li>
                       </ul>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </template>
<script>
    import PickHeader from './children/header.vue'
    export default {
        name : 'pickweek',
        data(){
            return {
                title:'名师推荐商品',
                dataImg:require('@/assets/con1.jpg'),
                selected:'1',
                conData:{
                    dataImg:[require('@/assets/con19.jpg'),require('@/assets/con20.jpg'),require('@/assets/load.png'),require('@/assets/load.png')],
                    dataInf:['股市廖聊吧20上下册吧20上下册吧20上下册吧20上下册吧20上下册','股市廖聊吧20上下册','股市廖聊吧20上下册','股市廖聊吧20上下册'],
                    dataprice:['10','20','9','15']
                },
                scrollWatch:true
            }
        },
        mounted() {
            document.body.scrollTop = 0;
        },
        destroyed(){
            this.scrollWatch = false;
        },
        components:{
            PickHeader
        }
    }
</script>
<style lang="less">
    .pick-wrap .mint-navbar .mint-tab-item.is-selected{
        color:#f9781e;
        border-color:#f9781e;
        margin-bottom:.04rem;
    }
    .pick-wrap{
        .tab-con-wrap{
            background:#f1f1f1;
            overflow:hidden;
            li{
                width:3.7rem;
                height:4.96rem;
                background:#fff;
                margin-top:.1rem;
                margin-right:.1rem;
                img{
                    width:3.71rem;
                    height:3.71rem;
                }
                .inf{
                    border-top:1px solid #ccc;
                    font-size:.3rem;
                    color:#333;
                    white-space:nowrap; 
                    overflow:hidden; 
                    text-overflow:ellipsis;
                    height:.65rem;
                    line-height:.65rem;
                    padding:0 .2rem;
                }
                .price{
                    font-size:.3rem;
                    color:#e02828;
                    padding:0 .2rem;
                    span{
                        font-size:.4rem;
                    }
                }
            }
            li:nth-child(2n){
                margin-right:0;
            }
        }
    }
</style>
<style lang="less" scoped>
    .teacher-wrap{
        padding:.2rem;
        position:relative;
            background:#fff;
        img{
            width:1.64rem;
            height:1.64rem;
            border-radius:50%;
        }
        .text-main{
            padding-left:.35rem;
            .int{
                font-size:.24rem;
                color:#999;
                padding-top:.18rem;
            }
            .name{
                font-size:.32rem;
                color:#000;
                font-weight:normal;
                padding-top:.1rem;
            }
            .brif{
                font-size:.28rem;
                color:#666;
                padding-top:.2rem;
            }
        }
        .icon{
            width:.6rem;
            height:.87rem;
            background:url(../../assets/icon.png) no-repeat;
            background-size:100% 100%;
            position:absolute;
            top:50%;
            right:.4rem;
            margin-top:-.435rem;
        }
    }
</style>
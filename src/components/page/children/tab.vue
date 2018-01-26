<template>
    <div class="pr-tab-wrap">
        <pr-header :text="title" :number="number"></pr-header>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">图文详情</mt-tab-item>
            <mt-tab-item id="2">规格参数</mt-tab-item>
            <mt-tab-item id="3">商品评论</mt-tab-item>
             <mt-tab-item id="4">商品咨询</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
               <div v-html="imgText"></div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul class="list-wrap">
                    <li class="clearfix" v-for="item in attrData" :key="item.id">
                        <span class="title fl">{{item.attrName}}</span>
                        <p class="con fl">{{item.attr_value}}</p>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="comment-wrap">
                    <ul>
                        <li @click="conActiveClick(index)" v-for="(item,index) in conName" :key="index" :class="{conActive: index== comIndex}">
                            <span>{{item}}</span>
                            <p v-if="index ==0">{{commenData.allcount}}</p>
                            <p v-if="index ==1">{{commenData.nice}}</p>
                            <p v-if="index ==2">{{commenData.height}}</p>
                            <p v-if="index ==3">{{commenData.bad}}</p>
                            <p v-if="index ==4">{{commenData.image}}</p>
                        </li>
                    </ul>
                    <div class="list-wrap" v-for="item in dataItem" :key="item.id">
                        <div class="list-hd clearfix">
                            <div class="pull-left fl">
                                <img src="../../../assets/user-d.jpg">
                                <span >{{item.user_name}}</span>
                            </div>
                            <div class="pull-right fr">
                                <img v-for = 'n in parseInt(item.level)' :key = 'n' :src="imgYes">
                                <img v-for = 'n in 5-parseInt(item.level)' :key = 'n' :src="imgNo">
                            </div>
                        </div>
                        <div class="list-com">{{item.content}}</div>
                        <div class="list-img-main clearfix">
                            <img :src="URL + item" class="fl" v-for="item in dataItem.img" :key="item.id">
                        </div>
                        <div class="list-purTimer">颜色&nbsp;&nbsp;&nbsp;{{item.goods_apace}} &nbsp;&nbsp;&nbsp;{{item.create_time}}</div>
                    </div>
                </div>
                
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
               <ul class="product">
                   <li v-for ="item in product" :key="item.id">
                       <p class="pro"><span>问</span> {{item.problem}}</p>
                       <p><span>答</span> {{item.answer}}</p>
                       <h6>{{item.addtime}}</h6>
                   </li>
               </ul>
               <div class="btm">
                   <input type="text" v-model.trim="problem">
                   <h6 @click="proSubmit">提问</h6>
               </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <pr-foot></pr-foot>
        <div class="load" v-show="load" @touchmove.prevent><mt-spinner type="triple-bounce" color="rgb(38, 162, 255)"></mt-spinner></div>

        <div class="load-wrap" v-show="load_wrap" @touchmove.prevent><mt-spinner type="triple-bounce" color="rgb(38, 162, 255)"></mt-spinner></div>
        <Shopsn></Shopsn>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import QS from 'qs';
    import PrHeader from './header.vue';
    import prFoot from './footBtn.vue';
    import Shopsn from '@/components/page/Shopsn.vue';
    export default {
        name : 'tab',
        data(){
            return {
                imgNo:require('@/assets/images/xinxin.png'),
                imgYes:require('@/assets/images/xu_xinxin.png'),
                selected:"1",
                title:'商品详情',
                number:'0',
                data:'',
                commenData:'',
                dataItem:'',
                scrollWatch:true,
                page:1,
                comIndex :0,
                conName:['全部评价', '好评', '中评', '差评', "有图"],
                comId:4,
                product:'',
                problem:'',
                load:false,
                load_wrap:true,
                attrData:'',
                imgText:'',
                text:''
            }
        },
        methods:{
            // 提交咨询
            proSubmit(){
                if(!this.problem){
                     Toast({
                        message: '请输入咨询内容',
                        position: 'bottom',
                        duration: 1000
                    });
                    return;
                }
                this.axios.post(this.$httpConfig.userCommitProblem,QS.stringify({
                    goods_id:this.$route.params.id,
                    token:localStorage.getItem("user_ID"),
                    problem:this.problem
                })).then((res) => {
                     Toast({
                        message:res.data.message,
                        position: 'bottom',
                        duration: 1000
                    });
                    if(res.data.status == 1){
                        this.problem=''
                    }
                }).catch((err) => {
                    console.log(err);
                });
            },
             // 图文详情请求
            imgTextAjax(){
                this.load = true;
                this.axios({
                    url:this.$httpConfig.getGoodsDetail,
                    method:'get',
                    params:{
                        goods_id:this.$route.params.id,
                        // page:this.page
                    }
                }).then((res) => {
                    console.log(res.data)
                    this.load = false;
                    if(res.data.status == 1){
                        this.imgText = this.intoHtml(res.data.detail)
                    }
                }).catch((err) => {
                    console.log(err);
                });
            },
            // 咨询列表
            productAjax(){
                this.load = true;
                this.axios({
                    url:this.$httpConfig.goodsProblems,
                    method:'get',
                    params:{
                        goods_id:this.$route.params.id,
                        page:this.page
                    }
                }).then((res) => {
                    console.log(res)
                    this.load = false;
                    if(res.data.status == 1){
                        this.product = res.data.data.records;
                    }
                }).catch((err) => {
                    console.log(err);
                });
            },
            // 规格参数getGoodsAttr
            GoodsAttr(){
                this.load = true;
                this.axios({
                    url:this.$httpConfig.getGoodsAttr,
                    method:'get',
                    params:{
                        goods_id:this.$route.params.id,
                    }
                }).then((res) => {
                    this.load = false;
                    if(res.data.status == 1){
                        this.attrData = res.data.data.records;
                    }
                    
                }).catch((err) => {
                    console.log(err);
                });
            },
            // tab切换
            conActiveClick(index){
                
                if(index == this.comIndex)return
                this.comIndex = index
                switch(this.comIndex){
                     case 0:
                        this.comId = 4
                        
                        break;
                    case 1:
                        this.comId = 3
                        break;
                    case 2:
                        this.comId = 2
                        break;
                    case 3:
                        this.comId = 1
                        break;
                    case 4:
                        this.comId = 5
                        break;
                   
                    }
                    this.comContent()
            },
            comContent(){
                this.load = true;
                 this.axios({
                    url:this.$httpConfig.getAllCommentContent,
                    method:'get',
                    params:{
                        goods_id:this.$route.params.id,
                        status:this.comId,
                        page:this.page
                    }
                }).then((res) => {
                    this.load = false
                    this.dataItem = res.data.data.records;
                }).catch((err) => {
                    console.log(err);
                });
            },
            // 评价数量
            commentAjax(){
                this.axios({
                    url:this.$httpConfig.getAllCommentsCount,
                    method:'get',
                    params:{
                        goods_id:this.$route.params.id,
                    }
                }).then((res) => {
                    this.commenData = res.data.data;

                }).catch((err) => {
                    console.log(err);
                });
            },
            intoHtml(str) {

                var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};

                return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});

            }
        },
        watch: {
            selected:function(){
                switch(this.selected){
                    case '1':
                        this.imgTextAjax()
                        break;
                    case '2':
                        this.GoodsAttr();
                        break;
                    case '3':
                        this.commentAjax()
                        this.comContent()
                        break;
                    case '4':
                        this.productAjax()
                        break;
                   
                    }
            }
        },
        mounted() {
            this.load_wrap =false;
            
            document.body.scrollTop = 0;
            this.imgTextAjax()
        },
        destroyed(){
            this.scrollWatch = false;
        },
        components:{
            PrHeader,
            prFoot,
            Shopsn
        }
    }
</script>
<style lang="less">
    .pr-tab-wrap{
        background:#f1f1f1;
        .list-main{
            padding-top:.1rem;
        }
        .mint-tab-item{
            .mint-tab-item-label{
                color:#333;
                font-size:.3rem;
                line-height:.75rem;
            }
        }
        .mint-tab-item.is-selected{
            .mint-tab-item-label{
                color:#333;
            }
        }
        .mint-navbar{
            height:.75rem;
            background:#fff;
            line-height:.75rem;
            .mint-tab-item{
                height:100%;
                padding:0;
                border-color:#D19E29;
                line-height:.75rem;
            }
        }
        .list-wrap{
            padding-top:.2rem;
            li{
                padding:.25rem .2rem;
                border-bottom:1px solid #e7e7e7;
                background:#fff;
                .title{
                    width:2.28rem;
                    font-size:.28rem;
                    color:#696969;
                }
                .con{
                    width:4.8rem;
                    font-size:.26rem;
                    color:#333;
                    line-height:.36rem;
                    text-align: right;
                }
            }
            .list-com{
                height:.65rem;
                line-height:.65rem;
                font-size:.24rem;
                color:#333;
                overflow:hidden; 
                text-overflow:ellipsis; 
                white-space:nowrap
            }
        }
        .comment-wrap{
            ul{
                height: 105/100rem;
                display: flex;
                li{
                    width: 20%;
                    height: 100/100rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    span{
                        color:#B9B9B9;
                        font-size: 32/100rem;
                        margin-bottom:10/100rem;
                    }
                    p{
                        font-size: 28/100rem;
                    }
                }
                .conActive{
                    border-bottom: 5/100rem solid #D19E29;
                }
            }
            h2{
                padding:0 .2rem;
                height:.88rem;
                font-size:.32rem;
                line-height:.88rem;
                background:none;
                color:#333;
                span{
                    font-size:.32rem;
                    color:#f9781e;
                }
            }
            .list-wrap{
                width:7.1rem;
                padding:0 .2rem;
                height:3rem;
                background:#fff;
                margin-bottom:.1rem;
                .list-hd{
                    padding:.2rem 0;
                    line-height:.32rem;
                    height:.3rem;
                    .pull-left{
                        padding-left:.46rem;
                        font-size:.2rem;
                        color:#b0b0b0;
                        position:relative;
                        img{
                            width:.32rem;
                            height:.32rem;
                            position:absolute;
                            left:0;
                            top:0;
                        }
                    }
                    .pull-right{
                        color:#999;
                        font-size:.26rem;
                        img{
                            width: 30/100rem
                        }
                    }
                }
                .list-img-main{
                    height:1rem;
                    img{
                        width:1rem;
                        height:1rem;
                        margin-right:.2rem;
                    }
                }
                .list-purTimer{
                    padding-top:.2rem;
                    font-size:.2rem;
                    color:#999;
                }
            }
        }
        .list-img-wrap{
            background:#fff;
            margin-top:.2rem;
            img{
                width:100%;
            }
        }
    }
</style>
 <style lang="less" scoped>
     .product{
        margin-top:20/100rem;
        li{
            background-color: #fff;
            padding:10/100rem 20/100rem;
            border-bottom:1/100rem solid #F1F1F1;
            .pro{
                font-weight: 500;
                span{
                    background-color: #CA9B27;
                    
                }
            }
            p{
                font-size: 32/100rem;
                line-height: 65/100rem;
            }
            span{
                font-size: 28/100rem;
                padding: 6/100rem;
                border-radius: 5/100rem;
                color:#fff;
                background-color: #97CD93;
            }
            h6{
                font-size: 28/100rem;
                text-align:right;
                color: #949494;
            }
        }
        
    }
    .btm{
        width:100%;
        height:100/100rem;
        background-color: #fff;
        display: flex;
        padding:15/100rem;
        box-sizing: border-box;
        position: fixed;
        bottom:0;
        input{
            border-radius: 15/100rem;
            width: 615/100rem;
            height: 70/100rem;
            background-color:#F1F1F1;
            order: 0;
            outline: none; 
            margin-right:20/100rem;
            padding:20/100rem;
            font-size: 24/100rem;
        }
        h6{
            font-size: 36/100rem;
            line-height: 60/100rem;
            color: #D77649;
        }
    }
</style>

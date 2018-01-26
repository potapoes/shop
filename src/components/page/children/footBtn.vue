<template>
    <div class="footer2017">
        <div class="seat"></div>
        <div class="btn-main clearfix" v-if="$route.params.status == 1">
            <div class="col fl" @click="col"> <img :src="imgs" alt=""> 收藏</div>
            <div class="join fl" @click="hide">加入购物车</div>
            <div class="imm fl" @click="hide">立即购买</div>
        </div>
        <div class="btn-main clearfix" v-if="$route.params.status == 2">
            <span class="fl ex">我的积分：<em>{{$store.state.commodity_data.userIntegral}}</em>积分</span>
            <div class="imm fr" @click="duihuan">立即兑换</div>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import qs from 'qs';
    export default {
        name : 'footBtn',
        data(){ 
            return {
                type:2,
                imgs:require('@/assets/images/footer_star.png'),
                imgsNo:require('@/assets/images/footer_star.png'),
                imgsYes:require('@/assets/images/xu_xinxin.png')
            }
        },
        props:{
            data:'',
            message:'',
            nb:'',
            
        },
        methods:{
            col(){//收藏
                if(this.type == 2){
                    this.imgs = this.imgsYes;
                    this.type = 1;
                }else{
                    this.imgs = this.imgsNo;
                    this.type = 2;
                }
                this.axios.post(this.$httpConfig.addCollection,qs.stringify({
                    token: localStorage.getItem('user_ID'),
                    goods_id:this.$route.params.id,
                    type:this.type
                })).then((res) => {
                    Toast({
                        message: res.data.message,
                        position: 'bottom',
                        duration: 800
                    });
                }).catch((err) => {
                    console.log(err);
                })
            },
            hide(){
                this.$store.state.const_join = true;
            },
            duihuan(){
                this.$router.push({name:'order',params:{id:3},query:{goods:this.$route.params.id}})
            }
        }
    }
</script>
<style lang="less" scoped>
    .footer2017{
        width:100%;
        height:1rem;
        .ex{
            font-size:.22rem;
            color:#999;
            padding-left:.2rem;
            line-height: .9rem;
            img{
                width: 40/100rem;
                height: 40/100rem;
            }
        }
        .seat{
            width:100%;
            height:100%;
            background:#f1f1f1;
        }
        .btn-main{
            width:100%;
            
            position:fixed;
            bottom:0;
            left:0;
            text-align:center;
            background:#fff;
            em{
                    // width:.5rem;
                    // height:.5rem;
                    // position:absolute;
                    // top:.1rem;
                    // left:50%;
                    margin-right:.25rem;
                    font-style:normal;
                    color:#d21923;
                    font-size:.5rem;
                }
            .col{
                margin-top: 10/100rem;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                box-sizing: border-box;
                img{
                    width: 50/100rem;
                    height: 50/100rem;
                    margin-bottom: 5/100rem;
                }
                width:2.5rem;
                color:#333;
                font-size:.22rem;
                em{
                    width:.5rem;
                    height:.5rem;
                    position:absolute;
                    top:.1rem;
                    left:50%;
                    margin-left:-.25rem;
                    font-style:normal;
                    color:#d21923;
                    font-size:.5rem;
                }
            }
            .join{
                width:2.5rem;
                height:100%;
                background:#E9C440;
                color:#fff;
                font-size:.32rem;
                line-height:1rem;
            }
            .imm{
                width:2.5rem;
                height:100%;
                background:#D19E29;
                color:#fff;
                font-size:.32rem;
                line-height:1rem;
            }
        }
    }
</style>
<style lang="less">
    .mint-toast{
        .mint-toast-text{
            font-size:.3rem;
        }
    }
</style>
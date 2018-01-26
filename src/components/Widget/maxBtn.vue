<template>
  <div>
      <button class="form-btn" @click="bypay">{{text}}</button>
  </div>
</template>
<script>
    import qs from 'qs';
    import { Toast } from 'mint-ui';
    export default {
        name : 'btn',
        props:{
            text:'',
            bt:'',
            orderId:'',
            
        },
        data () {
            return {
                btns:false
            }
        },
        methods:{
            bypay(){
                if(this.btns == true)return
                this.btns = true
                // if(this.$route.params.id == 3){
                //     Toast("当前积分不足,无法兑换");
                // }else{
                    // if(this.bt == false){
                    // Toast({
                    //     message: "请使用余额支付",
                    // });
                    // }else{
                        this.axios.post(this.$httpConfig.confirmPay,qs.stringify({
                        token:localStorage.getItem('user_ID'),
                        orderId:this.orderId
                        })).then((res) => {
                            if(res.data.status == 1){
                                Toast({
                                    message: "订单支付成功"
                                });
                                // let that = this;
                                //  setTimeout(function(){
                                //     that.btns = false;
                                //     that.$router.push({
                                //         name: 'intOrder',
                                //     });
                                //  },1000)
                            }else{
                                this.btns = false;
                                 Toast({
                                    message: res.data.msg
                                });
                            }
                        }).catch((err) => {
                            console.log(err);
                        });
                    // }
                // } 
            }
        },
        mounted(){
            
        }
    }
</script>
<style lang="less" scoped>
    .form-btn{
        width:7.1rem;
        height:.9rem;
        background: #D19E29;
        border:none;
        border-radius:20px;
        color:#fff;
        display:block;
        margin:.62rem auto;
        box-sizing: border-box;
        font-size:.4rem;
        outline: none;
    }
    .form-btn:active{
        box-shadow: 0 5px 5px #ccc;
    }
</style>
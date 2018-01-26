<template>
  <div>
    <div v-title :data-title="title">{{title}}</div>
    <address-header :text="title"></address-header>
    <div class="content-wrap">
        <div class="item-wrap" @click="edit(item)" v-for="item in data" :key="item.id">
            <div class="hd clearfix">
                <span class="name fl"><i class="icon"></i>{{item.realname}}</span>
                <span class="phone fr"><i class="icon"></i>{{item.mobile}}</span>
            </div>
            <div class="con-text text2-hidden">{{item.prov_name+'&nbsp;'+item.city_name +'&nbsp;'+ item.area_name +'&nbsp;' + item.dist_name+'&nbsp;' + item.address}}</div>
            <div class="icon-link"></div>
        </div>
    </div>
    <div v-if="data.length ==0" class="text-center status">收货地址为空，赶快添加吧！</div>
    <div class="btn-wrap">
        <div class="btn-main"><button @click="tolink()"><i class="icon fl clearfix"></i><span class="fl">新增收货地址</span></button></div>
    </div>
  </div>
</template>
<script>
    import qs from 'qs';
    import addressHeader from './children/header.vue';
    export default {
        name : 'address',
        data(){
            return {
                title:'收货地址管理',
                data:'',
                address:[],
                set_address:[]
            }
        },
        methods:{
            edit(item){
                if(this.$route.query.goods){
                    localStorage.setItem("set_address",JSON.stringify(item))
                    this.$router.push({name:'order',params:{id:3},query:{goods:this.$route.query.goods,status:1}})
                }else{
                    localStorage.setItem("editAddData",JSON.stringify(item))
                    this.$router.push({name:'EdiAddress'})
                }
                console.log(item)
               
            },
             tolink(link){
                this.$router.push({
                    name:'newAddress',
                });
            }
        },
        mounted(){
            this.axios({
                method:'get',
                url:this.$httpConfig.addressLists,
                params:{
                    token: localStorage.getItem('user_ID'),
                    page:1,
                    // timegp:''
                }
            })
            .then((res) => {
                if(res.data.status == 1){
                    this.data = res.data.data.records;
                }
               
            }).catch((err) => {
                console.log(err);
            });
        },
        components:{
            addressHeader
        }
    }
</script>
<style lang="less" scoped>
    .content-wrap{
        background:#fff;
        .item-wrap{
            height: 2.3rem;
            border-bottom:1px solid #dfdfdf;
            position:relative;
            .icon-link{
                position:absolute;
                right:.2rem;
                top:50%;
                margin-top:-.15rem;
                width: .18rem;
                height: .3rem;
                background:url(../../assets/icon-right.jpg) no-repeat;
                background-size:100% 100%;
            }
            .con-text{
                width: 6.65rem;
                font-size:.32rem;
                color:#999;
                line-height:.48rem;
                margin:.2rem;
                height: .85rem;
            }
        }
        .hd{
            height: .45rem;
            line-height:.45rem;
            overflow:hidden;
            padding:.43rem .2rem 0;
            width: 6.65rem;
            .name{
                font-size:.36rem;
                color:#282828;
                padding-left:.44rem;
                position:relative;
                .icon{
                    position:absolute;
                    left:0;
                    top:50%;
                    width: .28rem;
                    height: .41rem;
                    margin-top:-.205rem;
                    background:url(../../assets/userIcon1.png) no-repeat;
                    background-size:100% 100%;
                }
            }
            .phone{
                font-size:.36rem;
                color:#282828;
                padding-left:.44rem;
                position:relative;
                .icon{
                    position:absolute;
                    left:0;
                    top:50%;
                    width: .24rem;
                    height: .34rem;
                    margin-top:-.17rem;
                    background:url(../../assets/images/mobild.png) no-repeat;
                    background-size:100% 100%;
                }
            }
        }
    }
    .btn-wrap{
        width: 7.5rem;
        height: 1rem;
        .btn-main{
            position:fixed;
            bottom:0;
            left:0;
            width: 7.1rem;
            height: .9rem;
            padding: 0.05rem .2rem;
            background:#fff;
            
            button{
                border-radius: 5/100rem;
                color:#fff;
                width: 100%;
                height: 100%;
                border:none;
                background:#D19E29;
                outline: none;
                padding-left:2.3rem;
                box-sizing: border-box;
                span{
                    font-size:.32rem;
                    margin-left:.2rem;
                }
                .icon{
                    display:inline-block;
                    width: .34rem;
                    height: .34rem;
                    background:url(../../assets/add.png) no-repeat;
                    background-size:100% 100%;
                    margin-top:.05rem;
                }
            }
            button:active{
                box-shadow: 0 5px 5px #ccc;
            }
        }
    }
    .status{
        color:#666;
        line-height: 1rem;
        font-size:.4rem;
    }
</style>
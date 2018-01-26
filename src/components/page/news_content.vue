<template>
    <div ref='box'>
        <div v-title :data-title="title">{{title}}</div>
        <newHeader :text="title" :set="true"></newHeader>
        <div class="content-wrap">
            <div class="hd">
                <h2>{{$store.state.news_con.theme}}</h2>
                <div class="clearfix">
                    <span class="name-wrap fl">发件人：<em>系统管理员</em></span>
                    <span class="fr time">{{$store.state.news_con.create_time}}</span>
                </div>
            </div>
        </div>
        <div v-html="$store.state.news_con.news_info" class="content">
        </div>
        <div class="load-wrap" v-show="load_wrap" @touchmove.prevent><mt-spinner type="triple-bounce" color="rgb(38, 162, 255)"></mt-spinner></div>
    </div>
</template>
<script>
    import newHeader from './children/header';
    import qs from 'qs';
    export default {
        name : 'news_content',
        data(){
            return {
                title:'消息内容',
                load_wrap:true,
            }
        },
        components:{
            newHeader
        },
        mounted(){
            this.$refs.box.style.height='100%'
            this.$refs.box.style.backgroundColor = "#fff"
            // if(this.$route.params.status == 2){
            //     this.axios.post(API_URL + 'Home/Pcenter/articleDetail',qs.stringify({
            //         id:this.$route.params.id
            //     })).then((res) => {
            //         // const oDiv = document.createElement('div');
            //         // oDiv.className = 'c';
            //         // oDiv.innerHTML = res.data.data;
            //         // document.body.appendChild(oDiv);
            //         this.level = res.data.data;
            //         this.load_wrap = false;
            //     }).catch((err) => {
            //         console.log(err);
            //     });
            // }else{
                this.axios({
                    method:'get',
                    url:this.$httpConfig.Newsinfo,
                    params:{
                        token:localStorage.getItem("user_ID"),
                        id:this.$route.query.id
                    }
                })
                .then((res) => {
                    this.load_wrap = false;
                    if(res.data.status == 1){
                        this.$store.state.news_con = res.data.data;
                    }
                    
                }).catch((err) => {
                    console.log(err);
                });
            // };
        },
        render(createElement) {
            return createElement(
                this.level,   // tag name 标签名称
            )
        },
    }
</script>
<style scoped lang="less">
    .content-wrap{
        padding:0 .2rem;
        background:#fff;
        .hd{
            height: 1.45rem;
            border-bottom:1px solid #c1c1c1;
            h2{
                font-size:.32rem;
                color:#000;
                padding:.2rem 0;
            }
            .name-wrap{
                font-size:.28rem;
                color:#abacab;
                em{
                    font-style:normal;
                    font-size:.28rem;
                    color:#6ea720;
                }
            }
            .time{
                font-size:.28rem;
                color:#abacab;
            }
        }
    }
</style>
<style lang="less">
 .content{
    width: 710/100rem;
    margin:20/100rem;
    font-size:.28rem;
    color:#333;
    word-wrap:break-word;
    word-break:break-all;
    p{
        font-size:.28rem;
        text-indent: 12px;
        line-height: 32/100rem;
        padding: 20/100rem 0;
    }
}
</style>

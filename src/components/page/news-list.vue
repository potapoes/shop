<template>
    <div>
        <div v-title :data-title="title">{{title}}</div>
        <newHeader :text="title" :set="true"></newHeader>
        <list></list>

        <div class="load-wrap" v-show="load_wrap" @touchmove.prevent><mt-spinner type="triple-bounce" color="rgb(38, 162, 255)"></mt-spinner></div>
    </div>
</template>
<script>
    import newHeader from './children/header';
    import list from './children/news_list';
    import qs from 'qs';
    export default {
        name : 'news_list',
        data(){
            return {
                title:'我的消息',
                load_wrap:true
            }
        },
        components:{
            newHeader,
            list
        },
        mounted(){
            if(localStorage.getItem('user_ID')){
                this.axios({
                    method:'get',
                    url:this.$httpConfig.Newslist,
                    params:{
                        token:localStorage.getItem('user_ID'),
                    page:1
                    }
                })
                .then((res) => {
                    this.load_wrap = false;
                   if(res.data.status == 1){
                        this.$store.state.news_data = res.data.data.records;
                        this.load_wrap = false;
                   }
                }).catch((err) => {
                    console.log(err);
                });
            }else{
                this.$router.push('/LogoIn')
            }
        }
    }
</script>
<style scoped lang="less">

</style>
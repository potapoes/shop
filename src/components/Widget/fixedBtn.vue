<template>
  <div>
      <footer>
          <button :text="text" @click="tolink">{{text}}</button>
      </footer>
  </div>
</template>
<script>
    import qs from 'qs';
    import { Toast } from 'mint-ui';
    export default {
        name : 'fixedBtn',
        props:{
            text:null,
            id:'',
            to:'',
            data:'',
            prov:'',
            city:'',
            district:'',
            Township:'',
        },
        methods:{
            tolink(){
                switch(this.to){
                    case '/address':
                        // if(this.prov){
                            this.axios.post(this.$httpConfig.editAddress,qs.stringify({
                                token:localStorage.getItem('user_ID'),
                                id:this.data.id,
                                realname:this.data.realname,
                                mobile: this.data.mobile,
                                prov:this.prov,
                                city:this.city,
                                area:this.district,
                                dist:this.Township,
                                address:this.data.address,
                                default:this.data.status
                            })).then((res) => {
                                Toast(res.data.message);
                                if(res.data.status == 1){
                                    console.log(this.data)
                                    if(this.data.status == 1){
                                        localStorage.setItem("defaultAddress",JSON.stringify(this.data))
                                    }
                                    this.$router.push({name:"address"});
                                }
                                
                            }).catch((err) => {
                                console.log(err);
                            });
                        // }else{
                        //     this.axios.post(API_URL + 'Home/Pcenter/addressSave',qs.stringify({
                        //         address_id:this.$route.params.status,
                        //         receiver:this.data.realname,
                        //         mobile:this.data.mobile,
                        //         prov:this.data.prov.id,
                        //         city:this.data.city.id,
                        //         address:this.data.address,
                        //         status:this.data.value,
                        //         dist:this.data.dist.id
                        //     })).then((res) => {
                        //         Toast('修改成功');
                        //         this.$router.push(this.to);
                        //     }).catch((err) => {
                        //         console.log(err);
                        //     });
                        // }
                        break;
                    case '/newaddress':
                        if(!this.data.realname){
                            Toast('收货人姓名不能为空');
                            return;
                        }
                        if(!this.data.mobile){
                            Toast('手机号不能为空');
                            return;
                        }
                        if(!this.data.addressAll){
                            Toast('请选择地址');
                            return;
                        }
                        if(!this.data.address){
                            Toast('请填写详细地址');
                            return;
                        }
                        this.axios.post(this.$httpConfig.addAddress, qs.stringify({
                            token: localStorage.getItem('user_ID'),
                            realname:this.data.realname,
                            mobile:this.data.mobile,
                            prov:this.prov.id,
                            city:this.city.id,
                            area:this.district.id,
                            dist:this.Township.id,
                            address:this.data.address,
                            default:this.data.value,
                        })).then((res) => {
                            Toast(res.data.message);
                            if(res.data.status == 1){
                                this.$router.push('/address');
                            }
                        }).catch((err) => {
                            console.log(err);
                        });
                        break;
                    case '/IntegralMall':
                        this.$router.push('/IntegralMall');
                        break;
                    case '/order':
                        this.$router.go(-1);
                        break;
                        default:;
                }
            }
        },
        watch:{
            
        }  
    }
</script>
<style lang="less" scoped>
    footer{
        width: 100%;
        height: .9rem;
        button{
            position:fixed;
            bottom:0;
            left:0;
            border:none;
            font-size:.32rem;
            color:#fff;
            width: 100%;
            height: .9rem;
            background:#D19E29;
            outline: none;
        }
        button:active{
            box-shadow: 0 -2px 5px #ccc;
        }
    }
</style>
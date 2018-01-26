<template>
    <div class="edit-wrap">
        <div v-title :data-title="title">{{title}}</div>
        <edit-header :text="title" :btn="btn" :id="$route.params.status"></edit-header>
        <div class="form-wrap">
            <mt-field label="收货人：" placeholder="请输入收货人姓名" v-model="data.realname"></mt-field>
            <div class="fenge"></div>
            <mt-field label="手机号：" placeholder="请输入手机号" type="number" v-model="data.mobile"></mt-field>
             <div class="fenge"></div>
            <div class="mint-cell mint-field">
                <span class="mint-cell-title mint-cell-text">所在地区：</span>
                <div class="mint-cell-value" @click="callingArea">
                    <input placeholder="请选择地区" type="tel" class="mint-field-core" disabled v-model="data.addressAll">
                    <span class="mint-field-state is-default"><i class="mintui mintui-field-default"></i></span>
                    <div class="mint-field-other"></div>
                </div>
            </div>
            <div class="fenge"></div>
            <mt-field label="详细地址：" placeholder="请输入详细地址" v-model="data.address"></mt-field>
            <div class="fenge"></div>
            <div class="fenge"></div>
           <div class="defaultAdd" @click="defaultChange">
               <span>设为默认地址</span><img :src="imgok" v-if="data.value ==1" alt=""><div v-else></div>
           </div>
            <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">  
                <div class="picker-toolbar">  
                    <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>  
                    <span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span>  
                </div>  
                <div class="select">
                    <select v-model="prov">
                        <option v-for="option in addressPlace" :value="option" :key="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                    <select v-model="city" v-if="prov">
                        <option v-for="option in cityArr" :value="option" :key="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                    <select v-model="district" v-if="city">
                        <option v-for="option in districtArr" :value="option" :key="option.id">
                            {{ option.name }}
                        </option>
                    </select>

                     <select v-model="Township" v-if="district">
                        <option v-for="option in TownshipArr" :value="option" :key="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
            </mt-popup>
        </div>
        <footer-btn :text="footBnt" :id="$route.params.status" :to="'/newaddress' " :data="data" :prov="prov" :Township ='Township' :city="city" :district="district"></footer-btn>
    </div>
</template>
<script>
    import EditHeader from '@/components/page/children/header';
    import FooterBtn from '@/components/Widget/fixedBtn';
    import { Field,Popup,Radio,Toast } from 'mint-ui';
    import QS from 'qs';
    export default {
        name : 'EditDelAddress',
        data(){
            return {
                imgok:require('@/assets/images/ok.png'),

                title : '新增收货地址',
                btn:' ',
                btnDel:true,
                footBnt:'保存',
                popupVisible:false,
                popup:false,
                addressPlace:'',
                prov:'',
                cityArr:'',
                city:'',
                district:'',
                districtArr:'',
                Township:'',
                TownshipArr:'',
                data:{
                    name:'',
                    phone:'',
                    address1:'',
                    addressAll:'',
                    addAll:'',
                    Det:'',
                    addressa:'',
                    value:0
                },
            }
        },
        methods:{
            // 默认地址
            defaultChange(){
                if(this.data.value ==0){
                    this.data.value =1
                }else{
                    this.data.value =0
                }
            },
            callingArea(){
                this.popupVisible = true;
            },
            cancleaddress(){
                this.popupVisible = false;
            },
            callingadd(){
                this.popup = true;
            },
            selectaddress(){
                this.popupVisible = false;
                if(this.prov && this.city && this.district && this.Township){
                    this.data.addressAll = this.prov.name +'-'+ this.city.name +'-'+ this.district.name +'-'+ this.Township.name;
                }else{
                    Toast('请选择地址');
                }
            },
            proAjax(index,selId){
                this.axios({
                    method:'get',
                    url:this.$httpConfig.cityList,
                    params:{
                        parent_id:index,
                        id:"" 
                    }
                })
                .then((res) => {
                    let data = res.data.data;
                    if(selId == 0){
                         this.addressPlace = data;
                    }else if(selId == 1){
                        this.cityArr = data;
                        // this.city = data[0];
                    }else if(selId == 2){
                        this.districtArr = data;
                        // this.district =  data[0];
                    }else if(selId == 3){
                        this.TownshipArr = data;
                        // this.Township =  data[0];
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }
        },
        watch: {
            prov:function(){
                // this.cityshow =1
                if(this.prov){
                    this.proAjax(this.prov.id, 1)
                }  
            },
            city:function(){
                // this.cityshow =2
                 this.proAjax(this.city.id, 2)
            },
            district:function(){
                // this.cityshow =3
                this.proAjax(this.district.id, 3)
                
            }
        },
        created(){
            
        },
        mounted(){
          this.proAjax(0, 0)
        },
        components:{
            EditHeader,
            FooterBtn
        }
    }
</script>
<style lang="less">
.fenge{
    width: 100%;
    height: 1/100rem;
    background-color: #d9d9d9;
}
    .edit-wrap{
        .mint-popup-bottom{
            width: 100%;
            padding:.2rem;
            box-sizing: border-box;
            .select{
                padding:.2rem 0;
                select{
                    padding-left:10/100rem;
                    border: 1/100rem solid #d9d9d9;
                    width: 24%;
                    height: .5rem;
                    background:#fff;
                    outline: none;
                    option{
                        color:#333;
                        text-align: center;
                    }
                }
            }
        }
        div.mint-field{
            border-top:1px solid #d9d9d9;
            padding:0 .2rem;
        }
        .mint-radiolist-title{
            margin:0;
        }
        .mint-radiolist-label{
            padding:0;
        }
        .mint-radio-label{
            font-size:.29rem;
            color:#999;
        }
        .mint-field{
            height: 1rem;
            line-height:1rem;
            background:#fff;
            .mint-cell-text{
                font-size:.3rem;
                color:#999;
            }
            .mint-cell-value{
                font-size:.32rem;
                color:#333;
                input{
                    background:#fff;
                }
            }
        }
    }
     .defaultAdd{
        height: 95/100rem;
        background:#fff;
        border-bottom:1/100rem solid #d9d9d9;
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding:0 20/100rem;
        
        color: #999;
        span{
            font-size: 30/100rem;
        }
        div{
            width: 50/100rem;
            height: 50/100rem;
            border-radius: 50/100rem;
            border:1/100rem solid #999;
        }
        img{
              width: 50/100rem;
            height: 50/100rem;
        }
    }
</style>

<template>
    <div class="edit-wrap">
        <div v-title :data-title="title">{{title}}</div>
        <edit-header :text="title" :btn="btn" :btnDel="btnDel" :id="data.id"></edit-header>
        <div class="form-wrap">
            <mt-field label="收货人：" placeholder="请输入收货人姓名" v-model="data.realname"></mt-field>
            <div class="fenge"></div>
            <mt-field label="手机号：" placeholder="请输入手机号" type="number" v-model="data.mobile"></mt-field>
            <div class="mint-cell mint-field">
                <span class="mint-cell-title mint-cell-text">所在地区：</span>
                <div class="mint-cell-value" @click="callingArea">
                    <input placeholder="请选择地区" type="tel" class="mint-field-core" disabled v-model="data.addressAll">
                    <span class="mint-field-state is-default"><i class="mintui mintui-field-default"></i></span>
                    <div class="mint-field-other"></div>
                </div>
            </div>
             <div class="fenge"></div>
              <div class="fenge"></div>
            <mt-field label="详细地址：" placeholder="请输入详细地址" v-model="data.address"></mt-field>
             <div class="fenge"></div>
              <div class="fenge"></div>

            <div class="defaultAdd" @click="defaultChange">
               <span>设为默认地址</span><img :src="imgok" v-if="data.status ==1" alt="">
               <div v-if="data.status ==0"></div>
           </div>
            <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">  
                <div class="picker-toolbar">  
                    <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>  
                    <span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span>  
                </div>   
                <div class="select">
                    <select v-model="prov" ref="provDom">
                        <option v-for="option in addressPlace" :value="option.id" :key="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                    <select v-model="city">
                        <option v-for="option in cityArr" :value="option.id" :key="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                    <select v-model="district" >
                        <option v-for="option in districtArr" :value="option.id" :key="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                     <select v-model="Township">
                        <option v-for="option in TownshipArr" :value="option.id" :key="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
            </mt-popup>
        </div>
        <footer-btn :text="footBnt" :id="$route.params.status" :to="'/address'" :data="data" :prov="prov" :city="city" :district="district" :Township = "Township"></footer-btn>
    </div>
</template>
<script>
    import EditHeader from '@/components/page/children/header';
    import FooterBtn from '@/components/Widget/fixedBtn';
    import { Field,Popup,Radio,Toast } from 'mint-ui';
    import qs from 'qs';
    export default {
        name : 'EditDelAddress',
        data(){
            return {
                
                title : '编辑收货地址',
                btn:' ',
                btnDel:true,
                footBnt:'保存',
                popupVisible:false,
                popup:false,
                value:'',
                addressPlace:'',
                prov:{},
                cityArr:'',
                city:{},
                district:{},
                districtArr:'',
                Township:{},
                TownshipArr:'',
                data:{},
                provNum:0,
                cityNum:0,
                distNum:0,
                tpwmNum:0,
                imgok:require('@/assets/images/ok.png'),
            }
        },
        methods:{
              defaultChange(){
                    if(this.data.status ==0){
                        this.data.status = 1
                    }else{
                        this.data.status = 0
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
                    let provName,cityName,districtName,TownshipName;
                    provName = this.forcity(this.addressPlace, this.prov);
                    cityName = this.forcity(this.cityArr, this.city);
                    districtName = this.forcity(this.districtArr, this.district)
                    TownshipName = this.forcity(this.TownshipArr, this.Township)
                    if(provName && districtName && districtName){
                        this.data.addressAll =provName +'-'+ districtName +'-'+ districtName +'-'+ TownshipName
                    }else{
                        Toast('请选择地址');
                    }
                },
                forcity(arr,id){
                    let name = '';
                    for(let i =0;i<arr.length;i++){
                        if(id ==arr[i].id){
                            return name = arr[i].name;
                             
                        }
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
                        if(this.provNum ==0){
                            this.prov= this.data.prov;
                            this.provNum++;
                        }
                    }else if(selId == 1){
                        this.cityArr = data;
                         if(this.cityNum == 0){
                             this.city = this.data.city
                             this.cityNum++
                        }else{
                            this.city = data[0].id
                        }
                        
                    }else if(selId == 2){
                        this.districtArr = data;
                        if(this.distNum ==0){
                            this.district = this.data.area
                            this.distNum ++;
                        }else{
                            this.district = data[0].id;
                        }
                    }else if(selId == 3){
                        this.TownshipArr = data;
                          if(this.tpwmNum ==0){
                             this.Township = this.data.dist
                             this.tpwmNum ++;
                        }else{
                            this.Township = data[0].id;
                        }
                    }
                }).catch((err) => {
                    console.log(err);
                });
              }
        },
        watch: {
            prov:function(){
                if(this.prov){
                    
                    this.proAjax(this.prov, 1)
                }  
            },
            city:function(){
                 this.proAjax(this.city, 2)
            },
            district:function(){
                this.proAjax(this.district, 3)
                
            }
        },
        created(){
             this.proAjax(0 , 0)
        },
        mounted(){
            this.data =  JSON.parse(localStorage.getItem('editAddData')) 
             this.data.addressAll = this.data.prov_name +'-'+ this.data.city_name +'-'+ this.data.area_name+'-'+this.data.dist_name;
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
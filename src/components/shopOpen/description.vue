<template>
  <div class="boxs">
       <div v-title data-title="我要开店">我要开店</div>
        <top-header :text="title"></top-header>
        <!-- 入店须知 -->
        <tab-header v-show="btmIndex ==0" v-on:sortCon = 'sortCon' :sortData = "sortData" :tabdata = "tabIndex"></tab-header>
        <div v-show="btmIndex ==0">
            <ul class="Process" v-show="tabIndex ==0">
            <li v-for="(item,index) in titles" :key="index">
                <div><img class="title" :src="imgsIndex[index]" alt=""> <h4>{{item}}</h4><img class="smallImg" :src="imglastIndex[index]" alt=""><span>{{time[index]}}</span></div>
                <ul>
                    <li v-for="(val,k) in list[index]" :key="k">
                        <img :src="dotsImg" alt="">{{val}}
                    </li>
                </ul>
            </li>
            </ul>
            <div  v-show="tabIndex ==1" class="standard">
                <h2>公司资质要求</h2>
                <table>
                    <thead>
                        <th>证件名称</th>
                        <th>资质要求</th>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>1.营业执照</td>
                            <td>资质要求资质要求资质要求资质要求资质要求资质要求资质要求资质要求资质要求</td>
                        </tr>
                        <tr>
                            <td>2.税务登记证</td>
                            <td>资质要求资质要求资质要求资质要求资质要求资质要求资质要求资质要求资质要求</td>
                        </tr>
                        <tr>
                            <td>3.组织机构代码证</td>
                            <td>资质要求资质要求资质要求资质要求资质要求资质要求资质要求资质要求资质要求</td>
                        </tr>
                        <tr>
                            <td>4.法人身份证</td>
                            <td>资质要资质要求资质要求资质要求资质要求资质要求资质要求资质要求资质要求求</td>
                        </tr>
                    </tbody>
                </table>
                <p><span>注：</span>商家需要具有一般纳税人或者小额纳税人小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税具有一般纳税人或者小额纳税者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小小额纳税人只是；注册资金20万元以上。
                    需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税具有一般纳税人或者小额纳税者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小小额纳税人
                    需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税具有一般纳税人或者小额纳税者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小小额纳税人
                    
                </p>
            </div>
            <div  v-show="tabIndex ==2" class="detail">
                <h2>收费标准</h2>
                <p>小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税具有一般纳税人或者小额纳税者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小小额</p>
                <h2>15天无理由退货服务</h2>
                <p>小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小额纳税具有一般纳税人或者小额纳税者小额纳税人只是；注册资金20万元以上。
                    商家需要具有一般纳税人或者小小额</p>
            </div>
        </div>
        <!-- 进度查看 -->
        <ul v-show="btmIndex ==1" class="schedule" ref ="schedule">
            <li v-for="(val, index) in scheduledata" :key="index" >
                <div class="radios"></div>
                <div class="hiddens" v-if="scheduledata.length ==index+1" ref="scheduleDom"></div>
                <div class="box">
                    
                    <div class="big"></div>
                    <div class="small"></div>
                    <h4>{{val.time}}</h4>
                    <h5>{{val.title}}</h5>
                    <h6>{{val.status}}</h6>
               </div> 
            </li>
        </ul>
        <div class="btm">
            <div>
                <div @click="btmIndex =0">
                    <img :src="notesImg" alt="">
                    <span>入驻须知</span>
                </div>
                <div @click="btmIndex =1">
                    <img :src="ViewImg" alt="">
                    <span>进度产看</span>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import topHeader from '@/components/page/children/header.vue';
import tabHeader from '@/components/shopOpen/child/tabHeader.vue';
export default {
  data () {
      return {
            title:'入驻须知',
            sortData:['入驻流程','入驻标准', '合作细则'],
            tabIndex:0,
            imgsIndex:[require("@/assets/images/1.png"),require("@/assets/images/2.png"),require("@/assets/images/3.png")],
            imglastIndex:[require("@/assets/images/ico1.png"),require("@/assets/images/ico2.png"),require("@/assets/images/ico3.png")],
            titles:['提交入驻资料','商家等待审核','完善店铺信息'],
            list:[['查询入驻条件', '资质上传', '品牌上传', '店铺命名', '提交审核'],['商业判断','资质审核'],['账号激活','签署协议','提交保证金','不全商家信息']],
            time:['约2个小时','约5个工作日','约1天'],
            dotsImg:require("@/assets/images/dots.png"),
            Notes:[require("@/assets/images/Notes_off.png"),require("@/assets/images/Notes_on.png")],
            View:[require("@/assets/images/View_off.png"),require("@/assets/images/View_on.png")],
            notesImg:require("@/assets/images/Notes_on.png"),
            ViewImg:require("@/assets/images/View_off.png"),
            btmIndex:0,
            scheduledata:[
                {
                    time:"2018-08-13 12:12:12",
                    title:'入驻信息已提交',
                    status:'审核中'
                },
                 {
                    time:"2018-08-13 12:12:12",
                    title:'入驻信息已提交',
                    status:'审核中'
                },
                 {
                    time:"2018-08-13 12:12:12",
                    title:'入驻信息已提交',
                    status:'审核中'
                },
                 {
                    time:"2018-08-13 12:12:12",
                    title:'驻信息已提交驻已提交驻信交驻信已提交驻信交驻信已提交驻信交驻信提交驻信交驻信已提交驻信交驻信提交驻信交驻信信交驻信息已提交',
                    status:'审核中1111111'
                },
            ]
      }
  },
  methods:{
      sortCon(index){
          this.tabIndex = index
      }
      
  },
  watch: {
    btmIndex(){
        if(this.btmIndex == 0){
            this.notesImg = this.Notes[1];
            this.ViewImg = this.View[0]
        }else{
            this.notesImg = this.Notes[0];
            this.ViewImg = this.View[1]
        }
    }  
  },
  mounted(){
  },
  components:{
      topHeader,
      tabHeader
  }
}
</script>
<style lang="less" scoped>
.boxs{
    padding-bottom: 1.05rem;
}
.Process{
    background-color: #fff;
    padding-left: .6rem;
    padding-top: .3rem;
    li{
        padding: 0 .25rem 0 0;
        overflow: hidden;
        div{
            overflow: hidden;
        }
        .title{
            float: left;
            width: .5rem;
            height: .5rem;
        }
        h4{
            float: left;
            font-size: .32rem;
            margin: 0 .25rem;
        }
        .smallImg{
            float: left;
            width: .3rem;
            height: .3rem;
            margin-top: .1rem
        }
        span{
            font-size: .28rem;
            float: right;
        }
        ul{
            border-left: .01rem dashed #ccc;
            padding: .1rem 0 .1rem .25rem;
            margin:0 .25rem;
            li{
                display: flex;
                align-items: center;
                padding:.15rem;
                line-height: .35rem;
                height: .35rem;
                font-size: .28rem;
                img{
                    width: .15rem;
                    height: .15rem;
                    margin-right: .2rem;
                }
            }
        }
        
    }   
}
.btm{
    background-color: #fff;
    position: fixed;
    width: 100%;
    height: 1.05rem;
    border-top: .01rem solid #ccc;
    bottom: 0;
    div{
        display: flex;
        height: 100%;
        div{
            flex:1;
              display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span{
                margin-top: .01rem;
                font-size: .22rem;
            }
             img{
                width: .45rem;
                height: .45rem;
            }
        }
    }
}
// 标准
.standard{
    background-color: #fff;
    padding: .3rem .25rem;
    h2{
        font-size: .28rem;
        border-left: .1rem solid #D29D29;
        padding-left:.1rem;
        margin-bottom: .2rem;
    }
    td{
         border-color: #939393;
        font-size: .24rem;
        padding: .2rem;
        min-height:.65rem;
        &:first-child{
            width: 2.4rem;
        }
    }
    th{
        height:.65rem;
         border-color: #939393;
        font-size: .28rem;
        font-weight: normal;
        color: #939393
    }
    p{
        font-size: .24rem;
        padding: .3rem 0;
        line-height: .30rem;
        span{
            font-size: .24rem;
            color: #0990D2;
        }
    }
}
// 细节
.detail{
    background-color: #fff;
    padding: 0 .25rem .3rem;
    overflow: hidden;
    h2{
        border-left: .1rem solid #D29D29;
        padding-left:.1rem;
        margin: .3rem 0;
        font-size: .28rem;
    }
    p{
        font-size: .28rem;
        color: #B6B6B6;
    }
}

.schedule{
    margin-left: .4rem;
    border-left: .01rem solid #BBB;
    padding-right: .2rem;
    margin-bottom: 1.05rem;
    li{
        overflow: hidden;
        // display: flex;
        padding-top: .5rem;
        margin-left: -.27rem;
        position: relative;
    }
    .radios{
        position: absolute;
        width:.35rem;
        height: .35rem;
        margin:.3rem .25rem 0 0;
        border: .1rem solid #D3A023;
        border-radius: .35rem;
        background-color: #fff;
        // z-index: 2;
    }
    .hiddens{
        // position: absolute;
        float: left;
        width:.55rem;
        // bottom:0;
        background-color: #f1f1f1;
        margin-top: .5rem;
        height: 3rem;
    }
    .box{
        margin-left: .67rem;
        background-color: #fff;
        width: 6rem;
        min-height: 1.45rem;
        border-radius: .2rem;
        border: .01rem solid #ccc;
        padding: .2rem;
        position: relative;
        .big{
            position: absolute;
        }
        .small{
            position: absolute;
        }
    }
    h4{
        color: #9A9A9A;
        font-size: .30rem;
        line-height: .45rem;
    }
    h5{
        line-height: .45rem;
        font-size: .30rem;
    }
    h6{
        line-height: .45rem;
        font-size: .30rem;
        color: #E62A21;
    }
}
</style>

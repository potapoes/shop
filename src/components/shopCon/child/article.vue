<template>
  <div>
      <ul class="recommendList" v-if="temList ==0">
        <li v-for="item in hotList" :key="item.id">
          <img v-if="item.image" :src="item.image" alt="">
          <img v-else alt="">
          <p>{{item.title}}</p>
          <span>￥{{item.price_member}}</span>
        </li>
      </ul>
       <ul class="recommendList" v-if="temList == 1">
        <li>
          <img :src="conImg" alt="">
          <p>器材云很难 翡翠士大夫 手动阀奥萨3而无热源</p>
          <span>￥2900.00</span>
        </li>
      </ul>
      <ul v-if="temList ==2" class="shopList">
          <li class="newCon">
              <div class="times"><img :src="timeImg" alt=""><span>8月5号</span></div>
              <div class="newtitle"><div class="title">上新</div><p>上新1件商品</p></div>
              <div class="content1">
                    <img :src="conImg" alt="">
                    <div>
                        <h4>七彩云南 缅甸翡翠A货 翡翠戒指纳努士大夫的风格广泛的i及配件热热空间地方</h4>
                        <h6>￥358</h6>
                    </div>
              </div>
          </li>
          <li class="newCon">
              <div class="times"><img :src="timeImg" alt=""><span>8月5号</span></div>
              <div class="newtitle"><div class="title">上新</div><span>上新1件商品</span></div>
              <div class="content2">
                    <div>
                        <img :src="conImg" alt="">
                        <div>￥358</div>
                    </div>
                     <div>
                        <img :src="conImg" alt="">
                        <div>￥358</div>
                    </div>
                    <div>
                        <img :src="conImg" alt="">
                        <div>￥358</div>
                    </div>
                    <div>
                        <img :src="conImg" alt="">
                        <div>￥358</div>
                    </div>
                    <div>
                        <img :src="conImg" alt="">
                        <div>￥358</div>
                    </div>
                    <div>
                        <img :src="conImg" alt="">
                        <div>￥358</div>
                    </div>
              </div>
          </li>
          <li class="newCon">
              <div class="times"><img :src="timeImg" alt=""><span>8月5号</span></div>
              <div class="newtitle"><div class="title miaosha">秒杀</div><p>距结束好差<span>12</span> 时 <span>35</span>分</p></div>
              <div class="content1">
                    <img :src="conImg" alt="">
                    <div>
                        <h4>七彩云南 缅甸翡翠A货 翡翠戒指纳努士大夫的风格广泛的i及配件热热空间地方</h4>
                        <h6>￥358</h6>
                    </div>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
        timeImg:require('@/assets/images/time_icon.png'),
        // 临时数据
        conImg:require('@/assets/con19.jpg'),
        ggt:require('@/assets/ggt.png')
    }
  },
  props: ["temList",'hotList']
}
</script>
<style lang="less" scoped>
// 全部宝贝模板
// 热门列表
.recommendList{
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  li:nth-child(2n){
    margin-left:10/100rem;
  }
  li{
    background-color: #fff;
    width: 3.7rem;
    padding-bottom: .15rem;
    img{
      width: 3.7rem;
      height: 3.75rem;
    }
    p{
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      padding: .15rem .25rem;
      font-size: 28/100rem;
    }
    span{
      padding: 0 .25rem;
      font-size: .28rem;
      color: #D12F2D;
    }
  }
}

// 店铺动态模板
.shopList{
    span{
        font-size: 28/100rem;
    }
    li{
        background-color: #fff;
        margin-top: 20/100rem;
        padding: .35rem .25rem .30rem;
        .times{
            display:flex;
            align-items: center;
            img{
                width:.3rem;
                height: .3rem;
                margin-right: .1rem
            }
        }
        .newtitle{
            margin: 35/100rem 0 20/100rem;
            display:flex;
            align-items: center;
            .title{
                margin-right: 20/100rem;
                display:flex;
                width: 90/100rem;
                height: 40/100rem;
                border:3/100rem solid #46E26E;
                color: #46E26E;
                border-radius: 40/100rem;
                justify-content: center;
                align-items: center;
            }
            p{
                font-size: 28/100rem;
                span{
                    background-color: #3B3B3B;
                    color: #fff;
                    padding: .05rem;
                    border-radius: 5/100rem;
                }
            }
            .miaosha{
                
                border:3/100rem solid #F3D798;
                color: #F3D798
            }
        }
        .content1{
            display: flex;
            img{
                width: 2.25rem;
                height: 2.25rem;
                
            }
            div{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 0 50/100rem .5rem 30/100rem;
                h4{
                    font-size: 24/100rem;
                    color: #909090;
                }
                h6{
                    font-size: 32/100rem;
                }
            }
        }
        .content2{
            display: flex;
            flex-wrap: wrap;
            div{
                position: relative;
                img{
                    width: 2.25rem;
                    height: 2.25rem;
                    margin-right: 5/100rem;
                    margin-bottom: 10/100rem;
                }
                div{
                    position: absolute;
                    background-color: rgba(0,0,0,.2);
                    bottom: 10/100rem;
                    width: 2.25rem;
                    height: 40/100rem;
                    font-size: .28rem;
                    line-height: .4rem;
                    text-align: center;
                }
            }
           
        }
    }
}
</style>

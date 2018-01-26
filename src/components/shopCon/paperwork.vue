<template>
  <div>
      <shop-header :text="text"></shop-header>
      <h4>贡品网商城网点经营者营业执照信息</h4>
      <p>企业名称：</p>
      <p>营业执照注册号：</p>
      <p>法定代表人姓名：</p>
      <p>营业执照所在地：</p>
      <p>企业注册资金：</p>
      <p>营业执照有效期：</p>
      <p>公司地址：</p>
      <p>营业执照经营范围：</p>
      <h6>注：以上营业执照信息，根据国家工商总局《网络交易管理办法》要求对入驻商家营业执照信息进行公示，
          除企业名称通过认证之外，其余信息由卖家自行申报填写。如需要进一步核实，请联系当地工商行政管理部门。</h6>
  </div>
</template>
<script>
import shopHeader from '@/components/page/children/header.vue';
export default {
  data () {
    return {
        text:'证照信息'
    }
  },
  components:{
      shopHeader
  }
}
</script>
<style lang="less" scoped>
    h4{
        font-size:.32rem;
        text-align: center;
        margin: .2rem 0
    }
    p{
        font-size: .28rem;
        padding: 0 .2rem;
        line-height: .5rem;
    }
    h6{
        margin-top: .55rem;
        font-size: .28rem;
        font-weight: 600;
        padding: 0 .2rem;
    }
</style>

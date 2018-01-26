<template>
  <div >
       <ul>
           <li v-for="(item,index) in list" @click = 'tabList($refs.liData)' :key="index" ref="liData">{{item}}</li>
       </ul>
  </div>
</template>
<script>
    import liziChild from './lizichild.vue'
    export default {
    data () {
        return {
           list:[1,2,3,4,5,6,7,8,9,0]
        }
    },
    mounted(){
        console.log(this.$refs.liData)
    },
    methods: {
        tabList(dom){
            console.log(dom[0])

        }
    },
    components:{
        liziChild
    }
    }
</script>
<style lang="less" scoped>

</style>


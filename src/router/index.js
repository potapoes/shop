import Vue from 'vue'
import App from '@/App'
import Router from 'vue-router'


const brandList = r => require(['@/components/brandMuseum/list'], r); //品牌列表
const braDetails = r => require(['@/components/brandMuseum/listDetails'], r); //品牌详情页
const latestProm = r => require(['@/components/latestProm/latestProm'], r); //最新促销
const poopClearance = r => require(['@/components/poopClearance/index'], r); //尾货清仓

const IntegralMall = r => require(['@/components/IntegralMall/index'], r); //积分商城-列表
const intOrder = r => require(['@/components/page/integral_order'], r); //积分订单
const myIntegral = r => require(['@/components/myWallet/myIntegral'], r); //我的积分

const invoice = r => require(['@/components/page/invoice'], r); //发票信息
const repair = r => require(['@/components/page/returnRepair'], r); //退货返修
const Search = r => require(['@/components/search/Search'], r); //首页热搜

const Notice = r => require(['@/components/page/Notice'], r); //公告

const Cart = r => require(['@/components/page/Cart'], r); //购物车
const Order = r => require(['@/components/page/confirmOrder'], r); //确认订单
const cashier = r => require(['@/components/page/Cashier'], r); //收银台
const subject = r => require(['@/components/subject'], r); //主页-分类-购物车-个人中心入口
const wholeOrder = r => require(['@/components/order/whole'], r); //订单入口
const orderWrap = r => require(['@/components/order/order'], r); //订单
const orderDetails = r => require(['@/components/order/orderDetails'], r); //订单详情

const serviceBack = r => require(['@/components/page/serviceBack'], r); //申请售后
const evaluate = r => require(['@/components/order/evaluate'], r); //商品评价
const logis = r => require(['@/components/page/logistics'], r); //物流查询


const payment = r => require(['@/components/page/payment'], r); //付款

const customer = r => require(['@/components/page/customerService'], r); //客户服务
const progress = r => require(['@/components/page/progressQuery'], r); //进度查询
const reset = r => require(['@/components/logoIn/resetPassword'], r); //重置密码
const theTeacher = r => require(['@/components/page/theTeacher'], r); //名师专栏
const pickWeek = r => require(['@/components/page/pickweek'], r); //名师推荐
const limitedbuy = r => require(['@/components/page/LimitedBuy'], r); //限时团购

const recharge = r => require(['@/components/myWallet/recharge'], r); //充值
const withdr = r => require(['@/components/myWallet/Withdrawals'], r); //提现
const shares = r => require(['@/components/myWallet/shares'], r); //我的股币

const getInfo = r => require(['@/components/getInfo/getInfo'], r); //接受请求 --青菜新增
// 个人中心的菜单
const myCollection = r => require(['@/components/page/myCollection'], r); //我的收藏
const myNews = r => require(['@/components/page/news-list'], r); //我的消息
const newsConent = r => require(['@/components/page/news_content'], r); //我的消息-内容
const feedback = r => require(['@/components/page/Feedback'], r); //意见反馈

const coupon = r => require(['@/components/page/coupon'], r); //优惠券
const footprint = r => require(['@/components/page/footprint'], r); //我的足迹
const myComment = r => require(['@/components/page/myComment'], r); //我的评论
const myWallet = r => require(['@/components/myWallet/myWallet'], r); //我的钱包

// 个人中心
const person = r => require(['@/components/home/PersonalCenter'], r); //个人中心
const personalData = r => require(['@/components/page/personalData'], r); //个人资料
const seetin = r => require(['@/components/page/settings'], r); //账户设置
// 地址管理
const address = r => require(['@/components/page/address'], r); //收货地址
const EdiAddress = r => require(['@/components/page/EditDelAddress'], r); //管理收货地址
const newAddress = r => require(['@/components/page/newAddress'], r); //新建收货地址
// 注册登录
const LogoIn = r => require(['@/components/logoIn/logoIn'], r); //登录
const Register = r => require(['@/components/logoIn/register'], r); //注册
const Sms = r => require(['@/components/logoIn/SMSLogin'], r); //短信登录
const bachWord = r => require(['@/components/logoIn/retrievePassword'], r); //找回密码
const logoInBind = r => require(['@/components/logoIn/logoInBind'], r); //绑定
const phone = r => require(['@/components/page/ModifyPhone'], r); //修改手机号绑定
const modifyPassword = r => require(['@/components/page/modifyPassword'], r); //修改密码
// 主页
const Home = r => require(['@/components/home/home'], r); //主页
// // 商品列表
const Class = r => require(['@/components/home/classification'], r); //分类
const list = r => require(['@/components/page/list'], r); //商品列表
const product = r => require(['@/components/page/product'], r); //商品详情
const prTab = r => require(['@/components/page/children/tab'], r); //商品详情图
const withPackages = r => require(['@/components/page/withPackages'], r) // 套餐配件


// 开店
// 店铺列表
const shoplist = r => require(['@/components/shopCon/shoplist'], r); //店铺列表
// 个人
const checkProadd = r => require(['@/components/shopOpen/perShop/addInformation'], r); //填写个人资料
const checkProIdInfor = r => require(['@/components/shopOpen/perShop/proId'], r); //填写身份证
const checkProBankInfor = r => require(['@/components/shopOpen/perShop/proBank'], r); //填写身份证
const checkProBusinessInfor = r => require(['@/components/shopOpen/perShop/Business'], r); //提交
// 企业
const checkCompanyadd = r => require(['@/components/shopOpen/companyShop/addInformation'], r); //填写资料
const companyPhotos = r => require(['@/components/shopOpen/companyShop/companyPhotos'], r); //营业执照
const organizationPhotos = r => require(['@/components/shopOpen/companyShop/organizationPhotos'], r); //组织结构代码
const checkCompanyBankInfor = r => require(['@/components/shopOpen/companyShop/checkCompanyBankInfor'], r); //组织结构代码
const checkComBusinessInfor = r => require(['@/components/shopOpen/companyShop/Business'], r); //提交
// 入驻协议
const settledAgreement = r => require(['@/components/shopOpen/settledAgreement'], r); //入驻协议
const settledAgreementSuc = r => require(['@/components/shopOpen/settledAgreementSuc'], r); //入驻协议
const shopOpen = r => require(['@/components/shopOpen/index'], r); // 我要开店
const description = r => require(['@/components/shopOpen/description'], r); // 入驻须知
// 例子
const lizi = r => require(['@/components/home/lizi'], r); //
const lizichild = r => require(['@/components/home/lizichild'], r); //

const shopHomeList = r => require(['@/components/shopCon/shopHomeList'], r); //首页进入的店铺列表
const shopHome = r => require(['@/components/shopCon/shopHome'], r); // 店铺
const shopDetails = r => require(['@/components/shopCon/shopDetails'], r);// 店铺详情
const paperwork = r => require(['@/components/shopCon/paperwork'], r);// 证照信息
Vue.use(Router) 
const router = new Router({
    routes: [{
        path: '/',
        component: App, //顶层路由，对应index.html
        children: [ //二级路由。对应App.vue
            //地址为空时跳转home页面
            {
                path: '',
                redirect: '/subject'
            },
            {
                path: '/subject',
                name: 'subject',
                component: subject,
                children: [ //地址为/subject跳转home
                    {
                        path: '/subject',
                        redirect: '/home'
                    },
                    { //主页
                        path: '/home',
                        name: 'home',
                        component: Home
                    },
                    { //分类
                        path: '/class',
                        name: 'class',
                        component: Class
                    },
                    { //购物车
                        path: '/Cart',
                        name: 'Cart',
                        component: Cart
                    },
                    { //个人中心
                        path: '/person',
                        name: 'person',
                        component: person
                    }
                ]
            },
            { //登录
                path: '/LogoIn',
                name: 'LogoIn',
                component: LogoIn
            },
            { //短信验证登录
                path: '/sms',
                name: 'sms',
                component: Sms
            },
            { //注册
                path: '/Register',
                name: 'register',
                component: Register
            },
           
            { //找回密码
                path: '/bachWord',
                name: 'bachWord',
                component: bachWord
            },
            { //登录绑定
                path: '/logoInBind',
                name: 'logoInBind',
                component: logoInBind
            },
            { //公告
                path: '/Notice',
                name: 'Notice',
                component: Notice
            },
            { //品牌馆列表
                path: '/brandList',
                name: 'brandList',
                component: brandList
            },
            { //品牌馆详情
                path: '/braDetails/:ID',
                name: 'braDetails',
                component: braDetails
            },
            { //最新促销
                path: '/latestProm',
                name: 'latestProm',
                component: latestProm
            },
            { //尾货清仓
                path: '/poopClearance',
                name: 'poopClearance',
                component: poopClearance
            },
            { //热搜商品列表
                path: '/list/:id/:status',
                name: 'list',
                component: list
            },
            { //商品列表
                path: '/comList/:status',
                name: 'comList',
                component: list
            },
            { //积分商城-列表
                path: '/IntegralMall',
                name: 'IntegralMall',
                component: IntegralMall
            },
            { //优惠券
                path: '/coupon',
                name: 'coupon',
                component: coupon
            },
            { //我的足迹
                path: '/footprint',
                name: 'footprint',
                component: footprint
            },
            { //我的评论
                path: '/myComment',
                name: 'myComment',
                component: myComment
            },
            { //意见反馈
                path: '/feedback',
                name: 'feedback',
                component: feedback
            },
            { //商品详情Tbg
                path: '/tab/:id',
                name: 'tab',
                component: prTab
            },
            { //我的消息
                path: '/myNews',
                name: 'myNews',
                component: myNews
            },
            { //我的消息-内容
                path: '/newsConent',
                name: 'newsConent',
                component: newsConent
            },
            { //搜索页
                path: '/search',
                name: 'search',
                component: Search
            },
            { //商品详情
                path: '/product/:id/:status',
                name: 'product',
                component: product
            },
            { //积分订单订单
                path: '/intOrder',
                name: 'intOrder',
                component: intOrder
            },
            { //确认订单
                path: '/order/:id',
                name: 'order',
                component: Order
            },
            // 付款
            {
                path: '/payment',
                name: 'payment',
                component: payment
            },
            { //支付
                path: '/cashier/:id',
                name: 'cashier',
                component: cashier
            },
            { //账户管理
                path: '/seetin',
                name: 'seetin',
                component: seetin
            },
            { //积分
                path: '/Integral',
                name: 'myIntegral',
                component: myIntegral
            },
            { //我的收藏
                path: '/Collection',
                name: 'myCollection',
                component: myCollection
            },
            { //收货地址
                path: '/address',
                name: 'address',
                component: address
            },
            { //编辑收货地址
                path: '/EdiAddress',
                name: 'EdiAddress',
                component: EdiAddress
            },
            { //新增收货地址
                path: '/newAddress',
                name: 'newAddress',
                component: newAddress
            },
            { //客服服务
                path: '/customer',
                name: 'customer',
                component: customer
            },
            { //修改密码
                path: '/mPassword',
                name: 'mPassword',
                component: modifyPassword
            },
            { //发票信息
                path: '/invoice',
                name: 'invoice',
                component: invoice
            },
            { //订单
                path: '/orderWrap/:status',
                name: 'orderWrap',
                component: orderWrap
            },
            { //物流查询
                path: '/logis/:id',
                name: 'logis',
                component: logis
            },
            { //订单详情
                path: '/details/:status/:order/:order_type',
                name: 'orderDetails',
                component: orderDetails
            },
            { //退货返修
                path: '/repair',
                name: 'repair',
                component: repair
            },
            { //进度查询
                path: '/progress/:id',
                name: 'progress',
                component: progress
            },
            { //重置密码
                path: '/reset',
                name: 'reset',
                component: reset
            },
            { //名师专栏
                path: '/theTeacher',
                name: 'theTeacher',
                component: theTeacher
            },
            { //名师推荐商品
                path: '/pickWeek',
                name: 'pickWeek',
                component: pickWeek
            },
            { //限时团购
                path: '/limitedbuy',
                name: 'limitedbuy',
                component: limitedbuy
            },
            { //个人资料
                path: '/personal',
                name: 'personal',
                component: personalData
            },
            { //修改手机号绑定
                path: '/phone',
                name: 'phone',
                component: phone
            },
            { //申请售后
                path: '/service/:status/:index',
                name: 'serviceBack',
                component: serviceBack
            },
            { //评价商品
                path: '/evaluate',
                name: 'evaluate',
                component: evaluate
            },
            { //我的钱包
                path: '/myWallet',
                name: 'myWallet',
                component: myWallet
            },
            { //充值
                path: '/recharge',
                name: 'recharge',
                component: recharge
            },
            { //提现
                path: '/withdr',
                name: 'withdr',
                component: withdr
            },
            { //我的股票
                path: '/shares',
                name: 'shares',
                component: shares
            },
            { //接受微信请求  ------青菜新增
                path: '/getInfo',
                name: 'getInfo',
                component: getInfo
            },
            ,
            { //个人开店信息首页
                path: '/checkProadd',
                name: 'checkProadd',
                component: checkProadd
            },
            {  //个人开店信息id
                path: '/checkProIdInfor',
                name: 'checkProIdInfor',
                component: checkProIdInfor
                
            },
            {  //个人开店银行卡
                path: '/checkProBankInfor',
                name: 'checkProBankInfor',
                component: checkProBankInfor
                
            },
            {  //个人开店经营
                path: '/checkProBusinessInfor',
                name: 'checkProBusinessInfor',
                component: checkProBusinessInfor
                
            },
            {  //企业信息入驻
                path: '/checkCompanyadd',
                name: 'checkCompanyadd',
                component: checkCompanyadd
                
            },{
                path: '/companyPhotos',
                name: 'companyPhotos',
                component: companyPhotos
                
            },
            {
                path: '/organizationPhotos',
                name: 'organizationPhotos',
                component: organizationPhotos
                
            },
            {
                path: '/checkCompanyBankInfor',
                name: 'checkCompanyBankInfor',
                component: checkCompanyBankInfor
                
            },
            {
                path: '/checkComBusinessInfor',
                name: 'checkComBusinessInfor',
                component: checkComBusinessInfor
                
            },
            {  
                path: '/settledAgreement',
                name: 'settledAgreement',
                component: settledAgreement
                
            },
            {  
                path: '/settledAgreementSuc',
                name: 'settledAgreementSuc',
                component: settledAgreementSuc
                
            },
            {  
                path: '/lizi',
                name: 'lizi',
                component: lizi
                
            },
            {  
                path: '/lizichild',
                name: 'lizichild',
                component: lizichild
                
            },
            {
                path: '/shoplist/:id',
                name: 'shoplist',
                component: shoplist
            },
            {
                path: '/withPackages',
                name: 'withPackages',
                component: withPackages
            },
            {
                path: 'shopHomeList',
                name: 'shopHomeList',
                component: shopHomeList
            },
            {
                path:'/shopDetails/:id',
                name:'shopDetails',
                component: shopDetails
            },
            {
                path: '/shopHome/:id/:index',
                name: 'shopHome',
                component: shopHome
            },
            {
                path:'/paperwork/:id',
                name:'paperwork',
                component: paperwork
            },
            {
                path: '/shopOpen',
                name: 'shopOpen',
                component: shopOpen
            },
            {
                path:'/description',
                name:'description',
                component: description
            },
        ]
    }]
});
export default router;
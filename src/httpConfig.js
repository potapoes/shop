// const request =  "http://192.168.123.6/shopsn_b2b2c_mobile_api/index.php/"
const request =  "http://b2b2c.zybv.cn/"
// const request =  "http://api.shopsn.net/"
const config ={
    verCode : request + "Home/Register/registerSendMsg", //短信发送
    register : request + "Home/Register/register", //用户注册
    login : request + "Home/Register/loginAccount",  //账户登录
    sms : request + "Home/Register/smsLoginSend", //短信登录--发送短信
    smsLogin:request + "Home/Register/smsLogin", //短信登录
    otherLogin:request + "Home/Register/otherLogin", //第三方授权登录
    bindOtherAccount:request + "Home/Register/bindOtherAccount", //第三方账号绑定
    resetPassword: request + "User/Pcenter/modifyPassword", //重置密码
    verify: request + "Home/Register/verify", //获取图形验证码
    backPwdSendSms: request + "Home/Register/backPwdSendSms", //找回密码--短信发送
    backPwd: request + "Home/Register/backPwd", //找回密码
    // 首页
    home: request + "Home/Index/home", // 首页信息获取
    // 用户
    userinfo: request + 'User/Pcenter/getUserInfo',// 个人信息获取
    editUserInfo: request + 'User/Pcenter/editUserInfo', //修改个人资料
    editMobileSendSms: request + 'User/Pcenter/editMobileSendSms',  // 修改手机号绑定-发送验证码
    editMobile: request + 'User/Pcenter/editMobile', // 修改手机号绑定

    cityList: request + 'Home/Region/regionLists', // 城市四级联动
    addAddress: request + 'User/UserAddress/addAddress', // 新增地址
    editAddress: request + 'User/UserAddress/editAddress', // 编辑收货地址
    addressInfo: request + 'User/UserAddress/addressInfo', //收货地址获取
    addressLists: request + 'User/UserAddress/addressLists', // 收货地址列表 page
    addressDelete: request + 'User/UserAddress/addressDelete', // 收货地址删除

    myCouponLists: request + 'User/CouponList/myCouponLists', //优惠券 page
    
    feedback: request + 'User/Feedback/feedback', //意见反馈
    Newslist: request + 'User/News/lists', // 消息列表
    Newsinfo: request + 'User/News/info', // 消息详情
    // 商店
    getAllGoods: request + 'Home/GoodsClass/getClassGoods', // 商品分类列表
    getFirstId: request + 'Home/GoodsClass/getFirstId', // 一级分类ID
    getOtherClass: request + 'Home/GoodsClass/getOtherClass', // 二级分类
    goodInfo: request + 'Home/Goods/goodInfo', // 商品详情
    guessLove: request + 'Home/FootPrint/guessLove', // 猜你喜欢
    goodSpecs: request + 'Home/Goods/goodSpecs', // 规格
    matchGood: request + 'Home/GoodsCombo/matchGood', // 搭配套餐
    shopInfo: request + 'Home/Goods/shopInfo', // 商品 归属店铺信息
    ShopGoodClass: request + 'Home/GoodsClass/lookShopGoodClass', //店铺分类
    goodsProblems: request + 'Home/Problem/goodsProblems', // 商品咨询
    userCommitProblem: request + 'Home/Problem/userCommitProblem', // 提交咨询
    getAllCommentsCount: request + 'Home/OrderComment/getAllCommentsCount', // 评价数量
    getAllCommentContent: request + 'Home/OrderComment/getAllCommentContent', // 评价内容
    addCollection: request +'Home/Collection/addCollection', //点击收藏
    orderBegin: request +'Home/Order/orderBegin', // 立即购买
    search: request +'Home/GoodsClass/search', // 搜索宝贝
    hotSearch: request +'Home/Goods/hotSearch', // 热门搜索
    getGoodsAttr: request +'Home/GoodsAttr/getGoodsAttr', // 规格参数
    getGoodsDetail: request +'Home/Goods/getGoodsDetail', // 图文详情

    // 店铺相关
    getStoreList: request +'Home/Store/getStoreList', // 首页店铺列表
    storeHome: request +'Home/Store/storeHome', // 店铺首页
    storeHotClass: request +'Home/Store/storeHotClass', // 店铺热门分类
    attenStore: request +'Home/Store/attenStore', // 关注店铺 
    storeDynamic: request +'Home/Goods/storeDynamic',// 店铺动态
    storeDynamic: request +'Home/Goods/storeDynamic', // 店铺详情
    goodsStoreList: request +'Home/Store/goodsStoreList', // 店铺详情

    // 积分
    integralGoodsList: request +'Home/IntegralGoods/integralGoodsList', // 积分兑换列表
    integralGoodInfo: request +'Home/IntegralGoods/integralGoodInfo',// 积分商品详情
    confirmExchange: request +'Home/IntegralUse/confirmExchange', // 确认兑换
    confirmPay: request +'Home/IntegralUse/confirmPay', // 立即支付
    myConfirm: request +'Home/Order/myConfirm', // 我的兑换
    integralGoodsInfo: request +'Home/Order/integralGoodsInfo', // 积分兑换 - 订单详情
    confirmGet: request +'Home/Order/confirmGet' // 确认收货
}   
export default config

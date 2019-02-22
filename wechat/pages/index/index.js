var app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    msgList: [
      { url: "url", title: "欢迎来到【独家折扣】，这里每天更新上万款" },
      { url: "url", title: "优惠券信息，让您尽情享受购物之旅" },
      { url: "url", title: "微信小程序定制联系QQ：610935700！" }],
    feed: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    couponList: [],//优惠券就送数据
    pageIndex: 1,
    selectCategory: "all",
    showCategoryName: "全部",
    selectIndex: 1,//当前页数
    inputContent: "",
    q:null,
    hiddenLoading: false ,
    lunboHtml:'',
    data_giid:[],
    img: ['http://appi.taoxiaobao.top/imgs/lunbo-2.jpg','http://appi.taoxiaobao.top/imgs/lunbo-1.jpg'],
    arr:[],//判断懒加载状态
    clientHeight:"",//获取窗口高度
    arrHeight:[],//图片自身所在高度集合
    hide:false,
    loging:true,
    guangbo:1000,//广播的长度
    guangboleft:0,//出示距离左边宽度
    guangbotext:'欢迎来到【独家折扣】，这里每天更新上万款优惠券信息，让您尽情享受购物之旅，淘客微信小程序定制联系QQ：610935700！',
    tips:false,//新用户添加桌面提示
  },
  onLoad: function (options) {
    console.log(wx.getStorageSync('pid'))
    console.log(wx.getStorageSync('ggid'))
    if(options.id){//分享转发获得代理的id
      console.log(options.id)
      this.toRequestPid(options.id)
    } else if (decodeURIComponent(options.scene) != 'undefined') {
      console.log(decodeURIComponent(options.scene))
      var id = decodeURIComponent(options.scene)
      console.log(id)
      this.toRequestPid(id)
    }
    var requestURL = getApp().requestURL;
    console.log(requestURL)
   // wx.hideTabBar({})
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.getInfo(app.globalData.userInfo)
    if (wx.getStorageSync('tips') != 1 && this.data.hasUserInfo){
      this.setData({tips:true})
    }
    var that = this
    this.getCategoryList()
  }, 
  getInfo: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        console.log(userInfo)
        wx.setStorageSync('name', userInfo.nickName)
        wx.setStorageSync('avatarUrl', userInfo.avatarUrl )
        that.setData({
          userInfo: userInfo,
          hasUserInfo: true,
        })
      }, fail: function () {
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权,将无法正常显示个人信息和抽奖,点击确定重新获取授权。',
          success: function (res) {
            if (res.confirm) {
              wx.openSetting({
                success: (res) => {
                  if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
                    wx.getUserInfo({
                      success: function (res) {
                        var userInfo = res.userInfo;
                        that.setData({
                          userInfo: userInfo,
                          hasUserInfo: true,
                        })
                        console.log(userInfo)
                        wx.setStorageSync('name', userInfo.nickName )
                        wx.setStorageSync( 'avatarUrl',userInfo.avatarUrl )
                      }
                    })
                  } else {
                    that.getInfo()
                  }
                }, fail: function (res) {
                  console.log(123)
                }
              })
            }
          }
        })
      }, complete: function (res) {


      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    console.log(e.detail.userInfo)
    wx.setStorageSync('name', e.detail.userInfo.nickName)
    wx.setStorageSync('avatarUrl', e.detail.userInfo.avatarUrl)
  },
  onShow: function () {
   // console.log('onShow');
   //wx.hideTabBar({})
  },
  getCategoryList: function () {
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL +"/Qtop100.php",
      data: {
        "page": that.data.selectIndex,
      },
      success: function (resRequest) {
       // console.log(resRequest.data.data)
        if (resRequest.data.data != null && resRequest.data.data.length > 0) {
          var length = resRequest.data.data.length;
          var arr=[];
          var arrHeight=[];
          for(var i=0;i<length;i++){
            resRequest.data.data[i].quanhou = (resRequest.data.data[i].goods_price - resRequest.data.data[i].coupon_price).toFixed(1)
            arr[i]=false;
            arrHeight[i] = Math.floor(i / 2) * 520-2080; 
            if(resRequest.data.data[i].goods_pic.indexOf('http')==-1){
              resRequest.data.data[i].goods_pic = 'https:' + resRequest.data.data[i].goods_pic
            }
          }
         // console.log(resRequest.data.data)
          arr[0] = arr[1] = true;
          that.setData({
            arrHeight: arrHeight,
            arr:arr,
            couponList: that.data.couponList.concat(resRequest.data.data),
            hiddenLoading: true,
            pageIndex: that.data.pageIndex+1
          })
         // console.log(that.data.arr)
        //  console.log(that.data.arrHeight)
        }
        else {
          that.setData({
            hiddenLoading: true,
          })
        }
      }
    })
  },
  /*clickBanner:function(e){
    if (e.currentTarget.dataset.giid!=undefined){
    var that=this
    wx.request({
      url: "https://appi.taoxiaobao.top/djzk/taokeBanner.php",
      data: {
        "id": e.currentTarget.dataset.giid
      },
      success: function (resRequest) {
        console.log(resRequest.data)
       // console.log(resRequest.data.result.GoodsID+':'+resRequest.data.result.SellerID )
        //wx.setStorageSync('couponInfo', resRequest.data.result)
        wx.navigateTo({ url: '/pages/detail/detail?word=' + resRequest.data.result.GoodsID + '&seller_id=' + resRequest.data.result.SellerID + "&title=" + resRequest.data.result.D_title })
       
      }
    })
    }
  },*/
  setCouponInfo: function (e) {
    var that=this
    wx.setStorageSync('couponInfo', that.data.couponList[e.currentTarget.dataset.index])
    wx.navigateTo({ url: '/pages/detail/detail' })
  },
  onShareAppMessage: function () {
    return {
      title: '淘宝天猫优惠券，速度来围观！',
      desc: '淘宝天猫优惠券发放平台，先领优惠券再购物，最高可省90%，领券后可直接下单抵扣，价格实惠，天天双都是11，剁手党的好帮手。',
      path: '/pages/index/index'
    }
  },
  bindInputChange:function(event){
    console.log(event.detail.value)
    this.setData({
      q: event.detail.value
    })
  },
  selectByItemName:function(event){
    var requestURL = getApp().requestURL;
    var that=this
    console.log(that.data.q)
    wx.request({
      url: requestURL +"/search.php",
      data: {
        "page": 1,
        "q": that.data.q,
      },
      success: function (resRequest) {
       console.log(resRequest)
      }
    })
  },
  /*onReachBottom: function () {
    this.getCategoryList();
  },*/
  tosearch:function(){
    wx.switchTab({ url: '/pages/search/search' })
  },
  onPageScroll: function (res) {//懒加载
    var arr=this.data.arr
    var arrHeight = this.data.arrHeight;
    var length= this.data.arr.length
    for (var r = 0; r < length; r++) {
      if (arrHeight[r] < res.scrollTop*2) {
        if (arr[r] == false) {
         // console.log(arrHeight[r] + '<' + res.scrollTop)
         // console.log("r等于=="+r)
          arr[r] = true
        } 
      } 
    }
    this.setData({
      arr: arr
    })
    //console.log(res.scrollTop)
  },
  tocart:function(){
    wx.navigateTo({
      url: '../cart/cart?is_tqg=' + 0 +'&is_ju='+0+'&max_price='+10000
    })
  },
  closetips:function(){
      this.setData({tips:false});
      wx.setStorageSync('tips', 1);
  },
  toRequestPid: function (id) {//被推广去获取上级代理的pid id_to_pid.php
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL + "/agent/id_to_pid.php",
      data: {
        "id": id,
      },
      success: function (res) {
        console.log(res.data)
        if(res.data.code==1){
          wx.setStorageSync('pid', res.data.content.pid)
          wx.setStorageSync('ggid', res.data.content.gg_id)
        }
      }
    })
  }
})

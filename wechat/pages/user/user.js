//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user_time:0,
    loging: false,
    admin:false,//是否为管理员
    integral:'0',//积分
    sign:true,//当天是否已经签到
    daili:false,//是否是代理
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var requestURL = getApp().requestURL;
   // console.log(wx.getStorageSync('integral'))
    //console.log(wx.getStorageSync('sign'))
    if (wx.getStorageSync('integral')!=''){
      this.setData({ integral: wx.getStorageSync('integral')})
    }
    if (wx.getStorageSync('sign') == 'false'){
      this.setData({ sign: false })
    }
    if (wx.getStorageSync('agent')==1){
      this.setData({daili: true })
    }
    var that = this
    wx.request({
      url: requestURL+"/lottery/admin.php",
      data: {
        'user_openid': wx.getStorageSync('openid')
      }, success: function (res) {
        //console.log(res.data)
        if(res.data!=null){
          that.setData({admin:true})
        }
      }
    })
    if (wx.getStorageSync('loging') !== '') {
      this.setData({
        loging: wx.getStorageSync('loging')
      })
    }
    this.setData({
      user_time: wx.getStorageSync('user_time')
    })
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
    this.getInfo()
  },
  getInfo: function () {
    /******** */

    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        wx.setStorageSync('name', userInfo.nickName)
        wx.setStorageSync('avatarUrl', userInfo.avatarUrl)
        that.setData({
          userInfo: userInfo,
          hasUserInfo: true,
        })
      }, fail: function () {
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
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
                        wx.setStorageSync('name', userInfo.nickName)
                        wx.setStorageSync('avatarUrl', userInfo.avatarUrl)
                      }
                    })
                  } else {
                    that.getInfo()
                  }
                }, fail: function (res) {
                 // console.log(123)
                }
              })
            }
          }
        })
      }, complete: function (res) {
      }
    })
  },
  getUserInfo: function(e) {
   // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.setStorageSync('name', e.detail.userInfo.nickName)
    wx.setStorageSync('avatarUrl', e.detail.userInfo.avatarUrl)
  },

  onShareAppMessage: function () {
    return {
      title: '淘宝内部优惠券自助查券教程!',
      desc: '淘宝天猫优惠券发放平台，先领优惠券再购物，最高可省90%，领券后可直接下单抵扣，价格实惠，天天双都是11，剁手党的好帮手。',
      path: '/pages/index/index'
    }
  },
  tools: function () {
    wx.showToast({
      title: '待开发',
      icon: 'loading',
      duration: 500
    })
  },
  kefu:function(){
    wx.navigateTo({
      url: '../kefu/kefu',
    })
  },
  jiaocheng:function(){
    wx.navigateTo({
      url: '../jiaocheng/jiaocheng',
    })
  },
  specification: function () {
    wx.navigateTo({
      url: '../specification/specification',
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接   
      urls: [e.currentTarget.dataset.src] // 需要预览的图片http链接列表   
    })
  },
  lottery:function(){
    wx.navigateTo({
      url: '../lottery/lottery',
    })
  },
  addlottery:function(){
    wx.navigateTo({
      url: '../addlottery/addlottery',
    })
  },
  uploadImg: function () {
    wx.navigateTo({
      url: '../uploadImg/uploadImg',
    })
  },
  newpeople: function () {
    wx.navigateTo({
      url: '../newpeople/newpeople',
    })
  },
  agent: function () {
    wx.navigateTo({
      url: '../agent/agent',
    })
  },
  myFavorite:function(){
    wx.navigateTo({url: '../myFavorite/myFavorite'})
  },
  myCustomer: function () {
    wx.navigateTo({ url: '../myCustomer/myCustomer' })
  },
  biaoqing:function(){
    console.log(this.data.userInfo.nickName)
  },
  sings:function(e){
    var requestURL = getApp().requestURL;
    var that=this
    console.log(e.detail.formId)
    console.log(wx.getStorageSync('openid'))
    wx.request({
      url: requestURL+"/sign.php",
      data: { 
        'user_openid': wx.getStorageSync('openid'),
        'formId': e.detail.formId
        },
      success: function (res) {
        console.log(res.data)
        if(res.data.code=='10000'){
          that.setData({ integral: that.data.integral + 10, 'sign': false})
          wx.setStorageSync('sign',false)
          wx.showToast({
            title: '签到成功',
            icon: 'success',
            duration: 2000
          })
        }else{
          wx.showToast({
            title: '签到失败',
            icon: 'loading',
            duration: 500
          })
        }
      }
    })
  }
})

//app.js
App({
  onLaunch: function () {
    var that=this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (!wx.getStorageSync('openid')){
          wx.request({
            url: "https://你的域名/djzk/lottery/code.php",
            data: { code:res.code },
            success: function (res) {
              wx.setStorageSync('openid', res.data.openid)
              that.user(res.data.openid)
            }
          })
        }else{//查询用户数据
          that.user(wx.getStorageSync('openid'))
        }
        wx.downloadFile({
          url:"https://你的域名/imgs/fxcodeBg.png",
          success: function (res) {
            if (res.statusCode === 200) {
              wx.setStorage({
                key: 'fengxiangbg',
                data: res.tempFilePath,
              })
            }
            //console.log(wx.getStorageSync('fengxiangbg'))
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  user:function(openid){
    wx.request({
      url: "https://你的域名/djzk/user.php",
      data: { openid: openid },
      success: function (res) {
        //console.log(res.data)
        wx.setStorageSync('integral', res.data.integral)
        wx.setStorageSync('sign', res.data.sign)
      }
    })
  },
  requestURL:"https://appi.taoxiaobao.top/djzk",
  //接口地址详情
  
})
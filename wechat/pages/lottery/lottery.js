// pages/lottery/lottery.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:'block',
    hiddenLoading:true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canlottery:false,//判断是否授权能否抽奖
    lotteryText:'参与抽奖',
    lottery:false,//判断是否参与过
    usermessage:'',//参与抽奖的用户信息
    usernumber:0,//参与抽奖人数
    lotteryDetails:'',//抽奖详情
    haveorno:false,//是否有抽奖活动
    lastLottery:[],//上次中奖名单
    userLottery:false,//中奖人员提示
    inform:'',//抽奖说明
    codefile:'',//二维码路径
    lotteryfile:'',//分享图背景
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //console.log(wx.getStorageSync('avatarUrl'));
    //console.log(wx.getStorageSync('name'))
    //console.log(wx.getStorageSync('openid'))
    if (wx.getStorageSync('avatarUrl')=='' || wx.getStorageSync('name')==''|| wx.getStorageSync('openid')==''){
      console.log("没有授权，不能参与活动")
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

    }else{
      that.setData({ canlottery:true})
    }
    that.canLottery()
    that.selectLotteryDetails()
    that.selectLottery()
    that.inform()
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
          canlottery: true,
          userInfo: userInfo,
          hasUserInfo: true,
        })
      }, fail: function () {
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权,将无法参与抽奖活动，点击确定重新获取授权。',
          success: function (res) {
            if (res.confirm) {
              wx.openSetting({
                success: (res) => {
                  if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
                    wx.getUserInfo({
                      success: function (res) {
                        var userInfo = res.userInfo;
                        that.setData({
                          canlottery: true,
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
  inform:function(){
    var requestURL = getApp().requestURL;
    var that=this
    wx.request({
      url: requestURL+"/lottery/inform.php",
      data: {
      }, success: function (res) {
        //console.log(res.data)
        that.setData({inform:res.data})
      }
    })
  },
  selectLotteryDetails:function(){//查询抽奖信息
    var requestURL = getApp().requestURL;
  var that=this
    wx.request({
      url: requestURL +"/lottery/select_lottery_details.php",
      data: {
      }, success: function (res) {
        //console.log(res.data)
        if(res.data!=null){

          res.data.lottery_time = that.timestampToTime(res.data.lottery_time)
          that.setData({ lotteryDetails: res.data, haveorno: true})
        }else{
          that.setData({haveorno:false})//是否有抽奖
          that.lastLottery()//查询上次中奖人信息
        }
      }
    })
  },
  lastLottery:function(){//上次中奖信息
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL +"/lottery/last_lottery.php",
      data: {
      },success:function(res){
        //console.log(res.data)
        that.setData({ lastLottery: res.data,userLottery:true})
      }
    })
  },
  selectLottery: function () {//select_user_lottery.php
    var requestURL = getApp().requestURL;
  var that=this
    wx.request({
      url: requestURL +"/lottery/select_user_lottery.php",
      data: {
      }, success: function (res) {
        //console.log(res.data)
        if(res.data!=null){
        that.setData({ usermessage: res.data.slice(0,10), usernumber:res.data.length})
        }
      }
    })
  },
  timestampToTime: function (timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    //var s = date.getSeconds();
    var s = '00';
    console.log(Y + M + D + h + m + s)
    return Y + M + D + h + m + s;
   
  },
  canLottery:function(){//判断是否已经参加过
    var requestURL = getApp().requestURL;
   var that=this
    wx.request({
      url: requestURL +"/lottery/can_lottery.php",
      data: {
        "openid": wx.getStorageSync('openid'),
      }, success: function (res) {
       //console.log(res.data)
        if(res.data==null){
          that.setData({ lottery:true})
        }else{
          that.setData({ lotteryText:'待开奖'})
        }
      }
    })
  },
  toLottery:function(e){//进行抽奖
    var requestURL = getApp().requestURL;
  //console.log(e.detail.formId);
  var that=this
    if (this.data.canlottery && this.data.lottery){
        //console.log(wx.getStorageSync('avatarUrl'));
        //console.log(wx.getStorageSync('name'))
        //console.log(wx.getStorageSync('openid'))
        
        wx.request({
          url: requestURL +"/lottery/user_lottery.php",
          data: {
            "openid": wx.getStorageSync('openid'),
            "userpic": wx.getStorageSync('avatarUrl'),
            "name": wx.getStorageSync('name'),
            "formId": e.detail.formId
          },success:function(res){
            //console.log(res.data)
            that.setData({ lotteryText: '待开奖', lottery: false})
            that.selectLottery()//抽奖后，立即重新请求一次数据，对应人数增加
          }
        })
      }else{
        console.log('不能抽奖')
      }

  },
  close:function(){
    //console.log(this.data.userLottery)
    if(this.data.userLottery){
      this.setData({ userLottery:false})
    }
  },
  lotteryHistory:function(){
      wx.navigateTo({
        url: '../lotteryHistory/lotteryHistory'
      })
  },
  allLottery:function(){
    wx.navigateTo({
      url: '../allLottery/allLottery'
    })
  },
  backhome:function(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  sharepic:function(){//分享图
    var requestURL = getApp().requestURL;
    this.setData({ hiddenLoading:false})
  var that=this
    wx.downloadFile({
      url: requestURL+'/wxcord.php?appid=wxeacca8b837d0c7bb&secret=a45a5ebac0b13b6d1e54a4979245af46&uid=1',
      success: function (res) {
        if (res.statusCode === 200) {
          that.setData({ codefile: res.tempFilePath }) 
          wx.downloadFile({
            url: 'https://appi.taoxiaobao.top/imgs/lotteryBg.png',
            success: function (res) {
              if (res.statusCode === 200) {
                that.setData({ lotteryfile: res.tempFilePath }) 
          var context = wx.createContext();
          context.drawImage(that.data.lotteryfile, 0, 0, 1080, 1691);
          context.drawImage(that.data.codefile, 393, 1229, 300, 300);
          context.setFontSize(100);
          context.setFillStyle("#F9E485");
          context.fillText('独家折扣', 350, 223);
          context.setFontSize(50);
          context.setFillStyle("#333");
          context.fillText('奖品：' + that.data.lotteryDetails.lottery_name + ' * '+that.data.lotteryDetails.lottery_number+' 人', 141, 1013);
          context.setFillStyle("#999999");
          context.fillText(that.data.lotteryDetails.lottery_time + ' 开奖', 141, 1113);
          wx.drawCanvas({
            canvasId: 'my-canvas',
            actions: context.getActions()
          });
          setTimeout(function () {
            wx.canvasToTempFilePath({
              x: 0,
              y: 0,
              width: 1080,
              height: 1691,
              destWidth: 1080,
              destHeight: 1691,
              canvasId: 'my-canvas',
              success: function (res) {
                console.log(res.tempFilePath)
                wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: function () {
                    that.setData({ hiddenLoading: true, pic:'none' })
                    console.log('保存成功')
                    wx.showToast({
                      title: '保存成功',
                      icon: 'success',
                      duration: 1000
                    })
                  }
                })
              }
            })
          }, 1000)
              }
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that=this
    return {
      title: '[有人@我]独家折扣正在开奖...,本期奖品' + that.data.lotteryDetails.lottery_name + ' * ' + that.data.lotteryDetails.lottery_number + ' 人',
      desc: '淘宝天猫优惠券发放平台，先领优惠券再购物，最高可省90%，领券后可直接下单抵扣，价格实惠，天天双都是11，剁手党的好帮手。',
      path: '/pages/lottery/lottery'
    }
  }
})
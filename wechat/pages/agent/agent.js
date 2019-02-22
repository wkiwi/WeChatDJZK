// pages/agent/agent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apply:false,//是否是代理
    applying:false,//是否在申请过程中
    applytext:'提交申请',
    name:'',//客户姓名
    ggid:'',//广告位id
    id:'',//代理id号
    codefile:'',//推广码地址
    fans:0,//累计推广粉丝
    pic:false,//控制图片显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectPid()
  },
  selectPid: function () {//查询代理人的pid
    var requestURL = getApp().requestURL;
    var that = this
    console.log(wx.getStorageSync('openid'))
    wx.request({
      url: requestURL + '/agent/select_pid.php',
      data: {
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == 1) {//是代理
          console.log(res.data.content)
          if (res.data.content.type == 1) {//通过审核已经是代理了
            wx.setStorageSync('pid', res.data.content.pid)
            wx.setStorageSync('ggid', res.data.content.gg_id)
            wx.setStorageSync('agent', 1)
            wx.setStorageSync('rate', res.data.content.rate)
            console.log((parseFloat("0." + res.data.content.fans))*5)
            that.setData({ apply: true, name: res.data.content.name, ggid: res.data.content.gg_id, id: res.data.content.id, fans: res.data.content.fans })
          } else if (res.data.content.type == 0){//代理还在申请中
            that.setData({ applytext: '申请中...', applying: true })
          }
        } else if (res.data.code == 0) {//不是代理
          console.log(456)
        }
      }
    })
  },
  formSubmit: function (e) {
    var requestURL = getApp().requestURL;
    var that=this
    console.log(e.detail.value)
    var formData = e.detail.value;
    wx.request({
      url: requestURL+"/agent/apply.php",
      data: {
        openid: wx.getStorageSync('openid'),
        name: formData.name,
        zfb: formData.zfb,
        wx: formData.wx,
        phone: formData.phone,
        argument: formData.argument,
        formId: e.detail.formId
      }, success: function (res) {
        console.log(res.data)
        if (res.data==1){
          that.setData({ applytext: '申请中...', applying: true })
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
  onShareAppMessage: function () {//专属分享附加代理id参数
  var that=this
    return {
      title: '[有人@我]，我使用这款小程序在淘宝购物省了不少钱！',
      imageUrl: 'http://appi.taoxiaobao.top/imgs/lunbo-1.jpg',
      path: '/pages/index/index?id=' +that.data.id ,
    }
  },
  ercode:function(){
    var requestURL = getApp().requestURL;
    var that = this
    wx.downloadFile({
      url: requestURL + '/agent/agent_wxcord.php?appid=***************&secret=***************&id=' + that.data.id,
      success: function (res) {
        if (res.statusCode === 200) {
          that.setData({ codefile: res.tempFilePath ,pic:true}) 
        }
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接   
      urls: [e.currentTarget.dataset.src] // 需要预览的图片http链接列表   
    })
  },
})
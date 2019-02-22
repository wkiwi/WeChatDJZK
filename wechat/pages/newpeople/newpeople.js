// pages/newpeople/newpeople.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '',
    img: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL+"/newpeople.php",
      data: {
      }, success: function (res) {
        console.log(res.data)
        if (res.data != null) {
          that.setData({ content: res.data.content, img: res.data.img })
        }
      }
    })
  },
  copy: function (e) {
    var that = this
    console.log(this.data.content[1])
    wx.setClipboardData({
      data: that.data.content[1]
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
    return {
      title: '逛逛0元好货！名额有限，速速领取！',
      desc: '淘宝天猫优惠券发放平台，先领优惠券再购物，最高可省90%，领券后可直接下单抵扣，价格实惠，天天双都是11，剁手党的好帮手。',
      path: '/pages/index/index'
    }
  }
})
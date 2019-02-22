// pages/allLottery/allLottery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usermessage: '', 
    usernumber: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var requestURL = getApp().requestURL;
    var that =this
    wx.request({
      url: requestURL+"/lottery/select_user_lottery.php",
      data: {
        'type': 1
      }, success: function (res) {
        console.log(res.data)
        if (res.data != null) {
          that.setData({ usermessage: res.data, usernumber: res.data.length })
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
  
  }
})
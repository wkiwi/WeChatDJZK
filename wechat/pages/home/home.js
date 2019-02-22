Page({
  data: {
    ///////////////动画的
    title: "ddemo",
    currentIndex: 0,
    oldIndex: 0,
    view: [{ in: "", out: "" }, { in: "", out: "" }],
    ///////////////自定义的
    loging:false
  },  

  input: function () {
    console.log("input")
  },
  transpond: function () {
    console.log("transpond")
  },
  collect: function () {
    console.log("collect")
  },
  showAnimated: function () { var t = this; 0 === this.data.currentIndex ? (setTimeout(function () { t.setData({ one_one: "animated fadeIn", one_two: "animated bounceIn" }) }, 1e3), setTimeout(function () { t.setData({ one_three: "animated bounceIn" }) }, 1500), setTimeout(function () { t.setData({ one_four: "animated bounceIn" }) }, 1800), setTimeout(function () { t.setData({ one_five: "animated lightSpeedIn" }) }, 1900)) : 1 === this.data.currentIndex && (setTimeout(function () { t.setData({ two_one: "animated fadeInDown", two_two: "animated fadeInUp" }) }, 1e3), setTimeout(function () { t.setData({ two_three: "animated zoomIn", two_four: "animated zoomIn" }) }, 1200), setTimeout(function () { t.setData({ two_three: "two-music-one", two_four: "two-music-two" }) }, 2200)) },
  cleanAnimated: function () { 0 === this.data.oldIndex ? this.setData({ one_one: "animated fadeOut", one_two: "animated fadeOut", one_three: "animated fadeOut", one_four: "animated fadeOut", one_five: "animated fadeOut" }) : 1 === this.data.oldIndex && this.setData({ two_one: "animated fadeOut", two_two: "animated fadeOut", two_three: "animated fadeOut", two_four: "animated fadeOut", two_five: "animated fadeOut" }) },

  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
    var requestURL = getApp().requestURL;
    var that=this
    // 生命周期函数--监听页面加载
    wx.request({
      url: requestURL+"/loging.php",
      data: {},
      success: function (res) {
        wx.setStorageSync('loging', res.data)
        that.setData({ loging:res.data })
        console.log(res.data)
        if (res.data){  //伪装审核上架
         //wx.switchTab({ url: '/pages/index/index' })
        }else{//进入一个伪装页面
         // wx.redirectTo({ url: '/pages/card/card' })
        }
      }
    })
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成  
  },
  onShow: function () {
    // 生命周期函数--监听页面显示  
    this.showAnimated(); var t = this; setTimeout(function () { t.setData({ bottom: "animated slideInUp" }) }, 2e3), setTimeout(function () { t.setData({ bottom_one: "animated slideInUp" }) }, 2100), setTimeout(function () { t.setData({ bottom_two: "animated slideInUp" }) }, 2200), setTimeout(function () { t.setData({ bottom_three: "animated slideInUp" }) }, 2300), setTimeout(function () { t.setData({ bottom_four: "animated slideInUp" }) }, 2400), setTimeout(function () { t.setData({ bottom_one: "bottom-4s-move" }) }, 3100), setTimeout(function () { t.setData({ bottom_two: "bottom-3s-move" }) }, 3200), setTimeout(function () { t.setData({ bottom_three: "bottom-2s-move" }) }, 3300), setTimeout(function () { t.setData({ bottom_four: "bottom-1s-move" }) }, 3400)
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    this.cleanAnimated(), this.setData({ bottom: "", bottom_one: "", bottom_two: "", bottom_three: "", bottom_four: "" })  
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载  
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作  
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数  
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享  
    return {
      title: 'title', // 分享标题  
      desc: 'desc', // 分享描述  
      path: 'path' // 分享路径  
    }
  },
  jumpto:function(){
    if (this.data.loging) {//伪装审核上架
       wx.switchTab({ url: '/pages/index/index' })
    } else {//进入一个伪装页面
      wx.redirectTo({ url: '../card/card' })
    }
  }
}) 
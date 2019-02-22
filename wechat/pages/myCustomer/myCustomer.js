// pages/myCustomer/myCustomer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allAgent:[],//所有代理信息
    pid:'',//设置pid
    ggid:'',//设置广告位id
    id:'',//设置客户的id
    index:'',//代理数组下标
    rate:'',//代理的利率占比
  },
  agreen:function(e){
    var that=this
    console.log(e.currentTarget.dataset.id)
    this.setData({ id: e.currentTarget.dataset.id, index: e.currentTarget.dataset.index})
    wx.showModal({
      title: '温馨提示',
      content: '确认设置客户 【 ' + that.data.allAgent[e.currentTarget.dataset.index].name+' 】的比率为'+that.data.rate+',pid为：'+that.data.pid+',广告位id为'+that.data.ggid+'吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.setPid()
        } else {
          console.log('用户点击取消')
        }

      }
    })
  },
  setPid:function(){
    var requestURL = getApp().requestURL;
    var that = this
    console.log(that.data.id)
    console.log(that.data.pid)
    console.log(that.data.ggid)
    wx.request({
      url: requestURL + '/agent/setPid.php',
      data: {
        id:that.data.id,
        pid: that.data.pid.trim(),
        ggid: that.data.ggid.trim(),
        rate: that.data.rate.trim()
      },
      success: function (res) {
        console.log(res.data)
        if(res.data==1){
          that.selectAgent()//设置代理信息后立即请求最新数据
        wx.showToast({
          title: '设置成功',
          icon: 'success',
          duration: 1000
        })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectAgent()
  },
  selectAgent:function(){
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL + '/agent/select_agent_apply.php',
      data: {},
      success: function (res) {
        console.log(res.data)
        that.setData({ allAgent: res.data })
      }
    })
  },
  changePid:function(e){
    console.log(e.detail.value.trim())
    this.setData({pid:e.detail.value})
  },
  changeGgid: function (e) {
    console.log(e.detail.value.trim())
    this.setData({ ggid: e.detail.value })
  },
  changeRate: function (e) {
    console.log(e.detail.value.trim())
    this.setData({ rate: e.detail.value })
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
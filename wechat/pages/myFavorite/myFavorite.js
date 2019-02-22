// pages/myFavorite/myFavorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allOrder:[],//所有订单信息
    allmoney:0,//累计收益
    orderNumber:0,//本月推广量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var myDate = new Date();
    var Month=myDate.getMonth()+1; 
    console.log(Month)
    var that=this
    var requestURL = getApp().requestURL;
      wx.request({
        url: requestURL +'/agent/agent_order.php',
        data:{
          ggid: wx.getStorageSync('ggid')
        },
        success:function(res){
          console.log(res.data)
          //console.log(parseInt(res.data.order[0].create_time.slice(5,7)))
          if(res.data.code==1){
            var allmoney=0;
            if (wx.getStorageSync('loging') == '') {
              for (var i = 0; i < res.data.order.length;i++){
                res.data.order[i].xiaoguo = (res.data.order[i].xiaoguo*0.4).toFixed(2);
                allmoney += parseFloat(res.data.order[i].xiaoguo);
              }
            }else{
              var rate= parseFloat(wx.getStorageSync('rate'))
              for (var i = 0; i < res.data.order.length; i++) {
                res.data.order[i].xiaoguo = (res.data.order[i].xiaoguo * rate).toFixed(2);
                allmoney += parseFloat(res.data.order[i].xiaoguo);
              }
            }
            console.log(allmoney)
            that.setData({ allOrder: res.data.order, allmoney: allmoney.toFixed(2), orderNumber: res.data.order.length})
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
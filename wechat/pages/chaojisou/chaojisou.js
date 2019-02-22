// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponList: [],
    hiddenLoading: true ,
    pageNo: 1,//请求数据页数
    q: null,
    details: null,
    loging: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ q: options.q, hiddenLoading: false, loging: wx.getStorageSync('loging') })
    this.selectByItemName()
  },
  selectByItemName: function (event) {
    var requestURL = getApp().requestURL;
    var that = this
    //console.log(that.data.q)
    //console.log(that.data.pageNo)
    wx.request({
      url: requestURL+"/search.php",
      data: {
        "page": that.data.pageNo,
        "q": that.data.q,
      },
      success: function (resRequest) {
        if (resRequest.data.data){
        //console.log(resRequest.data.data)
        if (resRequest.data.data != null && resRequest.data.data.length > 0) {
          var l = resRequest.data.data.length;
          for (var i = 0; i < l; i++) {//遍历修改满***元减**元
            var coupon_info = resRequest.data.data[i].coupon_info
            var info = resRequest.data.data[i].coupon_info = coupon_info.slice(coupon_info.indexOf("减") + 1, coupon_info.length - 1)
            resRequest.data.data[i].quanhou_price = (resRequest.data.data[i].zk_final_price - resRequest.data.data[i].coupon_info).toFixed(1)
          }
          //console.log(resRequest.data.data)
          that.setData({
            couponList: that.data.couponList.concat(resRequest.data.data),
            hiddenLoading: true 
          })
        }
        else {
          that.setData({
            hiddenLoading: true,
          })
        }

      }else{//没搜到
          that.setData({
            hiddenLoading: true,
          })
          wx.showModal({
            title: '提示',
            content: '抱歉，没有找到该优惠券信息',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.switchTab({ url: '/pages/search/search' })
              }
            }
          })
      }
      }
    })
  },
  onReachBottom: function () {
    var that = this
    this.setData({
      hiddenLoading: false ,
      pageNo: that.data.pageNo + 1
    })
    this.selectByItemName();
  },
  itemDetails: function (e) {
    var that = this
    wx.setStorageSync('itemDetails', that.data.couponList[e.currentTarget.dataset.index])
    //console.log(that.data.couponList)
    //console.log(e.currentTarget.dataset.index)
    wx.navigateTo({ url: '/pages/details/details' })

  },
  onShareAppMessage: function () {
    return {
      title: '独家折扣',
      desc: '淘宝天猫优惠券发放平台，先领优惠券再购物，最高可省90%，领券后可直接下单抵扣，价格实惠，天天双都是11，剁手党的好帮手。',
      path: '/pages/index/index'
    }
  },
})
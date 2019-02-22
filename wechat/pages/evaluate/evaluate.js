// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rateListNumber: 0,//评论总条
    rateList: [],//评论所有数据
    currentPage: 1,//评论当前页
    PageNumber: 0,//评论总页
    itemId:"",
    sellerId:"",
    hiddenLoading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
   // console.log(options.itemId)
   // console.log(options.sellerId)
    //console.log(wx.getStorageSync('evalute'))
    var obj = wx.getStorageSync('evalute');
    console.log(options)
    this.setData({ itemId: options.itemId, sellerId: options.sellerId,  PageNumber: obj.rateDetail.paginator.lastPage, rateListNumber: obj.rateDetail.paginator.items, rateList: that.data.rateList.concat(obj.rateDetail.rateList)})
    if (that.data.currentPage < that.data.PageNumber){
      this.setData({ currentPage: 2})
    }
    //console.log(this.data.rateList)
    //console.log(this.data.rateListNumber)
   // console.log(this.data.PageNumber)

  },

  getevaluate: function () {
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL+"/TMevaluate.php",
      header: {},
      data: {
        itemId: that.data.itemId,
        sellerId: that.data.sellerId,
        order: 3,
        currentPage: that.data.currentPage,
        pageSize: 10
      },
      success: function (resRequest) {
        var obj = resRequest.data;
        console.log(obj)
        if (obj.rateDetail != undefined) {
        that.setData({ rateList: that.data.rateList.concat(obj.rateDetail.rateList), hiddenLoading:true})
        }else{
          that.getevaluate()
        }
        //console.log(JSON.parse(that.data.evaluate))
        //console.log(that.data.rateListNumber)
        //console.log(that.data.rateList)
        //console.log(that.data.PageNumber)
      }, 
      fail: function () {
        that.setData({ hiddenLoading: true })
       }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.currentPage < this.data.PageNumber) {
      this.setData({ currentPage: this.data.currentPage + 1, hiddenLoading:false })
      this.getevaluate()
    }
    console.log(this.data.currentPage)
  },
  previewImage: function (e) {
   // console.log(e.currentTarget.dataset.url)
    wx.previewImage({
      current: e.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: [e.currentTarget.dataset.url] // 需要预览的图片http链接列表
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '独家折扣',
      desc: '淘宝天猫优惠券发放平台，先领优惠券再购物，最高可省90%，领券后可直接下单抵扣，价格实惠，天天双都是11，剁手党的好帮手。',
      path: '/pages/index/index'
    }
  }
})
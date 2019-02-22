// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    Tabs: ['全部', '女装', '男装', '鞋包配饰', '美妆', '母婴', '食品', '内衣', '家电数码', '居家', '文体', ],
    Tabsnumber: ['0', '10', '12', '5', '3', '2', '6', '11','8', '4', '7'],
    currentRank:0,
   /* Ranking:['人气','销量','价格','最新'],*/
    Ranking: [[1,8], [3], [7,4], [2,9]],
    feed: {},
    indicatorDots: true,
    couponList: [],//所有商品信息
    pageIndex: 1,//当前页reqi
    hiddenLoading: true,
    selectCategory: "all",
    showCategoryName: "全部",
    inputContent: "",
    q: null,
    sc:['desc','asc'],//默认降序 
    sc_number:0,
    sc_text:['降序','升序'],
    hide: false,
    loging: true
  },
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current, pageIndex:1
      })
      that.getCategoryList()
    }
  }, 
  swichRank: function (e) {

    var that = this;

    if (this.data.currentRank === e.target.dataset.current && this.data.currentRank!=1) {
      if(that.data.sc_number==0){
        that.setData({
          sc_number: 1, pageIndex: 1
        })
        that.getCategoryList()
      } else if (that.data.sc_number == 1){
        that.setData({
          sc_number: 0, pageIndex: 1
        })
       that.getCategoryList()
      }
    } else {
      that.setData({
        currentRank: e.target.dataset.current, pageIndex: 1, sc_number:0
      })
      that.getCategoryList()
    }
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('loging') !== '') {
      this.setData({
        loging: wx.getStorageSync('loging')
      })
    }
    this.getCategoryList()
  },
  getCategoryList: function () {
    var requestURL = getApp().requestURL;
    var that = this
    that.setData({
      hiddenLoading: false,
    })
    //console.log("cate=" + that.data.Tabsnumber[that.data.currentTab] + "sort=" + that.data.Ranking[that.data.currentRank][that.data.sc_number])
    wx.request({
      url: requestURL+"/Qcart.php",
      data: {
        "page": that.data.pageIndex,
        "cat": that.data.Tabsnumber[that.data.currentTab],
        "sort": that.data.Ranking[that.data.currentRank][that.data.sc_number]
      },
      success: function (resRequest) {
        var length = resRequest.data.data.list.length
        if (resRequest.data.data.list != null && length > 0) {
          for (var i = 0; i < length; i++) {
            resRequest.data.data.list[i].quanhou = (resRequest.data.data.list[i].goods_price - resRequest.data.data.list[i].coupon_price).toFixed(1)
            if (resRequest.data.data.list[i].goods_pic.indexOf('http') == -1) {
              resRequest.data.data.list[i].goods_pic = 'https:' + resRequest.data.data.list[i].goods_pic
            }
          }
           if(that.data.pageIndex!=1){
            that.setData({
              couponList: that.data.couponList.concat(resRequest.data.data.list),
              hiddenLoading: true,
              pageIndex: that.data.pageIndex+1
            })
            console.log(that.data.couponList)
           } else if (that.data.pageIndex == 1){
             that.setData({
               couponList: resRequest.data.data.list,
               hiddenLoading: true,
               pageIndex: that.data.pageIndex+1
             })
             console.log(that.data.couponList)

           }
        } else if (resRequest.data.data.list.length == 0 && that.data.pageIndex == 1){//返回数据为0个
          that.setData({
            couponList: resRequest.data.data.list,
            hiddenLoading: true,
          })
        }
        else {
          that.setData({
            hiddenLoading: true,
          })
        }
      }
    })
  },

  setCouponInfo: function (e) {
    var that = this
    wx.setStorageSync('couponInfo', that.data.couponList[e.currentTarget.dataset.index])
    wx.navigateTo({ url: '/pages/detail/detail' })
  },

   /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getCategoryList()
  },
  onShareAppMessage: function () {
    return {
      title: '每天自动更新10万淘宝优惠券，分类超级全!',
      desc: '淘宝天猫优惠券发放平台，先领优惠券再购物，最高可省90%，领券后可直接下单抵扣，价格实惠，天天双都是11，剁手党的好帮手。',
      path: '/pages/index/index'
    }
  }

})
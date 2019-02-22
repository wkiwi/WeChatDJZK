// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loging: true,
    page:0,//换一组
    hotwords:[],//热门搜索
    historyhot:[],//历史搜索
    souchaoji:0,
    text:['优品搜','超级搜'],
    tip:true,
    daojishi:8
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var requestURL = getApp().requestURL;
    var that=this
    if (wx.getStorageSync('loging') !== '') {
      this.setData({
        loging: wx.getStorageSync('loging')
      })
    }
    var time= setInterval(function(){
      if(that.data.daojishi>1){
        that.setData({daojishi:that.data.daojishi-1})
      }else{
        that.setData({tip:false})
        clearTimeout(time)
      }
      },1000)
    //console.log(wx.getStorageSync('loging')) 
    if (wx.getStorageSync('historyhot')){
      this.setData({
        historyhot: JSON.parse(wx.getStorageSync('historyhot'))
      })
      //console.log(wx.getStorageSync('historyhot'))
     // console.log(typeof(this.data.historyhot))
    }
    wx.request({
      url: requestURL+"/Qhotwords.php",
      data: {},
      success:function(res){
        if(res.data.er_code=='10000'){
        //console.log(res.data.data)
        //console.log(typeof (res.data.data))
        that.setData({ 
          hotwords: [
            res.data.data.slice(0, 15), res.data.data.slice(15, 30),
            res.data.data.slice(30, 45), res.data.data.slice(45, 60),
            res.data.data.slice(60, 75), res.data.data.slice(75, 90),
            res.data.data.slice(90, 100)
            ]})
        }
        //console.log(that.data.hotwords)
      }
    })
    
  },
  sou:function(){
    if (this.data.souchaoji==1){
      this.setData({ souchaoji:0})
    }
  },
  chaoji:function(){
    if (this.data.souchaoji == 0) {
      this.setData({ souchaoji: 1 })
    }
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
      title: '复制淘宝标题即可自助查券，再也不求人啦！',
      desc: '淘宝天猫优惠券发放平台，先领优惠券再购物，最高可省90%，领券后可直接下单抵扣，价格实惠，天天双都是11，剁手党的好帮手。',
      path: '/pages/index/index'
    }
  },
  bindInputChange: function (event) {
    //console.log(event.detail.value)
    this.setData({
      q: event.detail.value
    })
  },
  selectByItemName: function (event){
    var that=this
    if(this.data.souchaoji==1){
      wx.navigateTo({ url: '/pages/chaojisou/chaojisou?q=' + that.data.q})
    } else if (this.data.souchaoji == 0){
      wx.navigateTo({ url: '/pages/cart/cart?q=' + that.data.q })
    }
    this.addhistoryhot(that.data.q)
  },
  itemDetails:function(e){
     var that=this
      wx.setStorageSync('itemDetails', that.data.couponList[e.currentTarget.dataset.index])
      console.log(that.data.couponList)
      console.log(e.currentTarget.dataset.index)
      wx.navigateTo({ url: '/pages/details/details' })
  
  },
  CHot:function(e){
   // console.log(e.currentTarget.dataset.text)
    if (this.data.souchaoji == 1) {
      wx.navigateTo({ url: '/pages/chaojisou/chaojisou?q=' + e.currentTarget.dataset.text })
    } else if (this.data.souchaoji == 0) {
      wx.navigateTo({ url: '/pages/cart/cart?q=' + e.currentTarget.dataset.text })
    }
    
    this.addhistoryhot(e.currentTarget.dataset.text)
  },
  nextHot:function(){
    if(this.data.page!=6){
      this.setData({page:this.data.page+1})
    }else{
      this.setData({ page: 0 })
    }
  },
  addhistoryhot:function(word){//添加历史搜索
  var that=this
    // console.log(word)
      var words = this.data.historyhot;
      // console.log(words)
      // console.log(words.indexOf(word))
    if(word&&words.indexOf(word)==-1){
      if (this.data.historyhot.length>=15){
        words.pop()
      }
        words.unshift(word);
        wx.setStorageSync('historyhot', JSON.stringify(that.data.historyhot))
    }
    // console.log(wx.getStorageSync('historyhot'))
    // console.log(this.data.historyhot)
    this.setData({
      historyhot: JSON.parse(wx.getStorageSync('historyhot'))
    })
  },
  removehistory:function(){
    wx.removeStorage({ key:'historyhot'}) 
    this.setData({historyhot:[]}) 
  },
  closetip:function(){
    this.setData({ tip: false })
  }
  
})
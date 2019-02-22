Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemDetails:[],
    id:null,
    picWidth: wx.getSystemInfoSync().windowWidth,
    feed: {},
    carousels: [],   // 轮播图
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    showStatus: false,
    taoKouLing:null,
    color: '#f40',
    ItemDescxImg:[],//详情
    TmallorTao:null,
    toCopyColor: "#ff3c29",
    fengxiang: "none",
    camera: '../../images/jiazai.gif',//默认背景图
    camera_number: 0,
    current_page: 0,//评价页数
    ItemDescxImgNumber: 0,//加载次数
    text: "一键复制",
    quanhou_price: "",
    rateListNumber: 0,//评论总条
    rateList: [],//评论所有数据
    currentPage: 1,//评论当前页
    PageNumber: 0,//评论总页
    Qurl: '',
    scrollTop: 0,
    bottomBtn: false,
    seller_id:null,
    loging: true,
    /**************/
    alldata: null,
    detail_images: null,
    specifications: null,//产品规格
    shop: null,//店铺资料
    tuwen: true,//  显示图文详情还是参数
    hidden: true,//自定义模态框
    hiddenLoading:false,
    bottomBtn: false,
    Pwords: '',//评论热词
    /////////按钮动画
    isPopping: false,//是否已经弹出  
    animPlus: {},//旋转动画  
    animCollect: {},//item位移,透明度  
    animTranspond: {},//item位移,透明度  
    animInput: {},//item位移,透明度
    zhezhao: false,//遮罩层
    input: false,//口令框
    codefile: '',//缓存二维码
    picfile: '',//缓存商品主图
    picLoading: true,//分享图生成中
  },
  plus: function () {

    if (this.data.isPopping) {
      //关闭动画  
      this.takeback();
      //关闭遮罩层
      this.closezhezhao();
      this.setData({
        isPopping: false
      })
    } else if (!this.data.isPopping) {
      //弹出动画  
      this.popp();
      //打开遮罩层
      this.openzhezhao();
      this.setData({
        isPopping: true
      })
    }
  },
  //弹出动画  
  popp: function () {

    //plus顺时针旋转  
    var animationPlus = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationcollect = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationTranspond = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationInput = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    animationPlus.rotateZ(360).step();
    animationcollect.translate(-35, -50).rotateZ(360).opacity(1).step();
    animationTranspond.translate(-70, 0).rotateZ(360).opacity(1).step();
    animationInput.translate(-35, 50).rotateZ(360).opacity(1).step();
    this.setData({
      animPlus: animationPlus.export(),
      animCollect: animationcollect.export(),
      animTranspond: animationTranspond.export(),
      animInput: animationInput.export(),
    })
  },
  //收回动画  
  takeback: function () {
    //plus逆时针旋转  
    var animationPlus = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationcollect = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationTranspond = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationInput = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    animationPlus.rotateZ(0).step();
    animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();
    animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();
    animationInput.translate(0, 0).rotateZ(0).opacity(0).step();
    this.setData({
      animPlus: animationPlus.export(),
      animCollect: animationcollect.export(),
      animTranspond: animationTranspond.export(),
      animInput: animationInput.export(),
    })
  },
  openzhezhao: function () {
    this.setData({ zhezhao: true })
  },
  closezhezhao: function () {
    this.setData({ zhezhao: false })
  },
  zhezhao: function () {
    this.closezhezhao();
    this.takeback();
  },
  tosearch: function () {
    wx.switchTab({ url: '/pages/search/search' })
  },
  onShow: function () {
    wx.setStorageSync('isDetailBack', true)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    console.log(wx.getStorageSync('itemDetails'))
    this.setData({ itemDetails: wx.getStorageSync('itemDetails'), loging: wx.getStorageSync('loging')})
    wx.setNavigationBarTitle({
      title: that.data.itemDetails.title
    })
    this.getevaluate()
    this.getdetail()
    if (that.data.itemDetails.small_images!=null){
      this.setData({carousels: that.data.itemDetails.small_images.string })
    }else{
      this.setData({ carousels: [that.data.itemDetails.pict_url] })
    }
    if (that.data.itemDetails.user_type ==1) {
      this.setData({ TmallorTao: "../../images/tmall.png" })
    } else {
      this.setData({ TmallorTao: "../../images/taobao.png"  })
    }
    this.setData({ quanhou_price: (that.data.itemDetails.zk_final_price - that.data.itemDetails.coupon_info).toFixed(2) })
    //onsole.log(this.data.itemDetails)
    //console.log(this.data.carousels)
    //console.log(this.data.id)
  },
  getevaluate: function () {
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL +"/TMevaluate.php",
      header: {},
      data: {
        itemId: that.data.itemDetails.num_iid,
        sellerId: that.data.itemDetails.seller_id,
        order: 3,
        currentPage: that.data.currentPage,
        pageSize: 10
      },
      success: function (resRequest) {
        var obj = resRequest.data;
        if (obj.rateDetail != undefined) {
        wx.setStorageSync('evalute', obj)
        that.setData({ PageNumber: obj.rateDetail.paginator.lastPage, rateListNumber: obj.rateDetail.paginator.items, rateList: that.data.rateList.concat(obj.rateDetail.rateList) })
        }
      },
      fail: function () {
        that.TOgetevaluate()
      }
    })
  },
  TOgetevaluate: function () {
    this.getevaluate()
  },
  close: function () {
    this.setData({ fengxiang: "none" })
  },
  picture: function () {
    this.zhezhao()
    this.setData({ hiddenLoading: false, fengxiang: 'block' })
    this.huitu();
  },
  previewImage: function (e) {
    wx.previewImage({
      current: this.data.camera, // 当前显示图片的http链接   
      urls: [this.data.camera] // 需要预览的图片http链接列表   
    })
  },
  getCoupon: function (options) {//复制口令
    if (wx.getStorageSync('ggid') == '') {
      this.applyHMoney()
    } else {
      this.agentApplyHMoney()
    }
    //this.gettkl(this.data.itemDetails.coupon_click_url)
    this.setData({ hiddenLoading: false })
  },
  applyHMoney: function () {//一手单申请高佣
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL +"/heightMoney.php",
      data: {
        id: that.data.itemDetails.num_iid
      },
      success: function (res) {
        console.log(res.data.url)
        that.gettkl(res.data.url)
      }
    })
  },
  agentApplyHMoney: function () {//代理申请专属申请高佣
    console.log('代理申请高佣')
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL + "/agent/agent_height_money.php",
      data: {
        id: that.data.itemDetails.num_iid,
        pid: wx.getStorageSync('pid')
      },
      success: function (res) {
        // console.log(res.data.url)
        that.gettkl(res.data.url)
      }
    })
  },
  gettkl: function (url) {//获取淘口令
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL +"/tkl.php",
      data: {
        "URL": url,
        "TEXT": that.data.itemDetails.title
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.data.model != "") {
         // console.log(res.data.data.model)
          // that.setData({ taoKouLing: res.data.data.model, showStatus: true,input: true, hiddenLoading: true, zhezhao: true })
          that.setData({ taoKouLing: res.data.data.model, showStatus: true})
          wx.setClipboardData({
            data: that.data.taoKouLing,
            success: function () {
              that.setData({ hidden: false, hiddenLoading: true })
            }
          })
        }
      }
    })
  },
  hideView: function () {
    this.setData({
      showStatus: false
    })
  },
  copy: function (e) {
    var that = this
    wx.setClipboardData({
      data: that.data.taoKouLing,
      success: function () {
        that.setData({ color: 'black', toCopyColor: "green", text: "复制成功"})
        if (that.data.toCopyColor == "green") {
          setTimeout(function () {
            that.setData({ toCopyColor: "#ff3c29", color: "#ff3c29", text: "一键复制" })
          }, 1000)
        }
      }
    })
  },
  getItemDescx:function () {
    var requestURL = getApp().requestURL;
    var that=this
    wx.request({
      url: requestURL +"/getItemDescx.php",
      data: {
        id: that.data.itemDetails.num_iid,
      },
      success: function (resRequest) {
        //console.log(resRequest)
        that.setData({
          ItemDescxImg: resRequest.data.data.images, ItemDescxImgNumber:1 })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.ItemDescxImgNumber == 0) {
      this.getItemDescx()
    }
  },
  showView: function () {
    this.setData({
      showStatus: true
    })
  },
  hideView: function () {
    this.setData({
      showStatus: false
    })
  },
  onShareAppMessage: function () {
    var that = this
    //console.log('/pages/detail/detail?word=' + that.data.itemDetails.num_iid + '&seller_id=' + that.data.itemDetails.seller_id)
    
    var price = parseInt(that.data.itemDetails.zk_final_price - that.data.itemDetails.coupon_info)
    var Q_price = that.data.itemDetails.coupon_info
    return {
      title: '券后价' + price + '元，领' + Q_price + '元优惠券抢购【' + that.data.itemDetails.title + '】',
      imageUrl: that.data.itemDetails.pict_url,
      path: '/pages/detail/detail?word=' + that.data.itemDetails.num_iid + '&seller_id=' + that.data.itemDetails.seller_id,
    }
  },
  evaluate: function () {
    var that = this
    wx.navigateTo({ url: '/pages/evaluate/evaluate?itemId=' + that.data.itemDetails.num_iid + '&sellerId=' + that.data.itemDetails.seller_id })
  },
  backhome: function () {
    console.log(123)
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  backTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  scroll: function (e) {
    //console.log(e.detail.scrollTop)
    if (e.detail.scrollTop > 100 && this.data.ItemDescxImgNumber == 0) {
      // this.getItemDescx() //详情页淘宝已经更换，请自行重写接口
    } else if (e.detail.scrollTop > 600 && !this.data.bottomBtn) {
      this.setData({
        bottomBtn: true
      })
    } else if (e.detail.scrollTop < 600 && this.data.bottomBtn) {
      this.setData({
        bottomBtn: false
      })
    }
  },
  bijia: function () {
    wx.showModal({
      title: '比价结果',
      content: '折扣后可省' + parseInt(this.data.itemDetails.coupon_info)+'元',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else {
          console.log('用户点击取消')
        }

      }
    })
  },
  getdetail: function () {//https://hws.m.taobao.com/cache/wdetail/5.0/?id=564844984614
    var that = this
  
    wx.request({
      url: "https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/",
      data: {
        data: { "itemNumId": "" + that.data.itemDetails.num_iid + "" }
      },
      success: function (res) {
        if (res.data.ret[0] == 'SUCCESS::调用成功') {
          var data = res.data.data;
          //console.log(res.data.data)
         // console.log(data.props.groupProps[0].基本信息)
          console.log(data.rate)
          var specifications = data.props.groupProps[0].基本信息;
          for (var r = 0; r < specifications.length; r++) {
            for (var key in specifications[r]) {
              specifications[r].name = key;
              specifications[r].value = specifications[r][key]
            }
          }
          //console.log(specifications)
          var imgs = data.item.images;
          for (var i = 0; i < imgs.length; i++) {
            imgs[i] = "https:" + imgs[i];
          }
          that.setData({ detail_images: imgs, specifications: specifications, shop: data.seller, hiddenLoading: true})
          if (data.rate.keywords) { that.setData({ Pwords: data.rate.keywords})}
          wx.downloadFile({
            url: that.data.detail_images[0],
            success: function (res) {
              if (res.statusCode === 200) {
                that.setData({ picfile: res.tempFilePath })
              }
            }
          })
        }
      }
    })
  
  },
  switchBtn: function () {
    this.setData({ tuwen: !this.data.tuwen })
  },
  confirm: function () {
   // console.log('关闭')
    this.setData({ hidden: true })
  },
  cancel: function () {
   // console.log('使用教程')
    this.setData({ hidden: true })
    wx.navigateTo({
      url: '../usage/usage',
    })
  },
  scroll: function (e) {
    //console.log(e.detail.scrollTop)
    if (e.detail.scrollTop > 200 && this.data.ItemDescxImgNumber == 0) {
      this.getItemDescx()
    } else if (e.detail.scrollTop > 600 && !this.data.bottomBtn) {
      this.setData({
        bottomBtn: true
      })
    } else if (e.detail.scrollTop < 600 && this.data.bottomBtn) {
      this.setData({
        bottomBtn: false
      })
    }
  },
  closekouling: function () {//关闭口令框
    this.setData({
      zhezhao: false,//遮罩层
      input: false,
    })
  },
  huitu: function () {
    var requestURL = getApp().requestURL;
    var that = this
    wx.downloadFile({
      url: requestURL +'/wxcord.php?appid=***************&secret=***************&uid=' + that.data.itemDetails.num_iid,
      success: function (res) {
        if (res.statusCode === 200) {
          that.setData({ codefile: res.tempFilePath }) //这里的地址是指向本地图片 
          console.log(that.data.codefile)
          var context = wx.createContext();
          context.drawImage(wx.getStorageSync('fengxiangbg'), 0, 0, 1080, 1920);
          context.drawImage(that.data.picfile, 0, 0, 1080, 1080);
          context.drawImage(that.data.codefile, 708, 1272, 350, 350);
          context.setFillStyle("#666666");
          context.setFontSize(40);
          //判断字数做换行
          if (that.data.itemDetails.title.length < 21) {
            context.fillText(that.data.itemDetails.title, 50, 1178)
          } else if (that.data.itemDetails.title.length < 42) {
            context.fillText(that.data.itemDetails.title.slice(0, 22), 100, 1178)
            context.fillText(that.data.itemDetails.title.slice(22, 43), 50, 1258)
          } else {
            context.fillText(that.data.itemDetails.title.slice(0, 22), 100, 1178)
            context.fillText(that.data.itemDetails.title.slice(22, 43) + '...', 50, 1258)
          }
          context.setFillStyle("#F10000");
          context.setFontSize(40);
          context.fillText('￥' + that.data.quanhou_price + ' 元', 219, 1358);
          context.setFillStyle("#999999");
          context.fillText('￥' + that.data.itemDetails.zk_final_price, 456, 1358);
          context.moveTo(456, 1348);
          context.lineTo(666, 1348);
          context.stroke();
          context.fillText(that.data.itemDetails.volume + ' 人已买', 50, 1458);
          context.setFillStyle("#ffffff");
          context.setFontSize(60);
          context.fillText('领 ' + that.data.itemDetails.coupon_info + ' 元优惠券', 159, 1787);
          context.fillText('长按领券', 708, 1787);
          wx.drawCanvas({
            canvasId: 'my-canvas',
            actions: context.getActions()
          });
          setTimeout(function () {
            wx.canvasToTempFilePath({
              x: 0,
              y: 0,
              width: 1080,
              height: 1920,
              destWidth: 1080,
              destHeight: 1920,
              canvasId: 'my-canvas',
              success: function (res) {
                console.log(res.tempFilePath)
                wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: function () {
                    console.log('保存成功')
                    that.setData({ hiddenLoading: true })
                    wx.showToast({
                      title: '保存成功',
                      icon: 'success',
                      duration: 2000
                    })
                  }
                })
              }
            })
          }, 1000)
        }
      }
    })
  }
})
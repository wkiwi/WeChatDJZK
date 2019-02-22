var app = getApp()
Page({
  data: {
    couponInfo: {},
    picWidth: wx.getSystemInfoSync().windowWidth,
    platformTypeUrl: "../../images/taobao.png",
    loadingBtn: false,
    showStatus: false,
    hiddenLoading:false,
    carousels: [],   // 轮播图
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    taoKouLing: "",
    maxLength: 0,
    color:'#f40',
    ItemDescxImg: [],//详情
    toCopyColor:"#ff3c29",
    fengxiang:"none",
    camera: '../../images/jiazai.gif',//默认背景图
    camera_number:0,
    ItemDescxImgNumber: 0,//加载次数
    text:"一键复制",
    rateListNumber: 0,//评论总条
    rateList: [],//评论所有数据
    currentPage:1,//评论当前页
    PageNumber:0,//评论总页
    Qurl:'',
    scrollTop: 0,
    bottomBtn:false,
    word:'',
    seller_id:'',
    loging: true,
    /**************/ 
    alldata:null,
    detail_images:null,
    specifications:null,//产品规格
    shop:null,//店铺资料
    tuwen:true,//  显示图文详情还是参数
    hidden:true,//自定义模态框
    Pwords:'',//评论热词
    /////////按钮动画
    isPopping: false,//是否已经弹出  
    animPlus: {},//旋转动画  
    animCollect: {},//item位移,透明度  
    animTranspond: {},//item位移,透明度  
    animInput: {},//item位移,透明度
    zhezhao:false,//遮罩层
    input:false,//口令框
    codefile:'',//缓存二维码
    picfile:'',//缓存商品主图
    picLoading:true,//分享图生成中
    yon:false,//默认不是分享
    picfeng:false//默认不是图片分享
    },
  //点击弹出  
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
  openzhezhao:function(){
    this.setData({zhezhao:true})
  },
  closezhezhao: function () {
    this.setData({ zhezhao: false })
  },
  zhezhao:function(){
    this.closezhezhao();
    this.takeback();
  },
  tosearch:function(){
    wx.switchTab({ url: '/pages/search/search' })
  },
  onLoad: function (options) {
    var requestURL = getApp().requestURL;
    console.log(options)
    if (wx.getStorageSync('loging') !== '') {
      this.setData({
        loging: wx.getStorageSync('loging')
      })
    }
    console.log(this.data.loging)
    var that = this
    if (!options.word) {//判断是分享还是list跳转
      if (decodeURIComponent(options.scene) != 'undefined') {
        console.log(decodeURIComponent(options.scene))
        var word = decodeURIComponent(options.scene)
        this.setData({ word: word })
        that.QTsearch(word)

      } else {
        console.log(wx.getStorageSync('couponInfo'))
        this.setData({
          couponInfo: wx.getStorageSync('couponInfo'),
          hiddenLoading: true,
          word: wx.getStorageSync('couponInfo').goods_id,
          seller_id: wx.getStorageSync('couponInfo').seller_id
        })
        wx.setNavigationBarTitle({
          title: that.data.couponInfo.goods_title
        })
        console.log(this.data.word)
        that.getevaluate()
      }
    } else {
      var word = options.word
      this.setData({ seller_id: options.seller_id, word: options.word })
      //console.log(options.word)
      that.QTsearch(word)

    }
    // wx.setNavigationBarTitle({
    //   title: that.data.couponInfo.goods_short_title
    // })
    //this.getevaluate()
    //this.getMiniPic()
    this.getdetail()
    if (this.data.couponInfo.is_tmall == "1") {
      this.setData({
        platformTypeUrl: "../../images/tmall.png"
      })
    }
  },
  QTsearch:function(word){
    var requestURL = getApp().requestURL;
    var that=this;
    wx.request({
      url: requestURL +"/QTsearch.php",
      data: {
        "word": word,
        "page": 1,
        "sort": 1
      },
      success: function (res) {
        // console.log(res)
        if (res.data.data.list != false) {
           console.log(res.data.data)
          res.data.data.list[0].quanhou = (res.data.data.list[0].goods_price - res.data.data.list[0].coupon_price).toFixed(1);
          that.setData({ couponInfo: res.data.data.list[0], hiddenLoading: true })
          
          wx.setNavigationBarTitle({
            title: res.data.data.list[0].goods_short_title
          })
          that.setData({seller_id: that.data.couponInfo.seller_id})
          that.getevaluate()
        }else{
          console.log(123+res.data.data)
          wx.showModal({
            title: '温馨提示',
            content: '该优惠券信息已经过期',
            showCancel:false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                wx.switchTab({ url: '/pages/index/index' })
              } else if (res.cancel) {
                console.log('用户点击取消')
                wx.switchTab({ url: '/pages/index/index' })
              }
            }
          })
        }
      }
    })
  },
  getCoupon: function (options) {//复制口令
    if (wx.getStorageSync('ggid')==''){
      this.applyHMoney()
    }else{
      this.agentApplyHMoney()
    }
    this.setData({ hiddenLoading: false })
  },
  applyHMoney:function(){//申请高佣
  var requestURL = getApp().requestURL;
  var that=this
    wx.request({
      url: requestURL +"/heightMoney.php",
      data: {
        id: that.data.couponInfo.goods_id
      },
      success: function (res) {
        console.log(res.data)
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
        id: that.data.couponInfo.goods_id,
        pid: wx.getStorageSync('pid')
      },
      success: function (res) {
        // console.log(res.data.url)
        that.gettkl(res.data.url)
      }
    })
  },
  gettkl:function(url){//获取淘口令
  var requestURL = getApp().requestURL;
  var that=this
    wx.request({
      url: requestURL +"/tkl.php",
      data: {
        "URL": url,
        "TEXT": that.data.couponInfo.goods_short_title
      },
      success: function (res) {
        //console.log(res.data)
        if (res.data.data.model != "") {
          //console.log(res.data.data.model)
           //that.setData({ taoKouLing: res.data.data.model, showStatus: true, input: true, hiddenLoading: true,zhezhao:true})
          that.setData({taoKouLing: res.data.data.model, showStatus: true})
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
  getevaluate:function(){
    var requestURL = getApp().requestURL;
    var that=this
    console.log(that.data.word+':'+that.data.seller_id)
    wx.request({
      url: requestURL +"/TMevaluate.php",
      data: {
        itemId: that.data.word,
        sellerId: that.data.seller_id,
        order:3,
        currentPage: that.data.currentPage,
        pageSize:10
      },
      success: function (resRequest) {
        //console.log(resRequest.data)
        // var str = "{" + resRequest.data.trim() + "}"
        // var obj = JSON.parse(str)
        var obj = resRequest.data
       if(obj.rateDetail != undefined){
         //console.log(obj.rateDetail)
        wx.setStorageSync('evalute', obj)
        that.setData({ PageNumber: obj.rateDetail.paginator.lastPage, rateListNumber: obj.rateDetail.paginator.items, rateList:that.data.rateList.concat(obj.rateDetail.rateList)})
       }
      },
      fail:function(){
        that.TOgetevaluate()
      }
    })
  },
  TOgetevaluate:function(){
    this.getevaluate()
  },
  copy:function(e){
    var that=this
    wx.setClipboardData({
      data: that.data.taoKouLing,
      success: function () {
        that.setData({ color: 'black', toCopyColor: "green", text: "复制成功"})
        if (that.data.toCopyColor == "green") {
          console.log(111)
          setTimeout(function () {
            that.setData({ toCopyColor: "#ff3c29", color: "#ff3c29", text: "一键复制"})
            console.log(222)
          }, 1000)
        }
      }
    })
  },
  getItemDescx: function () {
    var requestURL = getApp().requestURL;
    var that = this
    that.setData({ hiddenLoading: false})
    wx.request({
      url: requestURL +"/getItemDescx.php",
      data: {
        id: that.data.couponInfo.goods_id,
      },
      success: function (resRequest) {
        console.log(resRequest)
        that.setData({ ItemDescxImg: resRequest.data.data.images, ItemDescxImgNumber: 1, hiddenLoading: true, })
      }
    })
  },
 /* onReachBottom: function () {
    if (this.data.ItemDescxImgNumber == 0) {
      this.getItemDescx()
    }
  },*/
  onShareAppMessage: function () {
    var that = this
    var price = parseInt(that.data.couponInfo.quanhou)
    var Q_price = parseInt( that.data.couponInfo.coupon_price)
    //console.log('/pages/detail/detail?word=' + that.data.couponInfo.goods_id + '&seller_id=' + that.data.couponInfo.seller_id)
    return {
      title: '券后价' + price + '元，领' + Q_price + '元优惠券抢购【' + that.data.couponInfo.goods_short_title +'】',
      imageUrl: that.data.couponInfo.goods_pic,
      path: '/pages/detail/detail?word=' + that.data.couponInfo.goods_id + '&seller_id=' + that.data.couponInfo.seller_id,
    }
  },
  picture: function (){
    this.zhezhao()
    this.setData({ hiddenLoading: false, fengxiang:'block'})
    this.huitu();
  },
  close:function(){
    this.setData({ fengxiang: "none" })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: this.data.camera, // 当前显示图片的http链接   
      urls: [this.data.camera] // 需要预览的图片http链接列表   
    })
  },
  evaluate:function(){
    var that=this
    wx.navigateTo({ url: '/pages/evaluate/evaluate?itemId=' + that.data.couponInfo.goods_id + '&sellerId=' + that.data.couponInfo.seller_id })
    //console.log('/pages/evaluate/evaluate?itemId=' + that.data.couponInfo.goods_id + '&sellerId=' + that.data.couponInfo.seller_id)
  },
  backhome:function(){
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
  scroll:function(e){
    //console.log(e.detail.scrollTop)
    if (e.detail.scrollTop > 200 && this.data.ItemDescxImgNumber == 0){
        //this.getItemDescx()   //详情页淘宝已经更换，请自行重写接口
    }else if (e.detail.scrollTop > 600 && !this.data.bottomBtn){
      this.setData({
        bottomBtn: true
      }) 
    } else if (e.detail.scrollTop < 600 && this.data.bottomBtn){
      this.setData({
        bottomBtn: false
      }) 
    }
  },
  bijia:function(){
    wx.showModal({
      title: '比价结果',
      content: '折扣后可省' + parseInt(this.data.couponInfo.coupon_price) + '元',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else {
          console.log('用户点击取消')
        }

      }
    })
  },
  getMiniPic:function(){//获取轮播小图
    var requestURL = getApp().requestURL;
    var that=this
   // console.log(this.data.couponInfo.goods_id)
    wx.request({
      url: requestURL +"/goodsMiniPic.php",
      data: {
        id: that.data.couponInfo.goods_id,
      },
      success: function (resRequest) {
        console.log(resRequest.data)
        //console.log(resRequest.data.results.n_tbk_item.small_images.string)
        if (resRequest.data.results.n_tbk_item.small_images!=null){
        that.setData({ carousels: resRequest.data.results.n_tbk_item.small_images.string})
        }else{
          that.setData({ carousels: [resRequest.data.results.n_tbk_item.pict_url] })
        }
      }
    })
  },
  getdetail: function () {//https://hws.m.taobao.com/cache/wdetail/5.0/?id=564844984614
    var requestURL = getApp().requestURL;
  var that=this
  wx.request({
    url: "https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/",
    data: {
      data: { "itemNumId": "" + that.data.word+"" }
    },
    success: function (res) {
      if (res.data.ret[0] == 'SUCCESS::调用成功') {
        var data = res.data.data; 
        console.log(res.data.data)
        //console.log(data.props.groupProps[0].基本信息)
       // console.log(data.rate)
        var specifications = data.props.groupProps[0].基本信息;
        for (var r = 0 ;r<specifications.length;r++){
          for (var key in specifications[r]){
            specifications[r].name=key;
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
        //缓存轮播图第一张
        wx.downloadFile({
          url: that.data.detail_images[0],
          success:function(res){
            if (res.statusCode === 200) {
            that.setData({ picfile: res.tempFilePath})
            }
          }
        })
      }
    }
  })
  },
  switchBtn:function(){
    this.setData({tuwen:!this.data.tuwen})
  },
  confirm:function(){
   // console.log('关闭')
    this.setData({hidden:true})
  },
  cancel:function(){
    //console.log('使用教程')
    this.setData({ hidden: true })
    wx.navigateTo({
      url: '../usage/usage',
    })
  },
  closekouling:function(){//关闭口令框
    this.setData({
      zhezhao: false,//遮罩层
      input: false,})
  },
  huitu:function(){
    var requestURL = getApp().requestURL;
   var that=this
    wx.downloadFile({
      url: requestURL +'/wxcord.php?appid=***************&secret=***************&uid=' + that.data.couponInfo.goods_id,
      success:function(res){
        if (res.statusCode === 200) {
          that.setData({ codefile: res.tempFilePath}) //这里的地址是指向本地图片 
          console.log(that.data.codefile)
          var context = wx.createContext();
          context.drawImage(wx.getStorageSync('fengxiangbg'), 0, 0, 1080, 1920);
          context.drawImage(that.data.picfile, 0, 0, 1080, 1080);
          context.drawImage(that.data.codefile, 708, 1272, 350, 350);
          context.setFillStyle("#666666");
          context.setFontSize(40);
          //判断字数做换行
          if (that.data.couponInfo.goods_title.length<21){
              context.fillText(that.data.couponInfo.goods_title,50,1178)
          } else if (that.data.couponInfo.goods_title.length < 42){
            context.fillText(that.data.couponInfo.goods_title.slice(0,22), 100, 1178)
            context.fillText(that.data.couponInfo.goods_title.slice(22, 43), 50, 1258)
          }else{
            context.fillText(that.data.couponInfo.goods_title.slice(0, 22), 100, 1178)
            context.fillText(that.data.couponInfo.goods_title.slice(22, 43)+'...', 50, 1258)
          }
          context.setFillStyle("#F10000");
          context.setFontSize(40);
          context.fillText('￥'+that.data.couponInfo.quanhou+' 元', 219, 1358);
          context.setFillStyle("#999999");
          context.fillText('￥' + that.data.couponInfo.goods_price, 456, 1358);
          context.moveTo(456, 1348);
          context.lineTo(666, 1348);
          context.stroke();
          context.fillText(that.data.couponInfo.goods_sales+' 人已买', 50, 1458);
          context.setFillStyle("#ffffff");
          context.setFontSize(60);
          context.fillText('领 ' + that.data.couponInfo.coupon_price.slice(0, that.data.couponInfo.coupon_price.indexOf('.')) + ' 元优惠券', 159, 1787);
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
                    success:function(){
                      console.log('保存成功')
                      that.setData({ hiddenLoading: true})
                      wx.showToast({
                        title: '保存成功',
                        icon: 'success',
                        duration: 2000
                      })
                    }
                  })
                }
              })
            },1000)
        }    
      }
    })
  }
})
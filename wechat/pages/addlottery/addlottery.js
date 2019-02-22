var dateTimePicker = require('../../utils/dateTimePicker.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numbers: ['1', '2', '3', '4', '5'],
    index: 0,
    date: '2018-10-01',
    time: '12:00',
    open:false,
    usernumber:'',//参与抽奖人数
    user:'',//抽出多少人
    randoms:[],//抽出的随机数组
    lotteryDetails:'',//抽奖详情
    lotteryText:'开奖',
    haveorno:false,//当前是否有抽奖活动
    dateTimeArray: null,
    dateTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2018,
    endYear: 2050,
    timechuo:'',//时间戳
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    var lastArray = obj1.dateTimeArray.pop();
    var lastTime = obj1.dateTime.pop();
    console.log(obj1.dateTimeArray)
    console.log(obj1.dateTime)
    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj1.dateTimeArray,
      dateTime1: obj1.dateTime,
      startYear: obj1.dateTimeArray[0][obj1.dateTime[0]] 
    });
    console.log(this.data.startYear)
    this.selectLotteryDetails()
    this.selectLottery()
  },
  changeDate(e) {
    this.setData({ date: e.detail.value }); 
  },
  changeTime(e) {
    this.setData({ time: e.detail.value });
  },
  changeDateTime(e) {
    this.setData({ dateTime: e.detail.value });
  },
  changeDateTime1(e) {
    this.setData({ dateTime1: e.detail.value }); 
  },
  changeDateTimeColumn(e) {
    var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });

  },
  changeDateTimeColumn1(e) {
    var arr = this.data.dateTime1, dateArr = this.data.dateTimeArray1;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray1: dateArr,
      dateTime1: arr
    });


  },
  printTime:function(){
    var that=this
   // console.log(that.data.dateTimeArray1)
   // console.log(that.data.dateTime1)
    console.log(that.data.dateTimeArray1[0][that.data.dateTime1[0]] + "-" + that.data.dateTimeArray1[1][that.data.dateTime1[1]] + "-" + that.data.dateTimeArray1[2][that.data.dateTime1[2]] + " " + that.data.dateTimeArray1[3][that.data.dateTime1[3]] + ":" + that.data.dateTimeArray1[4][that.data.dateTime1[4]] + ":00")
    var time= that.data.dateTimeArray1[0][that.data.dateTime1[0]] + "-" + that.data.dateTimeArray1[1][that.data.dateTime1[1]] + "-" + that.data.dateTimeArray1[2][that.data.dateTime1[2]] + " " + that.data.dateTimeArray1[3][that.data.dateTime1[3]] + ":" + that.data.dateTimeArray1[4][that.data.dateTime1[4]] + ":00";
    var date = new Date(time);
    console.log(date.getTime() / 1000)
    that.setData({ timechuo: date.getTime() / 1000})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  formSubmit: function (e) {
    var requestURL = getApp().requestURL;
    var that=this
    console.log(e.detail.value)
    this.printTime();
    var formData = e.detail.value;
    formData.time=this.data.timechuo
    formData.number = parseInt(formData.number) +1
    console.log(formData)
    wx.request({
      url: requestURL+"/add_lottery.php",
      data: {
        names: formData.names,
        number: formData.number, 
        time: formData.time,
        'message': formData.message
      }, success: function (res) {
        console.log(res.data)
        that.selectLotteryDetails()
      }
    })
  },
  changenumber:function(e){
    //console.log('form发生了Slider事件，携带数据为：', e.detail.value)
    this.setData({ index: e.detail.value });
  },
  selectLottery: function () {//查询抽奖人数
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL +"/lottery/select_user_lottery.php",
      data: {
      }, success: function (res) {
        console.log(res.data)
        if(res.data!=null){
           that.setData({usernumber: res.data.length })
        }else{
          that.setData({ usernumber: 0 })
        }
      }
    })
  },
  selectLotteryDetails: function () {//查询抽奖信息
    var requestURL = getApp().requestURL;
    var that = this
    wx.request({
      url: requestURL +"/lottery/select_lottery_details.php",
      data: {
      }, success: function (res) {
        if(res.data!=null){
          that.setData({ haveorno:true})
        console.log (new Date().getTime() )
        console.log(res.data)
        if (res.data.lottery_time*1000 < new Date().getTime()){

          if (res.data.lottery_open==0){
            console.log('已经开奖')
            that.setData({ open: false, lotteryText: '已开奖'})
          }else{
            console.log('可以开奖')
            that.setData({ open: true, lotteryText: '开奖'})
          }
        }else{
          console.log('未到开奖时间')
          that.setData({ lotteryText:'时间未到'})
        }
        res.data.lottery_time=that.timestampToTime(res.data.lottery_time)
        that.setData({ lotteryDetails: res.data, user: res.data.lottery_number})
        }else{
          console.log('当前无抽奖情况')
          that.setData({ haveorno:false})
        }
      }
    })
  },
  timestampToTime: function (timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    //var m = date.getMinutes() + ':';

    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    //var s = date.getSeconds();
    var s='00';
    console.log(Y + M + D + h + m + s)
    return Y + M + D + h + m + s;

  },
  open:function(){
    var that=this
      if(this.data.open){
        var usernumber = this.data.usernumber;
        var user = this.data.user;
        // console.log(usernumber)
        // console.log(user)
        var randoms = [];
        for (var i = 0; i < user; i++) {
          var random = parseInt(usernumber * (Math.random()) + 1);
          if (randoms.indexOf(random) == -1) {
            randoms.push(random);
          } else {
            i--;
          }
        }
        console.log(randoms)
        this.setData({randoms:randoms})
        for (var p = 0; p < randoms.length; p++) {
          this.randomsLottery(randoms[p])
        }
        that.message()
      }
  },
  message:function(){
    var requestURL = getApp().requestURL;
    var that=this
    wx.request({
      url: requestURL +"/lottery/message.php",
      data: {
        'lottery_name': that.data.lotteryDetails.lottery_name
      }, success: function (res) {
          console.log(res.data)
      }
    })
  },
  randomsLottery:function(data){//开奖
    var requestURL = getApp().requestURL;
    var that=this
    console.log(data)
    wx.request({
      url: requestURL +"/lottery/getLottery.php",
      data: {
        "user_id":data,
        "lottery_time": that.data.lotteryDetails.lottery_time,
        "lottery_name": that.data.lotteryDetails.lottery_name
      }, success: function (res) {
        console.log(res.data)
        if(res.data='success'){
          that.setData({open:false})
          that.selectLotteryDetails()
          console.log('查询')
        }
      }
    })
  },
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
  
  },
  gettime:function(){
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      if (month < 10) {
        month = '0' + month;
      };
      if (day < 10) {
        day = '0' + day;
      };
      var formatDate = year + '-' + month + '-' + day;
      console.log(formatDate) ;
  }
})
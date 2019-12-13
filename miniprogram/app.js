//app.js
App({
  globalData: {
    statusBarHeight: '',  //获取顶部导航栏高度
    screenWidth: '',  //获取屏幕宽度
    isIphoneX: '',  //是否为iPhone X及以上机型
    ios: '',  //是否为ios系统
    android: '',  //是否为android系统
  },


  onLaunch: function () {
    var that = this;
    //初始化云函数
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    //获取系统参数
    wx.getSystemInfo({
      success(res) {
        that.globalData.statusBarHeight = res.statusBarHeight;
        that.globalData.screenWidth = res.screenWidth;
        let modelmes = res.model;
        if (modelmes.search("iPhone X") != -1) {
          that.globalData.isIphoneX = true
        }
        if (res.system.search("ios") != -1) {
          that.globalData.ios = true
        } else {
          that.globalData.ios = false
        }
        if (that.globalData.ios == false) {
          that.globalData.statusBarHeight = that.globalData.statusBarHeight + 4;
        }
        if (res.system.search("Android") != -1) {
          that.globalData.android = true
          console.error("android", that.globalData.android)
        }
      }
    })
  }
})
// pages/mine/mine.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: getApp().globalData.statusBarHeight,
    data: '',
    isLogin: false,
    userInfo: null,
    //登录参数
    isLogin: false,
    userInfo: null,
    disabled: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  },
  onShow() {
    let _isLogin = wx.getStorageSync('isLogin');
    if (!_isLogin) {
      console.error("还没登录")
    } else {
      this.setData({
        isLogin: true,
        userInfo: wx.getStorageSync('userInfo')
      })
    }
  },
  goAbout() {
    wx.showToast({
      title: '还在开发中',
      icon: 'none',
      duration: 1500
    })
    // wx.navigateTo({
    //   url: '../about/about',
    // })
  },
  goSetting() {
    wx.showToast({
      title: '还在开发中',
      icon: 'none',
      duration: 1500
    })
    // wx.navigateTo({
    //   url: '../setting/setting',
    // })
  },

  //登录授权
  getUserInfo(e) {
    let self = this;
    console.error("e", e)
    wx.getUserInfo({
      success(res) {
        wx.showLoading()
        console.error("success", res)
        if (!wx.getStorageSync('isLogin')) {
          self.onGetOpenid();
        } else {
          self.setData({
            isLogin: true,
            userInfo: wx.getStorageSync('userInfo')
          })
        }
      },
      fail(err) {
        console.error("fail", err)
      }
    })
  },
  // 获取openid并存储
  onGetOpenid() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {}
    }).then(res => {
      this.onQueryUser(res.result.openid); // 去登录
    }).catch(err => {
      console.error('[云函数] [login] 调用失败', err)
    })
  },
  // 查询用户是否存在
  onQueryUser(openid) {
    let _that = this;
    db.collection('users').where({
      _openid: openid
    }).get().then(res => {
      if (res.data.length > 0) {
        console.log('用户已存在')
        _that.handleUserInfo(res);
      } else {
        console.log('用户不存在')
        _that.setData({
          disabled: false
        })
      }
    }).catch(err => {
      console.log(err)
    })
  },

  // 获取微信用户信息授权
  getUserInfoHandler: function (e) {
    let _that = this;
    if (this.data.userInfo) {
      return;
    }
    if (e.detail.userInfo) {
      let _userInfo = e.detail.userInfo;
      this.onAddUser(_userInfo);
    } else {
      wx.showToast({
        title: '当前登录需授权',
        icon: 'none'
      })
    }
  },
  // 新增用户
  onAddUser(obj) {
    let _that = this;
    obj.auth = 0; // 权限默认普通用户0，管理员1 ，拉黑用户为2
    obj.createTime = db.serverDate()
    db.collection('users').add({
      data: obj
    }).then(res => {
      db.collection('users').where({
        _id: res._id
      }).get({
        success: res => {
          console.log('新增用户成功:', res)
          _that.handleUserInfo(res);
        },
        fail: err => {
          console.log('users集合_id查询失败')
        }
      })
    }).catch(err => {
      console.log('新增用户失败')
    })
  },
  // 成功回调
  handleUserInfo(res) {
    this.setData({
      isLogin: true,
      userInfo: res.data[0]
    })
    wx.setStorageSync('isLogin', true)
    wx.setStorageSync('userInfo', res.data[0])
    wx.hideLoading()
    wx.showToast({
      title: '用户登录成功',
      icon: 'none',
      duration: 800
    })
  },
  goback() {
    wx.navigateBack({})
  },
  goLogin() {
    var that = this;
    if (wx.getStorageSync('isLogin')) {
      wx.showToast({
        title: '已经登陆过啦',
        icon: 'none'
      })
    }
  },
  goAboutStart() {
    var that = this;
    that.setData({
      tap1: true
    })
  },
  goAboutEnd() {
    var that = this;
    that.setData({
      tap1: false
    })
  },
  goCanvasStart() {
    var that = this;
    that.setData({
      tap2: true
    })
  },
  goCanvasEnd() {
    var that = this;
    that.setData({
      tap2: false
    })
  },
  goCanvasStart() {
    var that = this;
    that.setData({
      tap3: true
    })
  },
  goCanvasEnd() {
    var that = this;
    that.setData({
      tap3: false
    })
  },
  goindex() {
    wx.switchTab({
      url: '../index/index'
    })
  }
})
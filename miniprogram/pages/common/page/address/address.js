const app = getApp()

Page({
  data:{
    statusBarHeight: app.globalData.statusBarHeight,
    address:{
      name:'',
      phone:'',
      detail:''
    }
  },
  onLoad(){
    var self = this;
    
    wx.getStorage({
      key: 'address',
      success: function(res){
        self.setData({
          address : res.data
        })
      }
    })
  },
  formSubmit(){
    var self = this;
    if(self.data.address.name && self.data.address.phone && self.data.address.detail){
      wx.setStorage({
        key: 'address',
        data: self.data.address,
        success(){
          wx.navigateBack();
        }
      })
    }else{
      wx.showModal({
        title:'提示',
        content:'请填写完整资料',
        showCancel:false
      })
    }
  },
  saveAddress(){
  var self = this;
  wx.showToast({
    title:'保存成功',
    icon:'none',
    duration:1500
  })
  setTimeout(() => {
    wx.navigateBack({
    })
  }, 1500);
  },
  bindName(e){
    this.setData({
      'address.name' : e.detail.value
    })
  },
  bindPhone(e){
    this.setData({
      'address.phone' : e.detail.value
    })
  },
  bindDetail(e){
    this.setData({
      'address.detail' : e.detail.value
    })
  },
  touchStart1: function () {
    var that = this
    that.setData({
      taped: true
    })
  },
  touchEnd1: function () {
    var that = this
    that.setData({
      taped: false
    })
  },
  goback(){
    wx.navigateBack({})
  }
})
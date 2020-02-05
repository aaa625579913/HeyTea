const app = getApp()

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    category: [{
        name: '外送搭配',
        id: 'waisong',
        img: '../../static/images/avocado.png'
      },
      {
        name: '喜茶实验室',
        id: 'shiyanshi',
        img: '../../static/images/watermelon.png'
      },
      {
        name: '当季限定',
        id: 'xianding',
        img: '../../static/images/kiwi.png'
      },
      {
        name: '热饮推荐',
        id: 'reyin',
        img: '../../static/images/lemon.png'
      },
      {
        name: '芝芝果茶家族',
        id: 'guocha',
        img: '../../static/images/grape.png'
      },
      {
        name: '满杯水果家族',
        id: 'shuiguo',
        img: '../../static/images/mangosteen.png'
      },
      {
        name: '芝芝茗茶',
        id: 'cha',
        img: '../../static/images/tomato.png'
      },
      {
        name: '波波家族',
        id: 'bobo',
        img: '../../static/images/carrot.png'
      },
    ],
    detail: {
      'id': 'waisong',
      'banner1': [
        'https://sure-1258489802.cos.ap-chengdu.myqcloud.com/2.png',
        'https://sure-1258489802.cos.ap-chengdu.myqcloud.com/1.png'
      ],
      'banner2': [
        'https://sure-1258489802.cos.ap-chengdu.myqcloud.com/5.png',
        'https://sure-1258489802.cos.ap-chengdu.myqcloud.com/4.png',
        'https://sure-1258489802.cos.ap-chengdu.myqcloud.com/3.png'
      ],
      'bodyInfoList': [{
        'title': '外送搭配',
        'unique': 0,
        'infoList': [{
            'id': 0,
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 5,
          },
          {
            'id': 1,
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 3,
          },
          {
            'id': 2,
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 10,
          },
          {
            'id': 3,
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 12,
          },
          {
            'id': 4,
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 16,
          }
        ]
      }, {
        'title': '喜茶实验室',
        'unique': 1,
        'infoList': [{
            'id': 0,
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 5,
          },
          {
            'id': 1,
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 3,
          },
          {
            'id': 2,
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 10,
          },
          {
            'id': 3,
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 12,
          },
          {
            'id': 4,
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 16,
          }
        ]
      }, {
        'title': '当季限定',
        'unique': 2,
        'infoList': [{
            'id': 0,
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 5,
          },
          {
            'id': 1,
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 3,
          },
          {
            'id': 2,
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 10,
          },
          {
            'id': 3,
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 12,
          },
          {
            'id': 4,
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 16,
          }
        ]
      }, {
        'title': '热饮推荐',
        'unique': 3,
        'infoList': [{
            'id': 0,
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 5,
          },
          {
            'id': 1,
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 3,
          },
          {
            'id': 2,
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 10,
          },
          {
            'id': 3,
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 12,
          },
          {
            'id': 4,
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 16,
          }
        ]
      }, {
        'title': '芝芝果茶家族',
        'unique': 4,
        'infoList': [{
            'id': 0,
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 5,
          },
          {
            'id': 1,
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 3,
          },
          {
            'id': 2,
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 10,
          },
          {
            'id': 3,
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 12,
          },
          {
            'id': 4,
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 16,
          }
        ]
      }, {
        'title': '满杯水果家族',
        'unique': 5,
        'infoList': [{
            'id': 0,
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 5,
          },
          {
            'id': 1,
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 3,
          },
          {
            'id': 2,
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 10,
          },
          {
            'id': 3,
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 12,
          },
          {
            'id': 4,
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 16,
          }
        ]
      }, {
        'title': '芝芝茗茶',
        'unique': 6,
        'infoList': [{
            'id': 0,
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 5,
          },
          {
            'id': 1,
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 3,
          },
          {
            'id': 2,
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 10,
          },
          {
            'id': 3,
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 12,
          },
          {
            'id': 4,
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': 16,
          }
        ]
      }, ]

    },
    info: ['正常冰',
      '少冰',
      '去冰',
      '温热'
    ],
    sugar: ['正常糖',
      '少糖',
      '半糖',
      '三分糖',
      '无糖'
    ],
    add: [
      '无',
      '波霸',
      '布丁',
      '仙草',
      '椰果',
      '黑糖波波'
    ],
    curIndex: 0,
    isScroll: true,
    toView: 'waisong',
    interval: 3000,
    duration: 800,
    scrollTop: 0,
    money: 0,
    sizeIndex: 0,
    sugarIndex: 0,
    addIndex: 0,
    cartList: [], //购物车列表
    cartNum: '', //购物车件数
    cartCount: 0, //总价钱
  },
  onShow() {
    var self = this;
    self.setData({
      sizeInfo: self.data.info[0],
      sugarInfo: self.data.sugar[0],
      addInfo: self.data.add[0],
    })
  },
  onReady() {
    var self = this;

  },
  onBindscroll(e) {
    var self = this;
    let scrollTop = e.detail.scrollTop;
    console.error("onBindscroll", e.detail.scrollTop)
    if (scrollTop > 0 && scrollTop <= 850) {
      self.setData({
        curIndex: 0
      })
    } else if (scrollTop > 850 && scrollTop < 1450) {
      self.setData({
        curIndex: 1
      })
    } else if (scrollTop > 1450 && scrollTop < 2050) {
      self.setData({
        curIndex: 2
      })
    } else if (scrollTop > 2050 && scrollTop < 2650) {
      self.setData({
        curIndex: 3
      })
    } else if (scrollTop > 2650 && scrollTop < 3250) {
      self.setData({
        curIndex: 4
      })
    } else if (scrollTop > 3250 && scrollTop < 3850) {
      self.setData({
        curIndex: 5
      })
    } else if (scrollTop > 3850 && scrollTop < 4450) {
      self.setData({
        curIndex: 6
      })
    }
  },
  switchTab(e) {
    var self = this;
    let toView = e.currentTarget.dataset.id;
    let curIndex = e.currentTarget.dataset.index
    this.setData({
      toView: toView,
      curIndex: curIndex
    })
    switch (curIndex) {
      case 0:
        self.setData({
          scrollTop: 0
        })
        break;
      case 1:
        self.setData({
          scrollTop: 900
        })
        break;
      case 2:
        self.setData({
          scrollTop: 1500
        })
        break;
      case 3:
        self.setData({
          scrollTop: 2100
        })
        break;
      case 4:
        self.setData({
          scrollTop: 2700
        })
        break;
      case 5:
        self.setData({
          scrollTop: 3300
        })
        break;
      case 6:
        self.setData({
          scrollTop: 3900
        })
        break;
    }
    console.error("toView", toView + ' ' + 'curIndex', curIndex)
    console.error(e)

  },
  handleSwitch(e) {
    var self = this;
    if (self.data.switchChange) {
      self.setData({
        switchChange: false
      })
    } else {
      self.setData({
        switchChange: true
      })
    }
  },
  showMore() {
    let self = this;
    self.setData({
      showMore: true
    })

  },
  closeMore() {
    let self = this;
    self.setData({
      showMore: false
    })
  },

  showInfo(e) {
    let self = this;
    let unique = e.currentTarget.dataset.unique;
    let id = e.currentTarget.dataset.id;
    self.setData({
      showInfo: true,
      money: self.data.detail.bodyInfoList[unique].infoList[id].value,
      moneyAdd: self.data.detail.bodyInfoList[unique].infoList[id].value + 2,
      name: self.data.detail.bodyInfoList[unique].infoList[id].name
    }, () => {
      self.setData({
        value: self.data.money
      })
    })
    console.error("sdsdsds", e)
  },
  closeInfo() {
    let self = this;
    self.setData({
      showInfo: false,
      sizeIndex: 0,
      sizeInfo: this.data.info[0],
      sugarIndex: 0,
      sugarInfo: this.data.sugar[0],
      addIndex: 0,
      addInfo: this.data.add[0]
    })
  },
  closeCartInfo() {
    let self = this;
    self.setData({
      showCartInfo: false
    })
  },
  handleSubmit() {
    let self = this;
    let cartList = self.data.cartList;
    let cartCount = self.data.cartCount;
    if (!cartList) {
      self.setData({
        cartList: {
          'name': self.data.name,
          'value': self.data.value,
          'sizeInfo': self.data.sizeInfo,
          'sugarInfo': self.data.sugarInfo,
          'addInfo': self.data.addInfo
        },
      })
    } else {
      cartList.push({
        'name': self.data.name,
        'value': self.data.value,
        'sizeInfo': self.data.sizeInfo,
        'sugarInfo': self.data.sugarInfo,
        'addInfo': self.data.addInfo
      })
    }
    self.closeInfo();
    cartCount += cartList[cartList.length - 1].value
    self.setData({
      showCart: true,
      cartNum: self.data.cartList.length,
      cartCount
    })
    console.error("cartList", cartCount)
  },
  goindex() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  goliveroom() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  handleChoose(e) {
    let self = this;
    var index = e.currentTarget.dataset.index;
    var type = e.currentTarget.dataset.type;
    if (type == 0) {
      this.setData({
        sizeIndex: index,
        sizeInfo: this.data.info[index]
      });
    }
    if (type == 1) {
      this.setData({
        sugarIndex: index,
        sugarInfo: this.data.sugar[index]
      });
    }
    if (type == 2) {
      this.setData({
        addIndex: index,
        addInfo: this.data.add[index],
        value: index > 0 ? self.data.moneyAdd : self.data.money
      });
    }
    console.error("WWW@@@@@@@@@@", e.currentTarget)
  },
  onContinue() {
    wx.showToast({
      title: '还在赶工中...',
      icon: 'none',
      duration: 2000
    })
  },
  showCartInfo() {
    let cartList = this.data.cartList
    this.setData({
      showCartInfo: !this.data.showCartInfo,
      cartList
    })
    console.error("cartList", this.data.cartList)
  },
  deleteCart() {
    let self = this;
    self.setData({
      showCartInfo: false,
      showCart: false,
      cartList: []
    }) 
  },
  addNum(e) {
    let self = this;
    let index = e.currentTarget.dataset;
    let cartCount = self.data.cartCount;
    console.error("index",self.data.cartList[index])
    // cartCount += cartCount + cartList[index].value;
    self.setData({
      cartCount
    })
    console.error("add", e)
  }

})
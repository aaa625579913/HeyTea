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
        'infoList': [{
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '5',
          },
          {
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '3',
          },
          {
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '10',
          },
          {
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '12',
          },
          {
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '16',
          }
        ]
      }, {
        'title': '喜茶实验室',
        'infoList': [{
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '5',
          },
          {
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '3',
          },
          {
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '10',
          },
          {
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '12',
          },
          {
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '16',
          }
        ]
      }, {
        'title': '当季限定',
        'infoList': [{
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '5',
          },
          {
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '3',
          },
          {
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '10',
          },
          {
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '12',
          },
          {
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '16',
          }
        ]
      }, {
        'title': '热饮推荐',
        'infoList': [{
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '5',
          },
          {
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '3',
          },
          {
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '10',
          },
          {
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '12',
          },
          {
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '16',
          }
        ]
      }, {
        'title': '芝芝果茶家族',
        'infoList': [{
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '5',
          },
          {
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '3',
          },
          {
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '10',
          },
          {
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '12',
          },
          {
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '16',
          }
        ]
      }, {
        'title': '满杯水果家族',
        'infoList': [{
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '5',
          },
          {
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '3',
          },
          {
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '10',
          },
          {
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '12',
          },
          {
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '16',
          }
        ]
      }, {
        'title': '芝芝茗茶',
        'infoList': [{
            'name': "猕猴桃(推荐)",
            'img': "../../static/images/kiwi.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '5',
          },
          {
            'name': "西瓜",
            'img': "../../static/images/watermelon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '3',
          },
          {
            'name': "山竹",
            'img': "../../static/images/mangosteen.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '10',
          },
          {
            'name': "柠檬",
            'img': "../../static/images/lemon.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '12',
          },
          {
            'name': "牛油果",
            'img': "../../static/images/avocado.png",
            'intro': "保温保冷，提供2杯装与4杯装两种大小。若订单超过4杯音频，您可选择自己到店里买。",
            'value': '16',
          }
        ]
      }, ]

    },
    curIndex: 0,
    isScroll: true,
    toView: 'waisong',
    interval: 3000,
    duration: 800,
    scrollTop: 0
  },
  onShow() {
    var self = this;

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
    if (self.data.showMore) {
      self.setData({
        showMore: false
      })
    } else {
      self.setData({
        showMore: true
      })
    }

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
  }

})
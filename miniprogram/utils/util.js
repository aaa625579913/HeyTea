let cache = require('./cacheTool');
const charts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let util = {
  genMixedRandom: function (n) {
    var res = '';
    for (var i = 0; i < n; i++) {
      var id = Math.ceil(Math.random() * 35);
      res += charts[id];
    }
    return res;
  },

  //单例模式抽象，分离创建对象的函数和判断对象是否已经创建
  getSingle: function (fn) {
    var result;
    return function () {
      return result || (result = fn.apply(this, arguments));
    }
  },
  //仿腾讯云IM:防重复点击
  doubleClick: function (tapTime) {
    // 防止两次点击操作间隔太快
    var nowTime = new Date();
    if (nowTime - tapTime < 1000) {
      return false
    } else {
      return true
    }
  },
  //版本比较
  compareVersion: function (v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)

    while (v1.length < len) {
      v1.push('0')
    }
    while (v2.length < len) {
      v2.push('0')
    }

    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i])
      const num2 = parseInt(v2[i])

      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }

    return 0
  },

  debounceOrThrottle: function (
    fn,
    wait = 300,
    immediate = false,
    executeOncePerWait = false
  ) {
    if (typeof fn !== 'function') {
      console.error('传入参数必须为函数');
      return;
    }

    let tId = null;
    let context = null;
    let args = null;
    let lastTriggerTime = null;
    let result = null;
    let lastExecutedTime = null;

    const later = function () {
      const last = Date.now() - (executeOncePerWait ? lastExecutedTime : lastTriggerTime);

      if (last < wait && last > 0) {
        setTimeout(later, wait - last);
      } else {
        if (!immediate) {
          executeOncePerWait && (lastExecutedTime = Date.now());
          result = fn.apply(context, args);
          context = args = null;
        }
        tId = null;
      }
    }

    return function () {
      context = this;
      args = arguments;
      !executeOncePerWait && (lastTriggerTime = Date.now());
      const callNow = immediate && !tId;

      if (!tId) {
        executeOncePerWait && (lastExecutedTime = Date.now());
        tId = setTimeout(later, wait);
      }

      if (callNow) {
        executeOncePerWait && (lastExecutedTime = Date.now());
        result = fn.apply(context, args);
        context = args = null;
      }

      return result;
    }
  },

  /*防抖函数，通过推迟每次事件执行的时间来减少不必要的查询
  fn: 要执行的方法
  wait:每次事件执行的推迟时间(毫秒)
  immediate: 是否立即执行
  */
  debounce: (
    fn,
    wait,
    immediate
  ) =>
    util.debounceOrThrottle(
      fn,
      wait,
      immediate
    ),

  /*节流函数，通过控制每次事件执行的时间间隔控制短时间多次执行方法
  fn: 要执行的方法
  wait:每次事件执行的推迟时间(毫秒)
  immediate: 是否立即执行
  */
  throttle: (
    fn,
    wait,
    immediate
  ) =>
    util.debounceOrThrottle(
      fn,
      wait,
      immediate,
      true
    ),
  //比较两个数组得出不同元素
  getDiffArray: function (item1, item2) {
    let diff = item1.concat(item2).filter(function (v, i, arr) {
      return arr.indexOf(v) === arr.lastIndexOf(v);
    });
    return diff;
  },
  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },
  /** 
   * 时间戳转化为年 月 日 时 分 秒 
   * number: 传入时间戳 
   * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
   */
  formatTimeTwo(number, format) {
    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];
    var date = new Date(number * 1000);
    returnArr.push(date.getFullYear());
    returnArr.push(this.formatNumber(date.getMonth() + 1));
    returnArr.push(this.formatNumber(date.getDate()));
    returnArr.push(this.formatNumber(date.getHours()));
    returnArr.push(this.formatNumber(date.getMinutes()));
    returnArr.push(this.formatNumber(date.getSeconds()));
    for (var i in returnArr) {
      format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
  },
  showLoading: function (title) {
    wx.showLoading({
      title: title
    })
  },

  //获得消息体内时间的本地化展示
  getLocalTime: function (lastedMsgTime, uTimestamp) {
    var thisTime = new Date()
    var thisYear = thisTime.getFullYear()
    var thisMonth = thisTime.getMonth() + 1
    var thisDay = thisTime.getDate()
    var time = new Date(parseInt(uTimestamp) * 1000)
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    if (hour < 10) {
      hour = '0' + hour
    }
    if (minute < 10) {
      minute = '0' + minute
    }
    let isFirst = false
    //第一条消息
    if (lastedMsgTime == '' || typeof lastedMsgTime == undefined) {
      lastedMsgTime = uTimestamp
      isFirst = true
    }
    //距离上一条消息小于5分钟时间显示为空
    if (!isFirst && ((uTimestamp - lastedMsgTime > 0) && (uTimestamp - lastedMsgTime <= 300) ||
      (uTimestamp - lastedMsgTime == 0)
    )) {
      return '';
    } else {
      if (thisYear > year) {
        return year + '年' + month + '月' + date + '日 ' + hour + ":" + minute
      } else if (thisYear == year && thisMonth > month) {
        return month + '月' + date + '日 ' + hour + ":" + minute
      } else if (thisYear == year && thisMonth == month && thisDay - date > 1) {
        return month + '月' + date + '日 ' + hour + ":" + minute
      } else if (thisYear == year && thisMonth == month && thisDay - date == 1) {
        return '昨天 ' + hour + ":" + minute
      } else if (thisYear == year && thisMonth == month && thisDay - date == 0) {
        return hour + ":" + minute
      }
    }
  },
  formatDate: function (now, mask) {
    var d = now;
    var zeroize = function (value, length) {
      if (!length) length = 2;
      value = String(value);
      for (var i = 0, zeros = ''; i < (length - value.length); i++) {
        zeros += '0';
      }
      return zeros + value;
    };

    return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {
      switch ($0) {
        case 'd':
          return d.getDate();
        case 'dd':
          return zeroize(d.getDate());
        case 'ddd':
          return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
        case 'dddd':
          return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
        case 'M':
          return d.getMonth() + 1;
        case 'MM':
          return zeroize(d.getMonth() + 1);
        case 'MMM':
          return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
        case 'MMMM':
          return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];
        case 'yy':
          return String(d.getFullYear()).substr(2);
        case 'yyyy':
          return d.getFullYear();
        case 'h':
          return d.getHours() % 12 || 12;
        case 'hh':
          return zeroize(d.getHours() % 12 || 12);
        case 'H':
          return d.getHours();
        case 'HH':
          return zeroize(d.getHours());
        case 'm':
          return d.getMinutes();
        case 'mm':
          return zeroize(d.getMinutes());
        case 's':
          return d.getSeconds();
        case 'ss':
          return zeroize(d.getSeconds());
        case 'l':
          return zeroize(d.getMilliseconds(), 3);
        case 'L':
          var m = d.getMilliseconds();
          if (m > 99) m = Math.round(m / 10);
          return zeroize(m);
        case 'tt':
          return d.getHours() < 12 ? 'am' : 'pm';
        case 'TT':
          return d.getHours() < 12 ? 'AM' : 'PM';
        case 'Z':
          return d.toUTCString().match(/[A-Z]+$/);
        // Return quoted strings with the surrounding quotes removed
        default:
          return $0.substr(1, $0.length - 2);
      }
    });
  },
  //解决ios兼容性问题
  formatDate2: function (dateObj, fmt) {
    let date;
    if (typeof (dateObj) == "string") {
      dateObj = dateObj.replace(new RegExp('-', "gm"), '/');
      date = new Date(dateObj);
    } else if (!isNaN(dateObj) && !isNaN(Date.parse(dateObj))) {
      date = dateObj
    } else {
      return ""
    }
    var o = {
      "M+": date.getMonth() + 1, //月份         
      "d+": date.getDate(), //日         
      "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时         
      "H+": date.getHours(), //小时         
      "m+": date.getMinutes(), //分         
      "s+": date.getSeconds(), //秒         
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度         
      "S": date.getMilliseconds() //毫秒         
    };
    var week = {
      "0": "日",
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六"
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[date.getDay().toString() + ""]);
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k].toString()) : (("00" + o[k].toString()).substr(("" + o[k].toString()).length)));
      }
    }
    return fmt;
  },
  //倒计时计算
  function: function (endDateStr) {
    //结束时间
    var endDate = new Date(endDateStr);
    //当前时间
    var nowDate = new Date();
    //相差的总秒数
    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //天数
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    //输出
    var timeText = (days > 0 ? (days + "天") : "") + hours + "小时" + minutes + "分钟" + seconds + "秒";
    return timeText;
  },
  Map: function () {
    var items = {};
    this.has = function (key) {
      return key in items;
    },
      this.set = function (key, value) {
        items[key] = value;
      },
      this.remove = function (key) {
        if (this.has(key)) {
          delete items[key];
          return true;
        }
        return false;
      },
      this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
      },
      this.values = function () {
        var values = [];
        for (var k in items) {
          if (this.hasOwnProperty(k)) {
            values.push(items[k]);
          }
        }
        return values;
      },
      this.clear = function () {
        items = {};
      },
      this.size = function () {
        return Object.Keys(items).length;
      },
      this.getItems = function () {
        return items;
      }
  },
  /***
   * 判断用户滑动
   * 左滑还是右滑
   */
  getTouchData: function (endX, endY, startX, startY) {
    let turn = "";
    if (endX - startX > 20 && Math.abs(endY - startY) < 20) { //右滑
      turn = "right";
    } else if (endX - startX < -20 && Math.abs(endY - startY) < 20) { //左滑
      turn = "left";
    }
    return turn;
  },
  isEmptyObject: function (obj) {

    for (var key in obj) {
      return false
    };
    return true
  },


}

module.exports = util
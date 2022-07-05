/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') +
      '"}'
  )
}

/**
 * 大数字转换，将大额数字转换为万、千万、亿等
 * @param value 数字值
 */
export function bigNumberTransform(value) {
  const num = Number(value)
  if (num == 0) {
    return num + ''
  } else if (num > 1 && num < 10000) {
    return num + ''
  } else {
    return (num / 10000).toFixed(1) + '万+'
  }
}
export function bigNumberTransform1(value) {
  const newValue = ['', '', '']
  let fr = 1000
  let num = 3
  let text1 = ''
  let fm = 1
  while (value / fr >= 1) {
    fr *= 10
    num += 1
    // console.log('数字', value / fr, 'num:', num)
  }
  if (num <= 4) {
    // 千
    newValue[0] = parseInt(value / 1000) + ''
    newValue[1] = '千+'
  } else if (num <= 8) {
    // 万
    text1 = parseInt(num - 4) / 3 > 1 ? '千万+' : '万+'
    // tslint:disable-next-line:no-shadowed-variable
    fm = text1 === '万' ? 10000 : 10000000
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm) + ''
    } else {
      newValue[0] = parseFloat(value / fm).toFixed(2) + ''
    }
    newValue[1] = text1
  } else if (num <= 16) {
    // 亿
    text1 = (num - 8) / 3 > 1 ? '千亿' : '亿'
    text1 = (num - 8) / 4 > 1 ? '万亿' : text1
    text1 = (num - 8) / 7 > 1 ? '千万亿' : text1
    // tslint:disable-next-line:no-shadowed-variable
    fm = 1
    if (text1 === '亿') {
      fm = 100000000
    } else if (text1 === '千亿') {
      fm = 100000000000
    } else if (text1 === '万亿') {
      fm = 1000000000000
    } else if (text1 === '千万亿') {
      fm = 1000000000000000
    }
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm) + ''
    } else {
      newValue[0] = parseFloat(value / fm).toFixed(2) + ''
    }
    newValue[1] = text1
  }
  if (value < 1000) {
    newValue[0] = value + ''
    newValue[1] = ''
  }
  return newValue.join('')
}

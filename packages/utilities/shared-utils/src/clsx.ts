/* eslint-disable no-shadow-restricted-names */
/* eslint-disable no-plusplus */
// 将值转换成字符串
function toVal(mix: any) {
  var k,
    y,
    str = "";

  // 拼接字符串
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    // 如果是数组，用空格拼接起来
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            // 拼接字符串
            str && (str += " ");
            str += y;
          }
        }
      }
      // 对象
    } else {
      // 遍历对象的属性名
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }

  return str;
}

export function clsx(...args: any[]) {
  var i = 0,
    tmp,
    x,
    str = "";

  // 拼接全部的值
  while (i < args.length) {
    if ((tmp = args[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += " ");
        str += x;
      }
    }
  }

  return str;
}

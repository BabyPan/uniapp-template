function rmbFormat(money = 0) {
  let rmb = 0,
    unit = "元";
  const unitList = ["万", "亿"]; // 转化的单位列表

  // 判断传入的金额格式
  if (Object.prototype.toString.call(money) == "[object Number]") {
    rmb = money;
  } else {
    rmb = parseFloat(money) || 0;
  }

  // 单位转化
  unitList.forEach((item) => {
    if (rmb >= 10000) {
      rmb = rmb / 10000;
      unit = item;
    }
  });

  // 保留两个小数（不四舍五入）
  rmb = rmb.toFixed(3);
  rmb = rmb.substring(0, rmb.toString().length - 1);

  return `${rmb}${unit}`;
}

export default rmbFormat;

function toast(title = "", duration = 1500, callback) {
  uni.showToast({
    title: title,
    icon: "none",
    duration: duration,
  });

  // 提示框关闭回调
  if (typeof callback == "function") setTimeout(callback, duration);
}

function success(title = "", duration = 1500, callback) {
  uni.showToast({
    title: title,
    icon: "success",
    duration: duration,
  });

  // 提示框关闭回调
  if (typeof callback == "function") setTimeout(callback, duration);
}

function loading(title = "加载中") {
  uni.showLoading({ title: title });
}

function hideLoading() {
  uni.hideLoading();
}

export { toast, success, loading, hideLoading };

/**
 * @author Vex
 * @description 全局方法
 */

module.exports = {
  onLaunch() {
    this.checkToken();
    // if (this.$store.getters["product/categoryList"].length == 0) {
    //   this.$store.dispatch("product/getCategoryList"); // 缓存商品列表
    // }
  },
  methods: {
    // 文本复制
    $copyText(text) {
      uni.setClipboardData({
        data: text,
      });
    },
    // 获取图片信息
    async $getImageInfo(imgPath) {
      return new Promise((resolve) => {
        uni.getImageInfo({
          src: imgPath,
          success: (image) => resolve(image),
          fail: () => resolve(""),
        });
      });
    },
    // 保存图片到相册
    async $saveImg(tepImgPath) {
      return new Promise((resolve) => {
        uni.saveImageToPhotosAlbum({
          filePath: tepImgPath,
          success: (e) => resolve(true),
          fail: (err) => resolve(false),
        });
      });
    },
    // 保存图片
    async $downloadImg(imgArr) {
      let successCount = 0;

      imgArr.forEach(async (img, i) => {
        const imgInfo = await this.$getImageInfo(img);
        const isSuccessSave = await this.$saveImg(imgInfo.path);
        if (isSuccessSave) successCount += 1;
        if (i === imgArr.length - 1)
          this.$message(`成功保存${successCount}张图片`);
      });
    },
    // 链接跳转
    $toUrl(url = "", type = 1) {
      switch (type) {
        case 1:
          // 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
          uni.navigateTo({
            url,
          });
          break;
        case 2:
          // 关闭当前页面，跳转到应用内的某个页面。
          uni.redirectTo({
            url,
          });
          break;
        case 3:
          // 关闭所有页面，打开到应用内的某个页面。
          uni.reLaunch({
            url,
          });
          break;
        case 4:
          // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
          uni.switchTab({
            url,
          });
          break;
      }
    },
    // token检测
    checkToken() {
      if (!this.$store.getters["user/accessToken"]) {
        this.$x.toast(`请先登录`, 1500, () => {
          this.$store.dispatch("user/logout");
        });
        return false;
      }
      return true;
    },
  },
};

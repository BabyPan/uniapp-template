/**
 * @author Vex
 * @description 获取当前页面路径
 */
function getCurrentRoute() {
  let route = "";
  let pages = getCurrentPages();
  let page = null;
  if (pages) page = pages[pages.length - 1];
  if (page) route = page.route;
  return route;
}

export default getCurrentRoute;

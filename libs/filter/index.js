import Vue from "vue";

Vue.filter("empty", (value) => {
  switch (Object.prototype.toString.call(value)) {
    case "[object Number]":
      return value;
    case "[object String]":
      return value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0
        ? "暂无"
        : value;
    case "[object Undefined]":
    case "[object Null]":
    case "[object Object]":
      return "暂无";
  }
});

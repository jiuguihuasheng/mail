// 防抖函数
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {clearTimeout(timer)}
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

export {
  debounce
}

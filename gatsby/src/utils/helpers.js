// useful for resize events
export function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
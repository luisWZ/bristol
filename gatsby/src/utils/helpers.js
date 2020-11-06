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

export function formatMoney(amount) {
  const options = {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
  };
  const formatter = new Intl.NumberFormat('es-MX', options)
  return formatter.format(amount)
}

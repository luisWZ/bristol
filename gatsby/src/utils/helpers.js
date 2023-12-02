export const formatPhone = number =>
  number.replace(/(\d{4})(\d{2})(\d{2})(\d{2})/g, `$1 $2 $3 $4`)

// useful for resize events
export function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export function formatMoney(amount) {
  const options = {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
  }
  const formatter = new Intl.NumberFormat('es-MX', options)
  return formatter.format(amount)
}

// to use with format like '25 de enero de 2021'
export function formatDateShort(date) {
  const startingDateShort = date
    .replace(/(^\d*)\s\w*\s(\w{3})\w*\s\d{2}(\d{2})/, '$1 $2 $3')
    .split(' ')
  // switch month to number
  switch (startingDateShort[1]) {
    case 'ene':
      startingDateShort[1] = '01'
      break
    case 'feb':
      startingDateShort[1] = '02'
      break
    case 'mar':
      startingDateShort[1] = '03'
      break
    case 'abr':
      startingDateShort[1] = '04'
      break
    case 'may':
      startingDateShort[1] = '05'
      break
    case 'jun':
      startingDateShort[1] = '06'
      break
    case 'jul':
      startingDateShort[1] = '07'
      break
    case 'ago':
      startingDateShort[1] = '08'
      break
    case 'sep':
      startingDateShort[1] = '09'
      break
    case 'oct':
      startingDateShort[1] = '10'
      break
    case 'nov':
      startingDateShort[1] = '11'
      break
    case 'dic':
      startingDateShort[1] = '12'
      break
    default:
      startingDateShort[1] = '00'
  }
  return startingDateShort.join('/')
}

import dayjs from 'dayjs'
import 'dayjs/locale/es' // load on demand
dayjs.locale('es')

export function toPercent(n: number | string): string {
  if (typeof n === 'string') return n

  return n.toLocaleString('de-DE', {
    style: 'percent',
    minimumFractionDigits: 1
  })
}

export function toNumber(n: number | string, decimal?: number): string {
  if (typeof n === 'string') return n

  const round = decimal ? decimal * 100 : 1

  return (Math.round(n * round) / round).toLocaleString('de-DE')
}

export function toHash(array = [], keyField = 'id') {
  if (!Array.isArray(array)) throw new Error('This element is not array')

  return array.reduce((obj, item) => {
    obj[item[keyField]] = item
    return obj
  }, {})
}

export function toDateDisplay(date: Date, format: string): string {
  if (!date) {
    return ''
  }
  const dateFormated = dayjs(date).format(format)
  return capitalizeFirstLetter(dateFormated)
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

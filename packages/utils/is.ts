export function is(val: unknown, type: string) {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}
export function isUrl(path: string): boolean {
  const reg =
    // eslint-disable-next-line no-useless-escape
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined'
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val)
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}

export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return false
}

export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val)
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val)
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    is(val, 'Promise') &&
    isObject(val) &&
    isFunction(val.then) &&
    isFunction(val.catch)
  )
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp')
}

export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window')
}

export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName
}

export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map')
}

export const isServer = typeof window === 'undefined'

export const isClient = !isServer

export function isChinese(str: string): boolean {
  return /[\u4e00-\u9fa5]/.test(str)
}

export function isHexColor(color: string) {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/
  return reg.test(color)
}
// export const isEnglish = (str: string) => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,}$)/.test(str)

export const isInteger = (number: string) => /^-?[1-9]\d*$/.test(number)

export const isPositiveInteger = (number: string) => /^[1-9]\d*$/.test(number)

export const isNegativeInteger = (number: string) => /^-[1-9]\d*$/.test(number)

export const isNonPositiveInteger = (number: string) =>
  /^-[1-9]\d*|0$/.test(number)

export const isNonNegativeInteger = (number: string) =>
  /^[1-9]\d*|0$/.test(number)

export const isSku = (str: string) =>
  str.length === 15 && /^[a][0-9]{8}[a-z]{2}[0-9]{4}$/.test(str)

export const isSgu = (str: string) =>
  str.length === 15 && /^[g][0-9]{8}[a-z]{2}[0-9]{4}$/.test(str)

export const isScu = (str: string) =>
  str.length === 15 && /^[s][0-9]{8}[a-z]{2}[0-9]{4}$/.test(str)
export const isCouldConverToNumber = (value: any) => {
  return !Number.isNaN(+value)
}

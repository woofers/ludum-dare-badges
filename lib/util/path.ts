export const getSingle = (val?: string | string[]): string => {
    if (typeof val === 'undefined') return ''
    if (Array.isArray(val)) return val[0] ?? ''
    return val
  }
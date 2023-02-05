
const END = '...'

export const truncate = (value: string, max: number) => {
  if (value.length >= max) return value.substring(0, max - END.length) + END
  return value
}

export const greaterThan = (value: number, max: number) => {
  if (value > max) return `>${max}`
  return `${value}`
}

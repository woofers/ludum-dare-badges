
const END = '...'

export const truncate = (value, max) => {
  if (value.length >= max) return value.substring(0, max - END.length) + END
  return value
}

export const greaterThan = (value, max) => {
  if (value > max) return `>${max}`
  return value
}

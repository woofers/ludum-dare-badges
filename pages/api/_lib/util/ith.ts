
export const NA = 'N/A'

// From: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-45.php
export const ith = (num: number) => {
  if (`${num}` === NA) return '⠀'
  if (num % 100 >= 11 && num % 100 <= 13) return 'th'
  switch (num % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
  }
  return 'th'
}


export const NA = 'N/A'

// From: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-45.php
export const ith = number => {
  if (number === NA) return '⠀'
  if (number % 100 >= 11 && number % 100 <= 13) return 'th'
  switch (number % 10) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
  }
  return 'th'
}

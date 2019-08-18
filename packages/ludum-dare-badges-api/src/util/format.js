const showZero = true

export const average = stat => showZero || stat.average  ? `(${stat.average.toFixed(2)} average from ${stat.rating} ratings)` : '⠀'

export const category = stat => `${stat.category}: `
